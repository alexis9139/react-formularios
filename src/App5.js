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
                <p>
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" placeholder="nombre" id="name" />
                </p>

                <p>
                    <label htmlFor="email">Email: </label>
                    <input type="text" placeholder="email" id="email" />
                </p>
                <button>Enviar</button>
            </form>
        )
    }
}

class App5 extends React.Component {
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


export default App5