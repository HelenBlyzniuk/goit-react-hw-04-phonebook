import React from 'react';
import PropTypes from 'prop-types';

import { FilterContainer, FilterInput } from './Filter.styled';
export const Filter = ({ value, onFilterChange }) => {
  return (
    <FilterContainer>
      Find contact by name
      <FilterInput
        type="text"
        placeholder="...name"
        value={value}
        onChange={onFilterChange}
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
