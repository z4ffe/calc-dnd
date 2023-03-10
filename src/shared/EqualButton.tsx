import {Button, Flex} from '@chakra-ui/react'
import React from 'react'

const EqualButton: React.FC = (): JSX.Element => {
   return (
      <Flex
         w='240px'
         h='72px'
         justifyContent='center'
         alignItems='center'
         boxShadow='0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
         borderRadius='4px'>
         <Button
            w='232px'
            h='64px'
            backgroundColor='#5D5FEF'
            color='white'
            borderRadius='6px'
            _hover={{backgroundColor: '#4749e7'}}
            _active={{backgroundColor: '#3133e3'}}>
            =
         </Button>
      </Flex>
   )
}

export default EqualButton
