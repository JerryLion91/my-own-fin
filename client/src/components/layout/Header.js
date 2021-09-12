import React from 'react';

export default function Header({ children }) {
  return (
    <header
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '0 15%',
      }}
    >
      {children}
    </header>
  );
}
