import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { SearchMUsers } from "./SearchMUsers";

export const SearchM = (props: any) => {

  return (
    <Modal onClose={props.isFollowers ? props.isFollowersM : props.isSearchM} isOpen={props.isOpen}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(30deg)"
      >
        <ModalContent>
          {props.isFollowers ? (
            <>
            <ModalHeader>Followers</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Tabs>
                <TabList>
                  <Tab>
                    Followers
                  </Tab>
                  <Tab>
                    Following
                  </Tab>
                </TabList>
                <TabPanels  >
                <TabPanel padding="16px 0px 0px 0px" >
                   <SearchMUsers searchType={1} screenWidth={props.screenWidth} />
                </TabPanel>
                <TabPanel padding="16px 0px 0px 0px" >
                <SearchMUsers searchType={2} screenWidth={props.screenWidth} />
                </TabPanel>
              </TabPanels>
              </Tabs>
              
             
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
          ) : (
            <>
              <ModalHeader>Search user</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
              <SearchMUsers searchType={2}  screenWidth={props.screenWidth} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
