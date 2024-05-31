import { Box, Container, Flex, Heading, HStack, Image, Input, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "/images/smartphone.jpg",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    image: "/images/laptop.jpg",
    price: "$999",
  },
  {
    id: 3,
    name: "Tablet",
    description: "Portable and powerful tablet",
    image: "/images/tablet.jpg",
    price: "$499",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          <Link as={RouterLink} to="/">
            Electronics Store
          </Link>
        </Heading>
        <HStack spacing={4}>
          <Link as={RouterLink} to="/" fontSize="lg">
            Home
          </Link>
          <Link as={RouterLink} to="/products" fontSize="lg">
            Products
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="lg">
            Contact
          </Link>
        </HStack>
      </Flex>

      <VStack spacing={8} mt={8}>
        <Heading as="h2" size="xl">
          Welcome to the Electronics Store
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Discover the latest and greatest in electronics. From smartphones to laptops, we have it all.
        </Text>
      </VStack>

      <Box mt={8}>
        <Input
          placeholder="Search for products..."
          value={searchTerm}
          onChange={handleSearchChange}
          size="lg"
        />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={8}>
        {filteredProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading as="h3" size="md">
                {product.name}
              </Heading>
              <Text mt={2}>{product.description}</Text>
              <Text mt={2} fontWeight="bold">
                {product.price}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;