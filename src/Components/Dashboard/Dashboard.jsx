import React from "react";
import SidebarComponent from "../Sidebar/SidebarComponent";
import MenuComponent from "../Menu/MenuComponent";
import FooterComponent from "../Footer/FooterComponent";
import ContenidoComponent from "../Contenido/ContenidoComponent";
import './Dashboard.css'
export const Dashboard = () => {
  return (
    
    <div class="padre">
      <SidebarComponent />
      <div class="menu">
        <MenuComponent />
      </div>
      <div class="cuerpo">
        <ContenidoComponent />
      </div>
      <div class="footer">
        <FooterComponent />
      </div>
    </div>
  )
}

export default Dashboard;
