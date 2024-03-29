import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, handleCellClick }) => {
	return <div className={styles.field}>
		{field.map((value, index) => (
			<button key={index}
					className={`${styles.cell} ${value === 'x' ? styles['isX'] : value === 'o' ? styles['isO'] : ''}`}
					onClick={() => handleCellClick(index)}>{value}</button>
		))}
	</div>;
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	handleCellClicksDraw: PropTypes.func,
};
