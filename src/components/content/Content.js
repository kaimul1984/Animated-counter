import React, { useState, useEffect } from "react";
//import { FaYoutube } from 'react-icons/fa';
import "./content.scss";

const Content = ({ icon, span, info, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    let end = span.substring(0, 3); //"686";"475"/ "568"/"467"
    end = parseInt(span.substring(0, 3)); //686;475;568;467
    let lastDigit = span.substring(3); //"k"
    //console.log(span.substring(0, 3));
    //console.log(span.substring( 3));
    let totalDuration = duration; //"2000"
    totalDuration = parseInt(duration); //2000

    let incrementTime = totalDuration / end;

    let timer = setInterval(() => {
      start += 1; // start = start + 1;
      let finalValue = String(start) + lastDigit; // "686" + "k" = "686k"
      //console.log(finalValue)
      setCount(finalValue);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [duration, span]);
  return (
    <div className="content">
      {icon}
      <span>{count}</span>
      <p>{info}</p>
    </div>
  );
};

export default Content;
