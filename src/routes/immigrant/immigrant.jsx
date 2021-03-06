import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  AppContainer,
  EnglishLanguageResults,
  Sidebar
} from "../../components";
import { AuthContext } from "../../contexts/auth";
import { useSidebarList } from "../../hooks";
import ProtectedRoute from "../../utils/protected-route";
import { Profile } from "./profile";
import { ViewModules } from "./view-modules";

export const Immigrant = ({ history }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const sidebarItems = useSidebarList(user);

  const sidebar = <Sidebar items={sidebarItems} history={history} />;

  return (
    <AppContainer sidebar={sidebar}>
      <Switch>
        <Route exact path="/immigrant">
          <Redirect
            to={{
              pathname: `/immigrant/view-modules/${user.email}`,
              state: {
                firstName: user.firstName,
                lastName: user.lastName,
                prNo: user.id
              }
            }}
          />
        </Route>
        <ProtectedRoute
          exact
          path="/immigrant/view-modules/:email"
          component={ViewModules}
        />
        <ProtectedRoute
          exact
          path="/immigrant/view-modules/:email/english"
          component={EnglishLanguageResults}
        />
        <Route exact path="/immigrant/profile" component={Profile} />
      </Switch>
    </AppContainer>
  );
};
