import './index.css'

const DenominationItem = props => {
  const {item, withdraw} = props
  const {value} = item

  const deduct = () => {
    withdraw(value)
    console.log('deduct')
  }

  return (
    <li>
      <button type="button" onClick={deduct} className="cash-button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
