'use client';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

export type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  handleMouseDown?: MouseEventHandler<HTMLButtonElement>;
  handleMouseUp?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  handleMouseDown,
  handleMouseUp,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
