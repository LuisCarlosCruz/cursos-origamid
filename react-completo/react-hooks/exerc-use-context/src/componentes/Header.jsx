import React from 'react';
import MyContext from '../Context/MyContext';

const Header = () => {
  return (
    <MyContext.Consumer>
      {
        (value) => <h2>{console.log(value.state)}</h2>
      }
    </MyContext.Consumer>
  )
}

export default Header
