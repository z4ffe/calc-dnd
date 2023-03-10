import {configureStore} from '@reduxjs/toolkit'
import calcSlice from './reducer/calcSlice'

const store = configureStore({
   reducer: {
      calcSlice,
   },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
