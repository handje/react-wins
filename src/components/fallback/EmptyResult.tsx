import { IconType } from "react-icons";
import { BiError } from "react-icons/bi";
import styled from "styled-components";

interface IErrorProps {
  icon?: IconType;
  msg?: string;
  height?: string;
}

const ErrorContainer = styled.div<{ $H?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ $H }) => $H ?? "100%"};
  text-align: center;
  & > p {
    font-size: 18px;
    color: #555;
  }
`;

const ErrorIcon = styled(BiError)`
  font-size: 60px;
  color: #ff4d4f;
  margin-bottom: 20px;
`;

const EmptyResult = ({ icon, msg, height }: IErrorProps) => {
  return (
    <ErrorContainer $H={height}>
      <ErrorIcon as={icon} />
      <p>{msg ?? "정보를 불러올 수 없습니다."}</p>
    </ErrorContainer>
  );
};

export default EmptyResult;
