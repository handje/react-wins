import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  $fontSize?: string;
  $color?: string;
  $bgColor?: string;
  $border?: string;
  $rounded?: string;
  onClick: () => void;
  $disabled: boolean;
}

const ButtonStyle = styled.button<{
  $fontSize?: string;
  $color?: string;
  $bgColor?: string;
  $border?: string;
  $rounded?: string;
  $disabled: boolean;
}>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor || "none"};
  border-radius: ${(props) => props.$rounded || "0"};
  border: ${(props) => props.$rounded || "none"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  & > svg {
    font-size: ${(props) => props.$fontSize || "14px"};
    color: ${(props) => props.$color || "#000"};
  }
`;

const Button = ({ children, $fontSize, $color, $bgColor, $border, $rounded, onClick, $disabled }: ButtonProps) => {
  return (
    <ButtonStyle
      $fontSize={$fontSize}
      $color={$color}
      $bgColor={$bgColor}
      $border={$border}
      $rounded={$rounded}
      onClick={onClick}
      $disabled={$disabled}>
      {children}
    </ButtonStyle>
  );
};
export default Button;
