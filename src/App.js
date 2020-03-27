import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import MonitorItem from "./components/monitoritem";
function App() {
  useEffect(() => {
    getData();
  }, []);
  const [casos, setCasos] = useState();
  const [casosSuspeitos, setcasosSuspeitos] = useState();
  const [casosDescartados, setCasosDescartados] = useState();
  const [casosMortos, setCasosMortos] = useState();
  const getData = async () => {
    const response = await axios.get (
      "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pe"
      );
      console.log("response", response.data);
      setCasos(response.data.cases);
      setcasosSuspeitos(response.data.suspects);
      setCasosDescartados(response.data.refuses);
      setCasosMortos(response.data.deaths);
};
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Monitor COVID19 -Pernambuco</h1>
        <div 
          style={{display: "flex", 
                  justifyContent: "space-around",
                  width: "100%",
                  flexDirection: "row"}}>
        <MonitorItem label="Casos Totais" number={casos}/>
        <MonitorItem label="Casos Suspeitos" number={casosSuspeitos}/>
        <MonitorItem label="Casos Descartados" number={casosDescartados}/>
        <MonitorItem label="Casos Mortos" number={casosMortos}/>
        </div>
    </header>
    </div>
  );
}

export default App;
