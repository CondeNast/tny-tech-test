import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { Store } from "./Redux/Store";

const appRoot = document.getElementById("app-root");

ReactDOM.render(
  <Provider store={Store}>
    <ChakraProvider resetCSS>
      <App />
    </ChakraProvider>
  </Provider>,
  appRoot
);
