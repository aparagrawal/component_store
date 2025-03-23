import {useState,useEffect,useRef} from 'react'

function OtpField({ otpLength = 8 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));

  const ref: any = useRef([]);

  useEffect(() => {
    ref.current["0"].focus();
  }, []);


  const handleKeyDown = (e:any, index:number) => {
    const backKey = e.key;

    if (backKey === 'Backspace') {
      const copyOtpFields = [...otpFields];
      copyOtpFields[index] = '';
      setOtpFields(copyOtpFields);

      if (index > 0) {
        ref.current[index - 1].focus();
      }
    }
  };
  const handleChange = (e: any, index: number) => {
    const key = e.target.value;
    const copyOtpFields = [...otpFields];

   
    if (isNaN(key)) {
      return;
    }

    copyOtpFields[index] = key;
    if (index + 1 < otpFields.length) {
      ref.current[index + 1].focus();
    }

    setOtpFields(copyOtpFields);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {otpFields.map((item: any, index: number) => {
        return (
          <input
            ref={(currentInput) => (ref.current[index] = currentInput)}
            key={index}
            value={item}
            type="text"
            className="input"
            onChange={(e: any) => handleChange(e, index)}
            onKeyDown={(e: any) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}

export default OtpField