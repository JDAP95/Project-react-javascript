import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, breed }) => {
    if(!isOpen || !breed) return null;

    const modal = document.getElementById("modal");

    return createPortal(
        <div className="modal">
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="modal-content">
                <div className="modal-content-btns">
                    <button className="btn close-btn" onClick={onClose}>Close</button>
                </div>
                <div className="modal-content-content">
                    <h2>{breed.name}</h2>
                    <p><strong>Origin:</strong> {breed.origin}</p>
                    <p><strong>Temperament:</strong> {breed.temperament}</p>
                    <p><strong>Life:</strong> {breed.life_span} years</p>
                    <p><strong>Description:</strong> {breed.description}</p>
                </div>
            </div>
        </div>,
        modal
    );
};

export default Modal;