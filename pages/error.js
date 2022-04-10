import { Box, Button, Container, Heading, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import NextImage from "next/image";
import NextLink from "next/link";


function error() {
  return (
    <Container
      maxW={"lg"}
          align={"center"}
          mt={65}
    >
      <SimpleGrid row spacing={2} align="center">
        <Stack align="center">
         <Text>Working on this feature</Text>
        </Stack>
       
       

      

     
      </SimpleGrid>
    </Container>
  );
}

export default error