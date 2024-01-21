import React from "react";
import Spline from "@splinetool/react-spline";
import PomodoroTimer from "./Components/pomodoroTimer";
import "./Components/splineComponent.css";

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="spline__canvas">
      <Spline scene="https://prod.spline.design/cc1Jqxmn3VE8htZf/scene.splinecode" />
      </div>
      <div>
       <PomodoroTimer/>
      </div>
    </div>
  );
}

export default App;
