import React from 'react'

class InputControlado extends React.Component {
    state = {
        text: '',
        tieneError: false,
        color: '#E8E8E8'
    }

    actualizar = (event) => {
        const text = event.target.value
        const tieneError = text !== '' && text.length < 5
        let color = 'green'
        if (text.trim() === '') {
            color = '#E8E8E8'
        }
        if (text.trim() !== '' && text.trim().length < 5) {
            color = 'red'
        }
        //actualizamos el estado obteniendo el valor del texto
        this.setState({ text, color })//actualizo la propiedad dentro mi estado7

        //propagando datos al padre
        this.props.onChange(this.props.name, text)
    }

    render() {
        const styles = {//creo una comparacion con operador ternario
            // border: this.state.tieneError ? '1px solid red' : '1px solid #E8E8E8',
            border: `1px solid ${this.state.color}`,
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        return (
            <div>
                <input type="text"
                    value={this.state.text}
                    onChange={this.actualizar}
                    style={styles}
                    placeholder={this.props.placeholder} />
            </div>
        )
    }
}

class App4 extends React.Component {
    state = {
        name: '',
        email: ''
    }

    actualizar = (name, text) => {
        this.setState({
            [name]: text//actualizamos el estado
        })
    }
    render() {
        return (
            <div>
                <InputControlado onChange={this.actualizar}
                    placeholder="Nombre completo"//le pasaremos una props al input
                    name='name'
                />
                <InputControlado onChange={this.actualizar}
                    placeholder="Email completo"//le pasaremos una props al input
                    name="email"
                />
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
            </div>
        )
    }
}


export default App4
