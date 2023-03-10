import {Grid, GridItem} from '@chakra-ui/react'
import React from 'react'
import ModeSwitch from '../shared/ModeSwitch'
import ReactChildren from '../ts/types/index.types'

const MainLayout: React.FC<ReactChildren> = ({children}): JSX.Element => {
   return (
      <Grid w='695px' h='640px' backgroundColor='#fff' margin='100px auto' templateColumns='repeat(2, 1fr)' templateRows='106px 1fr'>
         <GridItem colSpan={2} display='flex' w='100%' h='100%' alignItems='end' justifyContent='end'>
            <ModeSwitch />
         </GridItem>
         {children}
      </Grid>
   )
}

export default MainLayout
