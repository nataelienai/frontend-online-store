import React from 'react';
import PropTypes from 'prop-types';

class SearchButton extends React.Component {
  render() {
    const { input, onClick, onChange } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="input"
          value={ input }
          onChange={ onChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ onClick }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchButton.propTypes = {
  input: PropTypes.string,
  onclick: PropTypes.func,
  onchange: PropTypes.func,
}.isRequired;

export default SearchButton;
