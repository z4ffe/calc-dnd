import {configureStore} from '@reduxjs/toolkit'
import calcSlice from './reducer/calcSlice'

const store = configureStore({
   reducer: {
      calcReducer: calcSlice.reducer,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const calcSliceActions = calcSlice.actions
export default store
