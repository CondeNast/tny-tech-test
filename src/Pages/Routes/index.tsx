import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLayout from "../../Components/PageLayout";
import ArticlePage from "../ArticlePage";
import ErrorPage from "../ErrorPage";
import HomePage from "../Homepage";
import PageNotFound from "../PageNotFound";

const Routes = () => {
  // Force Light Mode
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, []);

  return (
    <Router>
      <PageLayout>
        <Switch>
          <Route
            exact
            path={["/", "/entertainment", "/business", "/technology"]}
          >
            <HomePage />
          </Route>
          <Route exact path="/err">
            <ErrorPage />
          </Route>
          <Route path="/article/:id">
            <ArticlePage />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
};

export default Routes;
