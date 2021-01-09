import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createScore } from '../api/snake'
// import messages from '../AutoDismissAlert/messages'

import MakeScore from './Score'

class CreateScore extends Component {
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
      .catch(error => {
        this.setState({ score: '' })
        console.log(error)
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
          <MakeScore user={user}/>
          {/* <Form onSubmit={this.onCreateScore}>
            <Form.Group>
              <Form.Label>Score</Form.Label>
              <Form.Control
                required
                name="score"
                value={score}
                type="number"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form> */}
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

export default withRouter(CreateScore)

// import React from 'react'
// // import { Form, Button } from 'react-bootstrap/Form'

// // // const addScore = (props) => {
// // //   const score = [useState(0)],

// // // }
// export default Gameboard
