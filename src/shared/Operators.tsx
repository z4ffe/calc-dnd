import {Button, Flex} from '@chakra-ui/react'
import React from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {calcSliceActions} from '../store/store'
import {DraggedProps} from '../ts/types/index.types'

const Operators: React.FC<DraggedProps> = ({dragged}): JSX.Element => {
   const dispatch = useAppDispatch()
   const calcStore = useAppSelector((state) => state.calcReducer)
   const operatorsList: string[] = ['/', 'х', '-', '+']

   return (
      <Flex
         w='240px'
         h='56px'
         alignItems='center'
         justifyContent='space-around'
         opacity={dragged ? '0.4' : '1'}
         borderRadius='6px'
         boxShadow='0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'>
         {operatorsList.map((el) => {
            return (
               <Button
                  w='52px'
                  h='48px'
                  border='1px solid #E2E3E5'
                  borderRadius='6px'
                  backgroundColor='white'
                  transition='0.3s'
                  pointerEvents={calcStore.mode ? 'auto' : 'none'}
                  _hover={{backgroundColor: 'white', border: '1px solid #5D5FEF'}}
                  _active={{backgroundColor: '#5D5FEF', border: '1px solid #5D5FEF', color: 'white'}}
                  onClick={() => dispatch(calcSliceActions.handleOperator(el))}
                  key={el}>
                  {el}
               </Button>
            )
         })}
      </Flex>
   )
}

export default Operators
