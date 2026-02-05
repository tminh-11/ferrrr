//NewPage.jsx sử dụng component NewCard để hiển thị danh sách tin tức
import React from 'react';
import { newsLists } from '../data/newsData';
import NewCard from '../components/NewCard';
import { Container, Row, Col } from 'react-bootstrap';  
function NewPage() {
    return (
        <Container>
            <h2 className="my-4">Latest News</h2>
            <Row className="row-equal-height g-4">
                {newsLists.map((newItem) => (
                    <Col key={newItem.id} sm={12} md={6} lg={4}>
                        <NewCard newItem={newItem} />
                    </Col>  
                ))}
            </Row>
        </Container>
    );
}
export default NewPage;