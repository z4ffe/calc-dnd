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
   const calcStore = useAppSelector((state) => state.calcReducer)

   return (
      <Flex w='100%' flexDir='column' alignItems='center' gap='12px' transform={calcStore.mode ? 'translate(-380px)' : ''} transition='1s'>
         <Droppable droppableId='dropZoneConstructor' isDropDisabled>
            {(provided) => (
               <Flex ref={provided.innerRef} flexDir='column' alignItems='center' gap='12px'>
                  {dndStore.constructorZone.map((el, idx) => (
                     <Draggable draggableId={el.id} index={idx} key={el.id} isDragDisabled={el.dragged}>
                        {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
                        {(provided) => (
                           <Flex {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                              {el.element === 'resultWindow' ? (
                                 <ResultWindow dragged={el.dragged} />
                              ) : el.element === 'operators' ? (
                                 <Operators dragged={el.dragged} />
                              ) : el.element === 'operands' ? (
                                 <Operands dragged={el.dragged} />
                              ) : el.element === 'equalButton' ? (
                                 <EqualButton dragged={el.dragged} />
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
