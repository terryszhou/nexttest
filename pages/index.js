import { Container, Flex } from '@chakra-ui/react'
import Cart from '/src/sections/cart.js'
import Details from '/src/sections/details.js'


const IndexPage = () => (
  <Container maxW='container.xl' p={0}>
    <Flex h='100vh' py={10}>
      <Details />
      <Cart />
    </Flex>
  </Container>
)


export default IndexPage
