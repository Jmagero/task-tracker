import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTask = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    addTask({ text, day, reminder });
    setText('');
    setDay('');
    setReminder(false);
  };
  return (
    <form onSubmit={onSubmit} className="add-form">
      <div className="form-control">
        <input
          type="text"
          value={text}
          placeholder="text"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          value={day}
          placeholder="date  time"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          checked={reminder}
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;
