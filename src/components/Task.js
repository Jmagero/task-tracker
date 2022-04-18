import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, toggle }) => (
  <div onDoubleClick={() => toggle(task.id)}>
    <h3>
      {task.text}
      <FaTimes style={{ color: 'red' }} onClick={() => onDelete(task.id)} />
    </h3>
    <p>{task.day}</p>
  </div>
);

Task.propTypes = {
  task: PropTypes.instanceOf(Object).isRequired,
  onDelete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Task;
