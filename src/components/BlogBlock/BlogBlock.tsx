import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuIcon,
  MenuItem,
  MenuList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaRegHeart, FaImage, FaFileAlt, FaLink } from "react-icons/fa";
import { AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

export const BlogBlock = (props: any) => {
  const [text, setText] = useState("");
  const [like, setLike] = useState<boolean>(false);

  const setTextHandler = (e: any) => {
    setText(e.target.value);
  };

  const setLikeHandler = () => {
    setLike((prevState) => !prevState);
  };

  return (
    <Box borderBottom="1px solid #E5D9D7" textAlign="left" w="100%">
      {props.componentType === "blog" ? (
        <>
          <Box>
            <Flex>
              <Link>
                <Avatar
                  name={props.username}
                  src={props.profilePic}
                  size="md"
                  margin="5px"
                  border="1px solid #E5D9D7"
                  color="black"
                />
              </Link>
              <Box flexDirection="column" display="flex">
                <Link height="25px">{props.username}</Link>
                <Link height="25px">{props.userTag}</Link>
              </Box>
            </Flex>
          </Box>
          <Box width="100%">
            <Text marginLeft="60px" marginBottom="10px" marginRight="5px">
              {props.blogText}
            </Text>
            <Image
              src={props.attachments}
              maxWidth="md"
              width="80%"
              marginLeft="60px"
              marginRight="60px"
              borderRadius="5px"
              userSelect="none"
            />
          </Box>

          <Box margin="10px 10px 10px 60px" display="flex">
            <FaRegHeart
              color={like ? "red" : "black"}
              onClick={setLikeHandler}
              size="20px"
            />
            <Text marginLeft="5px" fontSize="12" userSelect="none">
              {props.likes}
            </Text>
          </Box>
        </>
      ) : props.componentType === "write" ? (
        <Box height="100px">
          <Flex>
            <Link href="#" height="50px">
              <Avatar
                name={props.username}
                src={props.profilePic}
                size="md"
                margin="5px"
                userSelect="none"
              />
            </Link>

            <Textarea
              border="none"
              borderRadius="0"
              placeholder="What's on your mind?"
              height="auto"
              resize="none"
              size="lg"
              minHeight="100px"
              focusBorderColor="transparent"
              value={text}
              onChange={setTextHandler}
            />

            <Flex direction="column" margin="10px">
              <Button marginBottom="10px">Post</Button>
              <Menu closeOnSelect={false} placement="bottom-end">
                <MenuButton as={Button} size="xs">
                  <MenuIcon>
                    <Icon as={AddIcon} boxSize={3} />
                  </MenuIcon>
                </MenuButton>
                <MenuList display="inline-flex" justifyContent="space-between">
                  <MenuItem maxWidth="40px" m="5px">
                    <FaImage />
                  </MenuItem>
                  <MenuItem maxWidth="40px" m="5px">
                    <FaFileAlt />
                  </MenuItem>
                  <MenuItem maxWidth="40px" m="5px">
                    <FaLink />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Box>
      ) : (
        "bebra"
      )}
    </Box>
  );
};
