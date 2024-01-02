import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Objects } from "../../UI/Objects";

export const SearchM = (props: any) => {
  const users = [
    {
      name: "Name",
      surname: "Surname1",
      avatar:
        "https://www.catster.com/wp-content/uploads/2023/10/ifxjddqk_0u-1-800x534.jpg",
      description: "Something about user",
    },
    {
      name: "Name",
      surname: "Surname2",
      avatar:
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/220805-domestic-cat-mjf-1540-382ba2.jpg",
      description: "Something about user",
    },
    {
      name: "Name",
      surname: "Surname3",
      avatar:
        "https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg?w=1200",
      description: "Something about user",
    },
    {
      name: "Name",
      surname: "Surname4",
      avatar:
        "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
      description: "Something about user",
    },
  ];

  return (
    <Modal onClose={props.isSearchM} isOpen={props.isOpen}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>Search user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Tag or username" />
            <Button colorScheme="teal" marginTop="5px" right="0">
              Search
            </Button>

            {users.map((item, index) => (
              <Objects
                name={item.name}
                surname={item.surname}
                avatar={item.avatar}
                description={item.description}
                key={index}
              />
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
