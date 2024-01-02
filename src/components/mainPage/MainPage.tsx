import { Box, Flex } from "@chakra-ui/react";
import { BlogBlock } from "../BlogBlock/BlogBlock";
import { RightMenu } from "../RightMenu/RightMenu";

// import { useState, useEffect } from "react";

export const MainPage = (props: any) => {
  const dummyPosts = [
    {
      username: "User Vame",
      userTag: "user_tag",
      profilePic: "",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
    {
      username: "User Name",
      userTag: "user_tag",
      profilePic: "",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments:
        "https://www.thesprucepets.com/thmb/QTqsrhJGQQrPZwtF9nly0P_TNGg=/3888x0/filters:no_upscale():strip_icc()/playful-kitty-cat-160515715-5c3b911346e0fb0001b27f46.jpg",
      likes: 100,
    },

    {
      username: "User Name2",
      userTag: "user_tag1",
      profilePic:
        "https://www.thesprucepets.com/thmb/QTqsrhJGQQrPZwtF9nly0P_TNGg=/3888x0/filters:no_upscale():strip_icc()/playful-kitty-cat-160515715-5c3b911346e0fb0001b27f46.jpg",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments: "",
      likes: 1,
    },
    {
      username: "User Name3",
      userTag: "user_tag2",
      profilePic: "",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments: "",
      likes: 0,
    },
    {
      username: "User Name4",
      userTag: "user_tag3",
      profilePic:
        "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
      blogText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur inventore adipisci corrupti eius qui nisi eos, ab aliquam praesentium nulla dolor quod magnam laudantium vitae numquam pariatur atque ducimus voluptatibus?",
      attachments: "",
      likes: 20,
    },
    {
      username: "User Name5",
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
      username: "User Vame",
      userTag: "user_tag",
      profilePic: "",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
    {
      username: "asdser Vame",
      userTag: "user_tag",
      profilePic: "",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
    {
      username: "Useasdr Vame",
      userTag: "user_tag",
      profilePic: "",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
    {
      username: "User Vesame",
      userTag: "user_tag",
      profilePic: "",
      blogText: "Bebra",
      attachments: "",
      likes: 100,
    },
  ];

  return (
    <>
      <Flex justifyContent="center">
        <Box
          border="1px solid #E5D9D7"
          width={props.screenWidth >= 900 ? "40%" : ""}
          margin="5px"
        >
          <BlogBlock
            componentType="write"
            username={dummyPosts[5].username}
            profilePic={dummyPosts[5].profilePic}
          />
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
            />
          ))}
        </Box>
        
        <RightMenu />
      </Flex>
    </>
  );
};
