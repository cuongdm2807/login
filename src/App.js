import { useState, useEffect } from 'react'
import { toast, ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import productApi from './api/productApi';
import { getAll } from './api/authApi'
import Signup from './page/web/Signup';
import Signin from './page/web/Signin'
import Layoutadmin from './layout/Layoutadmin'
import ListProduct from './page/admin/ListProduct'
import AddProductPage from './page/admin/AddProductPage';
import PrivateAdmin from './components/PrivateAdmin'

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getAll()
        setUsers(data)
      }
      catch (error) {
        toast.error(error.response.data)
      }
    }
    getUser()
  }, [])
  //product
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await productApi.getAll();
        setProducts(data);
      } catch (error) {
        toast.error(error.response.data);
      }
    }; 
    getProducts();
  }, []);
  const onHandleAdd = async (product) => {
    try {
      // call api
      const { data } = await productApi.add(product);
      // rerender
      setProducts([...products, data]);
      toast.success("Thêm sản phẩm thành công");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
          <Route path="admin/*" element={<PrivateAdmin><Layoutadmin /></PrivateAdmin>}>
            <Route index path="login" element={<Signin />} />
            <Route
                path="product"  
                element={
                  <ListProduct
                    products={products}
                  />
                }
              />
              <Route
                path="product/add"
                element={<AddProductPage onAdd={onHandleAdd} />}
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
