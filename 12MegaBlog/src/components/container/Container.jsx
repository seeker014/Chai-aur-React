import React from 'react'

// container is just a box that has styling properties here

function Container({children}) {         // children is just name of parameter , can be anything
  return <div className='w-full max-w-7xl mx-auto px-4'> {children} </div>;
}

export default Container 