Highcharts.chart('pie-semi-circle-cpu', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0],
    },
    title: {

        text: null,

    },
    legend: {
        enabled: false,
    },
    tooltip: {
        pointFormat: '{series.name}: {point.percentage:.1f}%'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: false,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%']
        }
    },
    series: [{
        type: 'pie',
        name: 'CPU',
        innerSize: '50%',
        data: [
            ['Usage', 60],
            ['Free', 40],
        ]
    }]
});

$(function() {
        // Create the chart
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'pie-donut-circle-disk',
                type: 'pie',
                margin: [0, 0, 0, 0],
            },
            title: {
                text: null
            },
			legend: {
                enabled: false,
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            },
            plotOptions: {
                pie: {
                    shadow: false
                }
            },
            legend: {
	        enabled: false,
			align: 'left',
			layout: 'vertical',
			verticalAlign: 'top',
			x: 0,
			y: 0
			},
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                }
            },
            series: [{
                name: 'Browsers',
                data: [["Used",6],["Unused",4]],
                size: '60%',
                innerSize: '90%',
                showInLegend:false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    });