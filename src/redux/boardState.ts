import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { SIDE_LENGTH } from '../contants'
import { RootState } from './store'
import { CellState } from '../typescript/types'

export type BoardState = CellState[][]

const initialState: BoardState =
  Array(SIDE_LENGTH).fill(0).map((_, x: number): CellState[] =>
    Array(SIDE_LENGTH).fill(0).map((_, y: number): CellState => (
        { x, y, value: null}
      ),
    ),
  )

const getYValueOfBottomEmptyCellInColumn = (column: CellState[]): number | void => {
  for (let yIndex = column.length - 1; yIndex > -1; yIndex--) {
    if (column[yIndex].value === null) {
      return yIndex
    }
  }
}

const boardStateSlice = createSlice({
  name: 'boardState',
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<CellState>) => {
      const y: number | void = getYValueOfBottomEmptyCellInColumn(current(state)[action.payload.x])
      if (y !== undefined) {
        state[action.payload.x][y] = action.payload
      }
    }
  }
})

export const { addCounter } = boardStateSlice.actions
export const boardStateReducer = boardStateSlice.reducer

export const selectBoardState = (state: RootState) => state.boardState