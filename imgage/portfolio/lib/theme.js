import { extendTheme}from '@chakra-ui/react'
import {mode } from "@chakra-ui/theme-tools "

const styles = { 
    global : props => ({
        body : { 
            bg : mode ('#f0e7db' , '#202023')( props)

        }
    })
}



const Components = { 
    Heading : { 
        variant : { 
            'section-title': { 
                textDecoration : 'underline ', 
                fontSize : 20, 
                textUnderlineOffset : 6,
                textDecorationColor : '#525252', 
                textDecorationThickness : 4, 
                marginTop : 3, 
                marginBottom : 4 

            }
        }
    }, 
    Link: { 
        baseStyle : props => ({ 
            color :mode( '#3d7aed ', '#fff63c3 ') ( props ), 
            textUnderLineOffset: 3 
        })
    }
}



const fonts = { 
    heading : "'M PLUS Rounded 1c  '"
}


const colors = { 
    grassTeal : '#88ccca '
}


const config = { 
    initialColorMode : 'dark', 
    usrSystemColorMode : true 
}



const theme = extendTheme ({ config, styles, components, fonts, colors 

})


export default theme 


















