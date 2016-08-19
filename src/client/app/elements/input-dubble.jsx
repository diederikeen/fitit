import React from 'react';

export default function DubbleInput({ children, ...props }) {
  console.log(...props);
  return(
    <div>
      <input  type="number" className="input__inline" {...props} placeholder="Reps"/>
      <input  type="number" className="input__inline" {...props} placeholder="KG"/>
    </div>
  )
}

export default DubbleInput;