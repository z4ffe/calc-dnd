import {Button, Flex} from '@chakra-ui/react'
import React from 'react'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {calcSliceActions} from '../store/store'
import {DraggedProps} from '../ts/types/index.types'

const EqualButton: React.FC<DraggedProps> = ({dragged}): JSX.Element => {
   const calcStore = useAppSelector((state) => state.calcReducer)
   const dispatch = useAppDispatch()

   return (
      <Flex
         w='240px'
         h='72px'
         justifyContent='center'
         opacity={dragged ? '0.4' : '1'}
         alignItems='center'
         boxShadow='0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
         borderRadius='4px'>
         <Button
            w='232px'
            h='64px'
            backgroundColor='#5D5FEF'
            color='white'
            borderRadius='6px'
            pointerEvents={calcStore.mode ? 'auto' : 'none'}
            onClick={() => dispatch(calcSliceActions.handleCalculate())}
            _hover={{backgroundColor: '#4749e7'}}
            _active={{backgroundColor: '#3133e3'}}>
            =
         </Button>
      </Flex>
   )
}

export default EqualButton
