import React from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import { IoTrashOutline } from 'react-icons/io5';
import './TodoListItem.css';

export default class TodoListItem extends React.Component {
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;

    let className = 'todo-list-item';
    // зачеркивает строку
    if (done) {
      className += ' done';
    }
    // выделяет строку
    if (important) {
      className += ' important';
    }

    return (
      <span className={className}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>
        <div>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={onToggleImportant}>
            <IoCheckmarkOutline size={18} />
          </button>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={onDeleted}>
            <IoTrashOutline size={18} />
          </button>
        </div>
      </span>
    );
  }
}
