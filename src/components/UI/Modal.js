import React from "react";
import styles from "./Modal.module.css";
import ReactDom from "react-dom";
import { ReactPortal } from "react";
import { Fragment } from "react/cjs/react.production.min";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.closeCartHandler}></div>;
}

function ModalOverlay(props) {
  return (
    <div>
      <div className={styles["modal-overlay"]}>{props.children}</div>;
    </div>
  );
}

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop closeCartHandler={props.closeCartHandler}/>, document.getElementById("overlays"))}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
