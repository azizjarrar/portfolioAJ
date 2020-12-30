import { Route, Switch } from "react-router-dom";
import LoadingCom from './components/loadingCom/loadingCom'
import HomeCom from './components/homeCom/homeCom'
import { useState } from "react";

function App() {
  const [state,setState]=useState(false)
  const goin=()=>{
    setState(true)
  }
  const gout=()=>{
    setState(false)
  }
  return (
    <div className="App">
      <LoadingCom fnin={goin} fnout={gout}></LoadingCom>
      <HomeCom stateLoadPage={state} ></HomeCom>

    </div>
  );
}

export default App;
