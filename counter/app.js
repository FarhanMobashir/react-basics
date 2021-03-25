// Counter
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    render() {

        return (
            <div className="main">
                <div className="main-container">
                    <h1>{this.state.count}</h1>
                    <div className="buttons">
                        <button onClick={this.decrement}>Decrement</button>
                        <button onClick={this.increment}>Increment</button>
                    </div>
                </div>
            </div>

        );
    }
    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    }

}
// App 
class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />


            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))