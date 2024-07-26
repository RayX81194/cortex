import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Button = ({ onClick, children, type = 'button', className = '', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${className} text-dimWhite bg-button font-vulfMono px-10 py-4 text-[18px] hover:bg-pink transition ease-in duration-50"`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
