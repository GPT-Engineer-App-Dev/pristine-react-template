import { Container, Text, VStack, Heading, Button, Box, Input, Link, FormControl, FormLabel } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Welcome to Your New React App</Heading>
        <Text fontSize="lg">This is your starting point. Begin building something amazing!</Text>
        <Button leftIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
        <Box
          p={8}
          maxWidth="500px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
          width="100%"
          mt={8}
        >
          <VStack spacing={4} align="stretch">
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Button colorScheme="teal" size="lg" width="full">
              Login
            </Button>
            <Box display="flex" justifyContent="space-between" width="full">
              <Link color="teal.500" href="#">
                Sign Up
              </Link>
              <Link color="teal.500" href="#">
                Forgot Password?
              </Link>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;