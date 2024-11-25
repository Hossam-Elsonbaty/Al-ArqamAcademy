import React, { Children } from 'react';
import { HashLink } from 'react-router-hash-link';
export const HashLinkComponent = ({children,name,link}) => {
  return (
    <HashLink 
      smooth
      scroll={(el) => {
        const yOffset = -60; // Adjust this value to match the height of your navbar
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }}
      to={link}
    >
      {name}
      {children}
    </HashLink>
  )
}
