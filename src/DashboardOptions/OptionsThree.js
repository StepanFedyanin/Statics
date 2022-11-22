import Highcharts from 'highcharts'
const options = {
	chart: {
		type: "area",
		styledMode: false
	},
	title: {
		text: '$ 25,000',
		align: 'left',
		verticalAlign: 'top',
	},
	legend: {
		align: 'right',
		verticalAlign: 'top',
		borderWidth: 0
	},
	yAxis: {
		title: {
			text: ''
		},
		labels: {
			formatter: function () {
				return this.value + "$";
			}
		}
	},
	xAxis: {
		categories: ['25 July', '26 July', '27 July', '28 July', '29 July', '30 July', '31 July'],
	},
	tooltip: {
		backgroundColor: '#FFFFFF',
		borderColor: '#FFFFFF',
		borderRadius: 4,
		borderWidth: 3,
		boxShadow: '0px 0px 8px rgba(16, 30, 115, 0.12)'
	},
	plotOptions: {
		area: {
			marker: {
				enabled: false,
				symbol: 'circle',
				radius: 2,
				states: {
					hover: {
						enabled: true
					}
				}
			}
		},
		line: {
			connectEnds: false
		}
	},
	series: [
		{
			name: '',
			type: "spline",
			data: [49000, 79000, 35000, 62000, 4200, 222, 22222],
			color: "#FAC032",
			negativeColor: "blue",
		}

	]
};
export default options;