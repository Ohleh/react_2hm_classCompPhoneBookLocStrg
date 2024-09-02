import React from 'react';

export default function Filter({ filter, onHandleChange }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="tel"
          value={filter}
          name="filter"
          onChange={onHandleChange}
        ></input>
      </label>
    </div>
  );
}
