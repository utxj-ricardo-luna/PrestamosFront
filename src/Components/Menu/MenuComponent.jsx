import React from "react";
import './MenuComponent.css'
import logo from './logob.png';
import { FaUser } from "react-icons/fa";

export const MenuComponent = ({ icon: Icon, label, isOpen }) => {
  return (
    <div class="mnuSup">
      <div class="logo">
        <img src={logo} alt="Prestamos"/>
      </div>
      <div class="barnav">
      <div><FaUser class="icons" /> Ricardo Luna </div>
     </div>
    </div>
  )
}

export default MenuComponent;