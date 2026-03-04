import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const FilterBar = ({ search, setSearch, roleFilter, setRoleFilter, statusFilter, setStatusFilter, sortOrder, setSortOrder }) => {
    return (
        <Row className="mb-3 g-2">
            <Col md={6}>
                <Form.Control 
                    type="text" 
                    placeholder="Search by username or email" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Col>
            <Col md={2}>
                <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="active">Active</option>
                    <option value="locked">Locked</option>
                </Form.Select>
            </Col>
            <Col md={2}>
                <Form.Select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </Form.Select>
            </Col>
            <Col md={2}>
                <Form.Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="Sort">Sort</option>
                    <option value="Username Asc">Username (A-Z)</option>
                    <option value="Username Desc">Username (Z-A)</option>
                    <option value="Role Admin">Role (Admin first)</option>
                    <option value="Role User">Role (User first)</option>
                    <option value="Status Active">Status (Active first)</option>
                    <option value="Status Locked">Status (Locked first)</option>
                </Form.Select>
            </Col>
        </Row>
    );
};

export default FilterBar;