import LanguageProvider from "./context/LanguangeContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pdf from "./components/Pdf";

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pdf" component={Pdf} />
        </Switch>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
