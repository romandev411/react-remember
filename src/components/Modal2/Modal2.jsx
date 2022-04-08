import './Modal2.css';

export default function Modal2(props) {
    return (
        <div className="modal2">
            <div className="modal2__item">
                <div className="modal2__content">
                    <h2>Title modal</h2>
                </div>

                <div className="modal2__btns">
                    <button className="modal2__btn" onClick={()=>props.resultModal('Yes')}>Yes</button>
                    <button className="modal2__btn" onClick={()=>props.resultModal('No')}>No</button>
                </div>
            </div>
        </div>
    );
}
