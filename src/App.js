import './App.css';
import { Login } from './components/login.js';
import { LoginButton } from './components/loginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile.js';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const {isAuthenticated, isLoading}  = useAuth0()
  if (isLoading) return <h1>Loading...  </h1>

  return (
    <div className="App">
    {!isAuthenticated ? <Login />: <></>}
    <Profile />
     {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}

export default App;
