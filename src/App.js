import React from 'react'


class InputNoControlado extends React.Component {
  //creo las ref
  nombre = React.createRef()
  email = React.createRef()

  manejador = () => {
    //aqui adentro debo obtener los datos desde el elemento input
    const nombre = this.nombre.current.value
    const email = this.email.current.value

    //si queremos utilizar esos datos en el componente padre
    //pasamos la informacion a traves de un objeto ({nombre,email})
    this.props.enviarAlPadre({ nombre, email })
  }

  render() {
    return (
      <div>
        {/* enlazo las ref */}
        <input type="text" ref={this.nombre} placeholder="Ingrese nombre" />
        <input type="text" ref={this.email} placeholder="Ingrese email" />
        <button onClick={this.manejador}>Enviar al padre</button>
      </div>
    )
  }
}

class App extends React.Component {
  //send recibira los datos al momento que se envian 
  //es decir en este punto --> this.props.enviarAlPadre({ nombre, email })
  send = (datos) => {
    console.log(datos)
    console.log(datos.nombre)
    console.log(datos.email)
  }
  render() {
    //enviarAlPadre es aqui un escuchador de metodo
    //es decir escucha lo que le manda el hijo

    return (
      <div>
        <InputNoControlado enviarAlPadre={this.send} />
      </div>
    )
  }
}

export default App;
