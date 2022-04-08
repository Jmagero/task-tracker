import PropTypes from 'prop-types'
export const Button = ({text, color, onClick}) => {
    return(
        <button onClick={onClick} style={{backgroundColor:color}}>{text}</button>
    )
 }

 Button.defaultProps = {
     color: "blue",
     text: "Add"
 }
 Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}