import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ showAddTask, onAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1 className="title">Task Tracker</h1>
      {location.pathname === '/'
     && (
     <Button
       text={showAddTask ? 'Close' : 'Add'}
       bgColor={showAddTask ? 'red' : 'green'}
       textColor={showAddTask ? 'black' : 'white'}
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
