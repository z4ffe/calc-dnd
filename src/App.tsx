import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Constructor from './components/Constructor'
import Runtime from './components/Runtime'
import MainLayout from './layout/MainLayout'
import store from './store/store'
import MainTheme from './theme/MainTheme'

const App = () => {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <ChakraProvider theme={MainTheme}>
               <MainLayout>
                  <Constructor />
                  <Runtime />
               </MainLayout>
            </ChakraProvider>
         </Provider>
      </BrowserRouter>
   )
}

export default App
