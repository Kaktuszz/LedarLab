import { Box, IconButton } from "@chakra-ui/react";
import { RiMessage3Line, RiSettings4Line, RiPagesLine  } from "react-icons/ri";

export const RightMenu = () => {
  return (
    <Box
      border="1px solid #E5D9D7"
      borderRadius="10px"
      position="sticky"
        height="150px"
      top="1"
      marginTop="5px"
      padding="3px"
    >
      <Box margin="5px"><IconButton aria-label="Messages" icon={<RiMessage3Line />} /></Box>
      <Box margin="5px"><IconButton aria-label="Your blog" icon={<RiPagesLine />} /></Box>
      <Box margin="5px"><IconButton aria-label="Settings" icon={<RiSettings4Line />} /></Box>
    </Box>
  );
};
