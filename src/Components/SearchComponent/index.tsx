import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup } from "@chakra-ui/input";
import { Flex, Grid } from "@chakra-ui/layout";
import {
  Button,
  Icon,
  IconButton,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  newsActionGetLatest,
  newsActionGetSearch,
} from "../../Redux/Actions/NewsActions";

export interface PathnameProps {
  pathname: string;
}

const SearchComponent = ({ pathname }: PathnameProps) => {
  const [searchParam, setSearchParam] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchParam.trim() === "") {
      dispatch(newsActionGetLatest(pathname));
    } else {
      dispatch(newsActionGetSearch(searchParam.trim(), pathname));
    }
  };

  return (
    <form data-testid="SearchComponent" onSubmit={handleFormSubmit}>
      <InputGroup mt="4em" mb={5} size="md">
        <Input
          maxLength={2047}
          data-testid="SearchComponentInput"
          w="100%"
          placeholder="Search.."
          margin="auto"
          gridArea="search"
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            type="submit"
            colorScheme={useColorModeValue("blackAlpha", "blackAlpha")}
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchComponent;
