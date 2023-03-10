import {createSlice, Reducer} from '@reduxjs/toolkit'

const calcSlice = createSlice({
   name: 'calcSlice',
   initialState: {
      mode: false,
      display: 0,
      operandOne: 0,
      operandTwo: 0,
      operator: '',
   },
   reducers: {
      handleMode: (state) => {
         state.mode = !state.mode
      },
   },
})

export const {handleMode} = calcSlice.actions
export default calcSlice.reducer as Reducer
