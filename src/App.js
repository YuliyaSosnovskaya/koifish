import {Route, Switch, Redirect} from 'react-router-dom'

import Rolls from './components/rolls/rolls';
import Layout from './components/layout/layout';
import MainPage from './components/mainPage/mainPage';

function App() {

  
  return (
    <Layout>
      <Switch>
        <Route path='/catalog' exact component={MainPage}/>
        <Route path='/catalog/:rollId' exact component={Rolls}/>
        <Redirect to='/catalog'/>
      </Switch>
      
    </Layout>
  );
}

export default App;
