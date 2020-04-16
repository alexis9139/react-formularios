import React from 'react'

class App6 extends React.Component {
    state = {
        tech: 'Vue'
    }
    manejador = (event) => {
        this.setState({
            tech: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form>
                    <select value={this.state.tech} onChange={this.manejador}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="Jquery">Jquery</option>
                    </select>
                </form>
                <h1>{this.state.tech}</h1>
            </div>
        )
    }
}

export default App6