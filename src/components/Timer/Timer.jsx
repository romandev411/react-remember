import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: new Date(0, 60, 60, 0),
        }

        this.timerId = null;
    }

    start = () => {
        // this.setState({
        //     count: newDate,
        // });

        this.setState((state) => {
            const { count } = state;
            const newDate = new Date(count.setSeconds(count.getSeconds() + 1));

            return {
                count: newDate,
            };
        });

        this.timerId = setTimeout(() => {
            this.start();
        }, 1000);
        console.log(this.timerId)
    }

    stop = () => {
        console.log(this.timerId);
        clearTimeout(this.timerId);
    }

    render() {
        const { count } = this.state;
        return (
            <div className="timer">
                <h1>{count.toLocaleTimeString()}</h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
            </div>
        )
    }
}
