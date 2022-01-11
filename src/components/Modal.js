import React from 'react';
import './Modal.css';
import { useNavigate } from 'react-router-dom';
import Form from './Form';


const Modal = ({ active, setActive}) => {
    const history = useNavigate();
    window.addEventListener('popstate',(e) => {
            if (e.state) {
                setActive(false);
                history.push('/');
            }
        },
        false
    );

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => {
            setActive(false);
            history.push('/');
        }}>
            <div className={'modal-content'} onClick={(e) => {e.stopPropagation();}}>
                <div
                    className="modal-content-close" onClick={() => {
                        setActive(false);
                        history.push('/');
                    }}>×</div>
                <Form/>
            </div>
        </div>
    );
};

export default Modal;