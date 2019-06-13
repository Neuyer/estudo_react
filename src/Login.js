import React from 'react';
import InputNome from "./InputNome"

function diaNoite(){
  var dia = new Date();
  var h = dia.getHours();
  if (h > 0 && h< 12){
    return "Bom dia,"
  }else if (h > 12 && h < 18) {
    return "Boa tarde,"
  }else if (h > 18 && h < 24) {
    return "Boa noite,"
  }
}
function Login() {
    return (
      <div className= "container-login">
      <h1 className= "h1-login">{diaNoite()} seja bem vindo!</h1>
      <InputNome />
      </div>
    ) ;
  }
export default Login
