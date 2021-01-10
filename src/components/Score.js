import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom'

import { createScore, getScores, deleteScore, updateScore } from '../api/snake'
// import messages from './AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateScore extends Component {
  constructor () {
    super()

    this.state = {
      score: '',

      /*
        Each score object in this array looks like the following:
        {
          createdAt: '...',
          score: 1,
          updatedAt: '...',
          _id: '34983475'
        }
      */
      allScores: []
    }
  }

  componentWillMount () {
    // Fetch all scrores form the database.
    getScores()
      .then(({ data }) => {
        this.setState({ allScores: data.scores })
      })
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateScore = event => {
    event.preventDefault()

    const { user } = this.props

    createScore(this.state, user)
      // Run stuff after successfully creating a score.
      .then(res => {
        this.setState(oldState => {
          return {
            score: '',
            allScores: [...oldState.allScores, res.data.score]
          }
        })
      })
      // .then(() => msgAlert({
      //   heading: 'Create Score Success',
      //   message: messages.createScoreSuccess,
      //   variant: 'success'
      // }))
      // .then(() => history.push('/index-scores'))
      .catch((error) => {
        console.log('ERROR:', error)
        this.setState({ score: '' })
        // msgAlert({
        //   heading: 'Score Creation Failed with error: ' + error.message,
        //   message: messages.createScoreFailure,
        //   variant: 'danger'
        // })
      })
  }

  componentDidUpdate () {
    console.log('STATE:', this.state)
  }

  render () {
    const { score } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>All Scores</h3>
          {this.state.allScores.map(obj => {
            return <SingleScore key={obj._id} scoreObj={obj} />
          })}
        </div>

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

function SingleScore ({ scoreObj }) {
  const { _id, score } = scoreObj
  const [value, setValue] = useState(score)

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      <input type="text" style={{ marginRight: '8px' }} value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => updateScore(_id, value)} className="btn btn-secondary" style={{ marginRight: '8px' }}>Update</button>
      <button onClick={() => deleteScore(_id)} className="btn btn-secondary">&times;</button>
    </div>
  )
}

export default withRouter(CreateScore)
