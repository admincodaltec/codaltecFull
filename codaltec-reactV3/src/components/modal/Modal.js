import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import './modal.css';

function Modal({children, stateModal, changeStateModal}) {
	return (
		<>
			{stateModal && (
				<div className='modal__overlay'>
					<div className='modal'>
						<button className='modal__close' onClick={() => changeStateModal(false)}>
							<FontAwesomeIcon icon={faXmark} />
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
}

export {Modal};
