/*
*Register Form Component
*/


import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Input, Button } from 'react-materialize';
import { Link } from 'react-router-dom';


class Register extends React.Component {
  render() {
  return (
      <Grid fluid>
        <Row center="xs">
          <Col xs={8}>
            <div>
              <small>have an account already? <Link to="/Login">Log in</Link></small>
            </div>
            <form action="signin">
              <Input placeholder="First Name" s={6} label="First Name" />
              <Input placeholder="Last Name" s={6} label="Last Name" />
              <Input type="password" label="password" s={12} />
              <Input type="email" label="Email" s={12} />
              <Button large>Register</Button>

            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Register;