import React from 'react';
import './Modal.css';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import { CSSTransition } from 'react-transition-group'

const Modal = ({ showModal, setShowModal }) => {
    const history = useNavigate();
    window.addEventListener('popstate',(e) => {
            if (e.state) {
                setShowModal(false);
                history.push('/');
            }
        },
        false
    );
    if(showModal==false){

        <CSSTransition in={showModal} classNames='alert' timeout={300} unmoutOnExit
            onExited={() => setShowModal(true)}>
            <Modal />
        </CSSTransition>
    }
    return (
        
        <div className={showModal ? 'modal active' : 'modal'} onClick={() => {
            setShowModal(false);
            history.push('/');
        }}>
            <div className={'modal-content'} onClick={(e) => {e.stopPropagation();}}>
                <div
                    className="modal-content-close" onClick={() => {
                        setShowModal(false);
                        history.push('/');
                    }}>×</div>
                <Form/>
            </div>
        </div>
    );
};

export default Modal;
