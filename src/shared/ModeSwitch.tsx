import {Button, Flex, Image, Text} from '@chakra-ui/react'
import React from 'react'
import runtimeLogo from '../assets/images/eye.svg'
import runtimeLogoActive from '../assets/images/eye-active.svg'
import constructorLogo from '../assets/images/selector.svg'
import constructorLogoActive from '../assets/images/selector-active.svg'
import {useAppDispatch, useAppSelector} from '../lib/redux/hooks'
import {calcSliceActions} from '../store/store'

const ModeSwitch: React.FC = (): JSX.Element => {
   const calcStore = useAppSelector((state) => state.calcReducer)
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
               backgroundColor={calcStore.mode ? 'white' : 'transparent'}
               border={calcStore.mode ? '1px solid #E2E3E5' : '1px solid transparent'}
               onClick={() => dispatch(calcSliceActions.handleMode())}
               _hover={{backgroundColor: 'none'}}>
               <Image src={calcStore.mode ? runtimeLogoActive : runtimeLogo} />
               <Text marginLeft='8px' fontWeight='500' fontSize='14px'>
                  Runtime
               </Text>
            </Button>
         </Flex>
         <Flex>
            <Button
               w='133px'
               h='36px'
               backgroundColor={calcStore.mode ? 'transparent' : 'white'}
               border={calcStore.mode ? '1px solid transparent' : '1px solid #E2E3E5'}
               _hover={{backgroundColor: 'none'}}
               onClick={() => dispatch(calcSliceActions.handleMode())}>
               <Image src={calcStore.mode ? constructorLogo : constructorLogoActive} />
               <Text marginLeft='8px' fontWeight='500' fontSize='14px'>
                  Constructor
               </Text>
            </Button>
         </Flex>
      </Flex>
   )
}

export default ModeSwitch
