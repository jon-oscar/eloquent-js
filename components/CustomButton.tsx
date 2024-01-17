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
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      type={btnType || 'button'}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>

      {rightIcon && (
        <div className='relative h-6 w-6'>
          <Image
            alt='right icon'
            className='object-contain'
            fill
            src={rightIcon}
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
