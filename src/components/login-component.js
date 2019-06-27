import React from "react";
import { Input, Row, Col, Form, FormGroup } from "reactstrap";

class LoginComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 id="heading"> Todo App</h1>
        <Form>
          <FormGroup>
            <Row>
              <Col className=" offset-2 col-12 col-sm-1">
                <span className="textStlye">UserId:</span>
              </Col>
              <Col className=" col-12 col-sm-6">
                <Input />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col className=" offset-2 col-12 col-sm-1">
                <span className="textStlye">Password:</span>
              </Col>
              <Col className=" col-12 col-sm-6">
                <Input type="password" />
              </Col>
            </Row>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default LoginComponent;
