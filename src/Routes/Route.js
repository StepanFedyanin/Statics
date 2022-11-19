import React from "react";
import AppointmentsPage from '../Pages/AppointmentsPage/AppointmentsPage'
import DashboardPage from '../Pages/DashboardPage/DashboardPage'

export const privateRoutes = [
	{ path: '/appointments', element: <AppointmentsPage /> },
	{ path: '/dashboard', element: <DashboardPage /> },
]