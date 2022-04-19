import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ showAddTask, onAdd }) => {
  const location = useLocation();
  return (
    <header>
      <h1>This is Header</h1>
      {location.pathname === '/'
     && (
     <Button
       text={showAddTask ? 'close' : 'Add'}
       color={showAddTask ? 'red' : 'green'}
       onClick={onAdd}
     />
     )}

    </header>
  );
};

Header.propTypes = {
  showAddTask: PropTypes.bool.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Header;
