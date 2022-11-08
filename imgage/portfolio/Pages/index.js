import { Container ,Box ,Heading } from '@chakra-ui/react'

const Page =( ) => { 

    return( 
        <Container> 
            <Box borderRadius="lg " bg="red" p={3} mb={6} align=" center ">
                Con cac dit me may luon 
            </Box>

            <Box display={{ md : 'flex '}}>
                <Box flexGrow={1 }> 
                <Heading as ="h2 "variant="page-title "> 
                   Takuya Matsuyama 
                </Heading>
        <p> Digital Craftzman ( Artist / Developer / Designer  )</p>
                </Box>
            </Box>  
        </Container>
    ) 
}

export default Page 