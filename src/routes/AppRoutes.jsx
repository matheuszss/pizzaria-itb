import{
    BrowserRouter,
    Routes,
    Route
}
from "react-router-dom"
import HomeFuncionario from "../pages/HomeFuncionario/HomeFuncionario"

const AppRoutes = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route
            path="/"
            element={<HomeFuncionario/>}>
            </Route>
        </Routes>
        
        </BrowserRouter>
    )
}
export default AppRoutes