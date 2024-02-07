// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominations, onChangeAmount} = props
  const {value} = denominations
  const change = () => {
    onChangeAmount(value)
  }
  return (
    <li className="list-Item">
      <button type="button" className="values" onClick={change}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
