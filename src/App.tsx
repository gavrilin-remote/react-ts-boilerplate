import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from 'types';
import MainLayout from 'layouts/MainLayout/MainLayout';
import './App.css';
import { MainContainer } from 'containers';

function App(): React.ReactElement {
  return (
    <div className='App'>
      <MainLayout>
        <Switch>
          <Route exact path={ROUTES.MAIN} component={MainContainer} />
        </Switch>
      </MainLayout>
    </div>
  );
}

export default App;
