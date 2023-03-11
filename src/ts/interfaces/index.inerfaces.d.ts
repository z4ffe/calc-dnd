interface ICalcInitialState {
   mode: boolean
   display: number
   operandOne: number
   operandTwo: number
   operator: string
}

interface IDropZone {
   id: string
   order: number
   element: string
}

export {ICalcInitialState, IDropZone}
