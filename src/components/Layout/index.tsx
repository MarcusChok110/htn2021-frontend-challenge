import React from "react";
import Header from "./Header";
import { Container } from "@material-ui/core";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
