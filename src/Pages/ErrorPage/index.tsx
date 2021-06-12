import { Center, Flex, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { newsActionGetLatest } from "../../Redux/Actions/NewsActions";

const ErrorPage = () => {
  const history = useHistory();
  const handleClick = () => {
    history.replace("/");
  };
  return (
    <Center data-testid="ErrorPage" height="100vh">
      <Flex direction="column" alignItems="center">
        <Heading>Error Fetching News</Heading>
        <Button onClick={handleClick}>Try Again</Button>
      </Flex>
    </Center>
  );
};

export default ErrorPage;
