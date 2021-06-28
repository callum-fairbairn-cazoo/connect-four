import './Cell.scss'
import { SIDE_LENGTH } from '../../contants'

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
      {`${x} ${y}`}
    </div>
  )
}