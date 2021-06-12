import { PhoneIcon } from "@chakra-ui/icons";
import {
  ComponentWithAs,
  Flex,
  Heading,
  IconButton,
  IconProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex
      data-testid="Footer"
      p={3}
      alignItems="center"
      justifyContent="space-between"
      direction={{ base: "column", md: "row-reverse" }}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex flex={1} p={5} direction="row">
        {renderIcons(PhoneIcon, "Call")}
        {renderIcons(PhoneIcon, "Call")}
        {renderIcons(PhoneIcon, "Call")}
      </Flex>

      <Flex flex={4} direction={{ base: "column", md: "row" }}>
        {footerItems(
          "Footer Item 1",
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        )}
        {footerItems(
          "Footer Item 1",
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        )}
        {footerItems(
          "Footer Item 1",
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"
        )}
      </Flex>
    </Flex>
  );
};

const footerItems = (heading: string, body: string) => (
  <Flex
    p={{base: "0em 2em", md:"inherit"}}
    m={{ base: "1em", md: "2em 1em 2em" }}
    alignItems="flex-start"
    direction="column"
  >
    <Heading pl={2} textTransform="uppercase" as={"h4"} size="sm">
      {heading}
    </Heading>
    <Text
      maxW={{ base: "inherit", md: "150px" }}
      textAlign="left"
      // textAlign={{ base: "center", md: "left" }}
      fontSize="xs"
    >
      {body}
    </Text>
  </Flex>
);

const renderIcons = (
  Icon: ComponentWithAs<"svg", IconProps>,
  label: string
) => {
  return (
    <IconButton
      m={2}
      colorScheme={useColorModeValue("blackAlpha", "blackAlpha")}
      size="md"
      aria-label={label}
      icon={<Icon />}
    />
  );
};

export default Footer;
