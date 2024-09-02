import React from 'react';

export default function Section({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      {children}
    </>
  );
}
