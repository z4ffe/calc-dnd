import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import {Provider} from 'react-redux'
import Constructor from './components/Constructor'
import Runtime from './components/Runtime'
import MainLayout from './layout/MainLayout'
import store from './store/store'
import MainTheme from './theme/MainTheme'

const App = () => {
   return (
      <Provider store={store}>
         <ChakraProvider theme={MainTheme}>
            <MainLayout>
               <Constructor />
               <Runtime />
            </MainLayout>
         </ChakraProvider>
      </Provider>
   )
}

export default App
