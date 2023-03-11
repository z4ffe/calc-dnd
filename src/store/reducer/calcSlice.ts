import {createSlice} from '@reduxjs/toolkit'
import {ICalcInitialState} from '../../ts/interfaces/index.inerfaces'

const calcInitialState: ICalcInitialState = {
   mode: false,
   display: 0,
   operandOne: 0,
   operandTwo: 0,
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
            state.operator = action.payload
         }
      },
      handleOperand: (state, action) => {
         if (state.mode) {
            state.operandOne = action.payload
         }
      },
   },
})

export default calcSlice
