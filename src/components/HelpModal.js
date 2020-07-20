import React from 'react';
import Modal from 'react-modal';

function HelpModal(props) {

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={() => props.setModalIsOpen(false)}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          fontFamily: 'Helvetica Neue',
          fontSize: '0.75em',
          backgroundColor: 'rgb(229, 229, 229)',
          top: '25%',
          left: '35%',
          right: '35%',
          bottom: '25%'
        }
      }}
    >
      <h3>How to use this site...</h3>
      <ol>
        <li>On the home page:
          <ul>
            <li>select an era to explore</li>
          </ul>
        </li>
        <br />
        <li>On the explore page:
          <ul>
            <li>select an item that you'd wish to view</li>
            <li>you can use the search bar to find items by title</li>
          </ul>
        </li>
        <br />
        <li>On each image gallery:
          <ul>
            <li>you can browse images</li>
            <li>you can leave comments</li>
          </ul>
        </li>
      </ol>
    </Modal>
  );
}

export default HelpModal;