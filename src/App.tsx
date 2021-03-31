import { Form, Row, Button, Container, Col } from 'react-bootstrap';
import React, { useState, useEffect, Fragment } from 'react';
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
    <Container fluid="md">
      <Form>
        
          <Form.Label>Select category / categories:</Form.Label>
          <Form.Group controlId="category">
              <Form.Check inline type="checkbox" label="Programming" id="Programming"/>
              <Form.Check inline type="checkbox" label="Misc" id="Misc"/>
              <Form.Check inline type="checkbox" label="Dark" id="Dark"/>
              <Form.Check inline type="checkbox" label="Pun" id="Pun"/>
              <Form.Check inline type="checkbox" label="Spook" id="Spook"/>
              <Form.Check inline type="checkbox" label="Christmas" id="Christmas"/>
          </Form.Group>
        

        {/* <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group> */}
        <Form.Label>Select flags to blacklist:</Form.Label>
          <div key="custom-inline-checkbox" className="mb-3">
            <Form.Check
              custom
              inline
              label="nsfw"
              type="checkbox"
              id="nsfw"
            />
            <Form.Check
              custom
              inline
              label="religious"
              type="checkbox"
              id="religious"
            />
            <Form.Check
              custom
              inline
              label="political"
              type="checkbox"
              id="political"
            />
            <Form.Check
              custom
              inline
              label="racist"
              type="checkbox"
              id="racist"
            />
            <Form.Check
              custom
              inline
              label="sexist"
              type="checkbox"
              id="sexist"
            />
             <Form.Check
              custom
              inline
              label="explicit"
              type="checkbox"
              id="explicit"
            />
          </div>
        <Button className="btn-lg" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
  }
}

export default Intro;

