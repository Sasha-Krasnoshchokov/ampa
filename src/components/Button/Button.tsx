import React, { useCallback } from 'react';

type ButtonProps = {
  id: string;
  theme: any,
  size: any,
  callback: () => void,
  children: string | JSX.Element | null,
}

const Button: React.FC<ButtonProps> = ({
  id = '',
  theme = 'dark',
  size = 'md',
  callback,
  children,
}): JSX.Element => {
  const handleButton = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    callback();
  }, [callback]);

  // styles for buttons are built using the mixin buttons
  return (
    <button
      id={id}
      type="button"
      onClick={handleButton}
      className={`button__${theme} button__${size}`}
    >
      {children || 'DEFAULT'}
    </button>
  );
};

export default Button;
