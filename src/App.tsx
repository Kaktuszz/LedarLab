import { Box, Center, ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { MainPage } from "./components/MainPage/MainPage";
import { useState, useEffect } from "react";
import { Footer } from "./components/Footer/Footer";


function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ChakraProvider>
      <Box>
        {width >= 700 ? (
          <Center>
            <MainPage screenWidth={width} />
          </Center>
        ) : (
          <MainPage screenWidth={width} />
        )}
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
