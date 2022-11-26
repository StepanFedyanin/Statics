import React, { useContext } from 'react'
import DashboardPage from '../../Pages/DashboardPage/DashboardPage';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { privateRoutes } from '../../Routes/Route';
import { publicRoutes } from '../../Routes/Route';
import ContextInput from '../../Context/ContextInput';

const AppRouter = () => {
	const { entranceContext, setEntranceContext } = useContext(ContextInput);
	return (
		<Routes>
			{
				entranceContext.booleanInput ?
					privateRoutes.map((el) =>
						<Route path={el.path} element={el.element} key={el.path} />
					) :
					publicRoutes.map((el) =>
						<Route path={el.path} element={el.element} key={el.path} />
					)

			}
			<Route path="*" element={<DashboardPage />} key="DashboardPage*" />
		</Routes>

	)
}

export default AppRouter