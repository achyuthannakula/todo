import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, className = '', open }) => {
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const node = document.createElement('div');
    node.className = 'modal';
    ref.current = node;
    modalRoot?.appendChild(node);
    return () => {
      modalRoot?.removeChild(node);
    };
  }, []);

  React.useEffect(() => {
    if (ref.current && open) {
      ref.current.style.removeProperty('display');
    } else if (ref.current && !open) {
      ref.current.style.display = 'none';
    }
  }, [open]);

  return (
    <>{ref.current && ReactDOM.createPortal(open && children, ref.current)}</>
  );
};

export default Modal;
