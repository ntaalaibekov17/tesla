import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContext";
import ProductContextProvider from "./contexts/ProductContext";
import MainRoutes from "./MainRoutes";
import "../src/App.css";

function App() {

    return (
        <>
            <BrowserRouter>
                <AuthContextProvider>
                    <ProductContextProvider>
                        {/*<Navbar/>*/}
                        <MainRoutes />
                        <Footer/>
                    </ProductContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
        </>
    )
  //   );  return (
  //   <>
  //     <AuthContextProvider>
  //         <BrowserRouter>
  //           <ProductContextProvider>
  //           <Navbar/>
  //           <MainRoutes />
  //
  //           <Footer />
  //
  //           </ProductContextProvider>
  //
  //         </BrowserRouter>
  //     </AuthContextProvider>
  //   </>
  // );

}

export default App;
