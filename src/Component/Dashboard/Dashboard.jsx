import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
import './Dashboard.scss'
// import 'https://code.highcharts.com/css/highcharts.css';

function Dashboard({ options }) {
	return (
		<div>
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
		</div >
	)
}

export default Dashboard