import {Flex, Text} from '@chakra-ui/react'
import React from 'react'
import {useAppSelector} from '../lib/redux/hooks'

const ResultWindow: React.FC = (): JSX.Element => {
   const calcStore = useAppSelector((state) => state.calcReducer)

   return (
      <Flex
         w='240px'
         h='60px'
         borderRadius='4px'
         boxShadow='0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
         alignItems='center'
         justifyContent='center'>
         <Flex w='232px' h='52px' backgroundColor='#F3F4F6' borderRadius='6px'>
            <Text w='100%' paddingRight='8px' textAlign='right' color='#111827' fontWeight='800' fontSize='25px' alignSelf='center'>
               {calcStore.display}
            </Text>
         </Flex>
      </Flex>
   )
}

export default ResultWindow
