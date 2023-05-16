import { Flex, Text } from "@chakra-ui/react";

const index = () => {
  return (
    <Flex bg="yellow.100" justify="center">
      {/* wrapper   */}
      <Flex bg="blue.100" justify="space-between" w="500px">
        {/* left */}
        <Flex
          whiteSpace="nowrap"
          bg="red.100"
          position="relative"
          cursor="pointer"
          transition="all 1s"
          _hover={{
            ".left-1": {
              transform: "translateX(-20px)",
              opacity: 0,
            },
            ".left-2": {
              transform: "translateX(-20px)",
              opacity: 1,
            },
          }}
        >
          <Text position="relative" className="left-1" transition="all 1s">
            &lt;-PREV
          </Text>
          <Text
            position="absolute"
            className="left-2"
            opacity={0}
            transition="all 1s"
          >
            &lt;---好好生醫電商官網____
          </Text>
        </Flex>

        {/* right */}

        <Flex
          whiteSpace="nowrap"
          bg="red.100"
          position="relative"
          cursor="pointer"
          transition="all 1s"
          _hover={{
            ".right-1": {
              transform: "translateX(20px)",
              opacity: 0,
            },
            ".right-2": {
              transform: "translateX(20px)",
              opacity: 1,
            },
          }}
        >
          <Text position="relative" className="right-1" transition="all 1s">
            NEXT-&gt;
          </Text>
          <Text
            position="absolute"
            className="right-2"
            opacity={0}
            right="10px"
            transition="all 1s"
          >
            ____好好生醫電商官網---&gt;
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default index;
