import { Form, Container } from 'react-bootstrap';
import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

class Intro extends React.Component  {
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: any) {
    this.setState({ value: event.currentTarget.value });
  }

  render() {
  return (
    <Container className="p-3">
      <Form>
          <Form.Label>Select category / categories:</Form.Label>
          <Form.Group controlId="category">
              <Form.Check 
                custom
                inline 
                type="checkbox" 
                label="Programming" 
                id="Programming"
              />
              <Form.Check 
              custom
                inline 
                type="checkbox" 
                label="Misc" 
                id="Misc"
              />
              <Form.Check
              custom 
                inline 
                type="checkbox" 
                label="Dark" 
                id="Dark"
              />
              <Form.Check 
              custom
                inline 
                type="checkbox" 
                label="Pun" 
                id="Pun"
              />
              <Form.Check 
              custom
                inline 
                type="checkbox" 
                label="Spook" 
                id="Spook"
              />
              <Form.Check 
              custom
                inline 
                type="checkbox" 
                label="Christmas" 
                id="Christmas"
              />
          </Form.Group>
          <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        <Form.Label>Select flags to blacklist:</Form.Label>
        <Form.Group controlId="flags">
            <Form.Check
              custom
              inline
              label="Nsfw"
              type="checkbox"
              id="nsfw"
            />
            <Form.Check
              custom
              inline
              label="Religious"
              type="checkbox"
              id="religious"
            />
            <Form.Check
              custom
              inline
              label="Political"
              type="checkbox"
              id="political"
            />
            <Form.Check
              custom
              inline
              label="Racist"
              type="checkbox"
              id="racist"
            />
            <Form.Check
              custom
              inline
              label="Sexist"
              type="checkbox"
              id="sexist"
            />
             <Form.Check
              custom
              inline
              label="Explicit"
              type="checkbox"
              id="explicit"
            />
          </Form.Group>
        <Button className="btn-md mb-3" color="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
  }
}

export default Intro;

