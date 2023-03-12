import {Flex} from '@chakra-ui/react'
import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import {useAppSelector} from '../lib/redux/hooks'
import EqualButton from '../shared/EqualButton'
import Operands from '../shared/Operands'
import Operators from '../shared/Operators'
import ResultWindow from '../shared/ResultWindow'

const Constructor: React.FC = (): JSX.Element => {
   const dndStore = useAppSelector((state) => state.dndReducer)

   return (
      <Flex w='100%' flexDir='column' alignItems='center' gap='12px'>
         <Droppable droppableId='dropZoneConstructor'>
            {(provided) => (
               <Flex ref={provided.innerRef} flexDir='column' alignItems='center' gap='12px'>
                  {dndStore.constructorZone.map((el, idx) => (
                     <Draggable draggableId={el.id} index={el.order} key={el.id}>
                        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                        {(provided) => (
                           // eslint-disable-next-line react/jsx-props-no-spreading
                           <Flex {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                              {el.element === 'resultWindow' ? (
                                 <ResultWindow />
                              ) : el.element === 'operators' ? (
                                 <Operators />
                              ) : el.element === 'operands' ? (
                                 <Operands />
                              ) : el.element === 'equalButton' ? (
                                 <EqualButton />
                              ) : null}
                           </Flex>
                        )}
                     </Draggable>
                  ))}
                  {provided.placeholder}
               </Flex>
            )}
         </Droppable>
      </Flex>
   )
}

export default Constructor
