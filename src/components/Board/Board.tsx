import { SIDE_LENGTH } from '../../contants'
import { Cell } from '../Cell/Cell'
import './Board.scss'
import { useAppSelector } from '../../redux/hooks'
import { selectBoardState } from '../../redux/boardState'

export const Board = () => {
  const boardState = useAppSelector(selectBoardState)

  return (
    <div className="board">
      {
        Array(SIDE_LENGTH).fill(0).map( (_, x) =>
          <div key={x} className="column">
            {Array(SIDE_LENGTH).fill(0).map((_, y) =>
              <Cell key={`${x},${y}`} x={x} y={y} value={boardState[x][y].value}/>
            )}
          </div>
        )
      }
    </div>
  )
}