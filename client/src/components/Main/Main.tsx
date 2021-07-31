import { Route, Switch } from 'react-router-dom';

export const Main: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/'}></Route>
    </Switch>
  )
};
