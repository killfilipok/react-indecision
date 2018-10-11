import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleUnselectOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="nodal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleUnselectOption}>Okay</button>
        </Modal>
    </div>
)

export default OptionModal