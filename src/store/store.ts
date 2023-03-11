import {configureStore} from '@reduxjs/toolkit'
import calcSlice from './reducer/calcSlice'
import dndSlice from './reducer/dndSlice'

const store = configureStore({
   reducer: {
      calcReducer: calcSlice.reducer,
      dndReducer: dndSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const calcSliceActions = calcSlice.actions
export const dndSliceActions = dndSlice.actions
export default store
