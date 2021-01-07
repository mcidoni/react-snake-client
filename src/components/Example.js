import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createExample } from '../api/auth'
import messages from './AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateExample extends Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
      title: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateExample = event => {
    event.preventDefault()

    const { msgAlert, history, user } = this.props

    createExample(this.state, user)
      .then(() => msgAlert({
        heading: 'Create Example Success',
        message: messages.createExampleSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ text: '', title: '' })
        msgAlert({
          heading: 'Example Creation Failed with error: ' + error.message,
          message: messages.createExampleError,
          variant: 'danger'
        })
      })
  }

  render () {
    const { text, title } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create Example</h3>
          <Form onSubmit={this.onCreateExample}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                name="title"
                value={title}
                placeholder="title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="text">
              <Form.Label>Text</Form.Label>
              <Form.Control
                required
                name="text"
                value={text}
                type="text"
                placeholder="text"
                onChange={this.handleChange}
              />
            </Form.Group>
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

export default withRouter(CreateExample)
