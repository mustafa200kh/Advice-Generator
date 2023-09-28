import "./App.css";
import AdviceCard from "./components/AdviceCard";
import { fetchAdvice } from "./rtk/Slices/advice-slice";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="w-[100vw] h-[100vh] bg-back flex element-center">
        <AdviceCard />
      </div>
    </div>
  );
}

export default App;
