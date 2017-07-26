/*
*Login Form Component
*/


import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Input, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
  return (
      <Grid fluid>
        <Row center="xs" middle="xs"style={{ height: '100%' }}>
          <Col xs={8}>
            <form action="login">
              <Input type="email" label="Email" s={ 12 } />
              <Input type="password" label="password" s={ 12 } />
              <Button large>Log In</Button>
              <div>
                <small>not a member?<Link to="/register">Register</Link></small>
              </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Login;