// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

// import { createGame } from '../api/snake'
// // import messages from '../AutoDismissAlert/messages'

// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// class CreateGame extends Component {
//   constructor () {
//     super()

//     this.state = {
//       score: ''
//     }
//   }

//   handleChange = event => this.setState({
//     [event.target.name]: event.target.value
//   })

//   onCreateGame = event => {
//     event.preventDefault()

//     const { user } = this.props

//     createGame(this.state, user)
//       // .then(() => msgAlert({
//       //   heading: 'Create Purchase Success',
//       //   message: messages.createGameSuccess,
//       //   variant: 'success'
//       // }))
//       .catch(error => {
//         this.setState({ score: '' })
//         console.log(error)
//         // msgAlert({
//         // heading: 'Purchase Creation Failed with error: ' + error.message,
//         // message: messages.signUpFailure,
//         // variant: 'danger'
//         // })
//       })
//   }

//   render () {
//     const { score } = this.state

//     return (
//       <div className="row">
//         <div className="col-sm-10 col-md-8 mx-auto mt-5">
//           <h3>Create Purchase</h3>
//           <Form onSubmit={this.onCreateGame}>
//             <Form.Group controlId="productPrice">
//               <Form.Label>Product Price</Form.Label>
//               <Form.Control
//                 required
//                 name="score"
//                 value={score}
//                 type="number"
//                 onChange={this.handleChange}
//               />
//             </Form.Group>
//             <Button
//               variant="primary"
//               type="submit"
//             >
//               Submit
//             </Button>
//           </Form>
//         </div>
//       </div>
//     )
//   }
// }

// export default withRouter(CreateGame)

import React from 'react'
// import { Form, Button } from 'react-bootstrap/Form'

// // const addScore = (props) => {
// //   const score = [useState(0)],

// // }

const Gameboard = () => {
  return (
    <div>
      <div className="gameboard">
        <div className="snake"></div>
        <div className="food"></div>
      </div>
    </div>
  )
}

export default Gameboard
