import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export const MyModal=({modal, setModal, selImg, selTitle})=> {
  

  const toggle = () => setModal(!modal);

  return (
    <div>
      
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className='text-capitalize' toggle={toggle}>{selTitle}</ModalHeader>
        <ModalBody>
          <img className='img-fluid' src={selImg} alt="kép" />
        </ModalBody>
      </Modal>
    </div>
  );
}
