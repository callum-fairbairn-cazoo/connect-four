import './Cell.scss'
import { SIDE_LENGTH } from '../../contants'
import { Counter } from '../Counter/Counter'

type CellProps = {
  x: number,
  y: number,
}

export const Cell = ({x, y}: CellProps) => {
  return (
    <div className={`cell
        ${x === SIDE_LENGTH - 1 ? ' last-column' : ''}
        ${y === SIDE_LENGTH - 1 ? ' last-row' : ''}
        ${x === SIDE_LENGTH - 1 && y === SIDE_LENGTH - 1 ? ' last-cell' : ''}
      `}>
      <Counter colour={(x + y) % 2 === 0 ? 'red' : 'blue'} />
    </div>
  )
}