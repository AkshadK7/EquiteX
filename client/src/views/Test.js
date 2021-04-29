import React, { useState, useEffect} from 'react'
import axios from 'axios'

function Stock(){

    var company = "IBM"

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${company}&apikey=ZWJ02CUOR3AXLBWB`

////////////////////////////////////////////////


///////////////////////////////////////////////////



    
    const [Stock, setStock] = useState(null)

    var everyMonthData = [];

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setStock(response.data)
            })
    }, [url])
    

    
       


    if(Stock){

        


 //////////////////////////////////////////////////////////////////////////
        const months = {
            "January": 1,
            "February": 2,
            "March": 3,
            "April": 4, 
            "May": 5,
             "June": 6,
            "July": 7, 
            "August": 8,
             "September": 9, 
             "October": 10, 
             "November": 11, 
             "December": 12
          }
          
          var realMonths = []
          var num = 0
          var realStrMonths = []
          var reverseMonths = []
          
            var M = new Date().toLocaleDateString('default', { month: 'long' });
            for(var key1 in months) {
              if(key1===M){
                var currentMonth = months[key1]
              }
          }
          for(var i=currentMonth; num<12; i--)
          {
            realMonths[num]=i;
            if(i<=1)
            {
              i=13;
            }
            num++;
          }

          for(var j=0; j<12; j++)
          {
              realStrMonths[j] = Object.keys(months).find(key => months[key] === realMonths[j])
          }

          reverseMonths = realStrMonths.reverse();
        console.log(reverseMonths);








 //////////////////////////////////////////////////////////////////////////




        //var currentdate = new Date();
        //console.log(new Date().toLocaleDateString('default', { month: 'long' }));
        
        //console.log(Stock["Monthly Time Series"]["2021-04-16"]["1. open"])
        
       
        for(var key in Stock["Monthly Time Series"]) {
            everyMonthData.push(Stock["Monthly Time Series"][key]["1. open"]);
         }

        console.log(everyMonthData.slice(0,12))
        

        return(
        <div>
            <h1>SUCCESSFULL</h1>
            {/* <h1>{Stock["Monthly Time Series"]["2021-04-16"]["1. open"]}</h1> */}
        </div>

        )
    }

    return (
        <div>
            <h1>404 Error</h1>
        </div>
    )






}

export default Stock;