import { Switch, Route } from "react-router-dom";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";
import MainHeader from "./components/MainHeader";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
			<Switch>
			<Route path='/' exact>
				<Redirect to='/welcome'/>
			</Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
				<Route path="/products" exact>
          <Products />
        </Route>
				<Route path="/products/:productId">
					<ProductDetail />
				</Route>
				</Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/          										=> Component A
// our-domain.com/products  										=> Component B
// our-domain.com/product-detail/<any value>		=> Dynamic page