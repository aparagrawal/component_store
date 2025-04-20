import React, { useRef } from "react";
import useClickHandler from "../Custom Hools/useClickHandler";
function Modal({ isOpen, closeModal }: { isOpen: boolean; closeModal: any }) {
	const modalRef: any = useRef();

	useClickHandler(modalRef, closeModal);
	if (!isOpen) {
		return null;
	}
	return (
		<div ref={modalRef} className="modal-container">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
				tempora repellat praesentium iste consequuntur eveniet vel. Ab harum,
				sunt vel optio consequuntur aliquam eveniet. Accusantium quas esse
				tempore perferendis libero.
			</p>
			<button onClick={closeModal}>Close modal</button>
		</div>
	);
}

export default Modal;
