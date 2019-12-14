'use strict';

$(document).ready(function(){
    var curvedLineChartData = [
        {
            label: 'September',
            color: '#00BCD4',
            lines: {
                show: true,
                lineWidth: 0.1,
                fill: 1,
                fillColor: {
                    colors: ['rgba(0,188,212,0.001)', '#00BCD4']
                }
            },
            data: [[10, 80], [20, 30], [30, 70], [40, 10], [50, 80], [60, 10], [70, 50]]
        }
    ];

    var curvedLineChartOptions = {
        series: {
            shadowSize: 0,
            curvedLines: {
                apply: true,
                active: true,
                monotonicFit: true
            },
            points: {
                show: false
            }
        },
        grid: {
            borderWidth: 1,
            borderColor: '#edf9fc',
            show: true,
            hoverable: true,
            clickable: true
        },
        xaxis: {
            tickColor: '#fff',
            tickDecimals: 0,
            font: {
                lineHeight: 13,
                style: 'normal',
                color: '#999999',
                size: 11
            }
        },
        yaxis: {
            tickColor: '#edf9fc',
            font: {
                lineHeight: 13,
                style: 'normal',
                color: '#999999',
                size: 11
            },
            min: +5
        },
        legend:{
            container: '.flot-chart-legends--curved',
            backgroundOpacity: 0.5,
            noColumns: 0,
            backgroundColor: '#fff',
            lineWidth: 0,
            labelBoxBorderColor: '#fff'
        }
    };

    if ($('.flot-curved-line')[0]) {
        $.plot($('.flot-curved-line'), curvedLineChartData, curvedLineChartOptions);
    }
});
