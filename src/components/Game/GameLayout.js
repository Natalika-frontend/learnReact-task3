import styles from './Game.module.css';
import { Field } from '../Field/Field';
import { Information } from '../Information/Information';
import PropTypes from 'prop-types';

export const GameLayout = ({ field, handleCellClick, currentPlayer, isGameEnded, isDraw, handleClick }) => {
	return <div className={styles.container}>
		<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
		<Field field={field} handleCellClick={handleCellClick} currentPlayer={currentPlayer} />
		<button className={styles.btn} onClick={handleClick}>Начать заново</button>
	</div>;
};

GameLayout.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func,
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	handleClick: PropTypes.func,
};
