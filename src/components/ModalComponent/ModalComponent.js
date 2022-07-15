import React from 'react';
import {Button, Modal, ButtonToolbar} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import styles from './modalComponent.module.scss'
import Forms from "./Forms/Forms";


function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="modal-container">
      <ButtonToolbar>
        <Button className={styles.button} size="md" onClick={() => handleOpen('md')}> Заказать ремонт </Button>
      </ButtonToolbar>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          <h1>Заполните форму заказа ремонта</h1>
          <Forms/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalComponent;