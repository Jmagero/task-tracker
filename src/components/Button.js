import PropTypes from 'prop-types';

const Button = ({
  text, bgColor, onClick, textColor,
}) => (
  <button
    type="button"
    onClick={onClick}
    style={{ backgroundColor: bgColor, color: textColor }}
  >
    {text}
  </button>
);

Button.propTypes = {
  bgColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
