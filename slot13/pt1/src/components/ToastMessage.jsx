import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastMessage = ({ show, onClose, message, variant = 'success' }) => {
    return (
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1050 }}>
            <Toast bg={variant} show={show} onClose={onClose} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto text-dark">Notification</strong>
                </Toast.Header>
                <Toast.Body className={variant === 'warning' ? 'text-dark' : 'text-white'}>
                    {message}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastMessage;