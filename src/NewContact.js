import React, {Component} from 'react';

class NewContacts extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    twitter: ''
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {name, phone, email, twitter} = this.state;
    return(
      <div className="container">
        <h1>Ingrese la informacion del nuevo contacto</h1>
        <div className="form">
          <form>
            <span className="label"> Nombre: </span>
            <input type="text" value={name} onChange={(event) => this.setState({name: event.target.value})} />
            <span className="label"> Telefono: </span>
            <input type="text" value={phone} onChange={(event) => this.setState({phone: event.target.value})}/>
            <br></br><br></br>
            <span className="label"> Email: </span>
            <input type="text" value={email} onChange={(event) => this.setState({email: event.target.value})}/>
            <span className="label"> Twitter: </span>
            <input type="text" value={twitter} onChange={(event) => this.setState({twitter: event.target.value})}/>
            <br></br><br></br>
            <button onClick={this.handleSubmit}> Submit </button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewContacts;
