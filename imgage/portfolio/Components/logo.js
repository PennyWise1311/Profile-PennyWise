import Link from 'next/Link'
import Image from 'next/Image'
import { Text , useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span` 
font-weight : bold; 
font-size : 18px; 
display : inline-flex;
align-items : center; 
height : 30px; 
line-height : 20px; 
padding :10px;

img { 
    transition : 200ms ease; 
}

&:hover img{ 
    transform : rotate(20deg); 
}
`

const Logo = ( )=>  { 
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`



    return (
        <link href="/" scroll={false}>
            <a> 
                <LogoBox> 
                   <Image src={footPrintImg} width={20} height={20} alt="logo "/>
                   <Text 
                      color={useColorModeValue('gray.800  ' , 'whiteAlpha.900'  )} 
                      fontFamily='M PLUS Rounded 1c", sans-serif' 
                      fontWeight="bold"
                      ml={3} 
                      > 
                      Hello               
                    </Text>
                   
                    
                </LogoBox> 
            </a>
        </link>
    )
}


export default Logo

