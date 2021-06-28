import './Counter.scss'
import { CounterColours } from '../../types/enums'

type CounterProps = {
  value: null | CounterColours
}

export const Counter = ({ value }: CounterProps) => {
  return (
    <div className={`counter ${value}`}>

    </div>
  )
}