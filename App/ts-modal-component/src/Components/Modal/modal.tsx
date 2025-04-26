import styles from "./Modal.module.scss";
import { ModalProps } from "../../Interfaces/props";

function Modal({ isOpen, setIsOpen, color, fontColor, width, height, children }: ModalProps) {
  if (!isOpen) return null;


  return (
    <div className={styles.overlay}>

      <div className={styles.modal} 
        style={{ 
          backgroundColor: color, 
          width: width, 
          height: height,
          color: fontColor 
        }}
          >
          {children}

          {/* Close modal button */}
          <button className={styles.closeButton} onClick={() => setIsOpen(false)}> X </button>
      </div>
      
    </div>
  );
}


export default Modal;