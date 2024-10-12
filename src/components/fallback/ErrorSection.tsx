import { BiError } from "react-icons/bi";
import styled from "styled-components";

const ErrorBox = styled.div<{ $isFull: boolean }>`
  width: 100%;
  height: ${({ $isFull }) => ($isFull ? "50vh" : "100%")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: red;
`;

const ErrorIcon = styled(BiError)`
  font-size: 150px;
`;

const MessageBox = styled.div`
  text-align: end;
  & > h3 {
    font-size: 70px;
    font-weight: 600;
  }
  & > p {
    font-size: 20px;
  }
`;
const RetryButton = styled.button`
  background-color: #ea0a0b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #b02427;
  }
`;

const ErrorSection = ({ isFull, msg }: { isFull?: boolean; msg?: any }) => {
  return (
    <ErrorBox $isFull={!!isFull}>
      <ErrorIcon />
      <MessageBox>
        <h3>Error</h3>
        <p>{msg?.message ?? "Something went wrong."}</p>
        <RetryButton onClick={() => window.location.reload()}>Try Again</RetryButton>
      </MessageBox>
    </ErrorBox>
  );
};

export default ErrorSection;
