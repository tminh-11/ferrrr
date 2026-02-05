import React, { useReducer } from 'react';
import { Button, Modal, Alert } from 'react-bootstrap';

const initialState = { isShowModal: false, isConfirmed: false };

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL': return { ...state, isShowModal: true };
    case 'CLOSE_MODAL': return { ...state, isShowModal: false };
    case 'CONFIRM_ORDER': return { isShowModal: false, isConfirmed: true };
    default: return state;
  }
}

export default function Ex2Modal() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Xác nhận đơn hàng</h3>
      <Button onClick={() => dispatch({ type: 'OPEN_MODAL' })}>Duyệt đơn hàng</Button>

      {state.isConfirmed && <Alert variant="success" className="mt-3">Đơn hàng đã xác nhận thành công!</Alert>}

      <Modal show={state.isShowModal} onHide={() => dispatch({ type: 'CLOSE_MODAL' })}>
        <Modal.Header closeButton><Modal.Title>Xác nhận</Modal.Title></Modal.Header>
        <Modal.Body>Bạn có chắc chắn muốn xác nhận đơn hàng này không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>Hủy</Button>
          <Button variant="primary" onClick={() => dispatch({ type: 'CONFIRM_ORDER' })}>Xác nhận</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}