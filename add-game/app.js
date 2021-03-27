class Winner extends React.Component {
    render() {
        return (
            <div id="winner">
                <h1 className='win'>You win {this.props.name} !</h1>
                <button onClick={this.props.restart}>Restart</button>
            </div>
        )

    }
    restart() {
        console.log(App.renderProblem());
        return App.renderProblem;
    }


}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 1,
            num2: 1,
            response: "",
            incorrect: false,
            score: 0
        };
    }
    render() {

        if (this.state.score === 5) {
            return this.renderWin();
        } else {
            return this.renderProblem();
        }


    }
    renderWin() {
        const name = 'the addition game';
        return (
            <Winner name={name} restart={this.renderProblem} />
        )
    }

    renderProblem() {
        return (
            <div className="main">
                <div className="main-container">
                    <h1>Solve the below sum</h1>
                    <div id="problem" className={this.state.incorrect ? "incorrect" : ""}>
                        {this.state.num1} + {this.state.num2}
                    </div>
                    <h2>Score : {this.state.score}</h2>
                    <input type="text" placeholder="Enter your answer.." value={this.state.response} onKeyPress={this.inputKeyPress} onChange={this.updateResponse} /><br />
                    <button onClick={this.resetGame}>Reset</button>
                </div>
            </div>
        )


    }
    updateResponse = (event) => {
        this.setState({ response: event.target.value })
    }
    resetGame = (event) => {
        this.setState({
            num1: 1,
            num2: 1,
            response: '',
            incorrect: false,
            score: 0
        })
    }

    inputKeyPress = (event) => {
        if (event.key === 'Enter') {
            const answer = parseInt(this.state.response);
            if (answer === this.state.num1 + this.state.num2) {
                this.setState(state => ({
                    num1: Math.ceil(Math.random() * 10) + state.score,
                    num2: Math.ceil(Math.random() * 10) + state.score,
                    response: '',
                    incorrect: false,
                    score: state.score + 1

                }));
            } else {
                this.setState({
                    response: "",
                    incorrect: true
                })
            }
        }
    }

}

ReactDOM.render((
    <div>
        <App />
    </div>
), document.querySelector("#app"));