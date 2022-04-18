import PropTypes from 'prop-types';

const Button = ({ text, color, onClick }) => (
  <button type="button" onClick={onClick} style={{ backgroundColor: color }}>{text}</button>
);

Button.defaultProps = {
  color: 'blue',
  text: 'Add',
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
