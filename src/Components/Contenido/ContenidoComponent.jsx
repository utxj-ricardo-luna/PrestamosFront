import React from "react";
import './ContenidoComponent.css'
import grafico from './grafico_4.png';
import { IoSettingsSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdDevicesOther } from "react-icons/md";
import { FaHandHolding } from "react-icons/fa6";

export const ContenidoComponent = () => {
  return (
    <div class="container">
    <div class="top-cards">
        <div class="card card1">
          <h1><FaRegUser /></h1>
          <h1>65</h1>
          Usuarios
        </div>
        <div class="card card2">
          <h1><MdDevicesOther /></h1>
          <h1>25</h1>
          Materiales
        </div>
        <div class="card card1">
          <h1><FaHandHolding /></h1>
          <h1>16</h1>
          Prestamos
        </div>
        <div class="card card2">
          <h1> <IoSettingsSharp /> </h1>
          Mi cuenta
        </div>
    </div>
    <div class="bottom-card">
        <div class="card">
          <h1>Material mas prestado</h1>
          <img src={grafico} alt="grafico"/>
        </div>
    </div>
</div>
  )
}

export default ContenidoComponent;