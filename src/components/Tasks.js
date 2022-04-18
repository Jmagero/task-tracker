import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete, toggle }) => (
  <div>
    { tasks.length > 0
      ? tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} toggle={toggle} />
      ))
      : <h4>No Tasks</h4>}
  </div>
);

Tasks.propTypes = {
  tasks: PropTypes.InstanceOf(Array).isRequired,
  onDelete: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Tasks;
