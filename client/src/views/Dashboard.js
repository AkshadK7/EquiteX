
import React, {useState,useEffect} from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import axios from 'axios'
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {

  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  };

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);


  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">BITCOIN</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
  
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Highest Cap</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-bell-55 text-warning" /> 64,854
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Monthly Sales</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-coins text-primary" />{" "}
                  INR 3,500
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Volume</h5>
                <CardTitle tag="h3">
                  <i className="tim-icons icon-delivery-fast text-success" /> 1,620K
                </CardTitle>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample4.data}
                    options={chartExample4.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>



          <Col lg="3" md="12">
            <Card className="card-tasks">
              <CardHeader>
              <CardTitle tag="h4">Stock Updates</CardTitle>
                <UncontrolledDropdown>
                <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>


                  {filteredCoins.map(coin => {
              return (   
                    
                    <tbody>
                    <tr>
                        <td><img src= {coin.image} style={{width: "25px"}}></img></td>
                        <td>{coin.name}</td>
                        {/* <td>{coin.market_cap.toLocaleString()}</td> */}
                        <td>{coin.price_change_percentage_24h}</td>
                        <td className="text-center">
                          {(coin.price_change_percentage_24h >= 0) ? <i className="tim-icons icon-cloud-upload-94 text-success"></i> : <i className="tim-icons icon-cloud-download-93 text-danger"></i>}
                          </td>
                      </tr>
                    </tbody>
                    )
                  })}

                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>



          <Col lg="9" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">News Headlines/Updates</CardTitle>
              </CardHeader>

              <Row>

                <Col lg="12" md="12">
                  <CardHeader>
                  <CardTitle tag="h4">News 1</CardTitle>
                  </CardHeader>
                  <CardBody>
                    
                  </CardBody>
              </Col>
              </Row>


              <Row>
                <Col lg="12" md="12">
                  <CardHeader>
                  <CardTitle tag="h4">News 2</CardTitle>
                  </CardHeader>
                  <CardBody>
                    
                  </CardBody>
              </Col>
              </Row>

              <Row>
                <Col lg="12" md="12">
                  <CardHeader>
                  <CardTitle tag="h4">News 3</CardTitle>
                  </CardHeader>
                  <CardBody>
                    
                  </CardBody>
              </Col>
              </Row>

              <Row>
                <Col lg="12" md="12">
                  <CardHeader>
                  <CardTitle tag="h4">News 4</CardTitle>
                  </CardHeader>
                  <CardBody>
                    
                  </CardBody>
              </Col>
              </Row>

              <Row>
                <Col lg="12" md="12">
                  <CardHeader>
                  <CardTitle tag="h4">News 5</CardTitle>
                  </CardHeader>
                  <CardBody>
                    
                  </CardBody>
              </Col>
              </Row>
              

            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;












// {filteredCoins.map(coin => {
//   return ( 
//       <DropdownMenu aria-labelledby="dropdownMenuLink" right>
//             <DropdownItem><img src= {coin.image} style={{width: "25px"}}></img></DropdownItem>
//             <DropdownItem>{coin.name}</DropdownItem>
//             <DropdownItem>{coin.market_cap.toLocaleString()}</DropdownItem>
//             <DropdownItem>{coin.price_change_percentage_24h}</DropdownItem>
//             <DropdownItem>{coin.current_price}</DropdownItem>
//             </DropdownMenu>
//                 )
//               })}