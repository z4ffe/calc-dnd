import {createSlice} from '@reduxjs/toolkit'
import {ICalcInitialState} from '../../ts/interfaces/index.inerfaces'

const calcInitialState: ICalcInitialState = {
   mode: false,
   display: '0',
   operandOne: '',
   operandTwo: '',
   operator: '',
}

const calcSlice = createSlice({
   name: 'calcSlice',
   initialState: calcInitialState,
   reducers: {
      // eslint-disable-next-line consistent-return
      handleMode: (state) => {
         if (state.mode) {
            return calcInitialState
         }
         state.mode = !state.mode
      },
      handleOperator: (state, action) => {
         if (state.mode) {
            if (state.display !== state.operandOne) state.operandTwo = state.display
            else state.operandTwo = state.operandOne
            state.operator = action.payload
            state.operandOne = ''
            state.display = '0'
         }
      },
      handleOperand: (state, action) => {
         if (state.mode) {
            if (state.display.length >= 13) return
            if (state.operandOne.includes('.') && action.payload === ',') return
            if (!state.operandOne.includes('.') && action.payload === ',') {
               state.operandOne += '.'
               state.display = state.operandOne
               return
            }
            state.operandOne += action.payload
            state.display = state.operandOne
         }
      },
      handleCalculate: (state) => {
         if (state.mode) {
            if (state.operator === '/' && state.operandOne === '0') {
               state.display = 'Не определено'
               return
            }
            switch (state.operator) {
               case '+':
                  state.operandOne = (+state.operandTwo + +state.operandOne).toString().slice(0, 13)
                  state.operandTwo = state.operandOne
                  state.display = state.operandOne
                  break
               case '-':
                  state.display = (+state.operandTwo - +state.operandOne).toString().slice(0, 13)
                  state.operandTwo = state.display
                  break
               case 'х':
                  state.operandOne = (+state.operandTwo * +state.operandOne).toString().slice(0, 13)
                  state.operandTwo = state.operandOne
                  state.display = state.operandOne
                  break
               case '/':
                  state.operandOne = (+state.operandTwo / +state.operandOne).toString().slice(0, 13)
                  state.operandTwo = state.operandOne
                  state.display = state.operandOne
                  break
               default:
            }
         }
      },
   },
})

export default calcSlice
