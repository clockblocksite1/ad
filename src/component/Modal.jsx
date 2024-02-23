import React from 'react'
import "./Modal.css"
import { Link } from 'react-router-dom';
function Modal() {
  return (
    <div>
        <input/>
        <input/>
        <Link to="/edit">
        <button>Sumbit</button>
        </Link>
    </div>
  )
}

export default Modal