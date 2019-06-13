import React from "react";

class InputNome extends React.Component{
  constructor(){
      super()
      this.state={
        nome:"Quem é você?",
        sobrenome: "",
        idade: null
    }
    this.capturaNome = this.capturaNome.bind(this)
    this.capturaSobreNome = this.capturaSobreNome.bind(this)
    this.capturaIdade = this.capturaIdade.bind(this)
  }
    capturaNome(evt){ //crio func que puxa o valor do input tendo um evento como parametro
      this.setState({
        nome: evt.target.value //target -> referencia elemento q chamou a função
      });
    }
    capturaSobreNome(evt){ //crio func que puxa o valor do input tendo um evento como parametro
      this.setState({
          sobrenome: evt.target.value //target -> referencia elemento q chamou a função
    });
  }
    capturaIdade(evt){ //crio func que puxa o valor do input tendo um evento como parametro
      this.setState({
          idade: evt.target.value //target -> referencia elemento q chamou a função
    });
  }
  render(){
    return(
      <div className= "container-input-nome">
      <p><strong>{this.state.nome} {this.state.sobrenome} {this.state.idade}</strong></p>
      <form className = "input-form" action="/login.js" method="get">
      <input
      className= "input-nome"
      placeholder= "Digite seu Nome..."
      type="text"
      onChange={this.capturaNome/**this referencia o evento como parametro**/}></input><br></br>
      <input
      className= "input-sobrenome"
      placeholder= "Digite seu Sobrenome..."
      type="text"
      onChange={this.capturaSobreNome/**this referencia o evento como parametro**/}></input><br></br>
      <input
      className= "input-idade"
      placeholder= "Sua Idade..."
      type="number"
      min= "0"
      max= "100"
      onChange={this.capturaIdade/**this referencia o evento como parametro**/}></input>
      // implementar tag select
      <input className="input-botao" type= "submit" value="Pronto!"></input>
      </form>
      </div>

    );
  }

}

export default InputNome;
