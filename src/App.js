import React, { Component } from 'react';
import './App.scss';
import { observer, Provider } from 'mobx-react';
import { observable } from 'mobx';
import { default as appStore } from './store/store';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import history from './utils/history';
import NavbarComponent from './components/common/NavbarComponent';
import FooterComponent from './components/common/FooterComponent';
import HomeComponent from './components/Home/HomeComponent';
import IntroduceComponent from './components/introduce/IntroduceComponent';
import Menu from './components/menu/Menu';
import News from './components/news/News';
import ContactComponent from './components/Contact/ContactComponent';
import ProductItem from './components/Product/ProductItem';
import ProductId from './components/Product/ProductId';
import LoginComponent from './components/login/LoginComponent';
import Cart from './components/Product/Cart';
import Admin from './components/admin/Admin';
import ProductAdmin from './components/admin/ProductAdmin';
import EditProduct from './components/admin/EditProduct';
import NewsAd from './components/admin/NewsAdmin';
import SalesAdmin from './components/admin/SalesAdmin';
import Managers from './components/admin/Managers';
import AddProduct from './components/admin/AddProduct';
import AddNew from './components/admin/AddNew';
import AddManager from './components/admin/AddManager';
import Billed from './components/admin/Billed';
import EditAdmin from './components/admin/EditAdmin';
import ViewNews from './components/news/ViewNew';
@observer
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={appStore}>
        <Router history={history}>
          <Switch>
            <div className="font-size">
              <div className="">
                <NavbarComponent />
              </div>
              <div className="px-0">
                <div className="d-md-none d-block" style={{ height: 50 }} />
                <Paper className="p-3" style={{ minHeight: '100vh' }} elevation={1}>
                  <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/introduce" component={IntroduceComponent} />
                    <Route path="/products" component={Menu} />
                    <Route exact path="/news" component={News} />
                    <Route path="/contact" component={ContactComponent} />
                    <Route path="/productitems" component={ProductItem} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/productId" component={ProductId} />
                    <Route exact path="/Admin" component={Admin} />
                    <Route exact path="/productAdmin" component={ProductAdmin} />
                    <Route exact path="/editProduct" component={EditProduct} />
                    <Route exact path="/newsAdmin" component={NewsAd} />
                    <Route exact path="/SalesAdmin" component={SalesAdmin} />
                    <Route exact path="/managers" component={Managers} />
                    <Route exact path="/addproduct" component={AddProduct} />
                    <Route exact path="/addnew" component={AddNew} />
                    <Route exact path="/addmanager" component={AddManager} />
                    <Route exact path="/billed" component={Billed} />
                    <Route exact path="/editManager" component={EditAdmin} />
                    <Route exact path="/viewNew" component={ViewNews} />
                    {/* both /roster and /roster/:number begin with /roster */}
                  </Switch>
                </Paper>
              </div>
              <div className="">
                <FooterComponent />
              </div>
            </div>
            {/* both /roster and /roster/:number begin with /roster */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
