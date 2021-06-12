import { Flex } from "@chakra-ui/react";
import { shallowEqual, useSelector } from "react-redux";
import { useLocation } from "react-router";
import ArticleComponent from "../../Components/ArticleComponent";
import { RootReducerModel } from "../../Redux/Reducer/root_reducer";

const ArticlePage = () => {
  const location = useLocation();
  const index = parseInt(location.pathname.split("/")[1]);

  const data = useSelector(
    (state: RootReducerModel) => state.news.data.articles[index],
    shallowEqual
  );

  return (
    <Flex data-testid="ArticlePage" ErrorPage p={4} w="100%" maxW="800px" margin="auto" direction="column">
      <ArticleComponent {...data} />
    </Flex>
  );
};

export default ArticlePage;
