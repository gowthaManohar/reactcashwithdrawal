import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdraw = value => {
    const {balance} = this.state

    this.setState(prev => ({balance: prev.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="symbol-container">
            <div className="headsymbol">s</div>
            <p className="symbol-description">Sarah Williams</p>
          </div>
          <div className="cash-section">
            <p className="cash-description">Your Balance</p>
            <div>
              <p className="cash">{balance}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <p className="cash-head">Withdraw</p>
          <p className="withdraw-desc">CHOOSE SUM (IN RUPEES)</p>
          <ul className="cashbuttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                withdraw={this.withdraw}
                item={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
