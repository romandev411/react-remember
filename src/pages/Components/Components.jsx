import React from "react";
import Switcher from '../../components/Switcher/Switcher'
import Modal from '../../components/Modal/Modal'
import Modal2 from '../../components/Modal2/Modal2'
import Timer from '../../components/Timer/Timer'
import Form from '../../components/Form/Form'
import ConvertForm from '../../components/ConvertForm/ConvertForm'

import sad from '../../components/Switcher/sad.png';
import smile from '../../components/Switcher/smile.png';

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moodText: 'smile',
      url: {
        sad,
        smile,
      },
      isModal2: false,
    }
  }

  changeBgc = () => {
    this.setState({
      moodText: this.state.moodText === 'smile' ? 'sad' : 'smile',
    })
  }

  toggleModal2 = () => {
    this.setState({
      isModal2: !this.state.isModal2,
    });
  }

  resultModal2 = (result) => {
    console.log(result)
    this.toggleModal2();
  }

  render() {
    const { moodText, url, isModal2 } = this.state;

    return (
      <div className={moodText}>
        <Switcher changeParentBackground={this.changeBgc} moodText={moodText} url={url[moodText]} />

        <hr />

        <Modal />

        <hr />

        {
          isModal2 ? <Modal2 resultModal={this.resultModal2} /> : null
        }

        <Timer />

        <hr />

        <button onClick={this.toggleModal2}>Open Modal2</button>

        <hr />

        <Form />

        <hr />

        <ConvertForm />
      </div>
    );
  }
}

export default Components;