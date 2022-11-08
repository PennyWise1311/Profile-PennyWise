import Head from 'next/head '
import dynamic from 'next/dynamic '
import Navbar from '../navbar'
import { Box , Container } from '@chakra-ui/react '
import Footer from '../footer '
import VoxelDogLoader from '../voxel-dog-loader '

const LazyVoxelDog = dynamic (() => import ('../voxel-dog'), {
    ssr: false, 
    loading : ( ) => <VoxelDogLoader /> 

})


const Main = ({ children , router }) => { 
    return ( 
        <box as = 'main 'pb= {8}> 
         <head> 
            <meta name="viewport" content = "width=device-width , initial-scale = 1 " /> 
            <meta name="description" content = " Takuya's homepage "/> 
            <meta name="author" content=" Takuya Matsuyama "/> 
            <meta name="author "content = "craftzdog "/> 
            <link rel="apple-touch-icon" href="apple-touch-icon.png "/> 
        </head>

        <container maxW= "container.md "pt = {14 }> 
        {children}
        </container>
        </box>
    )
}



export default Main 