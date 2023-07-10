// PascalCasing da usare tutte le volte che creiamo un componente
function Message() {
	// JSX: Javascript XML
	const name = 'Jammy';
	if (name) return <h1>Hello {name}</h1>;
	return <h1>Hello World</h1>;
}

export default Message;
