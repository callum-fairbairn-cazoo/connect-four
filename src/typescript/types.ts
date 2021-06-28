import { CounterColours } from './enums'

export type CellState = {
  x: number,
  y: number,
  value: null | CounterColours
}