import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { BlogBlock } from "../../BlogBlock/BlogBlock";

export const BlogM = (props: any) => {
  const dummyPosts = [
    {
      username: "User Name",
      userTag: "user_tag",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
    {
      username: "User Name",
      userTag: "user_tag",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments:
        "https://www.thesprucepets.com/thmb/QTqsrhJGQQrPZwtF9nly0P_TNGg=/3888x0/filters:no_upscale():strip_icc()/playful-kitty-cat-160515715-5c3b911346e0fb0001b27f46.jpg",
      likes: 100,
    },

    {
      username: "User Name",
      userTag: "user_tag1",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments: "",
      likes: 1,
    },
    {
      username: "User Name",
      userTag: "user_tag2",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments: "",
      likes: 0,
    },
    {
      username: "User Name",
      userTag: "user_tag3",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments: "",
      likes: 20,
    },
    {
      username: "User Name",
      userTag: "user_tag4",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      likes: 20213,
    },
    {
      username: "User Name",
      userTag: "user_tag",
      profilePic:
        "https://static.scientificamerican.com/sciam/cache/file/E610026A-973E-4D09-9C82F13325003C81_source.jpg?w=600",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
  ];

  return (
    <>
      <Modal onClose={props.isBlogM} isOpen={props.isOpen} size="6xl">
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(30deg)"
        />
        <ModalContent>
          <ModalHeader>Name Blog</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {dummyPosts.map((item, index) => (
              <BlogBlock
                key={index}
                username={item.username}
                userTag={item.userTag}
                profilePic={item.profilePic}
                blogText={item.blogText}
                componentType="blog"
                attachments={item.attachments}
                likes={item.likes}
                personal={true}
              />
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
