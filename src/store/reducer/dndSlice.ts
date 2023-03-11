import {createSlice} from '@reduxjs/toolkit'
import {IDropZone} from '../../ts/interfaces/index.inerfaces'

const dndInitialState = {
   constructorZone: [
      {id: 'res', order: 1, element: 'resultWindow'},
      {id: 'operator', order: 2, element: 'operators'},
      {id: 'operand', order: 3, element: 'operands'},
      {id: 'equal', order: 4, element: 'equalButton'},
   ] as Array<IDropZone>,
   runtimeZone: [] as Array<IDropZone>,
}

const dndSlice = createSlice({
   name: 'dndSlice',
   initialState: dndInitialState,
   reducers: {},
})

export default dndSlice
