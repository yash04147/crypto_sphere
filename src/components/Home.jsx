import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={logo}
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        fontFamily={"Ubuntu,sans-serif"}
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.600"}
        mt={"-20"}
      >
        Crypto Sphere
      </Text>
    </Box>
  );
};

export default Home;
