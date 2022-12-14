import Highcharts from 'highcharts'
const options = {
	chart: {
		type: "area",
		styledMode: false
	},
	title: {
		text: 'Hospital Survey',
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
				return this.value;
			}
		}
	},
	xAxis: {
		categories: ['2020-1', '2020-2', '2020-3', '2020-4', '2020-5', '2020-6',
			'2020-7', '2020-8', '2020-9', '2020-10', '2020-11', '2020-12'],
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
			name: 'Patients 2019',
			type: "spline",
			data: [50, 80, 120, 110, 105, 85, 100, 160, 105, 155, 230, 175],
			color: "#FAC032",
			negativeColor: "blue",
		},
		{
			name: 'Patients 2020',
			type: "spline",
			data: [145, 105, 210, 110, 170, 140, 190, 140, 220, 170, 245, 250],
			color: "#336CFB",
			negativeColor: "blue",
			fillColor: {
				linearGradient: {
					x1: 0,
					y1: 0,
					x2: 0,
					y2: 1
				},
				stops: [
					[0, Highcharts.getOptions().colors[0]],
					[1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
				]
			}
		}

	]
};
export default options;