import React, { useState, useContext } from 'react';
import { Container, Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getAccounts } from '../services/api';
import { AppContext } from '../contexts/AppContext';
import MessageModal from '../components/MessageModal';
import { MdErrorOutline } from 'react-icons/md';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [globalError, setGlobalError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null);
    
    const { dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrors({});
        setGlobalError('');

        let hasError = false;
        let newErrors = {};

        if (!identifier.trim()) {
            newErrors.identifier = 'Username or Email is required.';
            hasError = true;
        }
        if (!password) {
            newErrors.password = 'Password is required.';
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        try {
            const accounts = await getAccounts();
            const user = accounts.find(
                acc => (acc.username === identifier || acc.email === identifier) && acc.password === password
            );

            if (!user) {
                setGlobalError('Invalid username/email or password!');
                return;
            }

            if (user.role !== 'admin') {
                setGlobalError('Access denied. Only admin users can log in.');
                return;
            }

            if (user.status === 'locked') {
                setGlobalError('Account is locked. Please contact admin.');
                return;
            }

            setLoggedInUser(user);
            setShowModal(true);

        } catch (error) {
            setGlobalError('Server error. Please try again.');
        }
    };

    const handleContinue = () => {
        dispatch({ type: 'LOGIN', payload: loggedInUser });
        setShowModal(false);
        navigate('/accounts');
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: '400px' }} className="shadow-sm">
                <Card.Header className="text-center bg-white border-bottom-0 pt-4">
                    <h3 className="fw-normal">Login</h3>
                </Card.Header>
                <Card.Body>
                    {globalError && (
                        <Alert variant="danger" onClose={() => setGlobalError('')} dismissible>
                            {globalError}
                        </Alert>
                    )}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username or email</Form.Label>
                            <div className="position-relative">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter username or email" 
                                    value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)}
                                    isInvalid={!!errors.identifier}
                                />
                                {errors.identifier && <MdErrorOutline className="position-absolute text-danger" style={{ right: '10px', top: '10px', fontSize: '1.2rem' }}/>}
                                <Form.Control.Feedback type="invalid">{errors.identifier}</Form.Control.Feedback>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <div className="position-relative">
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter password" 
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    isInvalid={!!errors.password}
                                />
                                {errors.password && <MdErrorOutline className="position-absolute text-danger" style={{ right: '10px', top: '10px', fontSize: '1.2rem' }}/>}
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </div>
                        </Form.Group>

                        <div className="d-flex justify-content-between mb-3">
                            <Button variant="primary" type="submit" className="w-50 me-2">Login</Button>
                            <Button variant="secondary" type="button" className="w-50">Cancel</Button>
                        </div>
                        <div className="text-center mt-3">
                            <a href="#" className="text-decoration-none">Don't have an account? Sign up.</a>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            {loggedInUser && (
                <MessageModal 
                    show={showModal} 
                    username={loggedInUser.username} 
                    onContinue={handleContinue} 
                />
            )}
        </Container>
    );
};

export default Login;