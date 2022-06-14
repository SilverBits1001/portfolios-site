import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactPlayer from 'react-player';
import './VideoModal.scss'
export default function VideoModal({show, setShow, handleClose, handleShow}) {


    return (
        
        
            <Row>
                <Col class="col-lg-4 col-md-12 mb-4">
                    <Modal
                        size='lg'
                        centered
                        
                        show={show}
                        onHide={handleClose}
                        keyboard={true}
                    >
                        <Modal.Body className='modal-background p-0'>
                            <div className='player-wrapper'>
                            <ReactPlayer className='video' height={'100%'} width={'100%'} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

                            </div>

                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>

        
    );
}