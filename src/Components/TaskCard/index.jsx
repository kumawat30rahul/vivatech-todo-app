import React, { useContext, useState } from 'react';
import './styles.css';
import { StateContext } from '../../StateContext';

function TaskCard({ title, desc, id }) {
  const [edittedTaskTitle, setEddittedTaskTitle] = useState("");
  const [edittedTaskDesc, setEddittedTaskDesc] = useState("");
  const [listValue, setListValue] = useState('list-1');
  const [isEdit, setEdit] = useState(false);

  const { allTaskList, setAllTaskList } = useContext(StateContext);

  const editHandler = () => {
    setEdit(!isEdit);
    setEddittedTaskTitle(title);
    setEddittedTaskDesc(desc);
  };

  const saveHandler = () => {
    const updatedTaskList = allTaskList.map((task) => {
      if (task.id === id) {
        return {
            ...task,
          id: task.id,
          taskTitle: edittedTaskTitle,
          taskDescription: edittedTaskDesc,
        };
      }
      return task;
    });
    setAllTaskList(updatedTaskList);
    setEdit(false);
  };

  const deleteHandler = () => {
    const updatedList = allTaskList.filter((task) => task.id !== id);
    setAllTaskList(updatedList);
  };

  const listHandler = (e) => {
    setListValue(e.target.value);
    const updatedList = allTaskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          list: e.target.value,
        };
      }
      return task;
    });
    setAllTaskList(updatedList);
  };

  return (
    <div
      className={`task-card-wrapper ${
        listValue === "list-1"
          ? 'list-1'
          : listValue === 'list-2'
          ? 'list-2'
          : listValue === 'list-3'
          ? 'list-3'
          : ''
      }`}
    >
      <div className='task-card-info'>
        {isEdit ? (
          <>
            <input
              type='text'
              name='task'
              className='task-editor-input input-task'
              placeholder='Task Title..'
              value={edittedTaskTitle}
              onChange={(e) => setEddittedTaskTitle(e.target.value)}
            />
            <input
              type='text'
              name='desc'
              className='task-editor-input input-desc task-card-desc'
              placeholder='Description..'
              value={edittedTaskDesc}
              onChange={(e) => setEddittedTaskDesc(e.target.value)}
            />
          </>
        ) : (
          <>
            <h2 className='task-card-info-title'>{title}</h2>
            <span className='task-card-info-desc'>{desc}</span>
          </>
        )}
      </div>
      <div className='task-card-buttons-div'>
        {isEdit ? (
          <button className='card-btn edit' onClick={saveHandler}>
            Save
          </button>
        ) : (
          <button className='card-btn edit' onClick={editHandler}>
            Edit
          </button>
        )}

        <button className='card-btn delete' onClick={deleteHandler}>
          Delete
        </button>
        <select className='task-card-select' onChange={listHandler} value={listValue}>
          <option value="list-1">List 1</option>
          <option value="list-2">List 2</option>
          <option value="list-3">List 3</option>
        </select>
      </div>
    </div>
  );
}

export default TaskCard;
