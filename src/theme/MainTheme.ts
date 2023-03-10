import {ChakraTheme, extendTheme} from '@chakra-ui/react'

const mainTheme = extendTheme({
   styles: {
      global: {
         'html, body': {
            width: '100vw',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            scrollBehavior: 'smooth',
            backgroundColor: '#E5E5E5',
         },
         '#root': {
            flexDirection: 'column',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            width: '100%',
            height: '100%',
         },
         a: {
            textDecoration: 'none',
         },
      },
   },
   fonts: {
      body: 'Inter, sans-serif',
   },
   colors: {
      blue: '#4E67EB',
      black: '#2d2d2d',
      darkblue: '#3635AA',
   },
   components: {
      Text: {
         baseStyle: {
            fontSize: '16px',
            color: 'black',
         },
      },
      Link: {
         baseStyle: {
            '&:hover': {
               textDecoration: 'none',
            },
         },
      },
      Button: {
         transition: '0.3s',
      },
   },
   breakpoints: {
      xl: '120em', // 1920px
   },
}) as ChakraTheme

export default mainTheme
