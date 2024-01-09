import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

export const SettingsM = (props: any) => {
  return (
    <Modal onClose={props.isSettingsM} isOpen={props.isOpen} size="xl">
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(30deg)"
      >
        <ModalContent margin="10px">
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Profile settings</Tab>
                <Tab>Privacy & Security</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Card size="lg">
                    <CardBody>
                      <Box>
                        <Flex>
                          <Box width={props.screenWidth < 900 ? "30%" : "90%"}>
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"}
                            >
                              Name
                            </Heading>
                            <Input
                              value="Name"
                              margin="5px"
                              size={props.screenWidth < 900 ? "sm" : "md"}
                              width={props.screenWidth < 900 ? "100px" : "auto"}
                            />
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"}
                            >
                              Surname
                            </Heading>
                            <Input
                              value="Surname"
                              margin="5px"
                              size={props.screenWidth < 900 ? "sm" : "md"}
                              width={props.screenWidth < 900 ? "100px" : "auto"}
                            />
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"}
                            >
                              User Tag
                            </Heading>
                            <Input
                              value="user_tag"
                              margin="5px"
                              size={props.screenWidth < 900 ? "sm" : "md"}
                              width={props.screenWidth < 900 ? "100px" : "auto"}
                            />
                          </Box>
                          <Box marginLeft="50px">
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"}
                            >
                              Profile picture
                            </Heading>
                            <Avatar
                              size={props.screenWidth < 900 ? "lg" : "xl"}
                              margin="30px"
                            />
                            <Button
                              size={props.screenWidth < 900 ? "xs" : "md"}
                            >
                              Upload new photo
                            </Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Button margin="5px" colorScheme="teal">
                        Save
                      </Button>
                    </CardBody>
                  </Card>
                </TabPanel>
                <TabPanel>
                <Card size="lg">
                    <CardBody>
                      <Box>
                        <Flex>
                          <Box width={props.screenWidth < 900 ? "30%" : "50%"}>
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"}
                            >
                              Email
                            </Heading>
                            <Input
                              value="Email@gmail"
                              margin="5px"
                              size={props.screenWidth < 900 ? "sm" : "md"}
                              width={props.screenWidth < 900 ? "100px" : "auto"}
                            />
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"} width="100px"
                            >
                              Password
                            </Heading>
                            <Input
                              margin="5px"
                              size={props.screenWidth < 900 ? "sm" : "md"}
                              width={props.screenWidth < 900 ? "100px" : "auto"}
                              type="password"
                            />
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"} width="100px"
                            >
                              Confirm password
                            </Heading>
                            <Input
                              margin="5px"
                              size={props.screenWidth < 900 ? "sm" : "md"}
                              width={props.screenWidth < 900 ? "100px" : "auto"}
                              type="password"
                            />
                           
                          </Box>
                          <Box marginLeft="50px">
                            <Heading
                              size={props.screenWidth < 900 ? "sm" : "md"}
                            >
                              Login Log
                            </Heading>
                          <OrderedList>
                            <ListItem>log info1 asdfsdfsdfs</ListItem>
                            <ListItem>log info2</ListItem>
                            <ListItem>log info3</ListItem>
                            <ListItem>log info4</ListItem>
                            <ListItem>log info5</ListItem>
                          </OrderedList>
                           
                          </Box>
                        </Flex>
                      </Box>
                      <Button margin="5px" colorScheme="teal">
                        Save
                      </Button>
                    </CardBody>
                  </Card>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
