
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => {
 return (
<div>shop</div>
 ) 
}

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
