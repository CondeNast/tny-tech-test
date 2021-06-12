import { Box, Grid, Link, Text } from "@chakra-ui/layout";
import {
  Heading,
  Image,
  SkeletonText,
  useColorModeValue,
} from "@chakra-ui/react";
import { Skeleton } from "@chakra-ui/skeleton";
import { useHistory } from "react-router";
import { ArticlesModel } from "../../utils/NewsModel";

const BlankImg = require("./blank.jpeg");

const CardComponent = (props: ArticlesModel) => {
  const history = useHistory();
  const handleClick = () => {
    // console.log({ props });
    if (props.hasOwnProperty("id")) {
      console.log("props.id exists ", props.id);
      history.push(`/article/${props.id}`);
    }
  };
  return (
    <Grid
      height={{ base: "auto", md: "300px" }}
      minHeight={{ base: "300px", md: "inherit" }}
      data-testid="CardComponent"
      my={4}
      gridColumnGap={5}
      templateAreas={{ base: '"imgA" "desc"', md: '"desc imgA"' }}
      templateColumns={{ base: "auto", md: "1fr 1fr" }}
      justifyItems={{ base: "center", md: "inherit" }}
      bgColor={useColorModeValue("gray.100", "gray.300")}
    >
      <Box gridArea="desc" p={5}>
        <Box mt="20px" mb="20px">
          {renderName(props.source.name)}
        </Box>
        <Box mb="6px">{renderTitle(props.title)}</Box>
        <Box mb="4px">{renderDescription(props.description)}</Box>
        <Box>
          {props.url ? (
            <Link color="blue.500" pl={2} fontSize="sm" onClick={handleClick}>
              Read more
            </Link>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Box
        gridArea="imgA"
        maxW={{ base: "100%", md: "375px" }}
        maxH={{ base: "auto", md: "300px" }}
        w="100%"
        h="100%"
      >
        {renderImage(props.urlToImage, props.id)}
      </Box>
    </Grid>
  );
};

const renderTitle = (title: string | null) => {
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
  } else if (title === null) {
    return <></>;
  } else {
    return (
      <SkeletonText
        data-testid="CardComponentTitle"
        mt="4"
        noOfLines={1}
        spacing="4"
      />
    );
  }
};

const renderDescription = (info: string | null) => {
  if (info) {
    return (
      <Text
        data-testid="CardComponentDescription"
        pl={2}
        // alignSelf={{ base: "center", md: "flex-start" }}
        // textTransform="uppercase"
        as={"h4"}
        fontSize="xs"
      >
        {info}
      </Text>
    );
  } else if (info === null) {
    return <></>;
  } else {
    return (
      <SkeletonText
        data-testid="CardComponentDescription"
        mt="4"
        noOfLines={2}
        spacing="4"
      />
    );
  }
};

const renderName = (name: string | null) => {
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
  } else if (name === null) {
    return <></>;
  }
  return (
    <SkeletonText
      data-testid="CardComponentName"
      mt="4"
      noOfLines={1}
      spacing="4"
    />
  );
};

const renderImage = (image: string | null, id?: number) => {
  if (image) {
    if (id && id % 20 > 5) {
      return (
        <Image
          className="my-images"
          height="100%"
          width="100%"
          objectFit="cover"
          data-testid="CardComponentImage"
          data-src={image}
          src={BlankImg}
        />
      );
    }
    return (
      <Image
        className="my-images"
        height="100%"
        width="100%"
        objectFit="cover"
        data-testid="CardComponentImage"
        src={image}
      />
    );
  } else if (image === null) {
    //
    return (
      <Image
        height="100%"
        width="100%"
        objectFit="cover"
        data-testid="CardComponentImage"
        data-src={BlankImg}
        src={BlankImg}
      />
    );
  } else {
    return <Skeleton h="100%" w="100%" data-testid="CardComponentImage" />;
  }
};

export default CardComponent;
