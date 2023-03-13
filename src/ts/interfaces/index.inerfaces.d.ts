interface ICalcInitialState {
   mode: boolean
   display: string
   operandOne: string
   operandTwo: string
   operator: string
}

interface IDropZone {
   id: string
   order: number
   element: string
}

export {ICalcInitialState, IDropZone}
