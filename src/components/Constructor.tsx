import {Flex} from '@chakra-ui/react'
import React from 'react'
import EqualButton from '../shared/EqualButton'
import Operands from '../shared/Operands'
import Operators from '../shared/Operators'
import ResultWindow from '../shared/ResultWindow'

const Constructor: React.FC = (): JSX.Element => {
   return (
      <Flex w='100%' flexDir='column' alignItems='center' gap='20px'>
         <ResultWindow />
         <Operators />
         <Operands />
         <EqualButton />
      </Flex>
   )
}

export default Constructor
