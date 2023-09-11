import React, { useState, useEffect } from "react";

const customStyle = {
  color: ""
};

function Greet() {
  const [greet, setGreet] = useState("");
  const [time, setTime] = useState("");
  const [textColor, setTextColor] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setTime(`${hours}:${minutes}:${seconds}`);

      if (hours >= 3 && hours < 12) {
        setGreet("GOOD MORNING");
        setTextColor("green");
      } else if (hours >= 12 && hours < 16) {
        setGreet("GOOD AFTERNOON");
        setTextColor("tomato");
      } else if (hours >= 16 && hours < 19) {
        setGreet("GOOD EVENING");
        setTextColor("turquoise");
      } else {
        setGreet("GOOD NIGHT");
        setTextColor("orange");
      }
    };

    // Update the time initially and then every second
    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 style={{ color: textColor }}>{greet}</h1>
      <h3 style={{ color: "white" }}>{time}</h3>
    </div>
  );
}

export default Greet;
