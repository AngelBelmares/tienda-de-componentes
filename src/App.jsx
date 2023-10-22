import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CategoriesPage } from "./pages/CategoriesPage"

export function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<CategoriesPage/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App