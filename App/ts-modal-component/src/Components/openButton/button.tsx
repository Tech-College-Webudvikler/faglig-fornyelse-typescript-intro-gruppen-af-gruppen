
import styles from "./button.module.scss";
import { OpenModalButtonProps } from "../../Interfaces/props";

function OpenModalButton({ setIsOpen, label = "Open Modal" }: OpenModalButtonProps) {
  return (
    <button className={styles?.button} onClick={() => setIsOpen(true)}>
      {label}
    </button>
  );
}

export default OpenModalButton;
