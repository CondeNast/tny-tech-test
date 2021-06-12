import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import ChildrenPropsModel from "../../utils/ChildrenPropsModel";
import Footer from "../Footer";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

const PageLayout = ({ children }: ChildrenPropsModel) => {
  return (
    <Grid data-testid="PageLayout" height="100vh" templateRows="4em auto">
      <Header />
      <Flex direction="column" overflowY="auto" justifyContent="space-between">
        <ScrollToTop />
        {children}
        <Footer />
      </Flex>
    </Grid>
  );
};

export default PageLayout;
