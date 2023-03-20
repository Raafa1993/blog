import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles';
import { LoadingIcon } from '@/app/assets/icons/LoadingIcon';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  typeButton: "linear" | "default" | "degrade" | 'linearEffect';
}

export default function Button({
  isLoading,
  typeButton,
  children,
  ...rest
}: ButtonProps) {
  return (
    <Container
      typeButton={typeButton}
      isLoading={isLoading}
      {...rest}
    >
      {isLoading ? <LoadingIcon /> : children}
    </Container>
  )
}
