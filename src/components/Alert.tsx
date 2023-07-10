import { ReactNode } from 'react';
import CloseButton from './CloseButton';

interface Props {
	children: ReactNode;
	color?: 'primary' | 'secondary' | 'danger';
	onClose: () => void;
}

const Alert = ({ children, color = 'primary', onClose }: Props) => {
	return (
		<div
			className={`alert alert-${color} alert-dismissible fade show`}
			role="alert">
			{children} <CloseButton onButtonClick={() => onClose}></CloseButton>
		</div>
	);
};

export default Alert;
