import { Box, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import {
  RiMessage3Line,
  RiSettings4Line,
  RiPagesLine,
  RiSearchLine,
  RiUser3Line,
} from "react-icons/ri";
import { useState } from "react";
import { SearchM } from "../Modals/SearchM/SearchM";
import { SettingsM } from "../Modals/SettingsM/SettingsM";
import { BlogM } from "../Modals/BlogM/BlogM";

export const RightMenu = (props: any) => {
  const [searchM, isSearchM] = useState<boolean>(false);
  const [followersM, isFollowersM] = useState<boolean>(false);
  const [settingsM, isSettingsM] = useState<boolean>(false);
  const [blogM, isBlogM] = useState<boolean>(false);

  return (
    <>
      <Flex>
        <Box
          border="1px solid #E5D9D7"
          borderRadius="10px"
          position="sticky"
          height="240px"
          top="1"
          margin="5px"
          padding="3px"
        >
          <Tooltip label="Search users" openDelay={900} placement="right">
            <Box
              margin="5px"
              onClick={() => isSearchM((prevState) => !prevState)}
            >
              <IconButton aria-label="Search" icon={<RiSearchLine />} />
            </Box>
          </Tooltip>
          <Tooltip label="Followers" openDelay={900} placement="right">
            <Box
              margin="5px"
              onClick={() => isFollowersM((prevState) => !prevState)}
            >
              <IconButton aria-label="Friends" icon={<RiUser3Line />} />
            </Box>
          </Tooltip>
          <Tooltip label="Your Blog" openDelay={900} placement="right">
            <Box
              margin="5px"
              onClick={() => isBlogM((prevState) => !prevState)}
            >
              <IconButton aria-label="Your blog" icon={<RiPagesLine />} />
            </Box>
          </Tooltip>
          <Tooltip label="Messages" openDelay={900} placement="right">
            <Box margin="5px">
              <IconButton aria-label="Messages" icon={<RiMessage3Line />} />
            </Box>
          </Tooltip>
          <Tooltip label="Settings" openDelay={900} placement="right">
            <Box
              margin="5px"
              onClick={() => isSettingsM((prevState) => !prevState)}
            >
              <IconButton aria-label="Settings" icon={<RiSettings4Line />} />
            </Box>
          </Tooltip>
        </Box>

        <SearchM
          isOpen={searchM}
          isSearchM={() => isSearchM((prevState) => !prevState)}
          isFollowers={false}
          screenWidth={props.screenWidth}
        />
        <SearchM
          isOpen={followersM}
          isFollowersM={() => isFollowersM((prevState) => !prevState)}
          isFollowers={true}
          screenWidth={props.screenWidth}
        />
        <SettingsM
          isOpen={settingsM}
          isSettingsM={() => isSettingsM((prevState) => !prevState)}
          screenWidth={props.screenWidth}
        />
        <BlogM
          isOpen={blogM}
          isBlogM={() => isBlogM((prevState) => !prevState)}
          screenWidth={props.screenWidth}
        />
      </Flex>
    </>
  );
};
