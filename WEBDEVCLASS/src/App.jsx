import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Food from "./component/Food";
import Name from "./component/Name";
import Counter from "./component/Counter";
import Counter2 from "./component/Counter2";
import Table from "./component/Table";
import Error from "./component/Error";
import Language from "./component/Language";
import Java from "./component/Java";
import Python from "./component/Python";
import UseContext from "./component/UseContext";
import Color from "./component/Color";
// import UseReducer from "./component/useReducer";
import UseMemo from "./component/UseMemo";
import UseCallback from "./component/useCallback";
import Changename from "./component/Changename";
import Useref from "./component/Useref";
import Home from "./component/home";
const App = () => {
  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Name name="HARSHIT"/>} />
          <Route path="/food" element={<Food />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counter2" element={<Counter2 />} />
          <Route path="/table" element={<Table />} />
          <Route path="/lang" element={<Language/>}>
              <Route path="java" element={<Java/>}/>
              <Route path="python" element={<Python/>}/>
          </Route>
          <Route path="/usecontext" element={<UseContext/>}/>
          <Route path="/colors" element={<Color/>}/>
          {/* <Route path="/usereducer" element={<UseReducer/>}/> */}
          <Route path="/usememo" element={<UseMemo/>}/>
          <Route path="/usecallback" element={<UseCallback/>}/>
          <Route path="/changename" element={<Changename/>}/>
          <Route path="/useref" element={<Useref/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
