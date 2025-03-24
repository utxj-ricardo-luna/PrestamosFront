import React from 'react'
import './LoginForm.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [nombreUsuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://prestamos-zqcr.onrender.com/login/", { nombreUsuario, contrasena });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };
  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleLogin}>
        <h3>Prestamos UTXJ</h3>
        {error && <p className="text-red-500">{error}</p>}
        <label for="usuario">Usuario</label>
        <input type="text" placeholder="Usuario, Correo Electrónico o Telefono" id="username"  value={nombreUsuario} onChange={(e) => setUsuario(e.target.value)} required />

        <label for="contrasena">Contraseña</label>
        <input type="password" placeholder="Contraseña" id="contrasena"  value={contrasena} onChange={(e) => setContrasena(e.target.value)} required/>

        <button>Entrar</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;