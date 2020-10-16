import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';

import Navbar from './components/Navbar.jsx' ;
import HomePage from './components/HomePage.jsx' ;
import SearchPane from './components/SearchPane.jsx' ;
import WhyQuickstays from './components/WhyQuickstays.jsx' ;
import HotelsTopList from './components/HotelsTopList.jsx' ;
import Testimonies from './components/Testimonies.jsx' ;
import Facts from './components/Facts.jsx' ;



const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Fab size="medium" color="secondary" aria-label="need help?" className={classes.fab}>
        <HelpIcon />
      </Fab>
      <Navbar />
      <HomePage />
      <SearchPane />
      <WhyQuickstays />
      <HotelsTopList />
      <Testimonies />
      <Facts />
    </div>
  );
}

export default App;
