import { HomeProps } from "@customTypes/home";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ContainerProps extends HomeProps {
  $bgImage?: string;
  $bgColor?: string;
  to: string;
  target: "_blank" | "_self";
  children: ReactNode;
}

const ContainerStyle = styled(Link)<{
  $bgImage: string;
  $bgColor: string;
  $position?: string;
  $bottom?: string;
  $left?: string;
}>`
  position: ${(props) => props.$position || "static"};
  bottom: ${(props) => props.$bottom || "auto"};
  left: ${(props) => props.$left || "auto"};
  width: 100%;
  max-width: 540px;
  min-height: 190px;
  background-image: ${({ $bgImage, $bgColor }) =>
    $bgImage ? `url(${$bgImage})` : $bgColor ? `linear-gradient(${$bgColor})` : "none"};
  background-color: rgba(0, 0, 0, 0.2);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
`;

const Container = ({ $bgImage, $bgColor, to, children, target, $position, $left, $bottom }: ContainerProps) => {
  return (
    <ContainerStyle
      $bgImage={$bgImage || ""}
      $bgColor={$bgColor || ""}
      to={to}
      target={target}
      $position={$position}
      $left={$left}
      $bottom={$bottom}>
      {children}
    </ContainerStyle>
  );
};
export default Container;
