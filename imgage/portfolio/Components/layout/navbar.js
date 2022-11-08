import Logo from './logo'
import NextLink from 'next/link'
import { 
    Container, 
    Box, 
    Link, 
    Stack, 
    Heading, 
    Flex, 
    Menu, 
    MenuItems, 
    MenuList, 
    MenuButton, 
    IconButton,
    useColorModeValue
} from 'Chakra-ui/react'
import { HumbergerIcon} from '@chakra-ui/icons'


const LinkItem = ({ href, path, children}) => { 
    const active = path === href 
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900')
    return (
        <NextLink href={href }> 
           <Link 
        p={2}
        bg={active ? 'glassTeal' : undefined }
        color={active ? '#202023' : inactiveColor}
        >
            {children}
        </Link>
        </NextLink>
    )
}


const Navbar = props => { 
    const {path } = props

    return ( 
        <Box 
           position ="fixed"
           as = "nav"
           w ="100%"
           bg ={useColorModeValue (' #ffffff40', '#20202380')}
           css = {{ backdropFilter: 'blur(10px)' }} 
           zIndex={2}
           {...props}
        >
         <Container
           display="flex"
           p={2}
           maxW="container.md"
           wrap= "wrap"
           align= "center "
           justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading as="h1 " size="lg " letterSpacing = {'tighter'}>
                <Logo />
             
            </Heading>
          </Flex>

          <Stack 
             direction={{ base : 'column', md : 'row '}}
             display= {{ base : 'none ' , md : 'none' }}
             width= {{ base : 'full', md : 'auto '}}
             alignItems= "center" 
             flexGrow={1}
             mt={{ base : 4, md : 0}}
        >
            <LinkItem href="/works" path={path}>
                Works 
            </LinkItem>
            <LinkItem href="/posts" path={path}>
                Posts  
            </LinkItem>
            <LinkItem 
               target ="_blank"
               href=" https://github.com/yeuchithuyvailon"
               path={path}
               display="inline-flex"
               alignItems="center"
               style={{ gap: 4}}
               pl={2}
            >
               <IoLogoGithub /> 
               Source 
            </LinkItem> 
           </Stack>

            <Box flex={1} align="right">
                <ThemeToggleButton /> 
            </Box>
            </Container>    
        </Box>
    )
}