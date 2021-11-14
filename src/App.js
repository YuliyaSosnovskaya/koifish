import { useContext } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Rolls from './components/rolls/rolls';
import Ordering  from './components/ordering/ordering';
import Layout from './components/layout/layout';
import MainPage from './components/mainPage/mainPage';
import AuthForm from './components/authForm/authForm';
import AuthContext from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path='/catalog' exact component={MainPage}/>
        <Route path='/catalog/:rollId' exact component={Rolls}/>
        <Route path='/ordering' exact component={Ordering}/>
        <Route path='/auth' exact >
          {user ? <Redirect to='/catalog'/> : <AuthForm/> } 
        </Route>
        <Redirect to='/catalog'/>
      </Switch>
    </Layout>
  );
}

export default App;
