import './Cell.scss'
import { SIDE_LENGTH } from '../../contants'
import { Counter } from '../Counter/Counter'
import { CellState } from '../../typescript/types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { addCounter, selectBoardState } from '../../redux/boardState'
import { changeTurn, selectTurn } from '../../redux/turn'

const getYValueOfBottomEmptyCellInColumn = (column: CellState[]): number | void => {
  for (let yIndex = column.length - 1; yIndex > -1; yIndex--) {
    if (column[yIndex].value === null) {
      return yIndex
    }
  }
}


export const Cell = ({ x, y, value }: CellState) => {
  const turn = useAppSelector(selectTurn)
  const boardState = useAppSelector(selectBoardState)
  const dispatch = useAppDispatch()
  const getNewCellState = (newYIndex: number) => ({ x, y: newYIndex, value: turn })


  return (
    <div
      className={`cell
        ${x === SIDE_LENGTH - 1 ? ' last-column' : ''}
        ${y === SIDE_LENGTH - 1 ? ' last-row' : ''}
        ${x === SIDE_LENGTH - 1 && y === SIDE_LENGTH - 1 ? ' last-cell' : ''}
      `}
      onClick={() => {
        const newYIndex = getYValueOfBottomEmptyCellInColumn(boardState[x])
        if (newYIndex !== undefined) {
          dispatch(addCounter(getNewCellState(newYIndex)))
          dispatch(changeTurn())
        }
      }}
    >
      <Counter value={value}/>
    </div>
  )
}