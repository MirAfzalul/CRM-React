/* eslint-disable react/no-unescaped-entities */
import './loginStyle.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const LoginPage = () => {
  return (
    <div className="login-page bg-light.bg-gradient">
      <Form className='loginForm'>
        <h1 className='text-center'>Client Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address *</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password *</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
      <a href=''>Forgot Password</a>
    </Form>
    </div>
  )
}

export default LoginPage