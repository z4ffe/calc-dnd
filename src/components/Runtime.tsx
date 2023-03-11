import {Flex, Image, Text} from '@chakra-ui/react'
import React from 'react'
import {Draggable, Droppable} from 'react-beautiful-dnd'
import dndLogo from '../assets/images/dnd.svg'
import {useAppSelector} from '../lib/redux/hooks'
import EqualButton from '../shared/EqualButton'
import Operands from '../shared/Operands'
import Operators from '../shared/Operators'
import ResultWindow from '../shared/ResultWindow'

const Runtime: React.FC = (): JSX.Element => {
   const dndStore = useAppSelector((state) => state.dndReducer)

   return (
      <Flex w='243px' h='448px' justifyContent='center' border='2px dashed #C4C4C4' borderRadius='6px'>
         <Droppable droppableId='dropZoneRuntime'>
            {(provided) =>
               dndStore.runtimeZone.length ? (
                  <Flex flexDir='column' gap='12px' ref={provided.innerRef}>
                     {dndStore.runtimeZone.map((el, idx) => (
                        <Draggable draggableId={el.id} index={idx} key={el.id}>
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
                  </Flex>
               ) : (
                  <Flex w='127px' h='48px' flexDir='column' margin='auto' alignItems='center' ref={provided.innerRef}>
                     <Image w='20px' src={dndLogo} />
                     <Text textAlign='center' fontWeight='500' fontSize='14px' color='#5D5FEF' marginTop='12px'>
                        Перетащите сюда
                     </Text>
                     <Text fontWeight='400' fontSize='12px' textAlign='center' color='#6B7280'>
                        любой элемент из левой панели
                     </Text>
                  </Flex>
               )
            }
         </Droppable>
      </Flex>
   )
}

export default Runtime
