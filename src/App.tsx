import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import RouteComponent from "./app/routes";
import LoadingProvider from "app/components/LoadingProvider";
import ScrollToTopProvider from "app/components/ScrollToTopProvider";

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <LoadingProvider>
          <RouteComponent />
        </LoadingProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
