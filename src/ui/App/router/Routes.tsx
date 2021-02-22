import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import JobDetail from '../../pages/JobDetail';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/job/:id" component={JobDetail} />
    </Switch>
  );
}
  
  export default Routes;