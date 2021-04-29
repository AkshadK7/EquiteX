import axios from 'axios';
// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Label,
    FormGroup,
    Input,
    Table,
    Row,
    Col,
    Form,
    UncontrolledTooltip,
  } from "reactstrap";



function Signup() {
  return (
    <div className="container">
        <Row style={{paddingTop:"12%"}}>
        <Col lg="12" md="12">
                    <Card>
                    <CardHeader>
                    {/* <h3>Signup</h3> */}
                    <CardTitle tag="h3">Sign Up</CardTitle>
                    </CardHeader>
                    <CardBody>
                    <Form onSubmit={(e) => signup(e)}>
                            <div class="mb-3">
                            <label for="exampleInputName1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                                {/* <div id="nameHelp" class="form-text">Enter your Full Name.</div> */}
                            </div>
                            <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                                {/* <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div> */}
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <div style={{textAlign:"center"}}><a href='http://localhost:3000/signin'>Already an Existing User? Sign in here!</a></div>
                    </Form>
                    </CardBody>
                    </Card>
                </Col>
                </Row>


    </div>
  );
}

function signup(e) {
  e.preventDefault();
  let request = {
    name: document.getElementById('exampleInputName1').value,
    email: document.getElementById('exampleInputEmail1').value,
    password: document.getElementById('exampleInputPassword1').value,
    password_confirmation: document.getElementById('exampleInputPassword1').value

  }
  axios.post('http://localhost:8000/api/signup', request)
  .then( resp => {
      alert(resp.data.message);
      window.location = 'http://localhost:3000/admin/dashboard';
      
  })
  .catch( err => {
    console.log(err);
  })
}

export default Signup;