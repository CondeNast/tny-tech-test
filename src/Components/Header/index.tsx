import { ReactNode, useRef } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useOutsideClick,
} from "@chakra-ui/react";
import { Link as ReactLink, useHistory } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { History } from "history";

const Links = ["Entertainment", "Technology", "Business"];

const NavLink = (title: string, history: History, onClose: () => void) => (
  <Link
    key={title}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    onClick={() => {
      onClose();
      history.push(
        `/${title.toLowerCase() === "tny" ? "" : title.toLowerCase()}`
      );
    }}
  >
    {title}
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const ref = useRef(null);
  useOutsideClick({
    ref: ref,
    handler: onClose,
  });
  return (
    <Box
      ref={ref}
      zIndex={9999}
      data-testid="Header"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex h={16} alignItems={"center"} w="100%" px={4}>
        <IconButton
          pr={1}
          size={"md"}
          outline="none"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          _active={{ outline: "none" }}
          _focus={{ outline: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack
          spacing={8}
          w="100%"
          display={{ base: "inherit", sm: "flex" }}
          justifyContent="space-between"
          alignItems={"center"}
        >
          {NavLink("TNY", history, onClose)}
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => NavLink(link, history, onClose))}
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box
          zIndex={9999}
          pb={4}
          bg={useColorModeValue("gray.100", "gray.900")}
          display={{ md: "none" }}
        >
          <Stack as={"nav"} zIndex={9999} spacing={4}>
            {Links.map((link) => NavLink(link, history, onClose))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
