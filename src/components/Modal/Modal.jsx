import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isModal: false,
        }
    }

    toggleModal = () => {
        this.setState({
            isModal: !this.state.isModal,
        });
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.toggleModal}>Open Modal</button>

                {
                    this.state.isModal ?
                        <div className="modal">
                            <div className="modal__overlay" onClick={this.toggleModal}></div>

                            <div className="modal__item">
                                <button
                                    className="modal__close"
                                    type="button"
                                    onClick={this.toggleModal}
                                >x
                                </button>

                                <div className="modal__status">
                                    <div className="modal__icon-status"></div>
                                </div>

                                <div className="modal__content">
                                    <h3 className="modal__title">Success Title</h3>

                                    <p className="modal__text">Success message</p>

                                    <button className="modal__btn">Okay</button>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }

            </>
        )
    }
}