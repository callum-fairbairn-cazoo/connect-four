import './Counter.scss'

type CounterProps = {
  colour: 'red' | 'blue'
}

export const Counter = ({ colour }: CounterProps) => {
  return (
    <div className={`counter ${colour}`}>

    </div>
  )
}