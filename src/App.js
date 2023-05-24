
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import SignInForm from "./components/sign-in-form/sign-in-form.component";
import SignUpForm from './components/sign-up-form/sign-up-form.component';
import ResetPasswordPage from "./routes/reset-password/reset-password.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignInForm />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
