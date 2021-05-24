import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']

//const COLOR = ['primary', 'blue', 'red', 'green']

export const Button = ({
      children,
      type,
      onClick,
      buttonStyle,
      buttonSize,
      buttonColor    
}) => {
      // eslint-disable-next-line
      const checkButtonStyle = STYLES.includes(buttonStyle) ? 
      buttonStyle : STYLES[0];
      // eslint-disable-next-line
      const checkButtonSize = STYLES.includes(buttonSize) ? 
      buttonSize : SIZES[0];
      // eslint-disable-next-line
      const checkButtonColor = STYLES.includes(buttonColor) ? 
      buttonColor : null;

      return (
            // eslint-disable-next-line
            <button className={'btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}'} onClick={onClick}
            type={type}>{children}
            </button>
      )
}