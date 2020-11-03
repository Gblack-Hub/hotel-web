import React from 'react';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import HelpIcon from '@material-ui/icons/Help';
import { BrowserRouter as Router, Route, Switch/*, Redirect,  */} from 'react-router-dom';
import Navbar from './components/Navbar.jsx' ;
import Home from './components/Home.jsx' ;
// import HotelHome from './components/hotels/Home.jsx' ;
import Auth from './components/auth/Layout.jsx' ;
import HotelList from './components/hotels/HotelList.jsx' ;
import HotelDetail from './components/hotels/HotelDetail.jsx' ;
import BookHotel from './components/hotels/booking/BookHotel.jsx' ;
import ProtectedRoute from './components/ProtectedRoute';

// const useStyles = makeStyles((theme) => ({
//   fab: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));

function App() {
  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  // const classes = useStyles();
  return (
    <div>
      <Router>
        {/*<Fab size="medium" color="secondary" aria-label="need help?" className={classes.fab}>
          <HelpIcon />
        </Fab>*/}
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <ProtectedRoute path="/hotels" component={HotelList}></ProtectedRoute>
          <Route path="/auth" component={Auth}></Route>
          <ProtectedRoute path="/book_hotel" component={BookHotel}></ProtectedRoute>
          <ProtectedRoute path="/hotel/detail/:hotel_id" component={HotelDetail}></ProtectedRoute>
          <Route path="*" component={() => "404 NOT FOUND"}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
