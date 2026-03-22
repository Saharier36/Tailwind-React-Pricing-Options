import React from 'react';

const Link = ({route}) => {
    return (
      <li className="hover:text-gray-400 cursor-pointer">
        <a href={route.path}>{route.name}</a>
      </li>
    );
};

export default Link;