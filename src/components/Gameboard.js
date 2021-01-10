import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createScore } from '../api/snake'
// import messages from '../AutoDismissAlert/messages'

import Score from './Score'

class GameBoard extends Component {
  constructor () {
    super()

    this.state = {
      score: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateScore = event => {
    event.preventDefault()

    const { user } = this.props

    createScore(this.state, user)
      // .then(() => msgAlert({
      //   heading: 'Create Purchase Success',
      //   message: messages.createGameSuccess,
      //   variant: 'success'
      // }))
      .catch(() => {
        this.setState({ score: '' })
        // msgAlert({
        // heading: 'Purchase Creation Failed with error: ' + error.message,
        // message: messages.signUpFailure,
        // variant: 'danger'
        // })
      })
  }

  render () {
    const { user } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          {/* <h3>Create Score</h3> */}
          <Score user={user}/>
          <div>
            <div className="gameboard">
              <div className="snake"></div>
              <div className="food"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(GameBoard)
