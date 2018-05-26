import React, {Component} from 'react';



class Accounts extends Component {
  render() {
    return(
      <div className="container">
        <h1>Listado de contactos</h1>
        <div className="contact">
          <span className="value">Nombre</span>
          <span> - </span>
          <span className="value">Telefono</span>
          <span> - </span>
          <span className="value">Correo</span>
          <span> - </span>
          <span className="value">Twitter</span>
        </div>
      </div>
    )
  }
}

export default Accounts;
