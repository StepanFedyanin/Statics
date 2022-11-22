import Highcharts from 'highcharts'
const options = {
	chart: {
		type: "area",
		styledMode: false
	},
	title: {
		text: '$ 100,000',
		align: 'left',
		verticalAlign: 'top',
	},
	legend: {
		align: 'right',
		verticalAlign: 'top',
		borderWidth: 0,
		showInLegend: "false"
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
		categories: ['1 July', '8 July', '16 July', '24 July', '31 July'],
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
		column: {
			showInLegend: false
		},
		line: {
			connectEnds: false
		}
	},
	series: [
		{
			name: '',
			type: "spline",
			data: [49000, 79000, 35000, 62000, 4200],
			color: "#336CFB",
			// negativeColor: "blue",
		}

	]
};
export default options;