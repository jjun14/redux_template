import React, { PropTypes } from 'react'
import { Router  } from 'react-router'
import { Provider  } from 'react-redux'

class AppContainer extends React.Component {
  render(){

    return (
      <Provider store={store}>
        <div style={{ height: '100%'  }}>
          <Router history={history} children={routes} key={routerKey} />
        </div>
      </Provider>
    )
  }
}
