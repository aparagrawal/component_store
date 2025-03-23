import { useEffect, useRef, useState } from "react";
import Accordian from "./Accordian";
import data from "../DummyData.json"
import "../App.css";

function AccordianPage() {
	return (
		<div>
			<h1>FAQs</h1>
      {data.faqs.map((item:any,index)=>{
        return (
          <Accordian key={index} qna={item}/>
        )
      })}
		
		</div>
	);
}

export default AccordianPage;
