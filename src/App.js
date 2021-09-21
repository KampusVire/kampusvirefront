import {Route,Switch,Redirect } from 'react-router-dom';
import LoginUser from './login';
import RegisterUser from './register';
import AllShops from './shops';
import AllProducts from './products';
import Cart from './cart';
import Home from './home';
import VirtualWallet from './virtualwallet';
import CryptoWallet from './cryptowallet.';
import QRScanPay from './qrscanpay';
import OrderList from './orderList';
import BorrowMoney from './borrowMoney';
import BorrowedToLog from './borrowedToLog';
import BorrowedFromLog from './borrowedFromLog';

function App() {
  var apiToken = localStorage.getItem('token');
  if(apiToken==null){
    return (
      <>
      <Switch>
        <Route path="/login" component={LoginUser} />
        <Route path="/register" component={RegisterUser} />
        <Redirect to="/login"/> 
      </Switch>
      </>
    );
  }

  return (
    <>
    <Switch>
      {/* <Route exact path="/" component={()=> <About name="Tanmoy"/>} /> */}
      <Route path="/" exact component={Home} />
      <Route path="/shops" exact component={AllShops} />
      <Route path="/shop/:shopid" exact component={AllProducts} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/virtualwallet" exact component={VirtualWallet} />
      <Route path="/cryptowallet" exact component={CryptoWallet} />
      <Route path="/qrpay" exact component={QRScanPay} />
      <Route path="/orders" exact component={OrderList} />
      <Route path="/borrowmoney" exact component={BorrowMoney} />
      <Route path="/borrowedtolog" exact component={BorrowedToLog} />
      <Route path="/borrowedfromlog" exact component={BorrowedFromLog} />
      <Redirect to="/"/> 
    </Switch>

    </>
  );
}

export default App;