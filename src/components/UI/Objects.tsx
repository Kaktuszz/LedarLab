import {
  Avatar,
  Box,
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

export const Objects = (props: any) => {
  const [follow, setFollow] = useState<Boolean>(false);

  return (
    <>
      <Card marginTop="5px">
        <CardBody>
          <Stack>
            <Flex>
              <Avatar
                size="md"
                name="Name Surname"
                src={props.avatar}
                margin="3px"
              />
              <Box margin="5px">
                <Heading size="xs">
                  {props.name} {props.surname}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {props.description}
                </Text>
              </Box>
              <Button
                position="absolute"
                right="0"
                margin="10px"
                size={props.screenWidth < 900 ? "xs" : "md"}
                onClick={() => setFollow((prevState) => !prevState)}
                colorScheme={follow ? "gray" : "linkedin"}
              >
                {follow ? "Following" : "Follow"}
              </Button>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
