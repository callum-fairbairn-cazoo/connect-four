import { CounterColours } from '../typescript/enums'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

const nextTurnMap = {
  [CounterColours.Red]: CounterColours.Blue,
  [CounterColours.Blue]: CounterColours.Red,
}

const turnSlice = createSlice({
  name: 'turn',
  initialState: CounterColours.Blue,
  reducers: {
    changeTurn: (state) => nextTurnMap[state]
  }
})

export const { changeTurn } = turnSlice.actions
export const turnReducer = turnSlice.reducer

export const selectTurn = (state: RootState) => state.turn