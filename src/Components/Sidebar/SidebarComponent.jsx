import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { RiUserShared2Fill } from "react-icons/ri";
import { FaCubes } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import './SidebarComponent.css';
import MaterialesComponent from '../MaterialesForm/MaterialesComponent';
import UsuariosComponent from '../UsuariosForm/UsuariosComponent';

export const SidebarComponent = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // O sessionStorage.removeItem("token");
        navigate("/login");
    };
    const [selectedComponent, setSelectedComponent] = useState(null);

    const renderComponent = () => {
        switch (selectedComponent) {
            case "ComponentA":
                return <UsuariosComponent />;
            case "ComponentB":
                return <MaterialesComponent />;
            default:
                return <div className="p-4">Selecciona una opción en el menú</div>;
        }
    };
  return (
        <nav>
            <a href="."><ImHome class="icons" /> Inicio</a>
            <a href="."><FaUsers class="icons" /> Registrar usuarios</a>
            <a href="."><FaCubes class="icons" /> Registrar Materiales</a>
            <a href="."><RiUserShared2Fill class="icons" /> Prestamos</a>
            <hr></hr><br></br>
            <a href="/login" onClick={handleLogout} ><ImExit class="icons" /> Salir</a>
        </nav>
  )
}

export default SidebarComponent;
