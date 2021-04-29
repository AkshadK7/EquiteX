
import React, { useState, useEffect} from 'react'
import axios from 'axios'
//import Stock from "../views/Test";


// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

function Tables() {

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

  // const handleChange = e => {
  //   setSearch(e.target.value);
  // };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
       

  
  return (
    <>
      <div className="content">
          <Row>
            <Col md="12">
            <Card>
                <CardHeader>
                  <CardTitle tag="h4">Stock Table</CardTitle>
                </CardHeader>

                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Logo</th>
                        <th>Company</th>
                        <th>Volume</th>
                        <th>Symbol</th>
                        <th className="text-center">Current Price</th>
                      </tr>
                    </thead>
                    
                
                
              {filteredCoins.map(coin => {
              return (   
                    
                    <tbody>
                    <tr>
                        <td><img src= {coin.image} style={{width: "25px"}}></img></td>
                        <td>{coin.name}</td>
                        <td>{coin.market_cap.toLocaleString()}</td>
                        <td>{coin.symbol}</td>
                        <td className="text-center">{coin.current_price}</td>
                      </tr>
                    </tbody>
                      /* <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                      /> */
              )
            })}

           </Table>
            </CardBody>    
              </Card>
            </Col>
            
          </Row>
        
        
      
        </div>
    </>
  );
}
  


export default Tables;
