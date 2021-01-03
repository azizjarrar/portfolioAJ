import { Route, Switch } from "react-router-dom";
import LoadingCom from './components/loadingCom/loadingCom'
import HomeCom from './components/homeCom/homeCom'
import { useEffect, useState } from "react";

function App() {
  const [state,setState]=useState(false)
  const [goinstate,setgoinstate]=useState(false)

  const goin=()=>{
    setState(true)
  }
  const gout=()=>{
    setState(false)
  }
  const clickin=()=>{
    setgoinstate(true)
  }
  return (
    <div className="App">
      <LoadingCom fnin={goin} fnout={gout} clickin={clickin}></LoadingCom>
      <HomeCom goinstate={goinstate} stateLoadPage={state} ></HomeCom>
      
    </div>
  );
}

export default App;
