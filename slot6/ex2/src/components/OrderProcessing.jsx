// OrderProcessing.jsx
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function OrderProcessing() {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleConfirm = () => {
    alert('The order has been confirmed and sent to the warehouse department!');
    setIsShowModal(false);
  };

  return (
    <div className="my-4">
      <h5>Exercise 2 - OrderProcessing</h5>
      <Button variant="primary" onClick={() => setIsShowModal(true)}>
        Order Processing
      </Button>

      <Modal show={isShowModal} onHide={() => setIsShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Do you want to confirm this order and send it to the warehouse department?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default OrderProcessing;