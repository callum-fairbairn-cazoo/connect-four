import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SIDE_LENGTH } from '../../contants'
import { RootState } from '../../app/store'
import { CellState } from '../../typescript/types'

export type BoardState = CellState[][]

const initialState: BoardState =
  Array(SIDE_LENGTH).fill(0).map((_, x: number): CellState[] =>
    Array(SIDE_LENGTH).fill(0).map((_, y: number): CellState => (
        { x, y, value: null}
      ),
    ),
  )

const boardStateSlice = createSlice({
  name: 'boardState',
  initialState,
  reducers: {
    addCounter: (state, action: PayloadAction<CellState>) => {
      state[action.payload.x][action.payload.y] = action.payload
    }
  }
})

export const { addCounter } = boardStateSlice.actions
export const boardStateReducer = boardStateSlice.reducer

export const selectBoardState = (state: RootState) => state.boardState