import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { BrowserRouter , Switch, Link, Route} from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class HeaderSection extends React.Component {
  constructor() {
    super();
    this.state = {
      'images': '',
      'intervalId' : '',
      'image': '',
      'imageNo': '0'
    }
  }
  importAll(r) {
    return r.keys().map(r);
  }
  componentDidMount() {
    var intervalId = setInterval(
      this.timer.bind(this), 1000
    );
    var images = this.importAll(require.context('./images/', false, /\.jpg$/));
    this.setState({images:images})
    this.setState({intervalId: intervalId})
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  timer() {
    this.setState({image:this.state.images[this.state.imageNo]})
    this.state.imageNo++;
    if(this.state.imageNo === this.state.images.length) {
      this.state.imageNo = 0;
    }
  }
  render() {
    return (
      <Card>
        <CardTitle title="Jain Herbs" subtitle="Nature is the way for healthy living" />
        <CardMedia  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}>
          <img src={this.state.image} alt="" />
        </CardMedia>
        <CardActions>
          <Link to='/'><FlatButton label="Home"/></Link>
          <Link to='/company'><FlatButton label="Company Profile"/></Link>
          <Link to='/products'><FlatButton label="Products"/></Link>
          <Link to='/contact'><FlatButton label="Contact Us"/></Link>
          <Link to='/enquiry'><FlatButton label="Enquiry"/></Link>
        </CardActions>
      </Card>
    )
  }
}
const FooterSection = () => (
    <div>
      <Toolbar>

      </Toolbar>
    </div>
);
const LeftMainSection = () => (
    <div>LeftMainSection</div>
);
const RightMainSection = () => (
  <div>RightMainSection
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/index.html' component={Home}/>
      <Route path='/company' component={Company}/>
      <Route path='/products' component={Products}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/enquiry' component={Enquiry}/>
    </Switch>
  </div>

);
const Home = () => (
  <div>This Is Home</div>
);
const Company = () => (
  <div>This Is Company</div>
);
const Products = () => (
  <div>This Is Products</div>
);
const Contact = () => (
  <div>This Is Contact</div>
);
const Enquiry = () => (
  <div>This Is enquiry</div>
);
const MainSection = () => (
  <div>
    <LeftMainSection />
    <RightMainSection />
  </div>
);
const MyAwesomeReactComponent = () => (
  <BrowserRouter>
      <div>
        <HeaderSection />
        <MainSection />
        <FooterSection />
      </div>
  </BrowserRouter>
);

export default MyAwesomeReactComponent;
