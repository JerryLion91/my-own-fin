import React from 'react';

export default function FlexRow({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 10%',
      }}
    >
      {children}
    </div>
  );
}
