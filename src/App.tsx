import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
	const [alertVisble, setAlertVisibility] = useState(false);

	return (
		<div>
			{alertVisble && (
				<Alert
					color="danger"
					onClose={() => setAlertVisibility(false)}>
					<strong>Oh snap!</strong> You clicked the button!
				</Alert>
			)}

			<Button
				color="danger"
				onClick={() => setAlertVisibility(true)}>
				Dynamic Children Text
			</Button>
		</div>
	);
}

export default App;
