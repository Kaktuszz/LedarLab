import { Box, IconButton } from "@chakra-ui/react";
import {
  RiMessage3Line,
  RiSettings4Line,
  RiPagesLine,
  RiSearchLine,
} from "react-icons/ri";
import { SearchM } from "../Modals/SearchM/SearchM";
import { useState } from "react";

export const RightMenu = () => {
  const [searchM, isSearchM] = useState<boolean>(false);

  return (
    <>
      <Box
        border="1px solid #E5D9D7"
        borderRadius="10px"
        position="sticky"
        height="195px"
        top="1"
        margin="5px"
        padding="3px"
      >
        <Box margin="5px" onClick={() => isSearchM(prevState => !prevState)}>
          <IconButton aria-label="Search" icon={<RiSearchLine />} />
        </Box>
        <Box margin="5px">
          <IconButton aria-label="Messages" icon={<RiMessage3Line />} />
        </Box>
        <Box margin="5px">
          <IconButton aria-label="Your blog" icon={<RiPagesLine />} />
        </Box>
        <Box margin="5px">
          <IconButton aria-label="Settings" icon={<RiSettings4Line />} />
        </Box>
      </Box>
      <SearchM isOpen={searchM} isSearchM={() => isSearchM(prevState => !prevState)} />
    </>
  );
};
