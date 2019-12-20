import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { ClassNames } from '@emotion/core';

Modal.setAppElement('#app');

export const defaultModalStyle = css => (css`
  position: absolute;
  top: 100px;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translateX(-50%);
`);

export const defaultOverlayStyle = css => (css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0, 0, 0, 0.3);
`);

const CustomModal = (props) => {
  const {
    children, modalStyleName, overlayStyleName, ...other
  } = props;
  return (
    <ClassNames>
      {
        ({ css }) => (
          <Modal className={modalStyleName(css)} overlayClassName={overlayStyleName(css)} {...other}>{children}</Modal>
        )
      }
    </ClassNames>
  );
};

CustomModal.propTypes = {
  children: PropTypes.element.isRequired,
  modalStyleName: PropTypes.func,
  overlayStyleName: PropTypes.func,
};
CustomModal.defaultProps = {
  modalStyleName: defaultModalStyle,
  overlayStyleName: defaultOverlayStyle,
};

export default CustomModal;
