import { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import "../App.css";

function PageNavigation() {
  const [photoData, setPhotoData] = useState([]);
  const [pageNo,setPageNo] = useState(1)

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`)
      .then((res) => setPhotoData(res.data));
  }, [pageNo]);

  return (
    <div>
      <div
        style={{
          width: "800px",
          height: "180px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {photoData.map((item: any, index) => {
          return (
            <img
              style={{ width: "130px", height: "170px", borderRadius: "10px" }}
              src={item.download_url}
            />
          );
        })}
      
      </div>
      <Pagination pageNo = {pageNo} setPageNo ={setPageNo} />
    </div>
  );
}

export default PageNavigation;
