import { Flex } from "@chakra-ui/layout";
import { useLocation } from "react-router-dom";
import CardsContainer from "../../Components/CardsContainer";
import SearchComponent from "../../Components/SearchComponent";

const HomePage = () => {
  const { pathname } = useLocation();

  return (
    <Flex data-testid="HomePage" p={4} w="100%" maxW="800px" margin="auto" direction="column">
      <SearchComponent pathname={pathname} />
      <CardsContainer pathname={pathname}/>
    </Flex>
  );
};

export default HomePage;
