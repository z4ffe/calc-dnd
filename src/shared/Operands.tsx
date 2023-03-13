import {Button, Grid, GridItem} from '@chakra-ui/react'
import React from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {calcSliceActions} from '../store/store'

const Operands: React.FC = (): JSX.Element => {
   const operandsList: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']
   const calcStore = useAppSelector((state) => state.calcReducer)
   const dispatch = useAppDispatch()

   return (
      <Grid
         w='240px'
         h='224px'
         borderRadius='4px'
         templateColumns='repeat(3, 1fr)'
         templateRows='repeat(4, 1fr)'
         boxShadow='0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'>
         {operandsList.map((el) => {
            return (
               <GridItem colSpan={el === '0' ? 2 : 1} display='flex' alignItems='center' justifyContent='center' key={crypto.randomUUID()}>
                  <Button
                     w={el === '0' ? '152px' : '72px'}
                     h='48px'
                     border='1px solid #E2E3E5'
                     borderRadius='6px'
                     backgroundColor='white'
                     transition='0.3s'
                     pointerEvents={calcStore.mode ? 'auto' : 'none'}
                     onClick={() => dispatch(calcSliceActions.handleOperand(el))}
                     _hover={{backgroundColor: 'white', border: '1px solid #5D5FEF'}}
                     _active={{backgroundColor: '#5D5FEF', border: '1px solid #5D5FEF', color: 'white'}}>
                     {el}
                  </Button>
               </GridItem>
            )
         })}
      </Grid>
   )
}

export default Operands
