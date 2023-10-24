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

export interface Info {
  id: number;
  title: string;
  details: string;
  code(name: string): void;
}

export interface PageCardProps {
  cardInfo: Info[];
}
