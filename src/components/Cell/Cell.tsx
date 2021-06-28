import './Cell.scss'
import { SIDE_LENGTH } from '../../contants'
import { Counter } from '../Counter/Counter'
import { CellState } from '../../typescript/types'

export const Cell = ({x, y, value}: CellState) => {
  return (
    <div className={`cell
        ${x === SIDE_LENGTH - 1 ? ' last-column' : ''}
        ${y === SIDE_LENGTH - 1 ? ' last-row' : ''}
        ${x === SIDE_LENGTH - 1 && y === SIDE_LENGTH - 1 ? ' last-cell' : ''}
      `}>
      <Counter value={value} />
    </div>
  )
}