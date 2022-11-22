import React from 'react'
import DashboardPage from '../../Pages/DashboardPage/DashboardPage';
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
			<Route path="*" element={<DashboardPage />} key="DashboardPage*" />
		</Routes>

	)
}

export default AppRouter