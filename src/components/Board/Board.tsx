import { SIDE_LENGTH } from '../../contants'
import { Cell } from '../Cell/Cell'

import './Board.scss'

export const Board = () => {

  return (
    <div className="board">
      {
        Array(SIDE_LENGTH).fill(0).map( (_, x) =>
          <div className="column">
            {Array(SIDE_LENGTH).fill(0).map((_, y) =>
              <Cell key={`${x},${y}`} x={x} y={y}/>
            )}
          </div>
        )
      }
    </div>
  )
}