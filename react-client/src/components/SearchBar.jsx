import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let text = e.target.value;
    this.setState({ search: text });
    this.props.handleSearch(text);
  }

  render() {
    return (
      <div className="Search">
        <form>
          <label>
            Search:
            <input type="text" name="search" value={ this.state.search } placeholder="Search Cafe..." onChange={ this.handleChange } />
          </label>
        </form>
      </div>
    )
  }
}

export default SearchBar;