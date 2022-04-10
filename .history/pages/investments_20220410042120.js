import React from "react";
import styles from "../styles/Home.module.css";
import NextLink from "next/link";
import { FaHandshake } from "react-icons/fa";

import {
  Heading,
  useBreakpointValue,
  useColorModeValue,
  Text,
  Button,
  Flex,
  Container,
  SimpleGrid,
  Box,
  Divider,
  Skeleton,
  Img,
  Icon,
  chakra,
  Tooltip,
  Link,
  SkeletonCircle,
  HStack,
  Stack,
  Progress,
} from "@chakra-ui/react";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={useColorModeValue("gray.100", "gray.700")}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={useColorModeValue("gray.500", "gray.200")}>{text}</Text>
    </Stack>
  );
};

function CampaignCard({
  name,
  description,
  creatorId,
  imageURL,
  id,
  balance,
  target,
  ethPrice,
}) {
  return (
    <NextLink href={`/error`}>
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW={{ md: "sm" }}
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        transition={"transform 0.3s ease"}
        _hover={{
          transform: "translateY(-8px)",
        }}
      >
        <Box height="18em">
          <Img
            src={imageURL}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            objectFit="cover"
            w="full"
            h="full"
            display="block"
          />
        </Box>
        <Box p="6">
          <Flex
            mt="1"
            justifyContent="space-between"
            alignContent="center"
            py={2}
          >
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>

            <Tooltip
              label="Remit"
              bg={useColorModeValue("white", "gray.700")}
              placement={"top"}
              color={useColorModeValue("gray.800", "white")}
              fontSize={"1.2em"}
            >
              <chakra.a display={"flex"}>
                <Icon
                  as={FaHandshake}
                  h={7}
                  w={7}
                  alignSelf={"center"}
                  color={"teal.400"}
                />{" "}
              </chakra.a>
            </Tooltip>
          </Flex>
          <Flex alignContent="center" py={2}>
            {" "}
            <Text color={"gray.500"} pr={2}>
              by
            </Text>{" "}
            <Heading size="base" isTruncated>
              {creatorId}
            </Heading>
          </Flex>
          <Flex alignContent="center" py={2}>
            <Text color={"gray.500"} pr={2}>
              Property Price
            </Text>{" "}
            <Heading size="base" isTruncated>
              {target}
            </Heading>
          </Flex>
          <Flex alignContent="center" py={2}>
            <Text color={"gray.500"} pr={2}>
              Estimated Returns
            </Text>{" "}
            <Heading size="base" isTruncated>
              {ethPrice}
            </Heading>
          </Flex>
          <Flex direction="row" py={2}>
            <Box w="full">
              <Box
                fontSize={"2xl"}
                isTruncated
                maxW={{ base: "	15rem", sm: "sm" }}
                pt="2"
              >
                <Text
                  as="span"
                  display={balance > 0 ? "inline" : "none"}
                  pr={2}
                  fontWeight={"bold"}
                >
                  {" "}
                  ETH
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </NextLink>
  );
}

function investments() {
  return (
    <main className={styles.main}>
      <Container py={{ base: "4", md: "12" }} maxW={"7xl"}>
        <HStack spacing={2}>
          <SkeletonCircle size="4" />
          <Heading as="h2" size="lg">
            Investment Opportunities{" "}
          </Heading>
        </HStack>

        <Divider marginTop="4" />

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
          <CampaignCard
            name="Real Estate"
            description="Prime Plot in Ruaka"
            creatorId="0x60daf74aAE51804b4b725f1D1a05a135Ae189E2E"
            imageURL="https://images.moneycontrol.com/static-mcnews/2022/01/Plot-01-651x435.jpg?impolicy=website&width=770&height=431"
            id="3"
            target="2000eth"
            ethPrice="20% p.m"
          />
          <CampaignCard
            name="NFT's"
            description="Bored Ape NFT"
            creatorId="0x60daf74aAE51804b4b725f1D1a05a135Ae189E2E"
            imageURL="https://i.insider.com/61efe1a2702f4b001866d4db?width=700"
            id="3"
            target="2000eth"
            ethPrice="20% p.m"
          />
          <CampaignCard
            name="Stock Market"
            description="Central Bank of Kenya Shares"
            creatorId="0x60daf74aAE51804b4b725f1D1a05a135Ae189E2E"
            imageURL="https://www.capitalfm.co.ke/business/files/2020/03/stocks.jpg"
            id="3"
            target="2000eth"
            ethPrice="20% p.m"
          />
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} py={8}>
          <Skeleton height="25rem" />
          <Skeleton height="25rem" />
          <Skeleton height="25rem" />
        </SimpleGrid>
      </Container>
    </main>
  );
}

export default investments;
