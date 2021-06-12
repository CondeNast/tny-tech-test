import { Flex } from "@chakra-ui/layout";
import { Center, CircularProgress } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  newsActionAdd,
  newsActionGetLatest,
} from "../../Redux/Actions/NewsActions";
import { RootReducerModel } from "../../Redux/Reducer/root_reducer";
import { ArticlesModel } from "../../utils/NewsModel";
import CardComponent from "../CardComponent";
import { PathnameProps } from "../SearchComponent";
import { useInfiniteScroll } from "../useInfiniteScroll";
import { useLazyLoading } from "../useLazyLoading";

const CardsContainer = ({ pathname }: PathnameProps) => {
  const bottomDivRef = useRef(null);
  const [showLoading, setShowLoading] = useState(false);

  const { loading, error, data } = useSelector((state: RootReducerModel) => {
    return state.news;
  }, shallowEqual);

  const dispatch = useDispatch();
  const fetchMore = () => {
    if (
      data.articles.length < 100 &&
      data.articles.length < data.totalResults
    ) {
      setShowLoading(true);
      dispatch(newsActionAdd());
    }
  };

  useInfiniteScroll(bottomDivRef, fetchMore);
  useLazyLoading(".my-images", data.articles);

  useEffect(() => {
    console.log({ data });
    setShowLoading(false);
  }, [data]);

  useEffect(() => {
    setShowLoading(false);
    dispatch(newsActionGetLatest(pathname));
  }, [pathname]);
  if (loading) {
    const blank = new ArticlesModel();
    return (
      <Flex data-testid="CardsContainer" border="" direction="column">
        <CardComponent {...blank} />
        <CardComponent {...blank} />
        <CardComponent {...blank} />
        <CardComponent {...blank} />
      </Flex>
    );
  } else if (error) {
    return <Redirect to="/err" />;
  } else {
    return (
      <>
        {data.articles.map((article, index) => (
          <CardComponent
            key={article.title + "_" + index + "_" + article.author}
            {...article}
            id={index}
          />
        ))}
        {!showLoading && <div id="lastComponent" ref={bottomDivRef} />}

        {showLoading && (
          <Center w="100%" h="5em" my={5}>
            <CircularProgress isIndeterminate color="blue.600" />
          </Center>
        )}
      </>
    );
  }
};

export default CardsContainer;
