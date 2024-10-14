import ScrollToTop from "@components/ScrollToTop";
import Footer from "@components/ui/footer/Footer";
import Header from "@components/ui/header/Header";
import { ReactNode } from "react";
import { Outlet, useRouteError } from "react-router-dom";
import styled from "styled-components";

const BasicLayoutStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RootLayout = ({ children }: { children?: ReactNode }) => {
  const error = useRouteError();

  return (
    <BasicLayoutStyle>
      <ScrollToTop />
      <Header />
      {error ? children : <Outlet />}
      <Footer />
    </BasicLayoutStyle>
  );
};
export default RootLayout;
