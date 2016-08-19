import React from 'react';

export default function DynamicSelect({ children, ...props }) {
  return (

    <select {...props}>
      {children}
    </select>
  );
}
