import { useEffect } from 'react';
import { ReactDOM } from 'react-dom';

const modalRoot = document.getElementById('modal-root');
let element;

const Wrapper = ({ children }) => {
	useEffect(() => {
		element = document.createElement('div');
		modalRoot.appendChild(element);
		return () => {
			modalRoot.removeChild(element);
		};
	}, []);
	return ReactDOM.createPortal(children, modalRoot);
};

export default Wrapper;
