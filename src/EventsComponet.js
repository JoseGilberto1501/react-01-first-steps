import React from "react";
import "./index.css";
//import "./App.css";

export const EventsComponet = () => {
  const handlerClick = (e, name) => {
    alert("Click Button" + name);
  };

  function handleDoubleClick(e) {
    alert("Double click");
  }

  const youHaveEntered = (e) => {
      console.log("youHaveEntered with mouse");
  };

  const youHaveLeaved = (e, action) => {
    console.log(`youHaveLeaved ${action} with mouse`);
  };

  const youAreInside = e => {
    console.log("youAreInside, type your name");
  };

  const yoAreLeave = e => {
    console.log("yoAreLeave, BYE!!!");
  };
  

  return (
    <div>
      <h1>Events in Reacj JS</h1>

      <p>
        {/**Event Click */}
        <button onClick={(e) => handlerClick(e, "Jose")}>Click Here!!!</button>
      </p>

      <p>
        {/**Event Double Click */}
        <button onDoubleClick={handleDoubleClick}>Click Here 2!!!</button>
      </p>

      <div id="box" 
                onMouseEnter={e => youHaveEntered(e,"entry")} 
                onMouseLeave={e => youHaveLeaved(e,"leave")}>
        {/**Event OnMouseEnter OnMouseLeave */}
        GOES OVER
      </div>


      <p>
          <input typeof="text" 
                 onFocus={ youAreInside} 
                 onBlur={ yoAreLeave}
                 placeholder="Type your name here"/>
      </p>
    </div>
  );
};
