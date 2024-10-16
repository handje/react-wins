import { HomeProps } from "@customTypes/home";
import React from "react";
import styled from "styled-components";

interface TextProps extends HomeProps {
  text: string;
  $opacity?: string;
}

const TextStyle = styled.span<{
  $marginBottom?: string;
  $fontSize?: string;
  $color?: string;
  $fontWeight?: string;
  $textShadow?: string;
  $opacity?: string;
}>`
  margin-bottom: ${(props) => props.$marginBottom || "0"};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$color};
  text-shadow: ${(props) => props.$textShadow || "none"};
  opacity: ${(props) => props.$opacity || "1"};
`;

const Text = ({ text, $marginBottom, $fontSize, $color, $fontWeight, $textShadow, $opacity }: TextProps) => {
  return (
    <TextStyle
      $marginBottom={$marginBottom}
      $fontSize={$fontSize}
      $color={$color}
      $fontWeight={$fontWeight}
      $textShadow={$textShadow}
      $opacity={$opacity}>
      {text}
    </TextStyle>
  );
};
export default React.memo(Text);
