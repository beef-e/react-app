import { useState } from 'react';

interface Props {
	items: { id: number; name: string }[];
	heading: string;
	onSelectItem: (item: { id: number; name: string }) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	// Hook: useState
	const [selectedIndex, setSelectedIndex] = useState(-1);

	const message = items.length === 0 ? <p>There are no items in the list.</p> : null;
	//?? UnCursed code: if (items.length === 0) return <p>There are no items in the list.</p>;
	return (
		<>
			<h1>{heading}</h1>
			{/*message*/}
			{
				items.length === 0 && <p>There are no items in the list.</p>
				//?? Expl: un AND logico tra un valore boolenano vero e un qualsiasi elemento ritorna il secondo elemento, altrimenti nulla
			}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
						className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
						key={item.id}>
						{item.name}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
