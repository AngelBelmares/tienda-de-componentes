import "./App.css"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { CategoriesPage } from "./pages/CategoriesPage"
import { ProductsPage } from "./pages/ProductsPage"

export function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CategoriesPage/>}></Route>
					<Route path="/products" element={<ProductsPage/>}></Route>
					<Route path="/products/:category" element={<ProductsPage/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App