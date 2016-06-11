import React from 'react';
import {  IndexRoute, Route} from 'react-router';
import { 
          AppContainer,
          BaseContainer,
          NotFound
       }  from './containers'

/* keep routes in alphabetical order */
const routes = (
    <Route path="/" component={AppContainer}>
      {/* other routes go here */}
      <IndexRoute component={BaseContainer} />
      <Route path='*' component={NotFound} />
    </Route>
)

export default routes


