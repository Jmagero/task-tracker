import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ showAddTask, onAdd }) => (
  <header>
    <h1>This is Header</h1>
    <Button
      text={showAddTask ? 'close' : 'Add'}
      color={showAddTask ? 'red' : 'green'}
      onClick={onAdd}
    />
  </header>
);

Header.propTypes = {
  showAddTask: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
