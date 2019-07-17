import React from 'react'

import Modal from './Modal'

import './styles/OpeningModal.css'

const OpeningModal = ({ modalIsOpen, onClose, openingCrawl  }) => (
  <Modal modalIsOpen={modalIsOpen} onClose={onClose}>
    <div className="OpeningModal">
      <img className="OpeningModal__img" src="https://media.giphy.com/media/iBR1XJFNynUpa/giphy.gif" alt="Star wars" />
      <p>{openingCrawl}</p>
    </div>
  </Modal>
)

export default OpeningModal