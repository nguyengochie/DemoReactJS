import './App.css';
import { useState } from 'react';
import FormInputProduct from './component/FormInputProduct';
import ListProducts from './component/ListProducts';
import { PRODUCTS } from './component/ultils/const';
import DisplayCount from './component/TieuDe';
import TieuDe from './component/TieuDe';
import DemoPreview from './component/DemoPreview';
import DemoUseEffect from './component/DemoUseEffect';
import DemoUseRef from './component/DemoUseRef';
import DemoRectMemo from './component/DemoReactMemo';
import DemoUseReducer from './component/DemoUseReducer';
import DemoUseContext from './component/DemoUseContext';
import DemoContextReducer from './component/DemoUseContext/DemoContextReducer/DemoContextReducer';

const Welcome = () => <h1>Welcome to my website</h1>;
const PleaseLogin = () => <h1>Please Sign in</h1>;

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className="App" style={{ maxWidth: 300, padding: 10 }}>
      {/* <DemoUseEffect /> */}
      {/* <DemoUseRef /> */}
      {/* <DemoRectMemo /> */}
      {/* <DemoUseReducer /> */}
      {/* <DemoUseContext /> */}
      <DemoContextReducer />
    </div>
  );
}
// function App() {
//   const [listProducts, setListProducts] = useState(PRODUCTS);

//   return (
//     <div className="App">
//       <FormInputProduct setListProducts={setListProducts} />
//       <ListProducts onClick={onClick} listProducts={listProducts} />
//     </div>
//   );
// }

export default App;
