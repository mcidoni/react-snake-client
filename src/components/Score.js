import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createScore } from '../api/snake'
// import messages from './AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
      //   heading: 'Create Score Success',
      //   message: messages.createScoreSuccess,
      //   variant: 'success'
      // }))
      // .then(() => history.push('/index-scores'))
      .catch(error => {
        this.setState({ score: '' })
        console.log(error)
        // msgAlert({
        //   heading: 'Score Creation Failed with error: ' + error.message,
        //   message: messages.createScoreFailure,
        //   variant: 'danger'
        // })
      })
  }

  render () {
    const { score } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create Score</h3>
          <Form onSubmit={this.onCreateScore}>
            <Form.Group controlId="score">
              <Form.Label>Score</Form.Label>
              <Form.Control
                required
                type="text"
                name="score"
                value={score}
                placeholder="score"
                onChange={this.handleChange}
              />
            </Form.Group>
            {/* <Form.Group controlId="score">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                required
                name="score"
                value={productPrice}
                type="number"
                placeholder="score"
                onChange={this.handleChange}
              />
            </Form.Group> */}
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateScore)
