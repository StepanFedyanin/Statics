import React from "react";
import AppointmentsPage from '../Pages/AppointmentsPage/AppointmentsPage'
import DashboardPage from '../Pages/DashboardPage/DashboardPage'
import InputPage from '../Pages/InputPage/InputPage'
export const publicRoutes = [
	{ path: '*', element: <InputPage /> }
]
export const privateRoutes = [
	{ path: '/appointments', element: <AppointmentsPage /> },
	{ path: '/dashboard', element: <DashboardPage /> },
]