import {createSlice, current} from '@reduxjs/toolkit'
import {IDropZone} from '../../ts/interfaces/index.inerfaces'

const dndInitialState = {
   constructorZone: [
      {id: 'res', order: 0, element: 'resultWindow', dragged: false},
      {id: 'operator', order: 1, element: 'operators', dragged: false},
      {id: 'operand', order: 2, element: 'operands', dragged: false},
      {id: 'equal', order: 3, element: 'equalButton', dragged: false},
   ] as Array<IDropZone>,
   runtimeZone: [] as Array<IDropZone>,
}

const dndSlice = createSlice({
   name: 'dndSlice',
   initialState: dndInitialState,
   reducers: {
      handleDnD: (state, action) => {
         if (!action.payload.destination) return
         const {constructorZone, runtimeZone} = current(state)
         if (action.payload.destination.droppableId === 'dropZoneRuntime' && action.payload.source.droppableId === 'dropZoneConstructor') {
            const tempRuntimeZone = constructorZone.find((el) => el.id === action.payload.draggableId)
            const modifiedElement = {
               id: `${tempRuntimeZone!.id}Copy`,
               order: tempRuntimeZone!.order,
               element: tempRuntimeZone!.element,
               dragged: tempRuntimeZone!.dragged,
            }
            const tempConstructorZone = constructorZone.map((el) => {
               if (el.id === action.payload.draggableId) return {id: el.id, order: el.order, element: el.element, dragged: true}
               return el
            })
            if (tempRuntimeZone && tempConstructorZone) {
               state.runtimeZone = [...runtimeZone, modifiedElement]
               state.constructorZone = tempConstructorZone
            }
         }
      },
      handleReorder: (state, action) => {
         if (!action.payload.destination || action.payload.destination.index === action.payload.source.index) return
         const {runtimeZone} = current(state)
         if (action.payload.destination.droppableId === 'dropZoneRuntime' && action.payload.source.droppableId === 'dropZoneRuntime') {
            const tempRuntimeZone = [...runtimeZone]
            const [movedSource] = tempRuntimeZone.splice(action.payload.destination.index, 1, tempRuntimeZone[action.payload.source.index])
            tempRuntimeZone.splice(action.payload.source.index, 1, movedSource)
            state.runtimeZone = tempRuntimeZone
         }
      },
   },
})

export default dndSlice
