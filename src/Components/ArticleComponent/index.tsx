import {
  Box,
  Grid,
  Heading,
  Skeleton,
  Text,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Redirect } from "react-router";
import { ArticlesModel } from "../../utils/NewsModel";

const ArticleComponent = (props: ArticlesModel) => {
  if (props.source === null || props.source === undefined) {
    return <Redirect to="/" />;
  }

  const handleClick = () => {
    if (props.url) {
      window.open(props.url);
    }
  };

  return (
    <Grid
      height={{ base: "auto", md: "400px" }}
      minHeight={{ base: "400px", md: "inherit" }}
      data-testid="CardComponent"
      my={4}
      gridColumnGap={5}
      templateAreas={{ base: '"imgA" "desc"', md: '"desc imgA"' }}
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      justifyItems={{ base: "center", md: "inherit" }}
      bgColor={useColorModeValue("gray.100", "gray.300")}
    >

      <Box gridArea="desc" p={5}>
        <Box mt="20px" mb="20px">
          {renderName(props.source.name)}
        </Box>
        <Box mb="4px">{renderTitle(props.title)}</Box>
        <Box mb="4px">{renderDescription(props.description)}</Box>
        <Box mb="4px">{renderContent(props.content, handleClick)}</Box>
      </Box>

      <Box
        gridArea="imgA"
        maxW={{ base: "100%", md: "375px" }}
        maxH={{ base: "auto", md: "250px" }}
        w="100%"
        h="100%"
      >
        {renderImage(props.urlToImage)}
      </Box>
    </Grid>
  );
};

export default ArticleComponent;
const renderName = (name: string): React.ReactNode => {
  if (name) {
    return (
      <Heading
        data-testid="CardComponentName"
        pl={2}
        alignSelf={{ base: "center", md: "flex-start" }}
        textTransform="uppercase"
        as={"h6"}
        size="xs"
      >
        {name}
      </Heading>
    );
  } else {
    return <></>;
  }
};

const renderTitle = (title: string | null): React.ReactNode => {
  if (title) {
    return (
      <Text
        data-testid="CardComponentTitle"
        pl={2}
        // alignSelf={{ base: "center", md: "flex-start" }}
        fontSize="xs"
      >
        {title}
      </Text>
    );
  } else {
    return <></>;
  }
};

const renderDescription = (description: string | null): React.ReactNode => {
  if (description) {
    return (
      <Text
        data-testid="CardComponentDescription"
        pl={2}
        // alignSelf={{ base: "center", md: "flex-start" }}
        // textTransform="uppercase"
        as={"h4"}
        fontSize="xs"
      >
        {description}
      </Text>
    );
  } else {
    return <></>;
  }
};

const renderContent = (
  content: string | null,
  handleClick: () => void
): React.ReactNode => {
  if (content) {
    return (
      <Text
        data-testid="CardComponentContent"
        pl={2}
        // alignSelf={{ base: "center", md: "flex-start" }}
        // textTransform="uppercase"
        as={"h4"}
        fontSize="xs"
      >
        {content.split("[+")[0]}
        <Link color="blue.500" onClick={handleClick}>Read More</Link>
      </Text>
    );
  } else {
    return <></>;
  }
};

const renderImage = (urlToImage: string | null): React.ReactNode => {
  if (urlToImage) {
    return (
      <Image
        height="100%"
        width="100%"
        objectFit="cover"
        data-testid="CardComponentImage"
        src={urlToImage}
      />
    );
  } else if (urlToImage === null) {
    //
    return (
      <Image
        height="100%"
        width="100%"
        objectFit="cover"
        data-testid="CardComponentImage"
        src={`https://i.stack.imgur.com/y9DpT.jpg`}
      />
    );
  } else {
    return <Skeleton data-testid="CardComponentImage" />;
  }
};
