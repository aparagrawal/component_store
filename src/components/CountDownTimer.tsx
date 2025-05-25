import React, { useEffect, useRef, useState } from "react";

function CountDownTimer() {
	const [time, setTime] = useState<any>({
		hour: "",
		minute: "",
		seconds: "",
	});
	const [isRunning, setIsRunning] = useState(false);

	const intervelRef = useRef<any>(null);
	const handleChange = (e: any, field: string) => {
		const value = parseInt(e.target.value, 10) || 0;
		const copyTime = { ...time };

		copyTime[field] = value;

		// Normalize time starting from seconds
		let totalSeconds =
			(copyTime.hour || 0) * 3600 +
			(copyTime.minute || 0) * 60 +
			(copyTime.seconds || 0);

		// Convert total seconds into hour, minute, seconds
		copyTime.hour = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;

		copyTime.minute = Math.floor(totalSeconds / 60);
		copyTime.seconds = totalSeconds % 60;

		setTime(copyTime);
	};

	const handleStartClock = () => {
		if (
			time.hour.length === 0 &&
			time.minute.length === 0 &&
			time.seconds.length === 0
		) {
			return;
		}
		setIsRunning(!isRunning);
	};

	useEffect(() => {
		if (isRunning) {
			intervelRef.current = setInterval(() => {
				setTime((prevTime: any) => {
					const copyPrevTime = { ...prevTime };
					copyPrevTime.seconds--;

					if (copyPrevTime.seconds < 0) {
						copyPrevTime.minute--;
						copyPrevTime.seconds = 59;
						if (copyPrevTime.minute < 0) {
							copyPrevTime.hour--;
							copyPrevTime.minute = 59;
							if (copyPrevTime.hour < 0) {
								clearInterval(intervelRef.current);
								return { hour: "", minutes: "", seconds: "" };
							}
						}
					}
					return copyPrevTime;
				});
			}, 1000);
		}
		return () => {
			clearInterval(intervelRef.current);
		};
	}, [isRunning]);

	const handleStartReset = () => {
		clearInterval(intervelRef.current);
		setIsRunning(false);
		setTime({
			hour: 0,
			minute: 0,
			seconds: 0,
		});
	};

	return (
		<div className="countdown-container">
			<div className="inputs">
				<input
					disabled={isRunning}
					value={time.hour}
					onChange={(e) => handleChange(e, "hour")}
					className="countdown-input"
					type="text"
					placeholder="HH"
				/>
				:
				<input
					disabled={isRunning}
					value={time.minute}
					onChange={(e) => handleChange(e, "minute")}
					className="countdown-input"
					type="text"
					placeholder="MM"
				/>
				:
				<input
					disabled={isRunning}
					value={time.seconds}
					onChange={(e) => handleChange(e, "seconds")}
					className="countdown-input"
					type="text"
					placeholder="SS"
				/>
			</div>
			<div className="countdown-btn-container">
				<button className="btn-timer" onClick={handleStartClock}>
					{isRunning ? "Puase" : "Start"}
				</button>

				<button className="btn-timer" onClick={handleStartReset}>
					Reset
				</button>
			</div>
		</div>
	);
}

export default CountDownTimer;
