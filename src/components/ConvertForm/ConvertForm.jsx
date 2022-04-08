import React from 'react';

export default class ConvertForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dollar: 0,
            hrivna: 0,
            currentInput: null,
        }
        this.exchangeRate = 29.5;
    }

    changeInput = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
            currentInput: name,
        });
    }

    formSubmit = (e) => {
        e.preventDefault();

        if (this.state.currentInput === 'dollar') {
            this.setState({
                hrivna: Math.round(this.state.dollar * this.exchangeRate),
            });
        } else {
            this.setState({
                dollar: Math.round(this.state.hrivna / this.exchangeRate),
            });
        }

        
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <p>
                    <label>USD </label>
                    <input type="text" name="dollar" value={this.state.dollar} onChange={this.changeInput} />
                </p>
                
                <p>
                    <label>UAH </label>
                    <input type="text" name="hrivna" value={this.state.hrivna} onChange={this.changeInput} />
                </p>
                <button>Convert</button>
            </form>
        );
    }
}