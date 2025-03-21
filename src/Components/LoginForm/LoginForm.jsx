import React from 'react'
import './LoginForm.css'

export const LoginForm = () => {
  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Prestamos UTXJ</h3>

        <label for="usuario">Usuario</label>
        <input type="text" placeholder="Usuario, Correo Electrónico o Telefono" id="username" />

        <label for="contrasena">Contraseña</label>
        <input type="password" placeholder="Contraseña" id="contrasena"/>

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