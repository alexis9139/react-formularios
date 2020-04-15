import React from 'react'

class InputNoControlado extends React.Component {

    manejador = (event) => {
        event.preventDefault()
        const nombre = event.target[0].value
        const email = event.target[1].value
        this.props.enviarAlPadre({ nombre, email })
    }
    render() {
        return (
            <form onSubmit={this.manejador}>
                <input type="text" placeholder="nombre" />
                <input type="text" placeholder="email" />
                <button>Enviar</button>
            </form>
        )
    }
}

class App2 extends React.Component {
    enviar = (datos) => {
        console.log(datos.nombre)
        console.log(datos.email)
    }
    render() {
        return (
            <div>
                <InputNoControlado enviarAlPadre={this.enviar}></InputNoControlado>
            </div>
        )
    }
}


export default App2