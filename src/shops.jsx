import React, { useState } from 'react';
import { GRAPHQL_ENDPOINT } from './config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import canteenPic from './components/img/amico.png'
import Card from './components/Card';




const AllShops = () => {
  const [shops, setShops] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const token = localStorage.getItem('token');


  if (!loaded) {
    var data = JSON.stringify({
      query: `query{
            allShops{
              edges{
                node{
                  objId
                  name
                  picture
                  operatingDays
                  openAt
                  closeAt
                }
              }
            }
          }`,
      variables: {}
    });

    var config = {
      method: 'post',
      url: GRAPHQL_ENDPOINT,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setLoaded(true);
        response.data.data.allShops.edges.forEach(shop => {
          console.log(shop.node);
          setShops([...shops, shop.node]);
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <>
      <Navbar />
      <div id="reduceOpacity" className="opacity-100">
        <img src={canteenPic} className="img-fluid d-block mx-auto my-3" alt="no" />
        <h1 className="text-center nunito_sans fw-bolder">Canteen and Shops</h1>

        <div className="d-flex flex-wrap justify-content-around">
          
        {shops.map(shop =>  <Card shopName={shop.name} shopID={shop.objId} picture={shop.picture} />)}

        {/* {shops.map(shop => {
          return <div key={shop.objId}>
            <h2>{shop.name}</h2>
            <h3>{shop.type}</h3>
            <h3>{shop.objId}</h3>
            <Link to={"/shop/" + shop.objId}>See {shop.name}</Link>
          </div>
        })} */}
        </div>
      </div>
    </>
  );
}

export default AllShops;