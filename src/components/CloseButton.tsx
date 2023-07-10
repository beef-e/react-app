interface CloseButtonProps {
	onButtonClick: () => void;
}

function CloseButton({ onButtonClick }: CloseButtonProps) {
	return (
		<div>
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
				onClick={onButtonClick}></button>
		</div>
	);
}

export default CloseButton;
