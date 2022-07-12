import React from 'react';
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
import { Container, Box, Text } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p="3"
        bg="transparent"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="work sans" color="black">
          Chat App
        </Text>
      </Box>
      <Box
        p="4"
        bg="transparent"
        w="100%"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
        color="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab w="50%" color="black">
              Login
            </Tab>
            <Tab w="50%" color="black">
              Sign Up
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage