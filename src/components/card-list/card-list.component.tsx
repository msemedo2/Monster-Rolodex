import { Monster } from '../../App';
import CardItem from '../card-item/card-item.component';
import './card-list.styles.css';

type CardListProps = {
	monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
	return (
		<div className="card-list">
			{monsters.map((monster) => {
				return <CardItem monster={monster} />;
			})}
		</div>
	);
};

export default CardList;
