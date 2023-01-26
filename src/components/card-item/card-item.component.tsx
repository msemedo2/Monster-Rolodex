import { Monster } from '../../App';
import './card-item.styles.css';

type CardProp = {
	monster: Monster;
};

const CardItem = ({ monster }: CardProp) => {
	const { id, name, email } = monster;
	return (
		<div className="card-container" key={id}>
			<img
				alt={`monsters ${name}`}
				src={`https://robohash.org/${id}?set=set2&size=180x180`}
			/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	);
};

export default CardItem;
