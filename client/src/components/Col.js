import React from 'react';

const Col = ({children, className }) => {
    return (
           <div className={className}>
           {children}</div>
       );
   };

export default Col;
