import React from 'react';
import './menu.css';

export interface MenuProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Color of the text
   */
  color?: string;
  /**
   * Menu items
   */
  items: string[];
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Menu: React.FC<MenuProps> = ({
  backgroundColor,
  color,
  items,
  ...props
}) => {
  return (
    <ul
      className={'storybook-menu'}
      //style={{ backgroundColor }}
      {...props}
    >
      {items.map((item) => (
        <li className={`storybook-menu-item`} style={{ backgroundColor, color }}>{item}</li>
      ))}
    </ul>
  );
};