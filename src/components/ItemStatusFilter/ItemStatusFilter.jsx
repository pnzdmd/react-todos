import React from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends React.Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const className = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button
          type='button'
          className={`btn ${className}`}
          key={name}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className='btn-group'>{buttons}</div>;
  }
}