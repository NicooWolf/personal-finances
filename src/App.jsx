import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Tarjetas from "./components/Tarjetas/Tarjetas";
import CargarGastos from "./components/CargarGastos/CargarGastos";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tarjetas" exact element={<Tarjetas />} />
        <Route path="cargar-gastos" exact={true} element={<CargarGastos />} />
      </Routes>
    </Router>
  );
};

export default App;
