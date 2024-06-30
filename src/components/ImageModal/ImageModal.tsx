import React from "react";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.type"
import css from './ImageModal.module.css'; 

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      {imageUrl && <img src={imageUrl} alt="Large" className={css.img} />}
    </Modal>
  );
};

export default ImageModal;