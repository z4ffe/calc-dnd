import {Button, Flex, Image} from '@chakra-ui/react'
import React from 'react'
import runtimeLogo from '../assets/images/eye.svg'
import runtimeLogoActive from '../assets/images/eye-active.svg'
import constructorLogo from '../assets/images/selector.svg'
import constructorLogoActive from '../assets/images/selector-active.svg'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {handleMode} from '../store/reducer/calcSlice'

const ModeSwitch: React.FC = (): JSX.Element => {
   const calcStore = useAppSelector((state) => state.calcSlice)
   const dispatch = useAppDispatch()

   return (
      <Flex
         w='243px'
         h='38px'
         backgroundColor='#F3F4F6'
         borderRadius='6px'
         alignItems='center'
         justifyContent='space-between'
         margin='0 80px 30px 0'>
         <Flex>
            <Button
               w='108px'
               h='36px'
               borderRadius='5px'
               fontWeight='500'
               fontSize='14px'
               backgroundColor={calcStore.mode ? 'white' : 'transparent'}
               border={calcStore.mode ? '1px solid #E2E3E5' : 'none'}
               onClick={() => dispatch(handleMode())}
               _hover={{backgroundColor: 'none'}}>
               <Image src={calcStore.mode ? runtimeLogoActive : runtimeLogo} />
               Runtime
            </Button>
         </Flex>
         <Flex>
            <Button
               w='133px'
               h='36px'
               fontWeight='500'
               fontSize='14px'
               backgroundColor={calcStore.mode ? 'transparent' : 'white'}
               border={calcStore.mode ? 'none' : '1px solid #E2E3E5'}
               _hover={{backgroundColor: 'none'}}
               onClick={() => dispatch(handleMode())}>
               <Image src={calcStore.mode ? constructorLogo : constructorLogoActive} />
               Constructor
            </Button>
         </Flex>
      </Flex>
   )
}

export default ModeSwitch
