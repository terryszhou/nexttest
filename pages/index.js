import { Container, Flex, VStack } from '@chakra-ui/react'
import Cart from '/src/sections/cart.js'
import Details from '/src/sections/details.js'


const IndexPage = () => (
  <Container maxW='container.xl' p={0}>
    <Flex h='100vh' py={20}>
      <Cart />
      <Details />
    </Flex>
  </Container>
)


export default IndexPage
