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
        this.setState({ text, color })//actualizo la propiedad dentro mi estado
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
                    style={styles}></input>
            </div>
        )
    }
}

class App3 extends React.Component {
    render() {
        return (
            <div>
                <InputControlado />
            </div>
        )
    }
}


export default App3
