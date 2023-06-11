import { Avatar, Box, Link, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/99865229?v=4";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            "Unlock the power of cryptocurrency investing with our comprehensive
            app. Stay ahead of the curve with insightful analytics and
            customizable alerts."
            <br />
            "Whether you're a seasoned investor or just getting started, elevate
            your investing journey and explore the world of cryptocurrencies
            with confidence."
          </Text>
          <address>
            Email me{" "}
            <u>
              <Link href="mailto:yash04147@gmail.com">here</Link>
            </u>
          </address>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          {/* <Text>made by -</Text> */}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
