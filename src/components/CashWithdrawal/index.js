// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

export default class CashWithdrawal extends Component {
  state = {
    amount: 2000,
    balance: true,
  }

  onChangeAmount = value => {
    const {amount} = this.state
    if (amount - value > 0) {
      this.setState(prevState => ({amount: prevState.amount - value}))
      this.setState({balance: true})
    } else {
      this.setState({balance: false})
    }
  }

  render() {
    const {amount, balance} = this.state
    const {denominationsList} = this.props
    const text = balance ? null : (
      <span className="error">* Insufficient Funds</span>
    )
    const WarningText =
      amount >= 50 && !balance ? (
        <span className="warning">Choose another Denomination</span>
      ) : null
    return (
      <div className="container">
        <div className="name-container">
          <p className="profile">S</p>
          <h1 className="profile-name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance">Your Balance</p>
          <p className="money">{amount}</p>
        </div>
        <div>
          <p className="rupees">In Rupees</p>
        </div>
        <div className="text-container">
          <p>Withdraw</p>
          <p>CHOOSE SUM (IN RUPEES)</p>
        </div>
        {/* <div className="amount-container">
          <div className="row">
            <p>50</p>
            <p>100</p>
          </div>
          <div className="row">
            <p>200</p>
            <p>500</p>
          </div>
        </div> */}
        <ul>
          {' '}
          {denominationsList.map(eachValue => (
            <DenominationItem
              denominations={eachValue}
              key={eachValue.id}
              onChangeAmount={this.onChangeAmount}
            />
          ))}
        </ul>
        <div className="warning-msg">
          <p>{text}</p>
          <p>{WarningText}</p>
        </div>
      </div>
    )
  }
}
