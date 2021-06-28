import './Cell.scss'
import { SIDE_LENGTH } from '../../contants'
import { Counter } from '../Counter/Counter'
import { CellState } from '../../typescript/types'
import { useAppDispatch } from '../../redux/hooks'
import { addCounter } from '../../redux/boardState'
import { CounterColours } from '../../typescript/enums'

export const Cell = ({ x, y, value }: CellState) => {
  const dispatch = useAppDispatch()
  const newCellState = { x, y, value: CounterColours.Red }

  return (
    <div
      className={`cell
        ${x === SIDE_LENGTH - 1 ? ' last-column' : ''}
        ${y === SIDE_LENGTH - 1 ? ' last-row' : ''}
        ${x === SIDE_LENGTH - 1 && y === SIDE_LENGTH - 1 ? ' last-cell' : ''}
      `}
      onClick={() => { dispatch(addCounter(newCellState)) }}
    >
      <Counter value={value}/>
    </div>
  )
}