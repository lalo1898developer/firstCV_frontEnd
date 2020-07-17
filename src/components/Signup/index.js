import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
  Button,  
  Form,  
  FormGroup,
  Label,  
  Input,
} from 'reactstrap';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleForm = async (e) => {
    e.preventDefault();            
    const jsonSend = {
      firstName,
      lastName,
      email,
      password
    };
    const POST_URI = `${process.env.REACT_APP_BACKEND_BASE_URL}/signup`
    try {
      await axios.post(POST_URI, jsonSend);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setIsSignup(true);
      alert('Successfull signup!');
    } catch (error) {
      alert('Error on signup!');
    }

  }

  const signupFalse = () => {
    return (<React.Fragment>
      <h1 className="mb-4">Signup on MyFirstCV App</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label>First Name</Label>
          <Input 
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
            type="text"
            id="firstName"
            name="inputFirstName" 
            placeholder="type your first name" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
            type="text" 
            name="lastName" 
            id="inputLastname" 
            placeholder="type your last name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="type your email" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input 
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="type your password here" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </React.Fragment>)
  }

  const signupTrue = () => {
    return (<Redirect to="/login" />)
  }

  return (
    <React.Fragment>
      { isSignup ? signupTrue() : signupFalse() }
    </React.Fragment>
  );
}
 
export default Signup;