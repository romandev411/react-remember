import React from "react";
import './Switcher.css';

class Switcher extends React.Component {
    constructor(props) {
        super(props);
    }

    clickHander = () => {
        this.props.changeParentBackground();
    }

    render() {
        const {moodText: mood} = this.props;
        const cn = `switcher-container ${mood}`;

        return (
            <div className={cn}>
                <img src={this.props.url} />
                <h1>I am {mood}</h1>
                <button onClick={this.clickHander}>Click me!</button>
            </div>
        )
    }
}

export default Switcher



// Три типа взаимодействия компонент
// Parent -> Child - props
// Child -> Parent - callback
// Child -> Child (Sibling) - Parent