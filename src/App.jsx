import { Home } from "./Pages/home/home";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import OrderForm from "./Pages/order/orderForm";
import Result from "./Pages/result/result";

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route strict path="/orderForm">
        <OrderForm />
      </Route>
      <Route strict path="/result">
        <Result />
      </Route>
    </>
  );
}

export default App;
