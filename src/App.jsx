import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from "./PrivateRoute";
import { UserContextDepo } from "./UserContextDepo";
import MainPage from "./MainPage";
import UserTwits from "./UserTwits";
import TwitDetail from "./TwitDetail";








function App() {
  return (
    <div>
      <UserContextDepo>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/" exact>
          {/* /?variant=most_liked */}
          <MainPage />
        </Route>

        <Route path="/profile/:nickname">
        <UserTwits />
        </Route>

        <PrivateRoute path="/detail/:twitId">
            <TwitDetail />
          </PrivateRoute>
      </Switch>
      </UserContextDepo>
    </div>
  );
}

export default App;