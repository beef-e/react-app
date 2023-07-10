interface ButtonProps {
	children: string;
	onClick: () => void;
	color?:
		| 'primary'
		| 'secondary'
		| 'success'
		| 'danger'
		| 'warning'
		| 'info'
		| 'light'
		| 'dark'
		| 'link';
}

function Button({ children, onClick, color = 'primary' }: ButtonProps) {
	return (
		<button
			type="button"
			className={`btn btn-${color}`}
			onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
