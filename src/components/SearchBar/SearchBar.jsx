import { Component } from 'react';
import css from './Searchbar.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      searchQuery: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleOnSearch(this.state.searchQuery);
    this.setState({
      searchQuery: '',
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className="button-label">Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  button: PropTypes.string,
  span: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};