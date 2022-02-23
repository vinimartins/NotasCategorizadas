import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete_black_24dp.svg"
class CardNota extends Component {

  apagar(){
    this.props.apagarNota(this.props.indice)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <img src={deleteSVG} onClick={this.apagar.bind(this)} />
          <h4 className="">{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;