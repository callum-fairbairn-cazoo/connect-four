import { SIDE_LENGTH } from '../../contants'
import { Cell } from '../Cell/Cell'

import './Board.scss'
import { useAppSelector } from '../../app/hooks'
import { selectBoardState } from './boardState'

export const Board = () => {
  const boardState = useAppSelector(selectBoardState)

  return (
    <div className="board">
      {
        Array(SIDE_LENGTH).fill(0).map( (_, x) =>
          <div className="column">
            {Array(SIDE_LENGTH).fill(0).map((_, y) =>
              <Cell key={`${x},${y}`} x={x} y={y} value={boardState[x][y].value}/>
            )}
          </div>
        )
      }
    </div>
  )
}