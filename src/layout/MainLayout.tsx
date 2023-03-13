import {Grid, GridItem} from '@chakra-ui/react'
import React from 'react'
import {DragDropContext} from 'react-beautiful-dnd'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import ModeSwitch from '../shared/ModeSwitch'
import {dndSliceActions} from '../store/store'
import ReactChildren from '../ts/types/index.types'

const MainLayout: React.FC<ReactChildren> = ({children}): JSX.Element => {
   const dispatch = useAppDispatch()
   const calcStore = useAppSelector((state) => state.calcReducer)

   return (
      <Grid w='695px' h='640px' backgroundColor='#fff' margin='100px auto' templateColumns='repeat(2, 1fr)' templateRows='106px 1fr' overflow='hidden'>
         <GridItem colSpan={2} display='flex' w='100%' h='100%' alignItems='end' justifyContent='end'>
            <ModeSwitch />
         </GridItem>
         <DragDropContext
            onDragUpdate={(result) => {
               if (!calcStore.mode) dispatch(dndSliceActions.handleReorder(result))
            }}
            onDragEnd={(result) => {
               if (!calcStore.mode) dispatch(dndSliceActions.handleDnD(result))
            }}>
            {children}
         </DragDropContext>
      </Grid>
   )
}

export default MainLayout
