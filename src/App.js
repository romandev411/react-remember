import React from "react";
import './App.css';
import Switcher from './components/Switcher'
import Modal from './components/Modal/Modal'
import sad from './components/sad.png';
import smile from './components/smile.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodText: 'smile',
      url: {
        sad,
        smile,
      }
    }
  }

  changeBgc = () => {
    this.setState({
      moodText: this.state.moodText === 'smile' ? 'sad' : 'smile',
    })
  }

  render() {
    const { moodText, url } = this.state;

    return (
      <div className={moodText}>
        <Switcher changeParentBackground={this.changeBgc} moodText={moodText} url={url[moodText]} />

        <Modal />
      </div>
    );
  }
}

export default App;