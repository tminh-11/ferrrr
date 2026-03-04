import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

const AccountDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { state } = useContext(AppContext);
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const found = state.accounts.find(a => a.id === id);
        if (found) {
            setAccount(found);
        } else {
            navigate('/accounts'); // Fallback nếu F5 trang bị mất state
        }
    }, [id, state.accounts, navigate]);

    if (!account) return <Container className="mt-5">Loading...</Container>;

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card className="shadow-sm w-75">
                <Card.Header className="bg-white fs-4">Account Details</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4} className="text-center mb-3 mb-md-0">
                            <img src={account.avatar} alt="avatar" className="img-fluid rounded" style={{ maxWidth: '200px' }} />
                        </Col>
                        <Col md={8} className="d-flex flex-column justify-content-center">
                            <div className="mb-3">
                                <h6 className="text-muted mb-1">Username</h6>
                                <p className="fs-5 mb-0">{account.username}</p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-muted mb-1">Email</h6>
                                <p className="fs-5 mb-0">{account.email}</p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-muted mb-1">Role</h6>
                                <p className="fs-5 mb-0 text-capitalize">{account.role}</p>
                            </div>
                            <div>
                                <h6 className="text-muted mb-1">Status</h6>
                                <p className="fs-5 mb-0 text-capitalize">{account.status}</p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer className="bg-white">
                    <Button variant="secondary" onClick={() => navigate('/accounts')}>
                        Back to list
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default AccountDetails;