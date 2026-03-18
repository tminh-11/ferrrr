import React from 'react';
import { Modal, Button, Stack } from 'react-bootstrap';
// Nếu bạn có cài react-icons hoặc font-awesome thì dùng icon sẽ đẹp hơn
// Ví dụ: import { ExclamationTriangle } from 'react-bootstrap-icons';

function ModalConfirm({ 
    show, 
    title = "Xác nhận hành động", 
    message, 
    onConfirm, 
    onCancel,
    confirmText = "Xác nhận",
    cancelText = "Hủy bỏ",
    variant = "danger" // Cho phép thay đổi màu sắc theo mục đích (danger, primary, warning)
}) {
    return (
        <Modal 
            show={show} 
            onHide={onCancel} 
            centered 
            backdrop="static" // Tránh vô tình đóng khi click ra ngoài
            className="border-0"
        >
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="fs-5 fw-bold w-100 text-center ps-4">
                    {title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-center py-4">
                {/* Phần Icon giả định để tạo điểm nhấn */}
                <div className={`mb-3 text-${variant}`} style={{ fontSize: '3rem' }}>
                    <i className="bi bi-exclamation-circle-fill"></i> 
                </div>
                
                <p className="text-secondary px-3 mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.5' }}>
                    {message}
                </p>
            </Modal.Body>

            <Modal.Footer className="border-0 pt-0 pb-4 px-4">
                <Stack direction="horizontal" gap={2} className="w-100">
                    <Button 
                        variant="light" 
                        onClick={onCancel} 
                        className="flex-grow-1 py-2 fw-semibold text-muted"
                        style={{ borderRadius: '10px' }}
                    >
                        {cancelText}
                    </Button>
                    <Button 
                        variant={variant} 
                        onClick={onConfirm} 
                        className="flex-grow-1 py-2 fw-semibold shadow-sm"
                        style={{ borderRadius: '10px' }}
                    >
                        {confirmText}
                    </Button>
                </Stack>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalConfirm;