import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const AuthenticatedContent = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  if (!session) {
    navigate("/");
    return null;
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Authenticated Content</Heading>
        <Text fontSize="lg">This content is only accessible to authenticated users.</Text>
        <Button colorScheme="teal" size="lg" onClick={logout}>
          Logout
        </Button>
      </VStack>
    </Container>
  );
};

export default AuthenticatedContent;