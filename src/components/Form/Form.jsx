import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        }
    }

    changeInput = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        });
    }

    formSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input type="text" name="login" onChange={this.changeInput} />
                <input type="password" name="password" onChange={this.changeInput} />
                <button>click</button>
            </form>
        );
    }
}