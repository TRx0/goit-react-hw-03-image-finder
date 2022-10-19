import { createPortal } from 'react-dom';
import css from './Modal.css';
import { Component } from 'react';

const overlay = document.getElementById('modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEscape);
  }

  onCloseEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onCloseClickBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.props.closeModal}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      overlay
    );
  }
}