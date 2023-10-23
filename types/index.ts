import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ChapterCardProps {
  title: string;
  subtitle: string;
  image: string;
  exercises: string;
  link: string;
}
