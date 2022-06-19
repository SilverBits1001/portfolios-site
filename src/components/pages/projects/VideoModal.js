import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import './VideoModal.scss'
export default function VideoModal({show, setShow, handleClose, handleShow}) {


    return (
        
        
                    <Modal
                        size='lg'
                        centered
                        
                        show={show}
                        onHide={handleClose}
                        keyboard={true}
                    >
                        <Modal.Body className='modal-background p-0'>
                            <div className='player-wrapper'>
                            <ReactPlayer controls={true} className='video' height={'100%'} width={'100%'} url='http://www.youtube.com/watch?v=ysz5S6PUM-U' />

                            </div>

                        </Modal.Body>
                    </Modal>

        
    );
}