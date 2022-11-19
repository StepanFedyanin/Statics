import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { privateRoutes } from '../../Routes/Route';
const AppRouter = () => {
	return (
		<Routes>
			{
				privateRoutes.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
		</Routes>

	)
}

export default AppRouter