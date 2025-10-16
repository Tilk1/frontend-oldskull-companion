import { Redirect, Route, Switch } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import TabsLayout from './components/TabsLayout'

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route 
        path="/app" 
        render={() => 
          isAuthenticated ? <TabsLayout /> : <Redirect to="/login" />
        } 
      />
      <Route 
        exact 
        path="/" 
        render={() => 
          <Redirect to={isAuthenticated ? "/app" : "/login"} />
        } 
      />
    </Switch>
  )
}

export default AppRouter