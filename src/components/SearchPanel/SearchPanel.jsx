import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    term: '',
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
