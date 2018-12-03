/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.0
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */


(function(window, document, $, undefined) {
    'use strict';

    if (typeof $ === 'undefined') {
        throw new Error('This application\'s JavaScript requires jQuery');
    }

    $(function() {

        // Restore body classes
        // -----------------------------------
        var $body = $('body');
        new StateToggler().restoreState($body);

        // enable settings toggle after restore
        $('#chk-fixed').prop('checked', $body.hasClass('layout-fixed'));
        $('#chk-collapsed').prop('checked', $body.hasClass('aside-collapsed'));
        $('#chk-collapsed-text').prop('checked', $body.hasClass('aside-collapsed-text'));
        $('#chk-boxed').prop('checked', $body.hasClass('layout-boxed'));
        $('#chk-float').prop('checked', $body.hasClass('aside-float'));
        $('#chk-hover').prop('checked', $body.hasClass('aside-hover'));

        // When ready display the offsidebar
        $('.offsidebar.d-none').removeClass('d-none');

        // Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            options.async = true;
        });

    }); // doc ready

})(window, document, window.jQuery);
// Knob chart
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initKnob);

    function initKnob() {

        if (!$.fn.knob) return;

        var knobLoaderOptions1 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info']
        };
        $('#knob-chart1').knob(knobLoaderOptions1);

        var knobLoaderOptions2 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['purple'],
            readOnly: true
        };
        $('#knob-chart2').knob(knobLoaderOptions2);

        var knobLoaderOptions3 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['info'],
            bgColor: APP_COLORS['gray'],
            angleOffset: -125,
            angleArc: 250
        };
        $('#knob-chart3').knob(knobLoaderOptions3);

        var knobLoaderOptions4 = {
            width: '50%', // responsive
            displayInput: true,
            fgColor: APP_COLORS['pink'],
            displayPrevious: true,
            thickness: 0.1,
            lineCap: 'round'
        };
        $('#knob-chart4').knob(knobLoaderOptions4);

    }

})(window, document, window.jQuery);
// Chart JS
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initChartJS);

    function initChartJS() {

        if (typeof Chart === 'undefined') return;

        // random values for demo
        var rFactor = function() {
            return Math.round(Math.random() * 100);
        };

        // Line chart
        // -----------------------------------

        var lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                pointBorderColor: '#fff',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }, {
                label: 'My Second dataset',
                backgroundColor: 'rgba(35,183,229,0.2)',
                borderColor: 'rgba(35,183,229,1)',
                pointBorderColor: '#fff',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }]
        };

        var lineOptions = {
            legend: {
                display: false
            }
        };
        var linectx = document.getElementById('chartjs-linechart').getContext('2d');
        var lineChart = new Chart(linectx, {
            data: lineData,
            type: 'line',
            options: lineOptions
        });

        // Bar chart
        // -----------------------------------

        var barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                backgroundColor: '#23b7e5',
                borderColor: '#23b7e5',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }, {
                backgroundColor: '#5d9cec',
                borderColor: '#5d9cec',
                data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
            }]
        };

        var barOptions = {
            legend: {
                display: false
            }
        };
        var barctx = document.getElementById('chartjs-barchart').getContext('2d');
        var barChart = new Chart(barctx, {
            data: barData,
            type: 'bar',
            options: barOptions
        });

        //  Doughnut chart
        // -----------------------------------

        var doughnutData = {
            labels: [
                'Purple',
                'Yellow',
                'Blue'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ],
                hoverBackgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ]
            }]
        };

        var doughnutOptions = {
            legend: {
                display: false
            }
        };
        var doughnutctx = document.getElementById('chartjs-doughnutchart').getContext('2d');
        var doughnutChart = new Chart(doughnutctx, {
            data: doughnutData,
            type: 'doughnut',
            options: doughnutOptions
        });

        // Pie chart
        // -----------------------------------

        var pieData = {
            labels: [
                'Purple',
                'Yellow',
                'Blue'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ],
                hoverBackgroundColor: [
                    '#7266ba',
                    '#fad732',
                    '#23b7e5'
                ]
            }]
        };

        var pieOptions = {
            legend: {
                display: false
            }
        };
        var piectx = document.getElementById('chartjs-piechart').getContext('2d');
        var pieChart = new Chart(piectx, {
            data: pieData,
            type: 'pie',
            options: pieOptions
        });

        // Polar chart
        // -----------------------------------

        var polarData = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3
                ],
                backgroundColor: [
                    '#f532e5',
                    '#7266ba',
                    '#f532e5',
                    '#7266ba'
                ],
                label: 'My dataset' // for legend
            }],
            labels: [
                'Label 1',
                'Label 2',
                'Label 3',
                'Label 4'
            ]
        };

        var polarOptions = {
            legend: {
                display: false
            }
        };
        var polarctx = document.getElementById('chartjs-polarchart').getContext('2d');
        var polarChart = new Chart(polarctx, {
            data: polarData,
            type: 'polarArea',
            options: polarOptions
        });

        // Radar chart
        // -----------------------------------

        var radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgba(114,102,186,0.2)',
                borderColor: 'rgba(114,102,186,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            }, {
                label: 'My Second dataset',
                backgroundColor: 'rgba(151,187,205,0.2)',
                borderColor: 'rgba(151,187,205,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }]
        };

        var radarOptions = {
            legend: {
                display: false
            }
        };
        var radarctx = document.getElementById('chartjs-radarchart').getContext('2d');
        var radarChart = new Chart(radarctx, {
            data: radarData,
            type: 'radar',
            options: radarOptions
        });

    }

})(window, document, window.jQuery);
// Chartist
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initChartists);

    function initChartists() {

        if (typeof Chartist === 'undefined') return;

        // Bar bipolar
        // -----------------------------------
        var data1 = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
                [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
        };

        var options1 = {
            high: 10,
            low: -10,
            height: 280,
            axisX: {
                labelInterpolationFnc: function(value, index) {
                    return index % 2 === 0 ? value : null;
                }
            }
        };

        new Chartist.Bar('#ct-bar1', data1, options1);

        // Bar Horizontal
        // -----------------------------------
        new Chartist.Bar('#ct-bar2', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
                [5, 4, 3, 7, 5, 10, 3],
                [3, 2, 9, 5, 4, 6, 4]
            ]
        }, {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            height: 280,
            axisY: {
                offset: 70
            }
        });

        // Line
        // -----------------------------------
        new Chartist.Line('#ct-line1', {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
                [12, 9, 7, 8, 5],
                [2, 1, 3.5, 7, 3],
                [1, 3, 4, 5, 6]
            ]
        }, {
            fullWidth: true,
            height: 280,
            chartPadding: {
                right: 40
            }
        });


        // SVG Animation
        // -----------------------------------

        var chart1 = new Chartist.Line('#ct-line3', {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
                [1, 5, 2, 5, 4, 3],
                [2, 3, 4, 8, 1, 2],
                [5, 4, 3, 2, 1, 0.5]
            ]
        }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            height: 300
        });

        chart1.on('draw', function(data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 2000 * data.index,
                        dur: 2000,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
        });


        // Slim animation
        // -----------------------------------


        var chart = new Chartist.Line('#ct-line2', {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
                [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
        }, {
            low: 0,
            height: 300
        });

        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
            delays = 80,
            durations = 500;

        // Once the chart is fully created we reset the sequence
        chart.on('created', function() {
            seq = 0;
        });

        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        chart.on('draw', function(data) {
            seq++;

            if (data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                    opacity: {
                        // The delay when we like to start the animation
                        begin: seq * delays + 1000,
                        // Duration of the animation
                        dur: durations,
                        // The value where the animation should start
                        from: 0,
                        // The value where it should end
                        to: 1
                    }
                });
            } else if (data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                    y: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.y + 100,
                        to: data.y,
                        // We can specify an easing function from Chartist.Svg.Easing
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                    x: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 100,
                        to: data.x,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'point') {
                data.element.animate({
                    x1: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    x2: {
                        begin: seq * delays,
                        dur: durations,
                        from: data.x - 10,
                        to: data.x,
                        easing: 'easeOutQuart'
                    },
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'easeOutQuart'
                    }
                });
            } else if (data.type === 'grid') {
                // Using data.axis we get x or y which we can use to construct our animation definition objects
                var pos1Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '1'] - 30,
                    to: data[data.axis.units.pos + '1'],
                    easing: 'easeOutQuart'
                };

                var pos2Animation = {
                    begin: seq * delays,
                    dur: durations,
                    from: data[data.axis.units.pos + '2'] - 100,
                    to: data[data.axis.units.pos + '2'],
                    easing: 'easeOutQuart'
                };

                var animations = {};
                animations[data.axis.units.pos + '1'] = pos1Animation;
                animations[data.axis.units.pos + '2'] = pos2Animation;
                animations['opacity'] = {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                };

                data.element.animate(animations);
            }
        });

        // For the sake of the example we update the chart every time it's created with a delay of 10 seconds
        chart.on('created', function() {
            if (window.__exampleAnimateTimeout) {
                clearTimeout(window.__exampleAnimateTimeout);
                window.__exampleAnimateTimeout = null;
            }
            window.__exampleAnimateTimeout = setTimeout(chart.update.bind(chart), 12000);
        });

    }

})(window, document, window.jQuery);
// Easypie chart Loader
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initEasyPieChart);

    function initEasyPieChart() {

        if (!$.fn.easyPieChart) return;

        // Usage via data attributes
        // <div class="easypie-chart" data-easypiechart data-percent="X" data-optionName="value"></div>
        $('[data-easypiechart]').each(function() {
            var $elem = $(this);
            var options = $elem.data();
            $elem.easyPieChart(options || {});
        });

        // programmatic usage
        var pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['success'],
            trackColor: false,
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'circle'
        };
        $('#easypie1').easyPieChart(pieOptions1);

        var pieOptions2 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['warning'],
            trackColor: false,
            scaleColor: false,
            lineWidth: 4,
            lineCap: 'circle'
        };
        $('#easypie2').easyPieChart(pieOptions2);

        var pieOptions3 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['danger'],
            trackColor: false,
            scaleColor: APP_COLORS['gray'],
            lineWidth: 15,
            lineCap: 'circle'
        };
        $('#easypie3').easyPieChart(pieOptions3);

        var pieOptions4 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: APP_COLORS['danger'],
            trackColor: APP_COLORS['yellow'],
            scaleColor: APP_COLORS['gray-dark'],
            lineWidth: 15,
            lineCap: 'circle'
        };
        $('#easypie4').easyPieChart(pieOptions4);

    }

})(window, document, window.jQuery);
// CHART SPLINE
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';

    $(initFlotSpline);

    function initFlotSpline() {

        var data = [{
            "label": "Uniques",
            "color": "#768294",
            "data": [
                ["Mar", 70],
                ["Apr", 85],
                ["May", 59],
                ["Jun", 93],
                ["Jul", 66],
                ["Aug", 86],
                ["Sep", 60]
            ]
        }, {
            "label": "Recurrent",
            "color": "#1f92fe",
            "data": [
                ["Mar", 21],
                ["Apr", 12],
                ["May", 27],
                ["Jun", 24],
                ["Jul", 16],
                ["Aug", 39],
                ["Sep", 15]
            ]
        }];

        var datav2 = [{
            "label": "Hours",
            "color": "#23b7e5",
            "data": [
                ["Jan", 70],
                ["Feb", 20],
                ["Mar", 70],
                ["Apr", 85],
                ["May", 59],
                ["Jun", 93],
                ["Jul", 66],
                ["Aug", 86],
                ["Sep", 60],
                ["Oct", 60],
                ["Nov", 12],
                ["Dec", 50]
            ]
        }, {
            "label": "Commits",
            "color": "#7266ba",
            "data": [
                ["Jan", 20],
                ["Feb", 70],
                ["Mar", 30],
                ["Apr", 50],
                ["May", 85],
                ["Jun", 43],
                ["Jul", 96],
                ["Aug", 36],
                ["Sep", 80],
                ["Oct", 10],
                ["Nov", 72],
                ["Dec", 31]
            ]
        }];

        var datav3 = [{
            "label": "Home",
            "color": "#1ba3cd",
            "data": [
                ["1", 38],
                ["2", 40],
                ["3", 42],
                ["4", 48],
                ["5", 50],
                ["6", 70],
                ["7", 145],
                ["8", 70],
                ["9", 59],
                ["10", 48],
                ["11", 38],
                ["12", 29],
                ["13", 30],
                ["14", 22],
                ["15", 28]
            ]
        }, {
            "label": "Overall",
            "color": "#3a3f51",
            "data": [
                ["1", 16],
                ["2", 18],
                ["3", 17],
                ["4", 16],
                ["5", 30],
                ["6", 110],
                ["7", 19],
                ["8", 18],
                ["9", 110],
                ["10", 19],
                ["11", 16],
                ["12", 10],
                ["13", 20],
                ["14", 10],
                ["15", 20]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/ ;
                }
            },
            shadowSize: 0
        };

        var chart = $('.chart-spline');
        if (chart.length)
            $.plot(chart, data, options);

        var chartv2 = $('.chart-splinev2');
        if (chartv2.length)
            $.plot(chartv2, datav2, options);

        var chartv3 = $('.chart-splinev3');
        if (chartv3.length)
            $.plot(chartv3, datav3, options);

    }

})(window, document, window.jQuery);

// CHART AREA
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotArea)

    function initFlotArea() {

        var data = [{
            "label": "Uniques",
            "color": "#aad874",
            "data": [
                ["Mar", 50],
                ["Apr", 84],
                ["May", 52],
                ["Jun", 88],
                ["Jul", 69],
                ["Aug", 92],
                ["Sep", 58]
            ]
        }, {
            "label": "Recurrent",
            "color": "#7dc7df",
            "data": [
                ["Mar", 13],
                ["Apr", 44],
                ["May", 44],
                ["Jun", 27],
                ["Jul", 38],
                ["Aug", 11],
                ["Sep", 39]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: true,
                    fill: 0.8
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                tickColor: '#eee',
                // position: 'right' or 'left'
                tickFormatter: function(v) {
                    return v + ' visitors';
                }
            },
            shadowSize: 0
        };

        var chart = $('.chart-area');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);

// CHART BAR
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotBar)

    function initFlotBar() {

        var data = [{
            "label": "Sales",
            "color": "#9cd159",
            "data": [
                ["Jan", 27],
                ["Feb", 82],
                ["Mar", 56],
                ["Apr", 14],
                ["May", 28],
                ["Jun", 77],
                ["Jul", 23],
                ["Aug", 49],
                ["Sep", 81],
                ["Oct", 20]
            ]
        }];

        var options = {
            series: {
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-bar');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);


// CHART BAR STACKED
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotBarStacked);

    function initFlotBarStacked() {

        var data = [{
            "label": "Tweets",
            "color": "#51bff2",
            "data": [
                ["Jan", 56],
                ["Feb", 81],
                ["Mar", 97],
                ["Apr", 44],
                ["May", 24],
                ["Jun", 85],
                ["Jul", 94],
                ["Aug", 78],
                ["Sep", 52],
                ["Oct", 17],
                ["Nov", 90],
                ["Dec", 62]
            ]
        }, {
            "label": "Likes",
            "color": "#4a8ef1",
            "data": [
                ["Jan", 69],
                ["Feb", 135],
                ["Mar", 14],
                ["Apr", 100],
                ["May", 100],
                ["Jun", 62],
                ["Jul", 115],
                ["Aug", 22],
                ["Sep", 104],
                ["Oct", 132],
                ["Nov", 72],
                ["Dec", 61]
            ]
        }, {
            "label": "+1",
            "color": "#f0693a",
            "data": [
                ["Jan", 29],
                ["Feb", 36],
                ["Mar", 47],
                ["Apr", 21],
                ["May", 5],
                ["Jun", 49],
                ["Jul", 37],
                ["Aug", 44],
                ["Sep", 28],
                ["Oct", 9],
                ["Nov", 12],
                ["Dec", 35]
            ]
        }];

        var datav2 = [{
            "label": "Pending",
            "color": "#9289ca",
            "data": [
                ["Pj1", 86],
                ["Pj2", 136],
                ["Pj3", 97],
                ["Pj4", 110],
                ["Pj5", 62],
                ["Pj6", 85],
                ["Pj7", 115],
                ["Pj8", 78],
                ["Pj9", 104],
                ["Pj10", 82],
                ["Pj11", 97],
                ["Pj12", 110],
                ["Pj13", 62]
            ]
        }, {
            "label": "Assigned",
            "color": "#7266ba",
            "data": [
                ["Pj1", 49],
                ["Pj2", 81],
                ["Pj3", 47],
                ["Pj4", 44],
                ["Pj5", 100],
                ["Pj6", 49],
                ["Pj7", 94],
                ["Pj8", 44],
                ["Pj9", 52],
                ["Pj10", 17],
                ["Pj11", 47],
                ["Pj12", 44],
                ["Pj13", 100]
            ]
        }, {
            "label": "Completed",
            "color": "#564aa3",
            "data": [
                ["Pj1", 29],
                ["Pj2", 56],
                ["Pj3", 14],
                ["Pj4", 21],
                ["Pj5", 5],
                ["Pj6", 24],
                ["Pj7", 37],
                ["Pj8", 22],
                ["Pj9", 28],
                ["Pj10", 9],
                ["Pj11", 14],
                ["Pj12", 21],
                ["Pj13", 5]
            ]
        }];

        var options = {
            series: {
                stack: true,
                bars: {
                    align: 'center',
                    lineWidth: 0,
                    show: true,
                    barWidth: 0.6,
                    fill: 0.9
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-bar-stacked');
        if (chart.length)
            $.plot(chart, data, options);

        var chartv2 = $('.chart-bar-stackedv2');
        if (chartv2.length)
            $.plot(chartv2, datav2, options);

    }

})(window, document, window.jQuery);

// CHART DONUT
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotDonut);

    function initFlotDonut() {

        var data = [{
            "color": "#39C558",
            "data": 60,
            "label": "Coffee"
        }, {
            "color": "#00b4ff",
            "data": 90,
            "label": "CSS"
        }, {
            "color": "#FFBE41",
            "data": 50,
            "label": "LESS"
        }, {
            "color": "#ff3e43",
            "data": 80,
            "label": "Jade"
        }, {
            "color": "#937fc7",
            "data": 116,
            "label": "AngularJS"
        }];

        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0.5 // This makes the donut shape
                }
            }
        };

        var chart = $('.chart-donut');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);

// CHART LINE
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotLine)

    function initFlotLine() {

        var data = [{
            "label": "Complete",
            "color": "#5ab1ef",
            "data": [
                ["Jan", 188],
                ["Feb", 183],
                ["Mar", 185],
                ["Apr", 199],
                ["May", 190],
                ["Jun", 194],
                ["Jul", 194],
                ["Aug", 184],
                ["Sep", 74]
            ]
        }, {
            "label": "In Progress",
            "color": "#f5994e",
            "data": [
                ["Jan", 153],
                ["Feb", 116],
                ["Mar", 136],
                ["Apr", 119],
                ["May", 148],
                ["Jun", 133],
                ["Jul", 118],
                ["Aug", 161],
                ["Sep", 59]
            ]
        }, {
            "label": "Cancelled",
            "color": "#d87a80",
            "data": [
                ["Jan", 111],
                ["Feb", 97],
                ["Mar", 93],
                ["Apr", 110],
                ["May", 102],
                ["Jun", 93],
                ["Jul", 92],
                ["Aug", 92],
                ["Sep", 44]
            ]
        }];

        var options = {
            series: {
                lines: {
                    show: true,
                    fill: 0.01
                },
                points: {
                    show: true,
                    radius: 4
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) { return x + ' : ' + y; }
            },
            xaxis: {
                tickColor: '#eee',
                mode: 'categories'
            },
            yaxis: {
                // position: 'right' or 'left'
                tickColor: '#eee'
            },
            shadowSize: 0
        };

        var chart = $('.chart-line');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);


// CHART PIE
// -----------------------------------
(function(window, document, $, undefined) {
    'use strict';


    $(initFlotPie);

    function initFlotPie() {

        var data = [{
            "label": "jQuery",
            "color": "#4acab4",
            "data": 30
        }, {
            "label": "CSS",
            "color": "#ffea88",
            "data": 40
        }, {
            "label": "LESS",
            "color": "#ff8153",
            "data": 90
        }, {
            "label": "SASS",
            "color": "#878bb6",
            "data": 75
        }, {
            "label": "Jade",
            "color": "#b2d767",
            "data": 120
        }];

        var options = {
            series: {
                pie: {
                    show: true,
                    innerRadius: 0,
                    label: {
                        show: true,
                        radius: 0.8,
                        formatter: function(label, series) {
                            return '<div class="flot-pie-label">' +
                                //label + ' : ' +
                                Math.round(series.percent) +
                                '%</div>';
                        },
                        background: {
                            opacity: 0.8,
                            color: '#222'
                        }
                    }
                }
            }
        };

        var chart = $('.chart-pie');
        if (chart.length)
            $.plot(chart, data, options);

    }

})(window, document, window.jQuery);
// Morris
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initMorris);

    function initMorris() {

        if (typeof Morris === 'undefined') return;

        var chartdata = [
            { y: "2006", a: 100, b: 90 },
            { y: "2007", a: 75, b: 65 },
            { y: "2008", a: 50, b: 40 },
            { y: "2009", a: 75, b: 65 },
            { y: "2010", a: 50, b: 40 },
            { y: "2011", a: 75, b: 65 },
            { y: "2012", a: 100, b: 90 }
        ];

        var donutdata = [
            { label: "Download Sales", value: 12 },
            { label: "In-Store Sales", value: 30 },
            { label: "Mail-Order Sales", value: 20 }
        ];

        // Line Chart
        // -----------------------------------

        new Morris.Line({
            element: 'morris-line',
            data: chartdata,
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ["#31C0BE", "#7a92a3"],
            resize: true
        });

        // Donut Chart
        // -----------------------------------
        new Morris.Donut({
            element: 'morris-donut',
            data: donutdata,
            colors: ['#f05050', '#fad732', '#ff902b'],
            resize: true
        });

        // Bar Chart
        // -----------------------------------
        new Morris.Bar({
            element: 'morris-bar',
            data: chartdata,
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Series A", "Series B"],
            xLabelMargin: 2,
            barColors: ['#23b7e5', '#f05050'],
            resize: true
        });

        // Area Chart
        // -----------------------------------
        new Morris.Area({
            element: 'morris-area',
            data: chartdata,
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ['#7266ba', '#23b7e5'],
            resize: true
        });

    }

})(window, document, window.jQuery);
// Rickshaw
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initMorris);

    function initMorris() {

        if (typeof Rickshaw === 'undefined') return;

        var seriesData = [
            [],
            [],
            []
        ];
        var random = new Rickshaw.Fixtures.RandomData(150);

        for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
        }

        var series1 = [{
            color: "#c05020",
            data: seriesData[0],
            name: 'New York'
        }, {
            color: "#30c020",
            data: seriesData[1],
            name: 'London'
        }, {
            color: "#6060c0",
            data: seriesData[2],
            name: 'Tokyo'
        }];

        var graph1 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw1"),
            series: series1,
            renderer: 'area'
        });

        graph1.render();


        // Graph 2
        // -----------------------------------

        var graph2 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw2"),
            renderer: 'area',
            stroke: true,
            series: [{
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#f05050'
            }, {
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#fad732'
            }]
        });

        graph2.render();

        // Graph 3
        // -----------------------------------


        var graph3 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw3"),
            renderer: 'line',
            series: [{
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#7266ba'
            }, {
                data: [{ x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 }],
                color: '#23b7e5'
            }]
        });
        graph3.render();


        // Graph 4
        // -----------------------------------


        var graph4 = new Rickshaw.Graph({
            element: document.querySelector("#rickshaw4"),
            renderer: 'bar',
            series: [{
                data: [{ x: 0, y: 40 }, { x: 1, y: 49 }, { x: 2, y: 38 }, { x: 3, y: 30 }, { x: 4, y: 32 }],
                color: '#fad732'
            }, {
                data: [{ x: 0, y: 20 }, { x: 1, y: 24 }, { x: 2, y: 19 }, { x: 3, y: 15 }, { x: 4, y: 16 }],
                color: '#ff902b'

            }]
        });
        graph4.render();

    }

})(window, document, window.jQuery);
// SPARKLINE
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSparkline);

    function initSparkline() {

        $('[data-sparkline]').each(initSparkLine);

        function initSparkLine() {
            var $element = $(this),
                options = $element.data(),
                values = options.values && options.values.split(',');

            options.type = options.type || 'bar'; // default chart is bar
            options.disableHiddenCheck = true;

            $element.sparkline(values, options);

            if (options.resize) {
                $(window).resize(function() {
                    $element.sparkline(values, options);
                });
            }
        }
    }

})(window, document, window.jQuery);
// Demo Cards
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initCardDemo);

    function initCardDemo() {

        /**
         * This functions show a demonstration of how to use
         * the card tools system via custom event.
         */

        $('.card.card-demo')
            .on('card.refresh', function(e, card) {

                // perform any action when a .card triggers a refresh event
                setTimeout(function() {

                    // when the action is done, just remove the spinner class
                    card.removeSpinner();

                }, 3000);

            })
            .on('hide.bs.collapse', function(event) {

                console.log('Card Collapse Hide');

            })
            .on('show.bs.collapse', function(event) {

                console.log('Card Collapse Show');

            })
            .on('card.remove', function(event, card, deferred) {
                console.log('Removing Card');
                // Call resolve() to continue removing the card
                // perform checks to avoid removing card if some user action is required
                deferred.resolve();
            })
            .on('card.removed', function(event, card) {

                console.log('Removed Card');

            });

    }

})(window, document, window.jQuery);
// Nestable demo
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initNestable);

    function initNestable() {

        if (!$.fn.nestable) return;

        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };

        // activate Nestable for list 1
        $('#nestable').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable2').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));

        $('.js-nestable-action').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: notify.js
 * Create toggleable notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 * [data-toggle="notify"]
 * [data-options="options in json format" ]
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initNotify);

    function initNotify() {

        var Selector = '[data-notify]',
            autoloadSelector = '[data-onload]',
            doc = $(document);

        $(Selector).each(function() {

            var $this = $(this),
                onload = $this.data('onload');

            if (onload !== undefined) {
                setTimeout(function() {
                    notifyNow($this);
                }, 800);
            }

            $this.on('click', function(e) {
                e.preventDefault();
                notifyNow($this);
            });

        });

    }

    function notifyNow($element) {
        var message = $element.data('message'),
            options = $element.data('options');

        if (!message)
            $.error('Notify: No message specified');

        $.notify(message, options || {});
    }


})(window, document, window.jQuery);


/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */

(function($, window, document) {

    var containers = {},
        messages = {},

        notify = function(options) {

            if ($.type(options) == 'string') {
                options = { message: options };
            }

            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) == 'string' ? { status: arguments[1] } : arguments[1]);
            }

            return (new Message(options)).show();
        },
        closeAll = function(group, instantly) {
            if (group) {
                for (var id in messages) { if (group === messages[id].group) messages[id].close(instantly); }
            } else {
                for (var id in messages) { messages[id].close(instantly); }
            }
        };

    var Message = function(options) {

        var $this = this;

        this.options = $.extend({}, Message.defaults, options);

        this.uuid = "ID" + (new Date().getTime()) + "RAND" + (Math.ceil(Math.random() * 100000));
        this.element = $([
            // alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
            '<a class="close">&times;</a>',
            '<div>' + this.options.message + '</div>',
            '</div>'

        ].join('')).data("notifyMessage", this);

        // status
        if (this.options.status) {
            this.element.addClass('alert alert-' + this.options.status);
            this.currentstatus = this.options.status;
        }

        this.group = this.options.group;

        messages[this.uuid] = this;

        if (!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-' + this.options.pos + '"></div>').appendTo('body').on("click", ".uk-notify-message", function() {
                $(this).data("notifyMessage").close();
            });
        }
    };


    $.extend(Message.prototype, {

        uuid: false,
        element: false,
        timout: false,
        currentstatus: "",
        group: false,

        show: function() {

            if (this.element.is(":visible")) return;

            var $this = this;

            containers[this.options.pos].show().prepend(this.element);

            var marginbottom = parseInt(this.element.css("margin-bottom"), 10);

            this.element.css({ "opacity": 0, "margin-top": -1 * this.element.outerHeight(), "margin-bottom": 0 }).animate({ "opacity": 1, "margin-top": 0, "margin-bottom": marginbottom }, function() {

                if ($this.options.timeout) {

                    var closefn = function() { $this.close(); };

                    $this.timeout = setTimeout(closefn, $this.options.timeout);

                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout); }
                    );
                }

            });

            return this;
        },

        close: function(instantly) {

            var $this = this,
                finalize = function() {
                    $this.element.remove();

                    if (!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }

                    delete messages[$this.uuid];
                };

            if (this.timeout) clearTimeout(this.timeout);

            if (instantly) {
                finalize();
            } else {
                this.element.animate({ "opacity": 0, "margin-top": -1 * this.element.outerHeight(), "margin-bottom": 0 }, function() {
                    finalize();
                });
            }
        },

        content: function(html) {

            var container = this.element.find(">div");

            if (!html) {
                return container.html();
            }

            container.html(html);

            return this;
        },

        status: function(status) {

            if (!status) {
                return this.currentstatus;
            }

            this.element.removeClass('alert alert-' + this.currentstatus).addClass('alert alert-' + status);

            this.currentstatus = status;

            return this;
        }
    });

    Message.defaults = {
        message: "",
        status: "normal",
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };


    $["notify"] = notify;
    $["notify"].message = Message;
    $["notify"].closeAll = closeAll;

    return notify;

}(jQuery, window, document));
/**=========================================================
 * Module: play-animation.js
 * Provides a simple way to run animation with a click
 * Targeted elements must have
 *   [data-animate"]
 *   [data-target="Target element affected by the animation"]
 *   [data-play="Animation name (http://daneden.github.io/animate.css/)"]
 *
 * Requires animo.js
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initPlayAnimation)

    function initPlayAnimation() {

        var Selector = '[data-animate]';

        // Run click triggered animations
        $(document).on('click', Selector, function() {

            var $this = $(this),
                targetSel = $this.data('target'),
                animation = $this.data('play') || 'bounce';

            if (targetSel) {
                $(targetSel).animo({ animation: animation });
            }

        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: portlet.js
 * Drag and drop any card to change its position
 * The Selector should could be applied to any object that contains
 * card, so .col-* element are ideal.
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    var STORAGE_KEY_NAME = 'jq-portletState';

    $(initPortlets);

    function initPortlets() {

        // Component is NOT optional
        if (!$.fn.sortable) return;

        var Selector = '[data-toggle="portlet"]';

        $(Selector).sortable({
            connectWith:          Selector,
            items:                'div.card',
            handle:               '.portlet-handler',
            opacity:              0.7,
            placeholder:          'portlet box-placeholder',
            cancel:               '.portlet-cancel',
            forcePlaceholderSize: true,
            iframeFix:            false,
            tolerance:            'pointer',
            helper:               'original',
            revert:               200,
            forceHelperSize:      true,
            update:               savePortletOrder,
            create:               loadPortletOrder
        })
        // optionally disables mouse selection
        //.disableSelection()
        ;

    }

    function savePortletOrder(event, ui) {

        var data = Storages.localStorage.get(STORAGE_KEY_NAME);

        if (!data) { data = {}; }

        data[this.id] = $(this).sortable('toArray');

        if (data) {
            Storages.localStorage.set(STORAGE_KEY_NAME, data);
        }

    }

    function loadPortletOrder() {

        var data = Storages.localStorage.get(STORAGE_KEY_NAME);

        if (data) {

            var porletId = this.id,
                cards = data[porletId];

            if (cards) {
                var portlet = $('#' + porletId);

                $.each(cards, function(index, value) {
                    $('#' + value).appendTo(portlet);
                });
            }

        }

    }

    // Reset porlet save state
    window.resetPorlets = function(e) {
        Storages.localStorage.remove(STORAGE_KEY_NAME);
        // reload the page
        window.location.reload();
    }

})(window, document, window.jQuery);
// HTML5 Sortable demo
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSortable);

    function initSortable() {

        if (typeof sortable === 'undefined') return;

        sortable('.sortable', {
            forcePlaceholderSize: true,
            placeholder: '<div class="box-placeholder p0 m0"><div></div></div>'
        });

    }

})(window, document, window.jQuery);
// Sweet Alert
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSweetAlert);

    function initSweetAlert() {

        $('#swal-demo1').on('click', function(e) {
            e.preventDefault();
            swal("Here's a message!")
        });

        $('#swal-demo2').on('click', function(e) {
            e.preventDefault();
            swal("Here's a message!", "It's pretty, isn't it?")
        });

        $('#swal-demo3').on('click', function(e) {
            e.preventDefault();
            swal("Good job!", "You clicked the button!", "success")
        });

        $('#swal-demo4').on('click', function(e) {
            e.preventDefault();
            swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                },
                function() {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                });

        });

        $('#swal-demo5').on('click', function(e) {
            e.preventDefault();
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function(isConfirm) {
                if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                }
            });

        });

    }

})(window, document, window.jQuery);
// Start Bootstrap JS
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initBootstrap);

    function initBootstrap() {

        // POPOVER
        // -----------------------------------

        $('[data-toggle="popover"]').popover();

        // TOOLTIP
        // -----------------------------------

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

        // DROPDOWN INPUTS
        // -----------------------------------
        $('.dropdown input').on('click focus', function(event) {
            event.stopPropagation();
        });

    }

})(window, document, window.jQuery);
// Module: card-tools
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initCardDismiss);
    $(initCardCollapse);
    $(initCardRefresh);


    /**
     * Dismiss cards
     * [data-tool="card-dismiss"]
     *
     * Requires animo.js
     */
    function initCardDismiss() {
        var cardSelector = '[data-tool="card-dismiss"]',
            removeEvent = 'card.remove',
            removedEvent = 'card.removed';

        $(document).on('click', cardSelector, function() {

            // find the first parent card
            var parent = $(this).closest('.card');
            var deferred = new $.Deferred();

            // Trigger the event and finally remove the element
            parent.trigger(removeEvent, [parent, deferred]);
            // needs resolve() to be called
            deferred.done(removeElement);

            function removeElement() {
                parent.animo({ animation: 'bounceOut' }, destroyCard);
            }

            function destroyCard() {
                var col = parent.parent();

                $.when(parent.trigger(removedEvent, [parent]))
                    .done(function() {
                        parent.remove();
                        // remove the parent if it is a row and is empty and not a sortable (portlet)
                        col
                            .trigger(removedEvent) // An event to catch when the card has been removed from DOM
                            .filter(function() {
                                var el = $(this);
                                return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
                            }).remove();
                    });
            }
        });
    }


    /**
     * Collapse cards
     * [data-tool="card-collapse"]
     *
     * Also uses browser storage to keep track
     * of cards collapsed state
     */
    function initCardCollapse() {
        var cardSelector = '[data-tool="card-collapse"]',
            storageKeyName = 'jq-cardState';

        // Prepare the card to be collapsable and its events
        $(cardSelector).each(function() {
            // find the first parent card
            var $this = $(this),
                parent = $this.closest('.card'),
                wrapper = parent.find('.card-wrapper'),
                collapseOpts = { toggle: false },
                iconElement = $this.children('em'),
                cardId = parent.attr('id');

            // if wrapper not added, add it
            // we need a wrapper to avoid jumping due to the paddings
            if (!wrapper.length) {
                wrapper =
                    parent.children('.card-heading').nextAll() //find('.card-body, .card-footer')
                    .wrapAll('<div/>')
                    .parent()
                    .addClass('card-wrapper');
                collapseOpts = {};
            }

            // Init collapse and bind events to switch icons
            wrapper
                .collapse(collapseOpts)
                .on('hide.bs.collapse', function() {
                    setIconHide(iconElement);
                    saveCardState(cardId, 'hide');
                    wrapper.prev('.card-heading').addClass('card-heading-collapsed');
                })
                .on('show.bs.collapse', function() {
                    setIconShow(iconElement);
                    saveCardState(cardId, 'show');
                    wrapper.prev('.card-heading').removeClass('card-heading-collapsed');
                });

            // Load the saved state if exists
            var currentState = loadCardState(cardId);
            if (currentState) {
                setTimeout(function() { wrapper.collapse(currentState); }, 50);
                saveCardState(cardId, currentState);
            }

        });

        // finally catch clicks to toggle card collapse
        $(document).on('click', cardSelector, function() {

            var parent = $(this).closest('.card');
            var wrapper = parent.find('.card-wrapper');

            wrapper.collapse('toggle');

        });

        /////////////////////////////////////////////
        // Common use functions for card collapse //
        /////////////////////////////////////////////
        function setIconShow(iconEl) {
            iconEl.removeClass('fa-plus').addClass('fa-minus');
        }

        function setIconHide(iconEl) {
            iconEl.removeClass('fa-minus').addClass('fa-plus');
        }

        function saveCardState(id, state) {
            var data = Storages.localStorage.get(storageKeyName);
            if (!data) { data = {}; }
            data[id] = state;
            Storages.localStorage.set(storageKeyName, data);
        }

        function loadCardState(id) {
            var data = Storages.localStorage.get(storageKeyName);
            if (data) {
                return data[id] || false;
            }
        }
    }


    /**
     * Refresh cards
     * [data-tool="card-refresh"]
     * [data-spinner="standard"]
     */
    function initCardRefresh() {
        var cardSelector = '[data-tool="card-refresh"]',
            refreshEvent = 'card.refresh',
            whirlClass = 'whirl',
            defaultSpinner = 'standard';

        // method to clear the spinner when done
        function removeSpinner() {
            this.removeClass(whirlClass);
        }

        // catch clicks to toggle card refresh
        $(document).on('click', cardSelector, function() {
            var $this = $(this),
                card = $this.parents('.card').eq(0),
                spinner = $this.data('spinner') || defaultSpinner;

            // start showing the spinner
            card.addClass(whirlClass + ' ' + spinner);

            // attach as public method
            card.removeSpinner = removeSpinner;

            // Trigger the event and send the card object
            $this.trigger(refreshEvent, [card]);

        });
    }

})(window, document, window.jQuery);



// GLOBAL CONSTANTS
// -----------------------------------

(function(window, document, $, undefined){

    window.APP_COLORS = {
        'primary':                '#5d9cec',
        'success':                '#27c24c',
        'info':                   '#23b7e5',
        'warning':                '#ff902b',
        'danger':                 '#f05050',
        'inverse':                '#131e26',
        'green':                  '#37bc9b',
        'pink':                   '#f532e5',
        'purple':                 '#7266ba',
        'dark':                   '#3a3f51',
        'yellow':                 '#fad732',
        'gray-darker':            '#232735',
        'gray-dark':              '#3a3f51',
        'gray':                   '#dde6e9',
        'gray-light':             '#e4eaec',
        'gray-lighter':           '#edf1f2'
    };

    window.APP_MEDIAQUERY = {
        'desktopLG':             1200,
        'desktop':                992,
        'tablet':                 768,
        'mobile':                 480
    };

})(window, document, window.jQuery);
// FULLSCREEN
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initScreenFull);

    function initScreenFull() {
        if (typeof screenfull === 'undefined') return;

        var $doc = $(document);
        var $fsToggler = $('[data-toggle-fullscreen]');

        // Not supported under IE
        var ua = window.navigator.userAgent;
        if (ua.indexOf("MSIE ") > 0 || !!ua.match(/Trident.*rv\:11\./)) {
            $fsToggler.addClass('hide');
        }

        if (!$fsToggler.is(':visible')) // hidden on mobiles or IE
            return;

        $fsToggler.on('click', function(e) {
            e.preventDefault();

            if (screenfull.enabled) {

                screenfull.toggle();

                // Switch icon indicator
                toggleFSIcon($fsToggler);

            } else {
                console.log('Fullscreen not enabled');
            }
        });

        if (screenfull.raw && screenfull.raw.fullscreenchange)
            $doc.on(screenfull.raw.fullscreenchange, function() {
                toggleFSIcon($fsToggler);
            });

        function toggleFSIcon($element) {
            if (screenfull.isFullscreen)
                $element.children('em').removeClass('fa-expand').addClass('fa-compress');
            else
                $element.children('em').removeClass('fa-compress').addClass('fa-expand');
        }

    }

})(window, document, window.jQuery);
// LOAD CUSTOM CSS
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initLoadCSS);

    function initLoadCSS() {

        $('[data-load-css]').on('click', function(e) {

            var element = $(this);

            if (element.is('a'))
                e.preventDefault();

            var uri = element.data('loadCss'),
                link;

            if (uri) {
                link = createLink(uri);
                if (!link) {
                    $.error('Error creating stylesheet link element.');
                }
            } else {
                $.error('No stylesheet location defined.');
            }

        });
    }

    function createLink(uri) {
        var linkId = 'autoloaded-stylesheet',
            oldLink = $('#' + linkId).attr('id', linkId + '-old');

        $('head').append($('<link/>').attr({
            'id': linkId,
            'rel': 'stylesheet',
            'href': uri
        }));

        if (oldLink.length) {
            oldLink.remove();
        }

        return $('#' + linkId);
    }

})(window, document, window.jQuery);
// TRANSLATION
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initTranslation);


    var preferredLang = 'en';
    var pathPrefix = '/Content/i18n'; // folder of json files
    var packName = 'site';
    var storageKey = 'jq-appLang';

    function initTranslation() {

        if (!$.fn.localize) return;

        // detect saved language or use default
        var currLang = Storages.localStorage.get(storageKey) || preferredLang;
        // set initial options
        var opts = {
            language: currLang,
            pathPrefix: pathPrefix,
            callback: function(data, defaultCallback) {
                Storages.localStorage.set(storageKey, currLang); // save the language
                defaultCallback(data);
            }
        };

        // Set initial language
        setLanguage(opts);

        // Listen for changes
        $('[data-set-lang]').on('click', function() {

            currLang = $(this).data('setLang');

            if (currLang) {

                opts.language = currLang;

                setLanguage(opts);

                activateDropdown($(this));
            }

        });


        function setLanguage(options) {
            $("[data-localize]").localize(packName, options);
        }

        // Set the current clicked text as the active dropdown text
        function activateDropdown(elem) {
            var menu = elem.parents('.dropdown-menu');
            if (menu.length) {
                var toggle = menu.prev('button, a');
                toggle.text(elem.text());
            }
        }

    }

})(window, document, window.jQuery);
// NAVBAR SEARCH
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initNavbarSearch);

    function initNavbarSearch() {

        var navSearch = new navbarSearchInput();

        // Open search input
        var $searchOpen = $('[data-search-open]');

        $searchOpen
            .on('click', function(e) { e.stopPropagation(); })
            .on('click', navSearch.toggle);

        // Close search input
        var $searchDismiss = $('[data-search-dismiss]');
        var inputSelector = '.navbar-form input[type="text"]';

        $(inputSelector)
            .on('click', function(e) { e.stopPropagation(); })
            .on('keyup', function(e) {
                if (e.keyCode == 27) // ESC
                    navSearch.dismiss();
            });

        // click anywhere closes the search
        $(document).on('click', navSearch.dismiss);
        // dismissable options
        $searchDismiss
            .on('click', function(e) { e.stopPropagation(); })
            .on('click', navSearch.dismiss);

    }

    var navbarSearchInput = function() {
        var navbarFormSelector = 'form.navbar-form';
        return {
            toggle: function() {

                var navbarForm = $(navbarFormSelector);

                navbarForm.toggleClass('open');

                var isOpen = navbarForm.hasClass('open');

                navbarForm.find('input')[isOpen ? 'focus' : 'blur']();

            },

            dismiss: function() {
                $(navbarFormSelector)
                    .removeClass('open') // Close control
                    .find('input[type="text"]').blur() // remove focus
                // .val('')                    // Empty input
                ;
            }
        };

    }

})(window, document, window.jQuery);
// NOW TIMER
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initNowTimer);

    function initNowTimer() {

        $('[data-now]').each(function() {
            var element = $(this),
                format = element.data('format');

            function updateTime() {
                var dt = moment(new Date()).format(format);
                element.text(dt);
            }

            updateTime();
            setInterval(updateTime, 1000);

        });
    }

})(window, document, window.jQuery);
// Toggle RTL mode for demo
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initRTL);

    function initRTL() {
        var maincss = $('#maincss');
        var bscss = $('#bscss');
        $('#chk-rtl').on('change', function() {
            // app rtl check
            maincss.attr('href', this.checked ? '/Content/css/app-rtl.css' : '/Content/css/app.css');
            // bootstrap rtl check
            bscss.attr('href', this.checked ? '/Content/css/bootstrap-rtl.css' : '/Content/css/bootstrap.css');
        });
    }

})(window, document, window.jQuery);
// SIDEBAR
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initSidebar);


    var $win;
    var $html;
    var $body;
    var $sidebar;

    function initSidebar() {

        $win = $(window);
        $html = $('html');
        $body = $('body');
        $sidebar = $('.sidebar');

        // AUTOCOLLAPSE ITEMS
        // -----------------------------------

        var sidebarCollapse = $sidebar.find('.collapse');
        sidebarCollapse.on('show.bs.collapse', function(event) {

            event.stopPropagation();
            if ($(this).parents('.collapse').length === 0)
                sidebarCollapse.filter('.show').collapse('hide');

        });

        // SIDEBAR ACTIVE STATE
        // -----------------------------------

        // Find current active item
        var currentItem = $('.sidebar .active').parents('li');

        // hover mode don't try to expand active collapse
        if (!useAsideHover())
            currentItem
            .addClass('active') // activate the parent
            .children('.collapse') // find the collapse
            .collapse('show'); // and show it

        // remove this if you use only collapsible sidebar items
        $sidebar.find('li > a + ul').on('show.bs.collapse', function(e) {
            if (useAsideHover()) e.preventDefault();
        });

        // SIDEBAR COLLAPSED ITEM HANDLER
        // -----------------------------------


        var eventName = isTouch() ? 'click' : 'mouseenter';
        var subNav = $();
        $sidebar.on(eventName, '.sidebar-nav > li', function() {

            if (isSidebarCollapsed() || useAsideHover()) {

                subNav.trigger('mouseleave');
                subNav = toggleMenuItem($(this));

                // Used to detect click and touch events outside the sidebar
                sidebarAddBackdrop();
            }

        });

        var sidebarAnyclickClose = $sidebar.data('sidebarAnyclickClose');

        // Allows to close
        if (typeof sidebarAnyclickClose !== 'undefined') {

            $('.wrapper').on('click.sidebar', function(e) {
                // don't check if sidebar not visible
                if (!$body.hasClass('aside-toggled')) return;

                var $target = $(e.target);
                if (!$target.parents('.aside-container').length && // if not child of sidebar
                    !$target.is('#user-block-toggle') && // user block toggle anchor
                    !$target.parent().is('#user-block-toggle') // user block toggle icon
                ) {
                    $body.removeClass('aside-toggled');
                }

            });
        }
    }

    function sidebarAddBackdrop() {
        var $backdrop = $('<div/>', { 'class': 'dropdown-backdrop' });
        $backdrop.insertAfter('.aside-container').on("click mouseenter", function() {
            removeFloatingNav();
        });
    }

    // Open the collapse sidebar submenu items when on touch devices
    // - desktop only opens on hover
    function toggleTouchItem($element) {
        $element
            .siblings('li')
            .removeClass('open')
            .end()
            .toggleClass('open');
    }

    // Handles hover to open items under collapsed menu
    // -----------------------------------
    function toggleMenuItem($listItem) {

        removeFloatingNav();

        var ul = $listItem.children('ul');

        if (!ul.length) return $();
        if ($listItem.hasClass('open')) {
            toggleTouchItem($listItem);
            return $();
        }

        var $aside = $('.aside-container');
        var $asideInner = $('.aside-inner'); // for top offset calculation
        // float aside uses extra padding on aside
        var mar = parseInt($asideInner.css('padding-top'), 0) + parseInt($aside.css('padding-top'), 0);

        var subNav = ul.clone().appendTo($aside);

        toggleTouchItem($listItem);

        var itemTop = ($listItem.position().top + mar) - $sidebar.scrollTop();
        var vwHeight = $win.height();

        subNav
            .addClass('nav-floating')
            .css({
                position: isFixed() ? 'fixed' : 'absolute',
                top: itemTop,
                bottom: (subNav.outerHeight(true) + itemTop > vwHeight) ? 0 : 'auto'
            });

        subNav.on('mouseleave', function() {
            toggleTouchItem($listItem);
            subNav.remove();
        });

        return subNav;
    }

    function removeFloatingNav() {
        $('.sidebar-subnav.nav-floating').remove();
        $('.dropdown-backdrop').remove();
        $('.sidebar li.open').removeClass('open');
    }

    function isTouch() {
        return $html.hasClass('touch');
    }

    function isSidebarCollapsed() {
        return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
    }

    function isSidebarToggled() {
        return $body.hasClass('aside-toggled');
    }

    function isMobile() {
        return $win.width() < APP_MEDIAQUERY.tablet;
    }

    function isFixed() {
        return $body.hasClass('layout-fixed');
    }

    function useAsideHover() {
        return $body.hasClass('aside-hover');
    }

})(window, document, window.jQuery);
// SLIMSCROLL
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSlimsSroll);

    function initSlimsSroll() {

        $('[data-scrollable]').each(function() {

            var element = $(this),
                defaultHeight = 250;

            element.slimScroll({
                height: (element.data('height') || defaultHeight)
            });

        });
    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initTableCheckAll);

    function initTableCheckAll() {

        $('[data-check-all]').on('change', function() {
            var $this = $(this),
                index = $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child(' + index + ') input[type="checkbox"]')
                .prop('checked', checkbox[0].checked);

        });

    }

})(window, document, window.jQuery);
// TOGGLE STATE
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initToggleState);

    function initToggleState() {

        var $body = $('body');
        var toggle = new StateToggler();

        $('[data-toggle-state]')
            .on('click', function(e) {
                // e.preventDefault();
                e.stopPropagation();
                var element = $(this),
                    classname = element.data('toggleState'),
                    target = element.data('target'),
                    noPersist = (element.attr('data-no-persist') !== undefined);

                // Specify a target selector to toggle classname
                // use body by default
                var $target = target ? $(target) : $body;

                if (classname) {
                    if ($target.hasClass(classname)) {
                        $target.removeClass(classname);
                        if (!noPersist)
                            toggle.removeState(classname);
                    } else {
                        $target.addClass(classname);
                        if (!noPersist)
                            toggle.addState(classname);
                    }

                }

                // some elements may need this when toggled class change the content size
                $(window).resize();

            });

    }

    // Handle states to/from localstorage
    var StateToggler = function() {

        var STORAGE_KEY_NAME = 'jq-toggleState';

        /** Add a state to the browser storage to be restored later */
        this.addState = function(classname) {
            var data = Storages.localStorage.get(STORAGE_KEY_NAME);
            if (data instanceof Array) data.push(classname);
            else data = [classname];
            Storages.localStorage.set(STORAGE_KEY_NAME, data);
        };
        /** Remove a state from the browser storage */
        this.removeState = function(classname) {
            var data = Storages.localStorage.get(STORAGE_KEY_NAME);
            if (data) {
                var index = data.indexOf(classname);
                if (index !== -1) data.splice(index, 1);
                Storages.localStorage.set(STORAGE_KEY_NAME, data);
            }
        };
        /** Load the state string and restore the classlist */
        this.restoreState = function($elem) {
            var data = Storages.localStorage.get(STORAGE_KEY_NAME);
            if (data instanceof Array)
                $elem.addClass(data.join(' '));
        };
    };

    window.StateToggler = StateToggler;

})(window, document, window.jQuery);
/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initTriggerResize);

    function initTriggerResize() {
        var element = $('[data-trigger-resize]');
        var value = element.data('triggerResize')
        element.on('click', function() {
            setTimeout(function() {
                // all IE friendly dispatchEvent
                var evt = document.createEvent('UIEvents');
                evt.initUIEvent('resize', true, false, window, 0);
                window.dispatchEvent(evt);
                // modern dispatchEvent way
                // window.dispatchEvent(new Event('resize'));
            }, value || 300);
        });
    }

})(window, document, window.jQuery);
// Color picker
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initColorPicker);

    function initColorPicker() {

        if (!$.fn.colorpicker) return;

        $('.demo-colorpicker').colorpicker();

        $('#demo_selectors').colorpicker({
            colorSelectors: {
                'default': '#777777',
                'primary': APP_COLORS['primary'],
                'success': APP_COLORS['success'],
                'info': APP_COLORS['info'],
                'warning': APP_COLORS['warning'],
                'danger': APP_COLORS['danger']
            }
        });

    }

})(window, document, window.jQuery);
// Forms Demo
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initFormsDemo);

    function initFormsDemo() {

        if (!$.fn.slider) return;
        if (!$.fn.chosen) return;
        if (!$.fn.inputmask) return;
        if (!$.fn.filestyle) return;
        if (!$.fn.wysiwyg) return;
        if (!$.fn.datepicker) return;

        // BOOTSTRAP SLIDER CTRL
        // -----------------------------------

        $('[data-ui-slider]').slider();

        // CHOSEN
        // -----------------------------------

        $('.chosen-select').chosen();

        // MASKED
        // -----------------------------------

        $('[data-masked]').inputmask();

        // FILESTYLE
        // -----------------------------------

        $('.filestyle').filestyle();

        // WYSIWYG
        // -----------------------------------

        $('.wysiwyg').wysiwyg();


        // DATETIMEPICKER
        // -----------------------------------

        $('#datetimepicker1').datepicker({
            orientation: 'bottom',
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-crosshairs',
                clear: 'fa fa-trash'
            }
        });
        // only time
        $('#datetimepicker2').datepicker({
            format: 'mm-dd-yyyy'
        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: Image Cropper
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initImageCropper);

    function initImageCropper() {

        if (!$.fn.cropper) return;

        var $image = $('.img-container > img'),
            $dataX = $('#dataX'),
            $dataY = $('#dataY'),
            $dataHeight = $('#dataHeight'),
            $dataWidth = $('#dataWidth'),
            $dataRotate = $('#dataRotate'),
            options = {
                // data: {
                //   x: 420,
                //   y: 60,
                //   width: 640,
                //   height: 360
                // },
                // strict: false,
                // responsive: false,
                // checkImageOrigin: false

                // modal: false,
                // guides: false,
                // highlight: false,
                // background: false,

                // autoCrop: false,
                // autoCropArea: 0.5,
                // dragCrop: false,
                // movable: false,
                // rotatable: false,
                // zoomable: false,
                // touchDragZoom: false,
                // mouseWheelZoom: false,
                // cropBoxMovable: false,
                // cropBoxResizable: false,
                // doubleClickToggle: false,

                // minCanvasWidth: 320,
                // minCanvasHeight: 180,
                // minCropBoxWidth: 160,
                // minCropBoxHeight: 90,
                // minContainerWidth: 320,
                // minContainerHeight: 180,

                // build: null,
                // built: null,
                // dragstart: null,
                // dragmove: null,
                // dragend: null,
                // zoomin: null,
                // zoomout: null,

                aspectRatio: 16 / 9,
                preview: '.img-preview',
                crop: function(data) {
                    $dataX.val(Math.round(data.x));
                    $dataY.val(Math.round(data.y));
                    $dataHeight.val(Math.round(data.height));
                    $dataWidth.val(Math.round(data.width));
                    $dataRotate.val(Math.round(data.rotate));
                }
            };

        $image.on({
            'build.cropper': function(e) {
                console.log(e.type);
            },
            'built.cropper': function(e) {
                console.log(e.type);
            },
            'dragstart.cropper': function(e) {
                console.log(e.type, e.dragType);
            },
            'dragmove.cropper': function(e) {
                console.log(e.type, e.dragType);
            },
            'dragend.cropper': function(e) {
                console.log(e.type, e.dragType);
            },
            'zoomin.cropper': function(e) {
                console.log(e.type);
            },
            'zoomout.cropper': function(e) {
                console.log(e.type);
            },
            'change.cropper': function(e) {
                console.log(e.type);
            }
        }).cropper(options);


        // Methods
        $(document.body).on('click', '[data-method]', function() {
            var data = $(this).data(),
                $target,
                result;

            if (!$image.data('cropper')) {
                return;
            }

            if (data.method) {
                data = $.extend({}, data); // Clone a new one

                if (typeof data.target !== 'undefined') {
                    $target = $(data.target);

                    if (typeof data.option === 'undefined') {
                        try {
                            data.option = JSON.parse($target.val());
                        } catch (e) {
                            console.log(e.message);
                        }
                    }
                }

                result = $image.cropper(data.method, data.option);

                if (data.method === 'getCroppedCanvas') {
                    $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);
                }

                if ($.isPlainObject(result) && $target) {
                    try {
                        $target.val(JSON.stringify(result));
                    } catch (e) {
                        console.log(e.message);
                    }
                }

            }
        }).on('keydown', function(e) {

            if (!$image.data('cropper')) {
                return;
            }

            switch (e.which) {
                case 37:
                    e.preventDefault();
                    $image.cropper('move', -1, 0);
                    break;

                case 38:
                    e.preventDefault();
                    $image.cropper('move', 0, -1);
                    break;

                case 39:
                    e.preventDefault();
                    $image.cropper('move', 1, 0);
                    break;

                case 40:
                    e.preventDefault();
                    $image.cropper('move', 0, 1);
                    break;
            }

        });


        // Import image
        var $inputImage = $('#inputImage'),
            URL = window.URL || window.webkitURL,
            blobURL;

        if (URL) {
            $inputImage.change(function() {
                var files = this.files,
                    file;

                if (!$image.data('cropper')) {
                    return;
                }

                if (files && files.length) {
                    file = files[0];

                    if (/^image\/\w+$/.test(file.type)) {
                        blobURL = URL.createObjectURL(file);
                        $image.one('built.cropper', function() {
                            URL.revokeObjectURL(blobURL); // Revoke when load complete
                        }).cropper('reset').cropper('replace', blobURL);
                        $inputImage.val('');
                    } else {
                        alert('Please choose an image file.');
                    }
                }
            });
        } else {
            $inputImage.parent().remove();
        }


        // Options
        $('.docs-options :checkbox').on('change', function() {
            var $this = $(this);

            if (!$image.data('cropper')) {
                return;
            }

            options[$this.val()] = $this.prop('checked');
            $image.cropper('destroy').cropper(options);
        });


        // Tooltips
        $('[data-toggle="tooltip"]').tooltip();

    }

})(window, document, window.jQuery);
// Select2
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initSelect2);

    function initSelect2() {

        if (!$.fn.select2) return;

        // Select 2

        $('#select2-1').select2({
            theme: 'bootstrap4'
        });
        $('#select2-2').select2({
            theme: 'bootstrap4'
        });
        $('#select2-3').select2({
            theme: 'bootstrap4'
        });
        $('#select2-4').select2({
            placeholder: 'Select a state',
            allowClear: true,
            theme: 'bootstrap4'
        });

    }

})(window, document, window.jQuery);
(function(window, document, $, undefined) {
    'use strict';

    if (typeof Dropzone === 'undefined') return;

    // Prevent Dropzone from auto discovering
    // This is useful when you want to create the
    // Dropzone programmatically later
    Dropzone.autoDiscover = false;

    $(initDropzone);

    function initDropzone() {

        // Dropzone settings
        var dropzoneOptions = {
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 100,
            maxFiles: 100,
            dictDefaultMessage: '<em class="fa fa-upload text-muted"></em><br>Drop files here to upload', // default messages before first drop
            paramName: 'file', // The name that will be used to transfer the file
            maxFilesize: 2, // MB
            addRemoveLinks: true,
            accept: function(file, done) {
                if (file.name === 'justinbieber.jpg') {
                    done('Naha, you dont. :)');
                } else {
                    done();
                }
            },
            init: function() {
                var dzHandler = this;

                this.element.querySelector('button[type=submit]').addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dzHandler.processQueue();
                });
                this.on('addedfile', function(file) {
                    console.log('Added file: ' + file.name);
                });
                this.on('removedfile', function(file) {
                    console.log('Removed file: ' + file.name);
                });
                this.on('sendingmultiple', function() {

                });
                this.on('successmultiple', function( /*files, response*/ ) {

                });
                this.on('errormultiple', function( /*files, response*/ ) {

                });
            }

        };

        var dropzoneArea = new Dropzone('#dropzone-area', dropzoneOptions);

    }

})(window, document, window.jQuery);
// Forms Demo
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initWizard);

    function initWizard() {

        if (!$.fn.validate) return;

        // FORM EXAMPLE
        // -----------------------------------
        var form = $("#example-form");
        form.validate({
            errorPlacement: function errorPlacement(error, element) { element.before(error); },
            rules: {
                confirm: {
                    equalTo: "#password"
                }
            }
        });
        form.children("div").steps({
            headerTag: "h4",
            bodyTag: "fieldset",
            transitionEffect: "slideLeft",
            onStepChanging: function(event, currentIndex, newIndex) {
                form.validate().settings.ignore = ":disabled,:hidden";
                return form.valid();
            },
            onFinishing: function(event, currentIndex) {
                form.validate().settings.ignore = ":disabled";
                return form.valid();
            },
            onFinished: function(event, currentIndex) {
                alert("Submitted!");

                // Submit form
                $(this).submit();
            }
        });

        // VERTICAL
        // -----------------------------------

        $("#example-vertical").steps({
            headerTag: "h4",
            bodyTag: "section",
            transitionEffect: "slideLeft",
            stepsOrientation: "vertical"
        });

    }

})(window, document, window.jQuery);
// Xeditable Demo
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initXEditable);

    function initXEditable() {

        if (!$.fn.editable) return

        // Font Awesome support
        $.fn.editableform.buttons =
            '<button type="submit" class="btn btn-primary btn-sm editable-submit">' +
            '<i class="fa fa-fw fa-check"></i>' +
            '</button>' +
            '<button type="button" class="btn btn-default btn-sm editable-cancel">' +
            '<i class="fa fa-fw fa-times"></i>' +
            '</button>';

        //defaults
        //$.fn.editable.defaults.url = 'url/to/server';

        //enable / disable
        $('#enable').click(function() {
            $('#user .editable').editable('toggleDisabled');
        });

        //editables
        $('#username').editable({
            // url: 'url/to/server',
            type: 'text',
            pk: 1,
            name: 'username',
            title: 'Enter username',
            mode: 'inline'
        });

        $('#firstname').editable({
            validate: function(value) {
                if ($.trim(value) === '') return 'This field is required';
            },
            mode: 'inline'
        });

        $('#sex').editable({
            prepend: "not selected",
            source: [
                { value: 1, text: 'Male' },
                { value: 2, text: 'Female' }
            ],
            display: function(value, sourceData) {
                var colors = { "": "gray", 1: "green", 2: "blue" },
                    elem = $.grep(sourceData, function(o) { return o.value == value; });

                if (elem.length) {
                    $(this).text(elem[0].text).css("color", colors[value]);
                } else {
                    $(this).empty();
                }
            },
            mode: 'inline'
        });

        $('#status').editable({
            mode: 'inline'
        });

        $('#group').editable({
            showbuttons: false,
            mode: 'inline'
        });

        $('#dob').editable({
            mode: 'inline'
        });

        $('#event').editable({
            placement: 'right',
            combodate: {
                firstItem: 'name'
            },
            mode: 'inline'
        });

        $('#comments').editable({
            showbuttons: 'bottom',
            mode: 'inline'
        });

        $('#note').editable({
            mode: 'inline'
        });
        $('#pencil').click(function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#note').editable('toggle');
        });

        $('#user .editable').on('hidden', function(e, reason) {
            if (reason === 'save' || reason === 'nochange') {
                var $next = $(this).closest('tr').next().find('.editable');
                if ($('#autoopen').is(':checked')) {
                    setTimeout(function() {
                        $next.editable('show');
                    }, 300);
                } else {
                    $next.focus();
                }
            }
        });

        // TABLE
        // -----------------------------------

        $('#users a').editable({
            type: 'text',
            name: 'username',
            title: 'Enter username',
            mode: 'inline'
        });

    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    // When dom ready, init calendar and events
    $(initFullCalendar);

    function initFullCalendar() {

        if (!$.fn.fullCalendar) return;

        // The element that will display the calendar
        var calendar = $('#calendar');

        var demoEvents = createDemoEvents();

        initExternalEvents(calendar);

        initCalendar(calendar, demoEvents);

    }


    // global shared var to know what we are dragging
    var draggingEvent = null;

    /**
     * ExternalEvent object
     * @param jQuery Object elements Set of element as jQuery objects
     */
    var ExternalEvent = function(elements) {

        if (!elements) return;

        elements.each(function() {
            var $this = $(this);
            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var calendarEventObject = {
                title: $.trim($this.text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $this.data('calendarEventObject', calendarEventObject);

            // make the event draggable using jQuery UI
            $this.draggable({
                zIndex: 1070,
                revert: true, // will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
            });

        });
    };

    /**
     * Invoke full calendar plugin and attach behavior
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     * @param  EventObject [events] An object with the event list to load when the calendar displays
     */
    function initCalendar(calElement, events) {

        // check to remove elements from the list
        var removeAfterDrop = $('#remove-after-drop');

        calElement.fullCalendar({
            // isRTL: true,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            buttonIcons: { // note the space at the beginning
                prev: ' fa fa-caret-left',
                next: ' fa fa-caret-right'
            },
            buttonText: {
                today: 'today',
                month: 'month',
                week: 'week',
                day: 'day'
            },
            editable: true,
            droppable: true, // this allows things to be dropped onto the calendar
            drop: function(date, allDay) { // this function is called when something is dropped

                var $this = $(this),
                    // retrieve the dropped element's stored Event Object
                    originalEventObject = $this.data('calendarEventObject');

                // if something went wrong, abort
                if (!originalEventObject) return;

                // clone the object to avoid multiple events with reference to the same object
                var clonedEventObject = $.extend({}, originalEventObject);

                // assign the reported date
                clonedEventObject.start = date;
                clonedEventObject.allDay = allDay;
                clonedEventObject.backgroundColor = $this.css('background-color');
                clonedEventObject.borderColor = $this.css('border-color');

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks"
                // (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                calElement.fullCalendar('renderEvent', clonedEventObject, true);

                // if necessary remove the element from the list
                if (removeAfterDrop.is(':checked')) {
                    $this.remove();
                }
            },
            eventDragStart: function(event, js, ui) {
                draggingEvent = event;
            },
            // This array is the events sources
            events: events
        });
    }

    /**
     * Inits the external events card
     * @param  jQuery [calElement] The calendar dom element wrapped into jQuery
     */
    function initExternalEvents(calElement) {
        // Card with the external events list
        var externalEvents = $('.external-events');

        // init the external events in the card
        new ExternalEvent(externalEvents.children('div'));

        // External event color is danger-red by default
        var currColor = '#f6504d';
        // Color selector button
        var eventAddBtn = $('.external-event-add-btn');
        // New external event name input
        var eventNameInput = $('.external-event-name');
        // Color switchers
        var eventColorSelector = $('.external-event-color-selector .circle');

        // Trash events Droparea
        $('.external-events-trash').droppable({
            accept: '.fc-event',
            activeClass: 'active',
            hoverClass: 'hovered',
            tolerance: 'touch',
            drop: function(event, ui) {

                // You can use this function to send an ajax request
                // to remove the event from the repository

                if (draggingEvent) {
                    var eid = draggingEvent.id || draggingEvent._id;
                    // Remove the event
                    calElement.fullCalendar('removeEvents', eid);
                    // Remove the dom element
                    ui.draggable.remove();
                    // clear
                    draggingEvent = null;
                }
            }
        });

        eventColorSelector.click(function(e) {
            e.preventDefault();
            var $this = $(this);

            // Save color
            currColor = $this.css('background-color');
            // De-select all and select the current one
            eventColorSelector.removeClass('selected');
            $this.addClass('selected');
        });

        eventAddBtn.click(function(e) {
            e.preventDefault();

            // Get event name from input
            var val = eventNameInput.val();
            // Dont allow empty values
            if ($.trim(val) === '') return;

            // Create new event element
            var newEvent = $('<div/>').css({
                    'background-color': currColor,
                    'border-color': currColor,
                    'color': '#fff'
                })
                .html(val);

            // Prepends to the external events list
            externalEvents.prepend(newEvent);
            // Initialize the new event element
            new ExternalEvent(newEvent);
            // Clear input
            eventNameInput.val('');
        });
    }

    /**
     * Creates an array of events to display in the first load of the calendar
     * Wrap into this function a request to a source to get via ajax the stored events
     * @return Array The array with the events
     */
    function createDemoEvents() {
        // Date for the calendar events (dummy data)
        var date = new Date();
        var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

        return [{
            title: 'All Day Event',
            start: new Date(y, m, 1),
            backgroundColor: '#f56954', //red
            borderColor: '#f56954' //red
        }, {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            backgroundColor: '#f39c12', //yellow
            borderColor: '#f39c12' //yellow
        }, {
            title: 'Meeting',
            start: new Date(y, m, d, 10, 30),
            allDay: false,
            backgroundColor: '#0073b7', //Blue
            borderColor: '#0073b7' //Blue
        }, {
            title: 'Lunch',
            start: new Date(y, m, d, 12, 0),
            end: new Date(y, m, d, 14, 0),
            allDay: false,
            backgroundColor: '#00c0ef', //Info (aqua)
            borderColor: '#00c0ef' //Info (aqua)
        }, {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            backgroundColor: '#00a65a', //Success (green)
            borderColor: '#00a65a' //Success (green)
        }, {
            title: 'Open Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: '//google.com/',
            backgroundColor: '#3c8dbc', //Primary (light-blue)
            borderColor: '#3c8dbc' //Primary (light-blue)
        }];
    }

})(window, document, window.jQuery);
// JQCloud
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initWordCloud);

    function initWordCloud() {

        if (!$.fn.jQCloud) return;

        //Create an array of word objects, each representing a word in the cloud
        var word_array = [
            { text: 'Lorem', weight: 13, /*link: 'http://themicon.co'*/ },
            { text: 'Ipsum', weight: 10.5 },
            { text: 'Dolor', weight: 9.4 },
            { text: 'Sit', weight: 8 },
            { text: 'Amet', weight: 6.2 },
            { text: 'Consectetur', weight: 5 },
            { text: 'Adipiscing', weight: 5 },
            { text: 'Sit', weight: 8 },
            { text: 'Amet', weight: 6.2 },
            { text: 'Consectetur', weight: 5 },
            { text: 'Adipiscing', weight: 5 }
        ];

        $("#jqcloud").jQCloud(word_array, {
            width: 240,
            height: 200,
            steps: 7
        });

    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initSearch);

    function initSearch() {

        if (!$.fn.slider) return;
        if (!$.fn.chosen) return;
        if (!$.fn.datepicker) return;

        // BOOTSTRAP SLIDER CTRL
        // -----------------------------------

        $('[data-ui-slider]').slider();

        // CHOSEN
        // -----------------------------------

        $('.chosen-select').chosen();

        // DATETIMEPICKER
        // -----------------------------------

        $('#datetimepicker').datepicker({
            orientation: 'bottom',
            icons: {
                time: 'fa fa-clock-o',
                date: 'fa fa-calendar',
                up: 'fa fa-chevron-up',
                down: 'fa fa-chevron-down',
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-crosshairs',
                clear: 'fa fa-trash'
            }
        });

    }

})(window, document, window.jQuery);
/**=========================================================
 * Module: gmap.js
 * Init Google Map plugin
 =========================================================*/

(function(window, document, $, undefined) {
    'use strict';

    $(initGoogleMaps);

    // -------------------------
    // Map Style definition
    // -------------------------
    // Get more styles from http://snazzymaps.com/style/29/light-monochrome
    // - Just replace and assign to 'MapStyles' the new style array
    var MapStyles = [{ featureType: 'water', stylers: [{ visibility: 'on' }, { color: '#bdd1f9' }] }, { featureType: 'all', elementType: 'labels.text.fill', stylers: [{ color: '#334165' }] }, { featureType: 'landscape', stylers: [{ color: '#e9ebf1' }] }, { featureType: 'road.highway', elementType: 'geometry', stylers: [{ color: '#c5c6c6' }] }, { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#fff' }] }, { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#d8dbe0' }] }, { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#cfd5e0' }] }, { featureType: 'administrative', stylers: [{ visibility: 'on' }, { lightness: 33 }] }, { featureType: 'poi.park', elementType: 'labels', stylers: [{ visibility: 'on' }, { lightness: 20 }] }, { featureType: 'road', stylers: [{ color: '#d8dbe0', lightness: 20 }] }];


    function initGoogleMaps() {

        if (!$.fn.gMap) return;

        var mapSelector = '[data-gmap]';
        var gMapRefs = [];

        $(mapSelector).each(function() {

            var $this = $(this),
                addresses = $this.data('address') && $this.data('address').split(';'),
                titles = $this.data('title') && $this.data('title').split(';'),
                zoom = $this.data('zoom') || 14,
                maptype = $this.data('maptype') || 'ROADMAP', // or 'TERRAIN'
                markers = [];

            if (addresses) {
                for (var a in addresses) {
                    if (typeof addresses[a] == 'string') {
                        markers.push({
                            address: addresses[a],
                            html: (titles && titles[a]) || '',
                            popup: true /* Always popup */
                        });
                    }
                }

                var options = {
                    controls: {
                        panControl: true,
                        zoomControl: true,
                        mapTypeControl: true,
                        scaleControl: true,
                        streetViewControl: true,
                        overviewMapControl: true
                    },
                    scrollwheel: false,
                    maptype: maptype,
                    markers: markers,
                    zoom: zoom
                    // More options https://github.com/marioestrada/jQuery-gMap
                };

                var gMap = $this.gMap(options);

                var ref = gMap.data('gMap.reference');
                // save in the map references list
                gMapRefs.push(ref);

                // set the styles
                if ($this.data('styled') !== undefined) {

                    ref.setOptions({
                        styles: MapStyles
                    });

                }
            }

        }); //each

    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initVectorMap);

    function initVectorMap() {

        var element = $('[data-vector-map]');

        var seriesData = {
            'CA': 11100, // Canada
            'DE': 2510, // Germany
            'FR': 3710, // France
            'AU': 5710, // Australia
            'GB': 8310, // Great Britain
            'RU': 9310, // Russia
            'BR': 6610, // Brazil
            'IN': 7810, // India
            'CN': 4310, // China
            'US': 839, // USA
            'SA': 410 // Saudi Arabia
        };

        var markersData = [
            { latLng: [41.90, 12.45], name: 'Vatican City' },
            { latLng: [43.73, 7.41], name: 'Monaco' },
            { latLng: [-0.52, 166.93], name: 'Nauru' },
            { latLng: [-8.51, 179.21], name: 'Tuvalu' },
            { latLng: [7.11, 171.06], name: 'Marshall Islands' },
            { latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis' },
            { latLng: [3.2, 73.22], name: 'Maldives' },
            { latLng: [35.88, 14.5], name: 'Malta' },
            { latLng: [41.0, -71.06], name: 'New England' },
            { latLng: [12.05, -61.75], name: 'Grenada' },
            { latLng: [13.16, -59.55], name: 'Barbados' },
            { latLng: [17.11, -61.85], name: 'Antigua and Barbuda' },
            { latLng: [-4.61, 55.45], name: 'Seychelles' },
            { latLng: [7.35, 134.46], name: 'Palau' },
            { latLng: [42.5, 1.51], name: 'Andorra' }
        ];

        new VectorMap(element, seriesData, markersData);

    }

})(window, document, window.jQuery);
// JVECTOR MAP
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    // Allow Global access
    window.VectorMap = VectorMap

    var defaultColors = {
        markerColor: '#23b7e5', // the marker points
        bgColor: 'transparent', // the background
        scaleColors: ['#878c9a'], // the color of the region in the serie
        regionFill: '#bbbec6' // the base region color
    };

    function VectorMap(element, seriesData, markersData) {

        if (!element || !element.length) return;

        var attrs = element.data(),
            mapHeight = attrs.height || '300',
            options = {
                markerColor: attrs.markerColor || defaultColors.markerColor,
                bgColor: attrs.bgColor || defaultColors.bgColor,
                scale: attrs.scale || 1,
                scaleColors: attrs.scaleColors || defaultColors.scaleColors,
                regionFill: attrs.regionFill || defaultColors.regionFill,
                mapName: attrs.mapName || 'world_mill_en'
            };

        element.css('height', mapHeight);

        init(element, options, seriesData, markersData);

        function init($element, opts, series, markers) {

            $element.vectorMap({
                map: opts.mapName,
                backgroundColor: opts.bgColor,
                zoomMin: 1,
                zoomMax: 8,
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        'fill': opts.regionFill,
                        'fill-opacity': 1,
                        'stroke': 'none',
                        'stroke-width': 1.5,
                        'stroke-opacity': 1
                    },
                    hover: {
                        'fill-opacity': 0.8
                    },
                    selected: {
                        fill: 'blue'
                    },
                    selectedHover: {}
                },
                focusOn: { x: 0.4, y: 0.6, scale: opts.scale },
                markerStyle: {
                    initial: {
                        fill: opts.markerColor,
                        stroke: opts.markerColor
                    }
                },
                onRegionLabelShow: function(e, el, code) {
                    if (series && series[code])
                        el.html(el.html() + ': ' + series[code] + ' visitors');
                },
                markers: markers,
                series: {
                    regions: [{
                        values: series,
                        scale: opts.scaleColors,
                        normalizeFunction: 'polynomial'
                    }]
                },
            });

        } // end init
    };

})(window, document, window.jQuery);
/**
 * Used for user pages
 * Login and Register
 */
(function(window, document, $, undefined) {
    'use strict';

    $(initParsleyForPages)

    function initParsleyForPages() {

        // Parsley options setup for bootstrap validation classes
        var parsleyOptions = {
            errorClass: 'is-invalid',
            successClass: 'is-valid',
            classHandler: function(ParsleyField) {
                var el = ParsleyField.$element.parents('.form-group').find('input');
                if (!el.length) // support custom checkbox
                    el = ParsleyField.$element.parents('.c-checkbox').find('label');
                return el;
            },
            errorsContainer: function(ParsleyField) {
                return ParsleyField.$element.parents('.form-group');
            },
            errorsWrapper: '<div class="text-help">',
            errorTemplate: '<div></div>'
        };

        // Login form validation with Parsley
        var loginForm = $("#loginForm");
        if (loginForm.length)
            loginForm.parsley(parsleyOptions);

        // Register form validation with Parsley
        var registerForm = $("#registerForm");
        if (registerForm.length)
            registerForm.parsley(parsleyOptions);

    }

})(window, document, window.jQuery);
// BOOTGRID
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initBootgrid);

    function initBootgrid() {

        if (!$.fn.bootgrid) return;

        $('#bootgrid-basic').bootgrid({
            templates: {
                // templates for BS4
                actionButton: '<button class="btn btn-secondary" type="button" title="{{ctx.text}}">{{ctx.content}}</button>',
                actionDropDown: '<div class="{{css.dropDownMenu}}"><button class="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret" type="button" data-toggle="dropdown"><span class="{{css.dropDownMenuText}}">{{ctx.content}}</span></button><ul class="{{css.dropDownMenuItems}}" role="menu"></ul></div>',
                actionDropDownItem: '<li class="dropdown-item"><a href="" data-action="{{ctx.action}}" class="dropdown-link {{css.dropDownItemButton}}">{{ctx.text}}</a></li>',
                actionDropDownCheckboxItem: '<li class="dropdown-item"><label class="dropdown-item p-0"><input name="{{ctx.name}}" type="checkbox" value="1" class="{{css.dropDownItemCheckbox}}" {{ctx.checked}} /> {{ctx.label}}</label></li>',
                paginationItem: '<li class="page-item {{ctx.css}}"><a href="" data-page="{{ctx.page}}" class="page-link {{css.paginationButton}}">{{ctx.text}}</a></li>',
            }
        });

        $('#bootgrid-selection').bootgrid({
            selection: true,
            multiSelect: true,
            rowSelect: true,
            keepSelection: true,
            templates: {
                select:
                    '<div class="checkbox c-checkbox">' +
                        '<label class="mb-0">' +
                            '<input type="{{ctx.type}}" class="{{css.selectBox}}" value="{{ctx.value}}" {{ctx.checked}}>' +
                            '<span class="fa fa-check"></span>' +
                        '</label>'+
                    '</div>',
                // templates for BS4
                actionButton: '<button class="btn btn-secondary" type="button" title="{{ctx.text}}">{{ctx.content}}</button>',
                actionDropDown: '<div class="{{css.dropDownMenu}}"><button class="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret" type="button" data-toggle="dropdown"><span class="{{css.dropDownMenuText}}">{{ctx.content}}</span></button><ul class="{{css.dropDownMenuItems}}" role="menu"></ul></div>',
                actionDropDownItem: '<li class="dropdown-item"><a href="" data-action="{{ctx.action}}" class="dropdown-link {{css.dropDownItemButton}}">{{ctx.text}}</a></li>',
                actionDropDownCheckboxItem: '<li class="dropdown-item"><label class="dropdown-item p-0"><input name="{{ctx.name}}" type="checkbox" value="1" class="{{css.dropDownItemCheckbox}}" {{ctx.checked}} /> {{ctx.label}}</label></li>',
                paginationItem: '<li class="page-item {{ctx.css}}"><a href="" data-page="{{ctx.page}}" class="page-link {{css.paginationButton}}">{{ctx.text}}</a></li>',
            }
        });

        var grid = $('#bootgrid-command').bootgrid({
            formatters: {
                commands: function(column, row) {
                    return '<button type="button" class="btn btn-sm btn-info mr-2 command-edit" data-row-id="' + row.id + '"><em class="fa fa-edit fa-fw"></em></button>' +
                        '<button type="button" class="btn btn-sm btn-danger command-delete" data-row-id="' + row.id + '"><em class="fa fa-trash fa-fw"></em></button>';
                }
            },
            templates: {
                // templates for BS4
                actionButton: '<button class="btn btn-secondary" type="button" title="{{ctx.text}}">{{ctx.content}}</button>',
                actionDropDown: '<div class="{{css.dropDownMenu}}"><button class="btn btn-secondary dropdown-toggle dropdown-toggle-nocaret" type="button" data-toggle="dropdown"><span class="{{css.dropDownMenuText}}">{{ctx.content}}</span></button><ul class="{{css.dropDownMenuItems}}" role="menu"></ul></div>',
                actionDropDownItem: '<li class="dropdown-item"><a href="" data-action="{{ctx.action}}" class="dropdown-link {{css.dropDownItemButton}}">{{ctx.text}}</a></li>',
                actionDropDownCheckboxItem: '<li class="dropdown-item"><label class="dropdown-item p-0"><input name="{{ctx.name}}" type="checkbox" value="1" class="{{css.dropDownItemCheckbox}}" {{ctx.checked}} /> {{ctx.label}}</label></li>',
                paginationItem: '<li class="page-item {{ctx.css}}"><a href="" data-page="{{ctx.page}}" class="page-link {{css.paginationButton}}">{{ctx.text}}</a></li>',
            }
        }).on('loaded.rs.jquery.bootgrid', function() {
            /* Executes after data is loaded and rendered */
            grid.find('.command-edit').on('click', function() {
                console.log('You pressed edit on row: ' + $(this).data('row-id'));
            }).end().find('.command-delete').on('click', function() {
                console.log('You pressed delete on row: ' + $(this).data('row-id'));
            });
        });

    }

})(window, document, window.jQuery);
// DATATABLES
// -----------------------------------

(function(window, document, $, undefined) {
    'use strict';

    $(initDatatables);

    function initDatatables() {

        if (!$.fn.DataTable) return;

        // Zero configuration

        $('#datatable1').DataTable({
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            responsive: true,
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: '<em class="fas fa-search"></em>',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="fa fa-caret-right"></em>',
                    sPrevious: '<em class="fa fa-caret-left"></em>'
                }
            }
        });


        // Filter

        $('#datatable2').DataTable({
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            responsive: true,
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: 'Search all columns:',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="fa fa-caret-right"></em>',
                    sPrevious: '<em class="fa fa-caret-left"></em>'
                }
            },
            // Datatable Buttons setup
            dom: 'Bfrtip',
            buttons: [
                { extend: 'copy', className: 'btn-info' },
                { extend: 'csv', className: 'btn-info' },
                { extend: 'excel', className: 'btn-info', title: 'XLS-File' },
                { extend: 'pdf', className: 'btn-info', title: $('title').text() },
                { extend: 'print', className: 'btn-info' }
            ]
        });

        $('#datatable3').DataTable({
            'paging': true, // Table pagination
            'ordering': true, // Column ordering
            'info': true, // Bottom left status text
            responsive: true,
            // Text translation options
            // Note the required keywords between underscores (e.g _MENU_)
            oLanguage: {
                sSearch: 'Search all columns:',
                sLengthMenu: '_MENU_ records per page',
                info: 'Showing page _PAGE_ of _PAGES_',
                zeroRecords: 'Nothing found - sorry',
                infoEmpty: 'No records available',
                infoFiltered: '(filtered from _MAX_ total records)',
                oPaginate: {
                    sNext: '<em class="fa fa-caret-right"></em>',
                    sPrevious: '<em class="fa fa-caret-left"></em>'
                }
            },
            // Datatable key setup
            keys: true
        });

    }

})(window, document, window.jQuery);
// Custom jQuery
// -----------------------------------


(function(window, document, $, undefined) {
    'use strict';

    $(initCustom);

    function initCustom() {

        // custom code

    }

})(window, document, window.jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5pbml0LmpzIiwiY2hhcnRzL2NoYXJ0LWtub2IuanMiLCJjaGFydHMvY2hhcnQuanMiLCJjaGFydHMvY2hhcnRpc3QuanMiLCJjaGFydHMvZWFzeXBpZWNoYXJ0LmpzIiwiY2hhcnRzL2Zsb3QuanMiLCJjaGFydHMvbW9ycmlzLmpzIiwiY2hhcnRzL3JpY2tzaGF3LmpzIiwiY2hhcnRzL3NwYXJrbGluZS5qcyIsImVsZW1lbnRzL2NhcmRzLmpzIiwiZWxlbWVudHMvbmVzdGFibGUuanMiLCJlbGVtZW50cy9ub3RpZnkuanMiLCJlbGVtZW50cy9wbGF5LWFuaW1hdGlvbi5qcyIsImVsZW1lbnRzL3BvcmxldHMuanMiLCJlbGVtZW50cy9zb3J0YWJsZS5qcyIsImVsZW1lbnRzL3N3ZWV0YWxlcnQuanMiLCJjb21tb24vYm9vdHN0cmFwLXN0YXJ0LmpzIiwiY29tbW9uL2NhcmQtdG9vbHMuanMiLCJjb21tb24vY29uc3RhbnRzLmpzIiwiY29tbW9uL2Z1bGxzY3JlZW4uanMiLCJjb21tb24vbG9hZC1jc3MuanMiLCJjb21tb24vbG9jYWxpemUuanMiLCJjb21tb24vbmF2YmFyLXNlYXJjaC5qcyIsImNvbW1vbi9ub3cuanMiLCJjb21tb24vcnRsLmpzIiwiY29tbW9uL3NpZGViYXIuanMiLCJjb21tb24vc2xpbXNjcm9sbC5qcyIsImNvbW1vbi90YWJsZS1jaGVja2FsbC5qcyIsImNvbW1vbi90b2dnbGUtc3RhdGUuanMiLCJjb21tb24vdHJpZ2dlci1yZXNpemUuanMiLCJmb3Jtcy9jb2xvci1waWNrZXIuanMiLCJmb3Jtcy9mb3Jtcy5qcyIsImZvcm1zL2ltYWdlY3JvcC5qcyIsImZvcm1zL3NlbGVjdDIuanMiLCJmb3Jtcy91cGxvYWQuanMiLCJmb3Jtcy93aXphcmQuanMiLCJmb3Jtcy94ZWRpdGFibGUuanMiLCJleHRyYXMvY2FsZW5kYXIuanMiLCJleHRyYXMvanFjbG91ZC5qcyIsImV4dHJhcy9zZWFyY2guanMiLCJtYXBzL2dtYXAuanMiLCJtYXBzL3ZlY3Rvci5tYXAuZGVtby5qcyIsIm1hcHMvdmVjdG9yLm1hcC5qcyIsInBhZ2VzL3BhZ2VzLmpzIiwidGFibGVzL2Jvb3RncmlkLmpzIiwidGFibGVzL2RhdGF0YWJsZS5qcyIsImN1c3RvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9QQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqXHJcbiAqIEFuZ2xlIC0gQm9vdHN0cmFwIEFkbWluIFRlbXBsYXRlXHJcbiAqXHJcbiAqIFZlcnNpb246IEB2ZXJzaW9uQFxyXG4gKiBBdXRob3I6IEBhdXRob3JAXHJcbiAqIFdlYnNpdGU6IEB1cmxAXHJcbiAqIExpY2Vuc2U6IEBsaWNlbnNlQFxyXG4gKlxyXG4gKi9cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgaWYgKHR5cGVvZiAkID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBhcHBsaWNhdGlvblxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnknKTtcclxuICAgIH1cclxuXHJcbiAgICAkKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAvLyBSZXN0b3JlIGJvZHkgY2xhc3Nlc1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIG5ldyBTdGF0ZVRvZ2dsZXIoKS5yZXN0b3JlU3RhdGUoJGJvZHkpO1xyXG5cclxuICAgICAgICAvLyBlbmFibGUgc2V0dGluZ3MgdG9nZ2xlIGFmdGVyIHJlc3RvcmVcclxuICAgICAgICAkKCcjY2hrLWZpeGVkJykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdsYXlvdXQtZml4ZWQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1jb2xsYXBzZWQnKS5wcm9wKCdjaGVja2VkJywgJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWNvbGxhcHNlZCcpKTtcclxuICAgICAgICAkKCcjY2hrLWNvbGxhcHNlZC10ZXh0JykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1jb2xsYXBzZWQtdGV4dCcpKTtcclxuICAgICAgICAkKCcjY2hrLWJveGVkJykucHJvcCgnY2hlY2tlZCcsICRib2R5Lmhhc0NsYXNzKCdsYXlvdXQtYm94ZWQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1mbG9hdCcpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnYXNpZGUtZmxvYXQnKSk7XHJcbiAgICAgICAgJCgnI2Noay1ob3ZlcicpLnByb3AoJ2NoZWNrZWQnLCAkYm9keS5oYXNDbGFzcygnYXNpZGUtaG92ZXInKSk7XHJcblxyXG4gICAgICAgIC8vIFdoZW4gcmVhZHkgZGlzcGxheSB0aGUgb2Zmc2lkZWJhclxyXG4gICAgICAgICQoJy5vZmZzaWRlYmFyLmQtbm9uZScpLnJlbW92ZUNsYXNzKCdkLW5vbmUnKTtcclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSB3YXJuaW5nIFwiU3luY2hyb25vdXMgWE1MSHR0cFJlcXVlc3Qgb24gdGhlIG1haW4gdGhyZWFkIGlzIGRlcHJlY2F0ZWQuLlwiXHJcbiAgICAgICAgJC5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5hc3luYyA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSk7IC8vIGRvYyByZWFkeVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gS25vYiBjaGFydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEtub2IpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRLbm9iKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4ua25vYikgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIga25vYkxvYWRlck9wdGlvbnMxID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwJScsIC8vIHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICBmZ0NvbG9yOiBBUFBfQ09MT1JTWydpbmZvJ11cclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNrbm9iLWNoYXJ0MScpLmtub2Ioa25vYkxvYWRlck9wdGlvbnMxKTtcclxuXHJcbiAgICAgICAgdmFyIGtub2JMb2FkZXJPcHRpb25zMiA9IHtcclxuICAgICAgICAgICAgd2lkdGg6ICc1MCUnLCAvLyByZXNwb25zaXZlXHJcbiAgICAgICAgICAgIGRpc3BsYXlJbnB1dDogdHJ1ZSxcclxuICAgICAgICAgICAgZmdDb2xvcjogQVBQX0NPTE9SU1sncHVycGxlJ10sXHJcbiAgICAgICAgICAgIHJlYWRPbmx5OiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcja25vYi1jaGFydDInKS5rbm9iKGtub2JMb2FkZXJPcHRpb25zMik7XHJcblxyXG4gICAgICAgIHZhciBrbm9iTG9hZGVyT3B0aW9uczMgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTAlJywgLy8gcmVzcG9uc2l2ZVxyXG4gICAgICAgICAgICBkaXNwbGF5SW5wdXQ6IHRydWUsXHJcbiAgICAgICAgICAgIGZnQ29sb3I6IEFQUF9DT0xPUlNbJ2luZm8nXSxcclxuICAgICAgICAgICAgYmdDb2xvcjogQVBQX0NPTE9SU1snZ3JheSddLFxyXG4gICAgICAgICAgICBhbmdsZU9mZnNldDogLTEyNSxcclxuICAgICAgICAgICAgYW5nbGVBcmM6IDI1MFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2tub2ItY2hhcnQzJykua25vYihrbm9iTG9hZGVyT3B0aW9uczMpO1xyXG5cclxuICAgICAgICB2YXIga25vYkxvYWRlck9wdGlvbnM0ID0ge1xyXG4gICAgICAgICAgICB3aWR0aDogJzUwJScsIC8vIHJlc3BvbnNpdmVcclxuICAgICAgICAgICAgZGlzcGxheUlucHV0OiB0cnVlLFxyXG4gICAgICAgICAgICBmZ0NvbG9yOiBBUFBfQ09MT1JTWydwaW5rJ10sXHJcbiAgICAgICAgICAgIGRpc3BsYXlQcmV2aW91czogdHJ1ZSxcclxuICAgICAgICAgICAgdGhpY2tuZXNzOiAwLjEsXHJcbiAgICAgICAgICAgIGxpbmVDYXA6ICdyb3VuZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgICQoJyNrbm9iLWNoYXJ0NCcpLmtub2Ioa25vYkxvYWRlck9wdGlvbnM0KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDaGFydCBKU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdENoYXJ0SlMpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGFydEpTKCkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIENoYXJ0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyByYW5kb20gdmFsdWVzIGZvciBkZW1vXHJcbiAgICAgICAgdmFyIHJGYWN0b3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gTGluZSBjaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBsaW5lRGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgRmlyc3QgZGF0YXNldCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDExNCwxMDIsMTg2LDEpJyxcclxuICAgICAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtyRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCldXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgU2Vjb25kIGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgzNSwxODMsMjI5LDAuMiknLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZ2JhKDM1LDE4MywyMjksMSknLFxyXG4gICAgICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogW3JGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKV1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbGluZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGxpbmVjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1saW5lY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBsaW5lQ2hhcnQgPSBuZXcgQ2hhcnQobGluZWN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBsaW5lRGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBsaW5lT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBCYXIgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgYmFyRGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseSddLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyM2I3ZTUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMjNiN2U1JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtyRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCldXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1ZDljZWMnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNWQ5Y2VjJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtyRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCksIHJGYWN0b3IoKSwgckZhY3RvcigpLCByRmFjdG9yKCldXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGJhck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGJhcmN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLWJhcmNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgYmFyQ2hhcnQgPSBuZXcgQ2hhcnQoYmFyY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IGJhckRhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdiYXInLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBiYXJPcHRpb25zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICBEb3VnaG51dCBjaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBkb3VnaG51dERhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAgICAgJ1B1cnBsZScsXHJcbiAgICAgICAgICAgICAgICAnWWVsbG93JyxcclxuICAgICAgICAgICAgICAgICdCbHVlJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjZmFkNzMyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzIzYjdlNSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICcjNzI2NmJhJyxcclxuICAgICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgICAgICAgICAgICAgJyMyM2I3ZTUnXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGRvdWdobnV0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgZG91Z2hudXRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnRqcy1kb3VnaG51dGNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICB2YXIgZG91Z2hudXRDaGFydCA9IG5ldyBDaGFydChkb3VnaG51dGN0eCwge1xyXG4gICAgICAgICAgICBkYXRhOiBkb3VnaG51dERhdGEsXHJcbiAgICAgICAgICAgIHR5cGU6ICdkb3VnaG51dCcsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IGRvdWdobnV0T3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQaWUgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgcGllRGF0YSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbXHJcbiAgICAgICAgICAgICAgICAnUHVycGxlJyxcclxuICAgICAgICAgICAgICAgICdZZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgJ0JsdWUnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogWzMwMCwgNTAsIDEwMF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyNmYWQ3MzInLFxyXG4gICAgICAgICAgICAgICAgICAgICcjMjNiN2U1J1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjZmFkNzMyJyxcclxuICAgICAgICAgICAgICAgICAgICAnIzIzYjdlNSdcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcGllT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcGllY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtcGllY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBwaWVDaGFydCA9IG5ldyBDaGFydChwaWVjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogcGllRGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHBpZU9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUG9sYXIgY2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgcG9sYXJEYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAxMSxcclxuICAgICAgICAgICAgICAgICAgICAxNixcclxuICAgICAgICAgICAgICAgICAgICA3LFxyXG4gICAgICAgICAgICAgICAgICAgIDNcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAnI2Y1MzJlNScsXHJcbiAgICAgICAgICAgICAgICAgICAgJyM3MjY2YmEnLFxyXG4gICAgICAgICAgICAgICAgICAgICcjZjUzMmU1JyxcclxuICAgICAgICAgICAgICAgICAgICAnIzcyNjZiYSdcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IGRhdGFzZXQnIC8vIGZvciBsZWdlbmRcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1xyXG4gICAgICAgICAgICAgICAgJ0xhYmVsIDEnLFxyXG4gICAgICAgICAgICAgICAgJ0xhYmVsIDInLFxyXG4gICAgICAgICAgICAgICAgJ0xhYmVsIDMnLFxyXG4gICAgICAgICAgICAgICAgJ0xhYmVsIDQnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcG9sYXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBwb2xhcmN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydGpzLXBvbGFyY2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIHZhciBwb2xhckNoYXJ0ID0gbmV3IENoYXJ0KHBvbGFyY3R4LCB7XHJcbiAgICAgICAgICAgIGRhdGE6IHBvbGFyRGF0YSxcclxuICAgICAgICAgICAgdHlwZTogJ3BvbGFyQXJlYScsXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHBvbGFyT3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSYWRhciBjaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciByYWRhckRhdGEgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWydFYXRpbmcnLCAnRHJpbmtpbmcnLCAnU2xlZXBpbmcnLCAnRGVzaWduaW5nJywgJ0NvZGluZycsICdDeWNsaW5nJywgJ1J1bm5pbmcnXSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ015IEZpcnN0IGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxMTQsMTAyLDE4NiwxKScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbNjUsIDU5LCA5MCwgODEsIDU2LCA1NSwgNDBdXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnTXkgU2Vjb25kIGRhdGFzZXQnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwwLjIpJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmdiYSgxNTEsMTg3LDIwNSwxKScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbMjgsIDQ4LCA0MCwgMTksIDk2LCAyNywgMTAwXVxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciByYWRhck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHJhZGFyY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0anMtcmFkYXJjaGFydCcpLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgdmFyIHJhZGFyQ2hhcnQgPSBuZXcgQ2hhcnQocmFkYXJjdHgsIHtcclxuICAgICAgICAgICAgZGF0YTogcmFkYXJEYXRhLFxyXG4gICAgICAgICAgICB0eXBlOiAncmFkYXInLFxyXG4gICAgICAgICAgICBvcHRpb25zOiByYWRhck9wdGlvbnNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDaGFydGlzdFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdENoYXJ0aXN0cyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENoYXJ0aXN0cygpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBDaGFydGlzdCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gQmFyIGJpcG9sYXJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIHZhciBkYXRhMSA9IHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ1cxJywgJ1cyJywgJ1czJywgJ1c0JywgJ1c1JywgJ1c2JywgJ1c3JywgJ1c4JywgJ1c5JywgJ1cxMCddLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIFsxLCAyLCA0LCA4LCA2LCAtMiwgLTEsIC00LCAtNiwgLTJdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9uczEgPSB7XHJcbiAgICAgICAgICAgIGhpZ2g6IDEwLFxyXG4gICAgICAgICAgICBsb3c6IC0xMCxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODAsXHJcbiAgICAgICAgICAgIGF4aXNYOiB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbEludGVycG9sYXRpb25GbmM6IGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleCAlIDIgPT09IDAgPyB2YWx1ZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBuZXcgQ2hhcnRpc3QuQmFyKCcjY3QtYmFyMScsIGRhdGExLCBvcHRpb25zMSk7XHJcblxyXG4gICAgICAgIC8vIEJhciBIb3Jpem9udGFsXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBuZXcgQ2hhcnRpc3QuQmFyKCcjY3QtYmFyMicsIHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J10sXHJcbiAgICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICAgICAgWzUsIDQsIDMsIDcsIDUsIDEwLCAzXSxcclxuICAgICAgICAgICAgICAgIFszLCAyLCA5LCA1LCA0LCA2LCA0XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBzZXJpZXNCYXJEaXN0YW5jZTogMTAsXHJcbiAgICAgICAgICAgIHJldmVyc2VEYXRhOiB0cnVlLFxyXG4gICAgICAgICAgICBob3Jpem9udGFsQmFyczogdHJ1ZSxcclxuICAgICAgICAgICAgaGVpZ2h0OiAyODAsXHJcbiAgICAgICAgICAgIGF4aXNZOiB7XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IDcwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTGluZVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IENoYXJ0aXN0LkxpbmUoJyNjdC1saW5lMScsIHtcclxuICAgICAgICAgICAgbGFiZWxzOiBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbMTIsIDksIDcsIDgsIDVdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDMuNSwgNywgM10sXHJcbiAgICAgICAgICAgICAgICBbMSwgMywgNCwgNSwgNl1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgZnVsbFdpZHRoOiB0cnVlLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4MCxcclxuICAgICAgICAgICAgY2hhcnRQYWRkaW5nOiB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogNDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gU1ZHIEFuaW1hdGlvblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgIHZhciBjaGFydDEgPSBuZXcgQ2hhcnRpc3QuTGluZSgnI2N0LWxpbmUzJywge1xyXG4gICAgICAgICAgICBsYWJlbHM6IFsnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgNSwgMiwgNSwgNCwgM10sXHJcbiAgICAgICAgICAgICAgICBbMiwgMywgNCwgOCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbNSwgNCwgMywgMiwgMSwgMC41XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsb3c6IDAsXHJcbiAgICAgICAgICAgIHNob3dBcmVhOiB0cnVlLFxyXG4gICAgICAgICAgICBzaG93UG9pbnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmdWxsV2lkdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNoYXJ0MS5vbignZHJhdycsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ2xpbmUnIHx8IGRhdGEudHlwZSA9PT0gJ2FyZWEnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogMjAwMCAqIGRhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS5wYXRoLmNsb25lKCkuc2NhbGUoMSwgMCkudHJhbnNsYXRlKDAsIGRhdGEuY2hhcnRSZWN0LmhlaWdodCgpKS5zdHJpbmdpZnkoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGRhdGEucGF0aC5jbG9uZSgpLnN0cmluZ2lmeSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IENoYXJ0aXN0LlN2Zy5FYXNpbmcuZWFzZU91dFF1aW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8vIFNsaW0gYW5pbWF0aW9uXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9IG5ldyBDaGFydGlzdC5MaW5lKCcjY3QtbGluZTInLCB7XHJcbiAgICAgICAgICAgIGxhYmVsczogWycxJywgJzInLCAnMycsICc0JywgJzUnLCAnNicsICc3JywgJzgnLCAnOScsICcxMCcsICcxMScsICcxMiddLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAgICAgIFsxMiwgOSwgNywgOCwgNSwgNCwgNiwgMiwgMywgMywgNCwgNl0sXHJcbiAgICAgICAgICAgICAgICBbNCwgNSwgMywgNywgMywgNSwgNSwgMywgNCwgNCwgNSwgNV0sXHJcbiAgICAgICAgICAgICAgICBbNSwgMywgNCwgNSwgNiwgMywgMywgNCwgNSwgNiwgMywgNF0sXHJcbiAgICAgICAgICAgICAgICBbMywgNCwgNSwgNiwgNywgNiwgNCwgNSwgNiwgNywgNiwgM11cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbG93OiAwLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBMZXQncyBwdXQgYSBzZXF1ZW5jZSBudW1iZXIgYXNpZGUgc28gd2UgY2FuIHVzZSBpdCBpbiB0aGUgZXZlbnQgY2FsbGJhY2tzXHJcbiAgICAgICAgdmFyIHNlcSA9IDAsXHJcbiAgICAgICAgICAgIGRlbGF5cyA9IDgwLFxyXG4gICAgICAgICAgICBkdXJhdGlvbnMgPSA1MDA7XHJcblxyXG4gICAgICAgIC8vIE9uY2UgdGhlIGNoYXJ0IGlzIGZ1bGx5IGNyZWF0ZWQgd2UgcmVzZXQgdGhlIHNlcXVlbmNlXHJcbiAgICAgICAgY2hhcnQub24oJ2NyZWF0ZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2VxID0gMDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gT24gZWFjaCBkcmF3biBlbGVtZW50IGJ5IENoYXJ0aXN0IHdlIHVzZSB0aGUgQ2hhcnRpc3QuU3ZnIEFQSSB0byB0cmlnZ2VyIFNNSUwgYW5pbWF0aW9uc1xyXG4gICAgICAgIGNoYXJ0Lm9uKCdkcmF3JywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBzZXErKztcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdsaW5lJykge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGRyYXduIGVsZW1lbnQgaXMgYSBsaW5lIHdlIGRvIGEgc2ltcGxlIG9wYWNpdHkgZmFkZSBpbi4gVGhpcyBjb3VsZCBhbHNvIGJlIGFjaGlldmVkIHVzaW5nIENTUzMgYW5pbWF0aW9ucy5cclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBkZWxheSB3aGVuIHdlIGxpa2UgdG8gc3RhcnQgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzICsgMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRHVyYXRpb24gb2YgdGhlIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHZhbHVlIHdoZXJlIHRoZSBhbmltYXRpb24gc2hvdWxkIHN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB2YWx1ZSB3aGVyZSBpdCBzaG91bGQgZW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAnbGFiZWwnICYmIGRhdGEuYXhpcyA9PT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmVsZW1lbnQuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS55ICsgMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4gc3BlY2lmeSBhbiBlYXNpbmcgZnVuY3Rpb24gZnJvbSBDaGFydGlzdC5TdmcuRWFzaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdsYWJlbCcgJiYgZGF0YS5heGlzID09PSAneScpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhLnggLSAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdwb2ludCcpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZWxlbWVudC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICB4MToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS54IC0gMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHgyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cjogZHVyYXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhLnggLSAxMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IGRhdGEueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnZWFzZU91dFF1YXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogc2VxICogZGVsYXlzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG86IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICdncmlkJykge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNpbmcgZGF0YS5heGlzIHdlIGdldCB4IG9yIHkgd2hpY2ggd2UgY2FuIHVzZSB0byBjb25zdHJ1Y3Qgb3VyIGFuaW1hdGlvbiBkZWZpbml0aW9uIG9iamVjdHNcclxuICAgICAgICAgICAgICAgIHZhciBwb3MxQW5pbWF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBzZXEgKiBkZWxheXMsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyOiBkdXJhdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YVtkYXRhLmF4aXMudW5pdHMucG9zICsgJzEnXSAtIDMwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMSddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHBvczJBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiBkYXRhW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMiddIC0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhW2RhdGEuYXhpcy51bml0cy5wb3MgKyAnMiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbnNbZGF0YS5heGlzLnVuaXRzLnBvcyArICcxJ10gPSBwb3MxQW5pbWF0aW9uO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc1tkYXRhLmF4aXMudW5pdHMucG9zICsgJzInXSA9IHBvczJBbmltYXRpb247XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25zWydvcGFjaXR5J10gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IHNlcSAqIGRlbGF5cyxcclxuICAgICAgICAgICAgICAgICAgICBkdXI6IGR1cmF0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRRdWFydCdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5lbGVtZW50LmFuaW1hdGUoYW5pbWF0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHRoZSBzYWtlIG9mIHRoZSBleGFtcGxlIHdlIHVwZGF0ZSB0aGUgY2hhcnQgZXZlcnkgdGltZSBpdCdzIGNyZWF0ZWQgd2l0aCBhIGRlbGF5IG9mIDEwIHNlY29uZHNcclxuICAgICAgICBjaGFydC5vbignY3JlYXRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAod2luZG93Ll9fZXhhbXBsZUFuaW1hdGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQod2luZG93Ll9fZXhhbXBsZUFuaW1hdGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5fX2V4YW1wbGVBbmltYXRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93Ll9fZXhhbXBsZUFuaW1hdGVUaW1lb3V0ID0gc2V0VGltZW91dChjaGFydC51cGRhdGUuYmluZChjaGFydCksIDEyMDAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBFYXN5cGllIGNoYXJ0IExvYWRlclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEVhc3lQaWVDaGFydCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEVhc3lQaWVDaGFydCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmVhc3lQaWVDaGFydCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBVc2FnZSB2aWEgZGF0YSBhdHRyaWJ1dGVzXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzcz1cImVhc3lwaWUtY2hhcnRcIiBkYXRhLWVhc3lwaWVjaGFydCBkYXRhLXBlcmNlbnQ9XCJYXCIgZGF0YS1vcHRpb25OYW1lPVwidmFsdWVcIj48L2Rpdj5cclxuICAgICAgICAkKCdbZGF0YS1lYXN5cGllY2hhcnRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICRlbGVtID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSAkZWxlbS5kYXRhKCk7XHJcbiAgICAgICAgICAgICRlbGVtLmVhc3lQaWVDaGFydChvcHRpb25zIHx8IHt9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcHJvZ3JhbW1hdGljIHVzYWdlXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnMxID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJDb2xvcjogQVBQX0NPTE9SU1snc3VjY2VzcyddLFxyXG4gICAgICAgICAgICB0cmFja0NvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgc2NhbGVDb2xvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMTAsXHJcbiAgICAgICAgICAgIGxpbmVDYXA6ICdjaXJjbGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcjZWFzeXBpZTEnKS5lYXN5UGllQ2hhcnQocGllT3B0aW9uczEpO1xyXG5cclxuICAgICAgICB2YXIgcGllT3B0aW9uczIgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhckNvbG9yOiBBUFBfQ09MT1JTWyd3YXJuaW5nJ10sXHJcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBmYWxzZSxcclxuICAgICAgICAgICAgbGluZVdpZHRoOiA0LFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2Vhc3lwaWUyJykuZWFzeVBpZUNoYXJ0KHBpZU9wdGlvbnMyKTtcclxuXHJcbiAgICAgICAgdmFyIHBpZU9wdGlvbnMzID0ge1xyXG4gICAgICAgICAgICBhbmltYXRlOiB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogODAwLFxyXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiYXJDb2xvcjogQVBQX0NPTE9SU1snZGFuZ2VyJ10sXHJcbiAgICAgICAgICAgIHRyYWNrQ29sb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZUNvbG9yOiBBUFBfQ09MT1JTWydncmF5J10sXHJcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMTUsXHJcbiAgICAgICAgICAgIGxpbmVDYXA6ICdjaXJjbGUnXHJcbiAgICAgICAgfTtcclxuICAgICAgICAkKCcjZWFzeXBpZTMnKS5lYXN5UGllQ2hhcnQocGllT3B0aW9uczMpO1xyXG5cclxuICAgICAgICB2YXIgcGllT3B0aW9uczQgPSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGU6IHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXHJcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJhckNvbG9yOiBBUFBfQ09MT1JTWydkYW5nZXInXSxcclxuICAgICAgICAgICAgdHJhY2tDb2xvcjogQVBQX0NPTE9SU1sneWVsbG93J10sXHJcbiAgICAgICAgICAgIHNjYWxlQ29sb3I6IEFQUF9DT0xPUlNbJ2dyYXktZGFyayddLFxyXG4gICAgICAgICAgICBsaW5lV2lkdGg6IDE1LFxyXG4gICAgICAgICAgICBsaW5lQ2FwOiAnY2lyY2xlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgJCgnI2Vhc3lwaWU0JykuZWFzeVBpZUNoYXJ0KHBpZU9wdGlvbnM0KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDSEFSVCBTUExJTkVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEZsb3RTcGxpbmUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90U3BsaW5lKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJVbmlxdWVzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNzY4Mjk0XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA1OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgOTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDY2XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA4Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNjBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZWN1cnJlbnRcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMxZjkyZmVcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAyMV0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDI3XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCAyNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDM5XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCAxNV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgZGF0YXYyID0gW3tcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkhvdXJzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMjNiN2U1XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDIwXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA3MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDU5XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA5M10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgNjZdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDg2XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA2MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgNjBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTm92XCIsIDEyXSxcclxuICAgICAgICAgICAgICAgIFtcIkRlY1wiLCA1MF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvbW1pdHNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3MjY2YmFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAyMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDMwXSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCA1MF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDQzXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCA5Nl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMzZdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDgwXSxcclxuICAgICAgICAgICAgICAgIFtcIk9jdFwiLCAxMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJOb3ZcIiwgNzJdLFxyXG4gICAgICAgICAgICAgICAgW1wiRGVjXCIsIDMxXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBkYXRhdjMgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSG9tZVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzFiYTNjZFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiMVwiLCAzOF0sXHJcbiAgICAgICAgICAgICAgICBbXCIyXCIsIDQwXSxcclxuICAgICAgICAgICAgICAgIFtcIjNcIiwgNDJdLFxyXG4gICAgICAgICAgICAgICAgW1wiNFwiLCA0OF0sXHJcbiAgICAgICAgICAgICAgICBbXCI1XCIsIDUwXSxcclxuICAgICAgICAgICAgICAgIFtcIjZcIiwgNzBdLFxyXG4gICAgICAgICAgICAgICAgW1wiN1wiLCAxNDVdLFxyXG4gICAgICAgICAgICAgICAgW1wiOFwiLCA3MF0sXHJcbiAgICAgICAgICAgICAgICBbXCI5XCIsIDU5XSxcclxuICAgICAgICAgICAgICAgIFtcIjEwXCIsIDQ4XSxcclxuICAgICAgICAgICAgICAgIFtcIjExXCIsIDM4XSxcclxuICAgICAgICAgICAgICAgIFtcIjEyXCIsIDI5XSxcclxuICAgICAgICAgICAgICAgIFtcIjEzXCIsIDMwXSxcclxuICAgICAgICAgICAgICAgIFtcIjE0XCIsIDIyXSxcclxuICAgICAgICAgICAgICAgIFtcIjE1XCIsIDI4XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiT3ZlcmFsbFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzNhM2Y1MVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiMVwiLCAxNl0sXHJcbiAgICAgICAgICAgICAgICBbXCIyXCIsIDE4XSxcclxuICAgICAgICAgICAgICAgIFtcIjNcIiwgMTddLFxyXG4gICAgICAgICAgICAgICAgW1wiNFwiLCAxNl0sXHJcbiAgICAgICAgICAgICAgICBbXCI1XCIsIDMwXSxcclxuICAgICAgICAgICAgICAgIFtcIjZcIiwgMTEwXSxcclxuICAgICAgICAgICAgICAgIFtcIjdcIiwgMTldLFxyXG4gICAgICAgICAgICAgICAgW1wiOFwiLCAxOF0sXHJcbiAgICAgICAgICAgICAgICBbXCI5XCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMFwiLCAxOV0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMVwiLCAxNl0sXHJcbiAgICAgICAgICAgICAgICBbXCIxMlwiLCAxMF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxM1wiLCAyMF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxNFwiLCAxMF0sXHJcbiAgICAgICAgICAgICAgICBbXCIxNVwiLCAyMF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGxpbmVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZW5zaW9uOiAwLjQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVdpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuNVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNmY2ZjZmMnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICBtYXg6IDE1MCwgLy8gb3B0aW9uYWw6IHVzZSBpdCBmb3IgYSBjbGVhciByZXByZXNldGF0aW9uXHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIC8vcG9zaXRpb246ICdyaWdodCcgb3IgJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgdGlja0Zvcm1hdHRlcjogZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2IC8qICsgJyB2aXNpdG9ycycqLyA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtc3BsaW5lJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0djIgPSAkKCcuY2hhcnQtc3BsaW5ldjInKTtcclxuICAgICAgICBpZiAoY2hhcnR2Mi5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydHYyLCBkYXRhdjIsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgY2hhcnR2MyA9ICQoJy5jaGFydC1zcGxpbmV2MycpO1xyXG4gICAgICAgIGlmIChjaGFydHYzLmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0djMsIGRhdGF2Mywgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG4vLyBDSEFSVCBBUkVBXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdEFyZWEpXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RBcmVhKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJVbmlxdWVzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjYWFkODc0XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgNTBdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDg0XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCA1Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdW5cIiwgODhdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDY5XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCA5Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgNThdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJSZWN1cnJlbnRcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3ZGM3ZGZcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAxM10sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCAyN10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMzhdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDExXSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCAzOV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogMC44XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcG9pbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IDRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgaG92ZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZjZmNmYydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9vbHRpcDogdHJ1ZSxcclxuICAgICAgICAgICAgdG9vbHRpcE9wdHM6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGZ1bmN0aW9uKGxhYmVsLCB4LCB5KSB7IHJldHVybiB4ICsgJyA6ICcgKyB5OyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhheGlzOiB7XHJcbiAgICAgICAgICAgICAgICB0aWNrQ29sb3I6ICcjZmNmY2ZjJyxcclxuICAgICAgICAgICAgICAgIG1vZGU6ICdjYXRlZ29yaWVzJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB5YXhpczoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCdcclxuICAgICAgICAgICAgICAgIHRpY2tGb3JtYXR0ZXI6IGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdiArICcgdmlzaXRvcnMnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaGFkb3dTaXplOiAwXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gJCgnLmNoYXJ0LWFyZWEnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuLy8gQ0hBUlQgQkFSXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdEJhcilcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdEJhcigpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiU2FsZXNcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM5Y2QxNTlcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIFtcIkphblwiLCAyN10sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgODJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDU2XSxcclxuICAgICAgICAgICAgICAgIFtcIkFwclwiLCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMjhdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDc3XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAyM10sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgNDldLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDgxXSxcclxuICAgICAgICAgICAgICAgIFtcIk9jdFwiLCAyMF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBiYXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogMCxcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAwLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogMC45XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2ZjZmNmYycsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAncmlnaHQnIG9yICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1iYXInKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbi8vIENIQVJUIEJBUiBTVEFDS0VEXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdEJhclN0YWNrZWQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGbG90QmFyU3RhY2tlZCgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiVHdlZXRzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNTFiZmYyXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgNTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDgxXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA5N10sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDI0XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA4NV0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgOTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDc4XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA1Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJPY3RcIiwgMTddLFxyXG4gICAgICAgICAgICAgICAgW1wiTm92XCIsIDkwXSxcclxuICAgICAgICAgICAgICAgIFtcIkRlY1wiLCA2Ml1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkxpa2VzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNGE4ZWYxXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgNjldLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDEzNV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgMTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDEwMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMTAwXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA2Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMTE1XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAyMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJTZXBcIiwgMTA0XSxcclxuICAgICAgICAgICAgICAgIFtcIk9jdFwiLCAxMzJdLFxyXG4gICAgICAgICAgICAgICAgW1wiTm92XCIsIDcyXSxcclxuICAgICAgICAgICAgICAgIFtcIkRlY1wiLCA2MV1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIisxXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjA2OTNhXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMjldLFxyXG4gICAgICAgICAgICAgICAgW1wiRmViXCIsIDM2XSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCA0N10sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMjFdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWF5XCIsIDVdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDQ5XSxcclxuICAgICAgICAgICAgICAgIFtcIkp1bFwiLCAzN10sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDI4XSxcclxuICAgICAgICAgICAgICAgIFtcIk9jdFwiLCA5XSxcclxuICAgICAgICAgICAgICAgIFtcIk5vdlwiLCAxMl0sXHJcbiAgICAgICAgICAgICAgICBbXCJEZWNcIiwgMzVdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGF2MiA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJQZW5kaW5nXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTI4OWNhXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJQajFcIiwgODZdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoyXCIsIDEzNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajNcIiwgOTddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo0XCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajVcIiwgNjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo2XCIsIDg1XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqN1wiLCAxMTVdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo4XCIsIDc4XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqOVwiLCAxMDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMFwiLCA4Ml0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajExXCIsIDk3XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTJcIiwgMTEwXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTNcIiwgNjJdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBc3NpZ25lZFwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzcyNjZiYVwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiUGoxXCIsIDQ5XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMlwiLCA4MV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajNcIiwgNDddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo0XCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqNVwiLCAxMDBdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo2XCIsIDQ5XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqN1wiLCA5NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajhcIiwgNDRdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo5XCIsIDUyXSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTBcIiwgMTddLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxMVwiLCA0N10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajEyXCIsIDQ0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTNcIiwgMTAwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ29tcGxldGVkXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNTY0YWEzXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJQajFcIiwgMjldLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoyXCIsIDU2XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqM1wiLCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajRcIiwgMjFdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo1XCIsIDVdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo2XCIsIDI0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqN1wiLCAzN10sXHJcbiAgICAgICAgICAgICAgICBbXCJQajhcIiwgMjJdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGo5XCIsIDI4XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTBcIiwgOV0sXHJcbiAgICAgICAgICAgICAgICBbXCJQajExXCIsIDE0XSxcclxuICAgICAgICAgICAgICAgIFtcIlBqMTJcIiwgMjFdLFxyXG4gICAgICAgICAgICAgICAgW1wiUGoxM1wiLCA1XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIHN0YWNrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmFyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IDAuOVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICBob3ZlcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmNmY2ZjJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b29sdGlwOiB0cnVlLFxyXG4gICAgICAgICAgICB0b29sdGlwT3B0czoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogZnVuY3Rpb24obGFiZWwsIHgsIHkpIHsgcmV0dXJuIHggKyAnIDogJyArIHk7IH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNmY2ZjZmMnLFxyXG4gICAgICAgICAgICAgICAgbW9kZTogJ2NhdGVnb3JpZXMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHlheGlzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogJ3JpZ2h0JyBvciAnbGVmdCdcclxuICAgICAgICAgICAgICAgIHRpY2tDb2xvcjogJyNlZWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNoYWRvd1NpemU6IDBcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY2hhcnQgPSAkKCcuY2hhcnQtYmFyLXN0YWNrZWQnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB2YXIgY2hhcnR2MiA9ICQoJy5jaGFydC1iYXItc3RhY2tlZHYyJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0djIubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnR2MiwgZGF0YXYyLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcbi8vIENIQVJUIERPTlVUXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdERvbnV0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdERvbnV0KCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMzlDNTU4XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA2MCxcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNvZmZlZVwiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwYjRmZlwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogOTAsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDU1NcIlxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNGRkJFNDFcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDUwLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTEVTU1wiXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmM2U0M1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogODAsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJKYWRlXCJcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjOTM3ZmM3XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiAxMTYsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBbmd1bGFySlNcIlxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBwaWU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyUmFkaXVzOiAwLjUgLy8gVGhpcyBtYWtlcyB0aGUgZG9udXQgc2hhcGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1kb251dCcpO1xyXG4gICAgICAgIGlmIChjaGFydC5sZW5ndGgpXHJcbiAgICAgICAgICAgICQucGxvdChjaGFydCwgZGF0YSwgb3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG4vLyBDSEFSVCBMSU5FXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcblxyXG4gICAgJChpbml0RmxvdExpbmUpXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZsb3RMaW5lKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFt7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb21wbGV0ZVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzVhYjFlZlwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICAgICAgW1wiSmFuXCIsIDE4OF0sXHJcbiAgICAgICAgICAgICAgICBbXCJGZWJcIiwgMTgzXSxcclxuICAgICAgICAgICAgICAgIFtcIk1hclwiLCAxODVdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDE5OV0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMTkwXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCAxOTRdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVsXCIsIDE5NF0sXHJcbiAgICAgICAgICAgICAgICBbXCJBdWdcIiwgMTg0XSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA3NF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkluIFByb2dyZXNzXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZjU5OTRlXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMTUzXSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCAxMTZdLFxyXG4gICAgICAgICAgICAgICAgW1wiTWFyXCIsIDEzNl0sXHJcbiAgICAgICAgICAgICAgICBbXCJBcHJcIiwgMTE5XSxcclxuICAgICAgICAgICAgICAgIFtcIk1heVwiLCAxNDhdLFxyXG4gICAgICAgICAgICAgICAgW1wiSnVuXCIsIDEzM10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgMTE4XSxcclxuICAgICAgICAgICAgICAgIFtcIkF1Z1wiLCAxNjFdLFxyXG4gICAgICAgICAgICAgICAgW1wiU2VwXCIsIDU5XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiQ2FuY2VsbGVkXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZDg3YTgwXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbXCJKYW5cIiwgMTExXSxcclxuICAgICAgICAgICAgICAgIFtcIkZlYlwiLCA5N10sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXJcIiwgOTNdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXByXCIsIDExMF0sXHJcbiAgICAgICAgICAgICAgICBbXCJNYXlcIiwgMTAyXSxcclxuICAgICAgICAgICAgICAgIFtcIkp1blwiLCA5M10sXHJcbiAgICAgICAgICAgICAgICBbXCJKdWxcIiwgOTJdLFxyXG4gICAgICAgICAgICAgICAgW1wiQXVnXCIsIDkyXSxcclxuICAgICAgICAgICAgICAgIFtcIlNlcFwiLCA0NF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1dO1xyXG5cclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc2VyaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBsaW5lczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogMC4wMVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBvaW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiA0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmY2ZjZmMnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXA6IHRydWUsXHJcbiAgICAgICAgICAgIHRvb2x0aXBPcHRzOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBmdW5jdGlvbihsYWJlbCwgeCwgeSkgeyByZXR1cm4geCArICcgOiAnICsgeTsgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB4YXhpczoge1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZScsXHJcbiAgICAgICAgICAgICAgICBtb2RlOiAnY2F0ZWdvcmllcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeWF4aXM6IHtcclxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAncmlnaHQnIG9yICdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgdGlja0NvbG9yOiAnI2VlZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hhZG93U2l6ZTogMFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1saW5lJyk7XHJcbiAgICAgICAgaWYgKGNoYXJ0Lmxlbmd0aClcclxuICAgICAgICAgICAgJC5wbG90KGNoYXJ0LCBkYXRhLCBvcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTtcclxuXHJcblxyXG4vLyBDSEFSVCBQSUVcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuXHJcbiAgICAkKGluaXRGbG90UGllKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RmxvdFBpZSgpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBbe1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwialF1ZXJ5XCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNGFjYWI0XCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiAzMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIkNTU1wiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZWE4OFwiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogNDBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJMRVNTXCIsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjZmY4MTUzXCIsXHJcbiAgICAgICAgICAgIFwiZGF0YVwiOiA5MFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlNBU1NcIixcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM4NzhiYjZcIixcclxuICAgICAgICAgICAgXCJkYXRhXCI6IDc1XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiSmFkZVwiLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiI2IyZDc2N1wiLFxyXG4gICAgICAgICAgICBcImRhdGFcIjogMTIwXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgIHBpZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzOiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24obGFiZWwsIHNlcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGNsYXNzPVwiZmxvdC1waWUtbGFiZWxcIj4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xhYmVsICsgJyA6ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGgucm91bmQoc2VyaWVzLnBlcmNlbnQpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJTwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzIyMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjaGFydCA9ICQoJy5jaGFydC1waWUnKTtcclxuICAgICAgICBpZiAoY2hhcnQubGVuZ3RoKVxyXG4gICAgICAgICAgICAkLnBsb3QoY2hhcnQsIGRhdGEsIG9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIE1vcnJpc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE1vcnJpcyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE1vcnJpcygpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBNb3JyaXMgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBjaGFydGRhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDA2XCIsIGE6IDEwMCwgYjogOTAgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMDdcIiwgYTogNzUsIGI6IDY1IH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDA4XCIsIGE6IDUwLCBiOiA0MCB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAwOVwiLCBhOiA3NSwgYjogNjUgfSxcclxuICAgICAgICAgICAgeyB5OiBcIjIwMTBcIiwgYTogNTAsIGI6IDQwIH0sXHJcbiAgICAgICAgICAgIHsgeTogXCIyMDExXCIsIGE6IDc1LCBiOiA2NSB9LFxyXG4gICAgICAgICAgICB7IHk6IFwiMjAxMlwiLCBhOiAxMDAsIGI6IDkwIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB2YXIgZG9udXRkYXRhID0gW1xyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkRvd25sb2FkIFNhbGVzXCIsIHZhbHVlOiAxMiB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkluLVN0b3JlIFNhbGVzXCIsIHZhbHVlOiAzMCB9LFxyXG4gICAgICAgICAgICB7IGxhYmVsOiBcIk1haWwtT3JkZXIgU2FsZXNcIiwgdmFsdWU6IDIwIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyBMaW5lIENoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgbmV3IE1vcnJpcy5MaW5lKHtcclxuICAgICAgICAgICAgZWxlbWVudDogJ21vcnJpcy1saW5lJyxcclxuICAgICAgICAgICAgZGF0YTogY2hhcnRkYXRhLFxyXG4gICAgICAgICAgICB4a2V5OiAneScsXHJcbiAgICAgICAgICAgIHlrZXlzOiBbXCJhXCIsIFwiYlwiXSxcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCJTZXJpZSBBXCIsIFwiU2VyaWUgQlwiXSxcclxuICAgICAgICAgICAgbGluZUNvbG9yczogW1wiIzMxQzBCRVwiLCBcIiM3YTkyYTNcIl0sXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBEb251dCBDaGFydFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgbmV3IE1vcnJpcy5Eb251dCh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3JyaXMtZG9udXQnLFxyXG4gICAgICAgICAgICBkYXRhOiBkb251dGRhdGEsXHJcbiAgICAgICAgICAgIGNvbG9yczogWycjZjA1MDUwJywgJyNmYWQ3MzInLCAnI2ZmOTAyYiddLFxyXG4gICAgICAgICAgICByZXNpemU6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQmFyIENoYXJ0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBuZXcgTW9ycmlzLkJhcih7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3JyaXMtYmFyJyxcclxuICAgICAgICAgICAgZGF0YTogY2hhcnRkYXRhLFxyXG4gICAgICAgICAgICB4a2V5OiAneScsXHJcbiAgICAgICAgICAgIHlrZXlzOiBbXCJhXCIsIFwiYlwiXSxcclxuICAgICAgICAgICAgbGFiZWxzOiBbXCJTZXJpZXMgQVwiLCBcIlNlcmllcyBCXCJdLFxyXG4gICAgICAgICAgICB4TGFiZWxNYXJnaW46IDIsXHJcbiAgICAgICAgICAgIGJhckNvbG9yczogWycjMjNiN2U1JywgJyNmMDUwNTAnXSxcclxuICAgICAgICAgICAgcmVzaXplOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFyZWEgQ2hhcnRcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIG5ldyBNb3JyaXMuQXJlYSh7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3JyaXMtYXJlYScsXHJcbiAgICAgICAgICAgIGRhdGE6IGNoYXJ0ZGF0YSxcclxuICAgICAgICAgICAgeGtleTogJ3knLFxyXG4gICAgICAgICAgICB5a2V5czogW1wiYVwiLCBcImJcIl0sXHJcbiAgICAgICAgICAgIGxhYmVsczogW1wiU2VyaWUgQVwiLCBcIlNlcmllIEJcIl0sXHJcbiAgICAgICAgICAgIGxpbmVDb2xvcnM6IFsnIzcyNjZiYScsICcjMjNiN2U1J10sXHJcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFJpY2tzaGF3XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0TW9ycmlzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TW9ycmlzKCkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIFJpY2tzaGF3ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgc2VyaWVzRGF0YSA9IFtcclxuICAgICAgICAgICAgW10sXHJcbiAgICAgICAgICAgIFtdLFxyXG4gICAgICAgICAgICBbXVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IG5ldyBSaWNrc2hhdy5GaXh0dXJlcy5SYW5kb21EYXRhKDE1MCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgcmFuZG9tLmFkZERhdGEoc2VyaWVzRGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VyaWVzMSA9IFt7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNjMDUwMjBcIixcclxuICAgICAgICAgICAgZGF0YTogc2VyaWVzRGF0YVswXSxcclxuICAgICAgICAgICAgbmFtZTogJ05ldyBZb3JrJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzMwYzAyMFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBzZXJpZXNEYXRhWzFdLFxyXG4gICAgICAgICAgICBuYW1lOiAnTG9uZG9uJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY29sb3I6IFwiIzYwNjBjMFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBzZXJpZXNEYXRhWzJdLFxyXG4gICAgICAgICAgICBuYW1lOiAnVG9reW8nXHJcbiAgICAgICAgfV07XHJcblxyXG4gICAgICAgIHZhciBncmFwaDEgPSBuZXcgUmlja3NoYXcuR3JhcGgoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpY2tzaGF3MVwiKSxcclxuICAgICAgICAgICAgc2VyaWVzOiBzZXJpZXMxLFxyXG4gICAgICAgICAgICByZW5kZXJlcjogJ2FyZWEnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdyYXBoMS5yZW5kZXIoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEdyYXBoIDJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICB2YXIgZ3JhcGgyID0gbmV3IFJpY2tzaGF3LkdyYXBoKHtcclxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyaWNrc2hhdzJcIiksXHJcbiAgICAgICAgICAgIHJlbmRlcmVyOiAnYXJlYScsXHJcbiAgICAgICAgICAgIHN0cm9rZTogdHJ1ZSxcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogNDAgfSwgeyB4OiAxLCB5OiA0OSB9LCB7IHg6IDIsIHk6IDM4IH0sIHsgeDogMywgeTogMzAgfSwgeyB4OiA0LCB5OiAzMiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2YwNTA1MCdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogNDAgfSwgeyB4OiAxLCB5OiA0OSB9LCB7IHg6IDIsIHk6IDM4IH0sIHsgeDogMywgeTogMzAgfSwgeyB4OiA0LCB5OiAzMiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZhZDczMidcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZ3JhcGgyLnJlbmRlcigpO1xyXG5cclxuICAgICAgICAvLyBHcmFwaCAzXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgICAgIHZhciBncmFwaDMgPSBuZXcgUmlja3NoYXcuR3JhcGgoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpY2tzaGF3M1wiKSxcclxuICAgICAgICAgICAgcmVuZGVyZXI6ICdsaW5lJyxcclxuICAgICAgICAgICAgc2VyaWVzOiBbe1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogNDAgfSwgeyB4OiAxLCB5OiA0OSB9LCB7IHg6IDIsIHk6IDM4IH0sIHsgeDogMywgeTogMzAgfSwgeyB4OiA0LCB5OiAzMiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzcyNjZiYSdcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogW3sgeDogMCwgeTogMjAgfSwgeyB4OiAxLCB5OiAyNCB9LCB7IHg6IDIsIHk6IDE5IH0sIHsgeDogMywgeTogMTUgfSwgeyB4OiA0LCB5OiAxNiB9XSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzIzYjdlNSdcclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgICBncmFwaDMucmVuZGVyKCk7XHJcblxyXG5cclxuICAgICAgICAvLyBHcmFwaCA0XHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4gICAgICAgIHZhciBncmFwaDQgPSBuZXcgUmlja3NoYXcuR3JhcGgoe1xyXG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JpY2tzaGF3NFwiKSxcclxuICAgICAgICAgICAgcmVuZGVyZXI6ICdiYXInLFxyXG4gICAgICAgICAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbeyB4OiAwLCB5OiA0MCB9LCB7IHg6IDEsIHk6IDQ5IH0sIHsgeDogMiwgeTogMzggfSwgeyB4OiAzLCB5OiAzMCB9LCB7IHg6IDQsIHk6IDMyIH1dLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmFkNzMyJ1xyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbeyB4OiAwLCB5OiAyMCB9LCB7IHg6IDEsIHk6IDI0IH0sIHsgeDogMiwgeTogMTkgfSwgeyB4OiAzLCB5OiAxNSB9LCB7IHg6IDQsIHk6IDE2IH1dLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjZmY5MDJiJ1xyXG5cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9KTtcclxuICAgICAgICBncmFwaDQucmVuZGVyKCk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU1BBUktMSU5FXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U3BhcmtsaW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U3BhcmtsaW5lKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1zcGFya2xpbmVdJykuZWFjaChpbml0U3BhcmtMaW5lKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdFNwYXJrTGluZSgpIHtcclxuICAgICAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkZWxlbWVudC5kYXRhKCksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSBvcHRpb25zLnZhbHVlcyAmJiBvcHRpb25zLnZhbHVlcy5zcGxpdCgnLCcpO1xyXG5cclxuICAgICAgICAgICAgb3B0aW9ucy50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdiYXInOyAvLyBkZWZhdWx0IGNoYXJ0IGlzIGJhclxyXG4gICAgICAgICAgICBvcHRpb25zLmRpc2FibGVIaWRkZW5DaGVjayA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC5zcGFya2xpbmUodmFsdWVzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnJlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZWxlbWVudC5zcGFya2xpbmUodmFsdWVzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gRGVtbyBDYXJkc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdENhcmREZW1vKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FyZERlbW8oKSB7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoaXMgZnVuY3Rpb25zIHNob3cgYSBkZW1vbnN0cmF0aW9uIG9mIGhvdyB0byB1c2VcclxuICAgICAgICAgKiB0aGUgY2FyZCB0b29scyBzeXN0ZW0gdmlhIGN1c3RvbSBldmVudC5cclxuICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgJCgnLmNhcmQuY2FyZC1kZW1vJylcclxuICAgICAgICAgICAgLm9uKCdjYXJkLnJlZnJlc2gnLCBmdW5jdGlvbihlLCBjYXJkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSBhbnkgYWN0aW9uIHdoZW4gYSAuY2FyZCB0cmlnZ2VycyBhIHJlZnJlc2ggZXZlbnRcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGFjdGlvbiBpcyBkb25lLCBqdXN0IHJlbW92ZSB0aGUgc3Bpbm5lciBjbGFzc1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlU3Bpbm5lcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdoaWRlLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FyZCBDb2xsYXBzZSBIaWRlJyk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYXJkIENvbGxhcHNlIFNob3cnKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2FyZC5yZW1vdmUnLCBmdW5jdGlvbihldmVudCwgY2FyZCwgZGVmZXJyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBDYXJkJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBDYWxsIHJlc29sdmUoKSB0byBjb250aW51ZSByZW1vdmluZyB0aGUgY2FyZFxyXG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSBjaGVja3MgdG8gYXZvaWQgcmVtb3ZpbmcgY2FyZCBpZiBzb21lIHVzZXIgYWN0aW9uIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2FyZC5yZW1vdmVkJywgZnVuY3Rpb24oZXZlbnQsIGNhcmQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCBDYXJkJyk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBOZXN0YWJsZSBkZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0TmVzdGFibGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXROZXN0YWJsZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLm5lc3RhYmxlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciB1cGRhdGVPdXRwdXQgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gZS5sZW5ndGggPyBlIDogJChlLnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBsaXN0LmRhdGEoJ291dHB1dCcpO1xyXG4gICAgICAgICAgICBpZiAod2luZG93LkpTT04pIHtcclxuICAgICAgICAgICAgICAgIG91dHB1dC52YWwod2luZG93LkpTT04uc3RyaW5naWZ5KGxpc3QubmVzdGFibGUoJ3NlcmlhbGl6ZScpKSk7IC8vLCBudWxsLCAyKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudmFsKCdKU09OIGJyb3dzZXIgc3VwcG9ydCByZXF1aXJlZCBmb3IgdGhpcyBkZW1vLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgTmVzdGFibGUgZm9yIGxpc3QgMVxyXG4gICAgICAgICQoJyNuZXN0YWJsZScpLm5lc3RhYmxlKHtcclxuICAgICAgICAgICAgICAgIGdyb3VwOiAxXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbignY2hhbmdlJywgdXBkYXRlT3V0cHV0KTtcclxuXHJcbiAgICAgICAgLy8gYWN0aXZhdGUgTmVzdGFibGUgZm9yIGxpc3QgMlxyXG4gICAgICAgICQoJyNuZXN0YWJsZTInKS5uZXN0YWJsZSh7XHJcbiAgICAgICAgICAgICAgICBncm91cDogMVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub24oJ2NoYW5nZScsIHVwZGF0ZU91dHB1dCk7XHJcblxyXG4gICAgICAgIC8vIG91dHB1dCBpbml0aWFsIHNlcmlhbGlzZWQgZGF0YVxyXG4gICAgICAgIHVwZGF0ZU91dHB1dCgkKCcjbmVzdGFibGUnKS5kYXRhKCdvdXRwdXQnLCAkKCcjbmVzdGFibGUtb3V0cHV0JykpKTtcclxuICAgICAgICB1cGRhdGVPdXRwdXQoJCgnI25lc3RhYmxlMicpLmRhdGEoJ291dHB1dCcsICQoJyNuZXN0YWJsZTItb3V0cHV0JykpKTtcclxuXHJcbiAgICAgICAgJCgnLmpzLW5lc3RhYmxlLWFjdGlvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHtcclxuICAgICAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdleHBhbmRBbGwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UtYWxsJykge1xyXG4gICAgICAgICAgICAgICAgJCgnLmRkJykubmVzdGFibGUoJ2NvbGxhcHNlQWxsJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBub3RpZnkuanNcclxuICogQ3JlYXRlIHRvZ2dsZWFibGUgbm90aWZpY2F0aW9ucyB0aGF0IGZhZGUgb3V0IGF1dG9tYXRpY2FsbHkuXHJcbiAqIEJhc2VkIG9uIE5vdGlmeSBhZGRvbiBmcm9tIFVJS2l0IChodHRwOi8vZ2V0dWlraXQuY29tL2RvY3MvYWRkb25zX25vdGlmeS5odG1sKVxyXG4gKiBbZGF0YS10b2dnbGU9XCJub3RpZnlcIl1cclxuICogW2RhdGEtb3B0aW9ucz1cIm9wdGlvbnMgaW4ganNvbiBmb3JtYXRcIiBdXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5vdGlmeSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdE5vdGlmeSgpIHtcclxuXHJcbiAgICAgICAgdmFyIFNlbGVjdG9yID0gJ1tkYXRhLW5vdGlmeV0nLFxyXG4gICAgICAgICAgICBhdXRvbG9hZFNlbGVjdG9yID0gJ1tkYXRhLW9ubG9hZF0nLFxyXG4gICAgICAgICAgICBkb2MgPSAkKGRvY3VtZW50KTtcclxuXHJcbiAgICAgICAgJChTZWxlY3RvcikuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBvbmxvYWQgPSAkdGhpcy5kYXRhKCdvbmxvYWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbmxvYWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBub3RpZnlOb3coJHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJHRoaXMub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgbm90aWZ5Tm93KCR0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBub3RpZnlOb3coJGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9ICRlbGVtZW50LmRhdGEoJ21lc3NhZ2UnKSxcclxuICAgICAgICAgICAgb3B0aW9ucyA9ICRlbGVtZW50LmRhdGEoJ29wdGlvbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKCFtZXNzYWdlKVxyXG4gICAgICAgICAgICAkLmVycm9yKCdOb3RpZnk6IE5vIG1lc3NhZ2Ugc3BlY2lmaWVkJyk7XHJcblxyXG4gICAgICAgICQubm90aWZ5KG1lc3NhZ2UsIG9wdGlvbnMgfHwge30pO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBOb3RpZnkgQWRkb24gZGVmaW5pdGlvbiBhcyBqUXVlcnkgcGx1Z2luXHJcbiAqIEFkYXB0ZWQgdmVyc2lvbiB0byB3b3JrIHdpdGggQm9vdHN0cmFwIGNsYXNzZXNcclxuICogTW9yZSBpbmZvcm1hdGlvbiBodHRwOi8vZ2V0dWlraXQuY29tL2RvY3MvYWRkb25zX25vdGlmeS5odG1sXHJcbiAqL1xyXG5cclxuKGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQpIHtcclxuXHJcbiAgICB2YXIgY29udGFpbmVycyA9IHt9LFxyXG4gICAgICAgIG1lc3NhZ2VzID0ge30sXHJcblxyXG4gICAgICAgIG5vdGlmeSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgkLnR5cGUob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7IG1lc3NhZ2U6IG9wdGlvbnMgfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1sxXSkge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKG9wdGlvbnMsICQudHlwZShhcmd1bWVudHNbMV0pID09ICdzdHJpbmcnID8geyBzdGF0dXM6IGFyZ3VtZW50c1sxXSB9IDogYXJndW1lbnRzWzFdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChuZXcgTWVzc2FnZShvcHRpb25zKSkuc2hvdygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VBbGwgPSBmdW5jdGlvbihncm91cCwgaW5zdGFudGx5KSB7XHJcbiAgICAgICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWQgaW4gbWVzc2FnZXMpIHsgaWYgKGdyb3VwID09PSBtZXNzYWdlc1tpZF0uZ3JvdXApIG1lc3NhZ2VzW2lkXS5jbG9zZShpbnN0YW50bHkpOyB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBtZXNzYWdlcykgeyBtZXNzYWdlc1tpZF0uY2xvc2UoaW5zdGFudGx5KTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB2YXIgTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuXHJcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gJC5leHRlbmQoe30sIE1lc3NhZ2UuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLnV1aWQgPSBcIklEXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpICsgXCJSQU5EXCIgKyAoTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDApKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSAkKFtcclxuICAgICAgICAgICAgLy8gYWxlcnQtZGlzbWlzc2FibGUgZW5hYmxlcyBicyBjbG9zZSBpY29uXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidWstbm90aWZ5LW1lc3NhZ2UgYWxlcnQtZGlzbWlzc2FibGVcIj4nLFxyXG4gICAgICAgICAgICAnPGEgY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L2E+JyxcclxuICAgICAgICAgICAgJzxkaXY+JyArIHRoaXMub3B0aW9ucy5tZXNzYWdlICsgJzwvZGl2PicsXHJcbiAgICAgICAgICAgICc8L2Rpdj4nXHJcblxyXG4gICAgICAgIF0uam9pbignJykpLmRhdGEoXCJub3RpZnlNZXNzYWdlXCIsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBzdGF0dXNcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN0YXR1cykge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyB0aGlzLm9wdGlvbnMuc3RhdHVzKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50c3RhdHVzID0gdGhpcy5vcHRpb25zLnN0YXR1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSB0aGlzLm9wdGlvbnMuZ3JvdXA7XHJcblxyXG4gICAgICAgIG1lc3NhZ2VzW3RoaXMudXVpZF0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoIWNvbnRhaW5lcnNbdGhpcy5vcHRpb25zLnBvc10pIHtcclxuICAgICAgICAgICAgY29udGFpbmVyc1t0aGlzLm9wdGlvbnMucG9zXSA9ICQoJzxkaXYgY2xhc3M9XCJ1ay1ub3RpZnkgdWstbm90aWZ5LScgKyB0aGlzLm9wdGlvbnMucG9zICsgJ1wiPjwvZGl2PicpLmFwcGVuZFRvKCdib2R5Jykub24oXCJjbGlja1wiLCBcIi51ay1ub3RpZnktbWVzc2FnZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZGF0YShcIm5vdGlmeU1lc3NhZ2VcIikuY2xvc2UoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgJC5leHRlbmQoTWVzc2FnZS5wcm90b3R5cGUsIHtcclxuXHJcbiAgICAgICAgdXVpZDogZmFsc2UsXHJcbiAgICAgICAgZWxlbWVudDogZmFsc2UsXHJcbiAgICAgICAgdGltb3V0OiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50c3RhdHVzOiBcIlwiLFxyXG4gICAgICAgIGdyb3VwOiBmYWxzZSxcclxuXHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50LmlzKFwiOnZpc2libGVcIikpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXJzW3RoaXMub3B0aW9ucy5wb3NdLnNob3coKS5wcmVwZW5kKHRoaXMuZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWFyZ2luYm90dG9tID0gcGFyc2VJbnQodGhpcy5lbGVtZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiksIDEwKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jc3MoeyBcIm9wYWNpdHlcIjogMCwgXCJtYXJnaW4tdG9wXCI6IC0xICogdGhpcy5lbGVtZW50Lm91dGVySGVpZ2h0KCksIFwibWFyZ2luLWJvdHRvbVwiOiAwIH0pLmFuaW1hdGUoeyBcIm9wYWNpdHlcIjogMSwgXCJtYXJnaW4tdG9wXCI6IDAsIFwibWFyZ2luLWJvdHRvbVwiOiBtYXJnaW5ib3R0b20gfSwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCR0aGlzLm9wdGlvbnMudGltZW91dCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xvc2VmbiA9IGZ1bmN0aW9uKCkgeyAkdGhpcy5jbG9zZSgpOyB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChjbG9zZWZuLCAkdGhpcy5vcHRpb25zLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkdGhpcy5lbGVtZW50LmhvdmVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgY2xlYXJUaW1lb3V0KCR0aGlzLnRpbWVvdXQpOyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgJHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoY2xvc2VmbiwgJHRoaXMub3B0aW9ucy50aW1lb3V0KTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbihpbnN0YW50bHkpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICBmaW5hbGl6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyc1skdGhpcy5vcHRpb25zLnBvc10uY2hpbGRyZW4oKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyc1skdGhpcy5vcHRpb25zLnBvc10uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzWyR0aGlzLnV1aWRdO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluc3RhbnRseSkge1xyXG4gICAgICAgICAgICAgICAgZmluYWxpemUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hbmltYXRlKHsgXCJvcGFjaXR5XCI6IDAsIFwibWFyZ2luLXRvcFwiOiAtMSAqIHRoaXMuZWxlbWVudC5vdXRlckhlaWdodCgpLCBcIm1hcmdpbi1ib3R0b21cIjogMCB9LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBjb250ZW50OiBmdW5jdGlvbihodG1sKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5lbGVtZW50LmZpbmQoXCI+ZGl2XCIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFodG1sKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmh0bWwoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFpbmVyLmh0bWwoaHRtbCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdGF0dXM6IGZ1bmN0aW9uKHN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRzdGF0dXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnYWxlcnQgYWxlcnQtJyArIHRoaXMuY3VycmVudHN0YXR1cykuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyBzdGF0dXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50c3RhdHVzID0gc3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgTWVzc2FnZS5kZWZhdWx0cyA9IHtcclxuICAgICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJub3JtYWxcIixcclxuICAgICAgICB0aW1lb3V0OiA1MDAwLFxyXG4gICAgICAgIGdyb3VwOiBudWxsLFxyXG4gICAgICAgIHBvczogJ3RvcC1jZW50ZXInXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAkW1wibm90aWZ5XCJdID0gbm90aWZ5O1xyXG4gICAgJFtcIm5vdGlmeVwiXS5tZXNzYWdlID0gTWVzc2FnZTtcclxuICAgICRbXCJub3RpZnlcIl0uY2xvc2VBbGwgPSBjbG9zZUFsbDtcclxuXHJcbiAgICByZXR1cm4gbm90aWZ5O1xyXG5cclxufShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpKTsiLCIvKio9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogTW9kdWxlOiBwbGF5LWFuaW1hdGlvbi5qc1xyXG4gKiBQcm92aWRlcyBhIHNpbXBsZSB3YXkgdG8gcnVuIGFuaW1hdGlvbiB3aXRoIGEgY2xpY2tcclxuICogVGFyZ2V0ZWQgZWxlbWVudHMgbXVzdCBoYXZlXHJcbiAqICAgW2RhdGEtYW5pbWF0ZVwiXVxyXG4gKiAgIFtkYXRhLXRhcmdldD1cIlRhcmdldCBlbGVtZW50IGFmZmVjdGVkIGJ5IHRoZSBhbmltYXRpb25cIl1cclxuICogICBbZGF0YS1wbGF5PVwiQW5pbWF0aW9uIG5hbWUgKGh0dHA6Ly9kYW5lZGVuLmdpdGh1Yi5pby9hbmltYXRlLmNzcy8pXCJdXHJcbiAqXHJcbiAqIFJlcXVpcmVzIGFuaW1vLmpzXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFBsYXlBbmltYXRpb24pXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFBsYXlBbmltYXRpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBTZWxlY3RvciA9ICdbZGF0YS1hbmltYXRlXSc7XHJcblxyXG4gICAgICAgIC8vIFJ1biBjbGljayB0cmlnZ2VyZWQgYW5pbWF0aW9uc1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTZWwgPSAkdGhpcy5kYXRhKCd0YXJnZXQnKSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9ICR0aGlzLmRhdGEoJ3BsYXknKSB8fCAnYm91bmNlJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRTZWwpIHtcclxuICAgICAgICAgICAgICAgICQodGFyZ2V0U2VsKS5hbmltbyh7IGFuaW1hdGlvbjogYW5pbWF0aW9uIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8qKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKiBNb2R1bGU6IHBvcnRsZXQuanNcclxuICogRHJhZyBhbmQgZHJvcCBhbnkgY2FyZCB0byBjaGFuZ2UgaXRzIHBvc2l0aW9uXHJcbiAqIFRoZSBTZWxlY3RvciBzaG91bGQgY291bGQgYmUgYXBwbGllZCB0byBhbnkgb2JqZWN0IHRoYXQgY29udGFpbnNcclxuICogY2FyZCwgc28gLmNvbC0qIGVsZW1lbnQgYXJlIGlkZWFsLlxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgU1RPUkFHRV9LRVlfTkFNRSA9ICdqcS1wb3J0bGV0U3RhdGUnO1xyXG5cclxuICAgICQoaW5pdFBvcnRsZXRzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0UG9ydGxldHMoKSB7XHJcblxyXG4gICAgICAgIC8vIENvbXBvbmVudCBpcyBOT1Qgb3B0aW9uYWxcclxuICAgICAgICBpZiAoISQuZm4uc29ydGFibGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIFNlbGVjdG9yID0gJ1tkYXRhLXRvZ2dsZT1cInBvcnRsZXRcIl0nO1xyXG5cclxuICAgICAgICAkKFNlbGVjdG9yKS5zb3J0YWJsZSh7XHJcbiAgICAgICAgICAgIGNvbm5lY3RXaXRoOiAgICAgICAgICBTZWxlY3RvcixcclxuICAgICAgICAgICAgaXRlbXM6ICAgICAgICAgICAgICAgICdkaXYuY2FyZCcsXHJcbiAgICAgICAgICAgIGhhbmRsZTogICAgICAgICAgICAgICAnLnBvcnRsZXQtaGFuZGxlcicsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICAgICAgICAgICAgICAwLjcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAgICAgICAgICAncG9ydGxldCBib3gtcGxhY2Vob2xkZXInLFxyXG4gICAgICAgICAgICBjYW5jZWw6ICAgICAgICAgICAgICAgJy5wb3J0bGV0LWNhbmNlbCcsXHJcbiAgICAgICAgICAgIGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxyXG4gICAgICAgICAgICBpZnJhbWVGaXg6ICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgIHRvbGVyYW5jZTogICAgICAgICAgICAncG9pbnRlcicsXHJcbiAgICAgICAgICAgIGhlbHBlcjogICAgICAgICAgICAgICAnb3JpZ2luYWwnLFxyXG4gICAgICAgICAgICByZXZlcnQ6ICAgICAgICAgICAgICAgMjAwLFxyXG4gICAgICAgICAgICBmb3JjZUhlbHBlclNpemU6ICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgdXBkYXRlOiAgICAgICAgICAgICAgIHNhdmVQb3J0bGV0T3JkZXIsXHJcbiAgICAgICAgICAgIGNyZWF0ZTogICAgICAgICAgICAgICBsb2FkUG9ydGxldE9yZGVyXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBvcHRpb25hbGx5IGRpc2FibGVzIG1vdXNlIHNlbGVjdGlvblxyXG4gICAgICAgIC8vLmRpc2FibGVTZWxlY3Rpb24oKVxyXG4gICAgICAgIDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVBvcnRsZXRPcmRlcihldmVudCwgdWkpIHtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG5cclxuICAgICAgICBpZiAoIWRhdGEpIHsgZGF0YSA9IHt9OyB9XHJcblxyXG4gICAgICAgIGRhdGFbdGhpcy5pZF0gPSAkKHRoaXMpLnNvcnRhYmxlKCd0b0FycmF5Jyk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5zZXQoU1RPUkFHRV9LRVlfTkFNRSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUG9ydGxldE9yZGVyKCkge1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoU1RPUkFHRV9LRVlfTkFNRSk7XHJcblxyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgcG9ybGV0SWQgPSB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgICAgY2FyZHMgPSBkYXRhW3BvcmxldElkXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJkcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvcnRsZXQgPSAkKCcjJyArIHBvcmxldElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goY2FyZHMsIGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJyMnICsgdmFsdWUpLmFwcGVuZFRvKHBvcnRsZXQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCBwb3JsZXQgc2F2ZSBzdGF0ZVxyXG4gICAgd2luZG93LnJlc2V0UG9ybGV0cyA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UucmVtb3ZlKFNUT1JBR0VfS0VZX05BTUUpO1xyXG4gICAgICAgIC8vIHJlbG9hZCB0aGUgcGFnZVxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEhUTUw1IFNvcnRhYmxlIGRlbW9cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTb3J0YWJsZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNvcnRhYmxlKCkge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHNvcnRhYmxlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgICAgICBzb3J0YWJsZSgnLnNvcnRhYmxlJywge1xyXG4gICAgICAgICAgICBmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICc8ZGl2IGNsYXNzPVwiYm94LXBsYWNlaG9sZGVyIHAwIG0wXCI+PGRpdj48L2Rpdj48L2Rpdj4nXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gU3dlZXQgQWxlcnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTd2VldEFsZXJ0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U3dlZXRBbGVydCgpIHtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbChcIkhlcmUncyBhIG1lc3NhZ2UhXCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNzd2FsLWRlbW8yJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHN3YWwoXCJIZXJlJ3MgYSBtZXNzYWdlIVwiLCBcIkl0J3MgcHJldHR5LCBpc24ndCBpdD9cIilcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N3YWwtZGVtbzMnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc3dhbChcIkdvb2Qgam9iIVwiLCBcIllvdSBjbGlja2VkIHRoZSBidXR0b24hXCIsIFwic3VjY2Vzc1wiKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3dhbC1kZW1vNCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmU/XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3Ugd2lsbCBub3QgYmUgYWJsZSB0byByZWNvdmVyIHRoaXMgaW1hZ2luYXJ5IGZpbGUhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiI0RENkI1NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCJEZWxldGVkIVwiLCBcIllvdXIgaW1hZ2luYXJ5IGZpbGUgaGFzIGJlZW4gZGVsZXRlZC5cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjc3dhbC1kZW1vNScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZT9cIixcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IHdpbGwgbm90IGJlIGFibGUgdG8gcmVjb3ZlciB0aGlzIGltYWdpbmFyeSBmaWxlIVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiBcIiNERDZCNTVcIixcclxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsIHBseCFcIixcclxuICAgICAgICAgICAgICAgIGNsb3NlT25Db25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsb3NlT25DYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGlzQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoXCJEZWxldGVkIVwiLCBcIllvdXIgaW1hZ2luYXJ5IGZpbGUgaGFzIGJlZW4gZGVsZXRlZC5cIiwgXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKFwiQ2FuY2VsbGVkXCIsIFwiWW91ciBpbWFnaW5hcnkgZmlsZSBpcyBzYWZlIDopXCIsIFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBTdGFydCBCb290c3RyYXAgSlNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRCb290c3RyYXApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRCb290c3RyYXAoKSB7XHJcblxyXG4gICAgICAgIC8vIFBPUE9WRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG5cclxuICAgICAgICAvLyBUT09MVElQXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoe1xyXG4gICAgICAgICAgICBjb250YWluZXI6ICdib2R5J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBEUk9QRE9XTiBJTlBVVFNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICQoJy5kcm9wZG93biBpbnB1dCcpLm9uKCdjbGljayBmb2N1cycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIE1vZHVsZTogY2FyZC10b29sc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdENhcmREaXNtaXNzKTtcclxuICAgICQoaW5pdENhcmRDb2xsYXBzZSk7XHJcbiAgICAkKGluaXRDYXJkUmVmcmVzaCk7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGlzbWlzcyBjYXJkc1xyXG4gICAgICogW2RhdGEtdG9vbD1cImNhcmQtZGlzbWlzc1wiXVxyXG4gICAgICpcclxuICAgICAqIFJlcXVpcmVzIGFuaW1vLmpzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluaXRDYXJkRGlzbWlzcygpIHtcclxuICAgICAgICB2YXIgY2FyZFNlbGVjdG9yID0gJ1tkYXRhLXRvb2w9XCJjYXJkLWRpc21pc3NcIl0nLFxyXG4gICAgICAgICAgICByZW1vdmVFdmVudCA9ICdjYXJkLnJlbW92ZScsXHJcbiAgICAgICAgICAgIHJlbW92ZWRFdmVudCA9ICdjYXJkLnJlbW92ZWQnO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBjYXJkU2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgcGFyZW50IGNhcmRcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykuY2xvc2VzdCgnLmNhcmQnKTtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgdGhlIGV2ZW50IGFuZCBmaW5hbGx5IHJlbW92ZSB0aGUgZWxlbWVudFxyXG4gICAgICAgICAgICBwYXJlbnQudHJpZ2dlcihyZW1vdmVFdmVudCwgW3BhcmVudCwgZGVmZXJyZWRdKTtcclxuICAgICAgICAgICAgLy8gbmVlZHMgcmVzb2x2ZSgpIHRvIGJlIGNhbGxlZFxyXG4gICAgICAgICAgICBkZWZlcnJlZC5kb25lKHJlbW92ZUVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRWxlbWVudCgpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hbmltbyh7IGFuaW1hdGlvbjogJ2JvdW5jZU91dCcgfSwgZGVzdHJveUNhcmQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBkZXN0cm95Q2FyZCgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb2wgPSBwYXJlbnQucGFyZW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJC53aGVuKHBhcmVudC50cmlnZ2VyKHJlbW92ZWRFdmVudCwgW3BhcmVudF0pKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kb25lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgcGFyZW50IGlmIGl0IGlzIGEgcm93IGFuZCBpcyBlbXB0eSBhbmQgbm90IGEgc29ydGFibGUgKHBvcnRsZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIocmVtb3ZlZEV2ZW50KSAvLyBBbiBldmVudCB0byBjYXRjaCB3aGVuIHRoZSBjYXJkIGhhcyBiZWVuIHJlbW92ZWQgZnJvbSBET01cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGVsLmlzKCdbY2xhc3MqPVwiY29sLVwiXTpub3QoLnNvcnRhYmxlKScpICYmIGVsLmNoaWxkcmVuKCcqJykubGVuZ3RoID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29sbGFwc2UgY2FyZHNcclxuICAgICAqIFtkYXRhLXRvb2w9XCJjYXJkLWNvbGxhcHNlXCJdXHJcbiAgICAgKlxyXG4gICAgICogQWxzbyB1c2VzIGJyb3dzZXIgc3RvcmFnZSB0byBrZWVwIHRyYWNrXHJcbiAgICAgKiBvZiBjYXJkcyBjb2xsYXBzZWQgc3RhdGVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENhcmRDb2xsYXBzZSgpIHtcclxuICAgICAgICB2YXIgY2FyZFNlbGVjdG9yID0gJ1tkYXRhLXRvb2w9XCJjYXJkLWNvbGxhcHNlXCJdJyxcclxuICAgICAgICAgICAgc3RvcmFnZUtleU5hbWUgPSAnanEtY2FyZFN0YXRlJztcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSB0aGUgY2FyZCB0byBiZSBjb2xsYXBzYWJsZSBhbmQgaXRzIGV2ZW50c1xyXG4gICAgICAgICQoY2FyZFNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBwYXJlbnQgY2FyZFxyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gJHRoaXMuY2xvc2VzdCgnLmNhcmQnKSxcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIgPSBwYXJlbnQuZmluZCgnLmNhcmQtd3JhcHBlcicpLFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VPcHRzID0geyB0b2dnbGU6IGZhbHNlIH0sXHJcbiAgICAgICAgICAgICAgICBpY29uRWxlbWVudCA9ICR0aGlzLmNoaWxkcmVuKCdlbScpLFxyXG4gICAgICAgICAgICAgICAgY2FyZElkID0gcGFyZW50LmF0dHIoJ2lkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB3cmFwcGVyIG5vdCBhZGRlZCwgYWRkIGl0XHJcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgYSB3cmFwcGVyIHRvIGF2b2lkIGp1bXBpbmcgZHVlIHRvIHRoZSBwYWRkaW5nc1xyXG4gICAgICAgICAgICBpZiAoIXdyYXBwZXIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyID1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4oJy5jYXJkLWhlYWRpbmcnKS5uZXh0QWxsKCkgLy9maW5kKCcuY2FyZC1ib2R5LCAuY2FyZC1mb290ZXInKVxyXG4gICAgICAgICAgICAgICAgICAgIC53cmFwQWxsKCc8ZGl2Lz4nKVxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnY2FyZC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZU9wdHMgPSB7fTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSW5pdCBjb2xsYXBzZSBhbmQgYmluZCBldmVudHMgdG8gc3dpdGNoIGljb25zXHJcbiAgICAgICAgICAgIHdyYXBwZXJcclxuICAgICAgICAgICAgICAgIC5jb2xsYXBzZShjb2xsYXBzZU9wdHMpXHJcbiAgICAgICAgICAgICAgICAub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJY29uSGlkZShpY29uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUNhcmRTdGF0ZShjYXJkSWQsICdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5wcmV2KCcuY2FyZC1oZWFkaW5nJykuYWRkQ2xhc3MoJ2NhcmQtaGVhZGluZy1jb2xsYXBzZWQnKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub24oJ3Nob3cuYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJY29uU2hvdyhpY29uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZUNhcmRTdGF0ZShjYXJkSWQsICdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5wcmV2KCcuY2FyZC1oZWFkaW5nJykucmVtb3ZlQ2xhc3MoJ2NhcmQtaGVhZGluZy1jb2xsYXBzZWQnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gTG9hZCB0aGUgc2F2ZWQgc3RhdGUgaWYgZXhpc3RzXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U3RhdGUgPSBsb2FkQ2FyZFN0YXRlKGNhcmRJZCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHdyYXBwZXIuY29sbGFwc2UoY3VycmVudFN0YXRlKTsgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUNhcmRTdGF0ZShjYXJkSWQsIGN1cnJlbnRTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGZpbmFsbHkgY2F0Y2ggY2xpY2tzIHRvIHRvZ2dsZSBjYXJkIGNvbGxhcHNlXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgY2FyZFNlbGVjdG9yLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jYXJkJyk7XHJcbiAgICAgICAgICAgIHZhciB3cmFwcGVyID0gcGFyZW50LmZpbmQoJy5jYXJkLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgICAgIHdyYXBwZXIuY29sbGFwc2UoJ3RvZ2dsZScpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgLy8gQ29tbW9uIHVzZSBmdW5jdGlvbnMgZm9yIGNhcmQgY29sbGFwc2UgLy9cclxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICBmdW5jdGlvbiBzZXRJY29uU2hvdyhpY29uRWwpIHtcclxuICAgICAgICAgICAgaWNvbkVsLnJlbW92ZUNsYXNzKCdmYS1wbHVzJykuYWRkQ2xhc3MoJ2ZhLW1pbnVzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzZXRJY29uSGlkZShpY29uRWwpIHtcclxuICAgICAgICAgICAgaWNvbkVsLnJlbW92ZUNsYXNzKCdmYS1taW51cycpLmFkZENsYXNzKCdmYS1wbHVzJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzYXZlQ2FyZFN0YXRlKGlkLCBzdGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoc3RvcmFnZUtleU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoIWRhdGEpIHsgZGF0YSA9IHt9OyB9XHJcbiAgICAgICAgICAgIGRhdGFbaWRdID0gc3RhdGU7XHJcbiAgICAgICAgICAgIFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5zZXQoc3RvcmFnZUtleU5hbWUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbG9hZENhcmRTdGF0ZShpZCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoc3RvcmFnZUtleU5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbaWRdIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlZnJlc2ggY2FyZHNcclxuICAgICAqIFtkYXRhLXRvb2w9XCJjYXJkLXJlZnJlc2hcIl1cclxuICAgICAqIFtkYXRhLXNwaW5uZXI9XCJzdGFuZGFyZFwiXVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBpbml0Q2FyZFJlZnJlc2goKSB7XHJcbiAgICAgICAgdmFyIGNhcmRTZWxlY3RvciA9ICdbZGF0YS10b29sPVwiY2FyZC1yZWZyZXNoXCJdJyxcclxuICAgICAgICAgICAgcmVmcmVzaEV2ZW50ID0gJ2NhcmQucmVmcmVzaCcsXHJcbiAgICAgICAgICAgIHdoaXJsQ2xhc3MgPSAnd2hpcmwnLFxyXG4gICAgICAgICAgICBkZWZhdWx0U3Bpbm5lciA9ICdzdGFuZGFyZCc7XHJcblxyXG4gICAgICAgIC8vIG1ldGhvZCB0byBjbGVhciB0aGUgc3Bpbm5lciB3aGVuIGRvbmVcclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVTcGlubmVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKHdoaXJsQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2F0Y2ggY2xpY2tzIHRvIHRvZ2dsZSBjYXJkIHJlZnJlc2hcclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBjYXJkU2VsZWN0b3IsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgY2FyZCA9ICR0aGlzLnBhcmVudHMoJy5jYXJkJykuZXEoMCksXHJcbiAgICAgICAgICAgICAgICBzcGlubmVyID0gJHRoaXMuZGF0YSgnc3Bpbm5lcicpIHx8IGRlZmF1bHRTcGlubmVyO1xyXG5cclxuICAgICAgICAgICAgLy8gc3RhcnQgc2hvd2luZyB0aGUgc3Bpbm5lclxyXG4gICAgICAgICAgICBjYXJkLmFkZENsYXNzKHdoaXJsQ2xhc3MgKyAnICcgKyBzcGlubmVyKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGF0dGFjaCBhcyBwdWJsaWMgbWV0aG9kXHJcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlU3Bpbm5lciA9IHJlbW92ZVNwaW5uZXI7XHJcblxyXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIHRoZSBldmVudCBhbmQgc2VuZCB0aGUgY2FyZCBvYmplY3RcclxuICAgICAgICAgICAgJHRoaXMudHJpZ2dlcihyZWZyZXNoRXZlbnQsIFtjYXJkXSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7XHJcblxyXG5cclxuIiwiLy8gR0xPQkFMIENPTlNUQU5UU1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCl7XHJcblxyXG4gICAgd2luZG93LkFQUF9DT0xPUlMgPSB7XHJcbiAgICAgICAgJ3ByaW1hcnknOiAgICAgICAgICAgICAgICAnIzVkOWNlYycsXHJcbiAgICAgICAgJ3N1Y2Nlc3MnOiAgICAgICAgICAgICAgICAnIzI3YzI0YycsXHJcbiAgICAgICAgJ2luZm8nOiAgICAgICAgICAgICAgICAgICAnIzIzYjdlNScsXHJcbiAgICAgICAgJ3dhcm5pbmcnOiAgICAgICAgICAgICAgICAnI2ZmOTAyYicsXHJcbiAgICAgICAgJ2Rhbmdlcic6ICAgICAgICAgICAgICAgICAnI2YwNTA1MCcsXHJcbiAgICAgICAgJ2ludmVyc2UnOiAgICAgICAgICAgICAgICAnIzEzMWUyNicsXHJcbiAgICAgICAgJ2dyZWVuJzogICAgICAgICAgICAgICAgICAnIzM3YmM5YicsXHJcbiAgICAgICAgJ3BpbmsnOiAgICAgICAgICAgICAgICAgICAnI2Y1MzJlNScsXHJcbiAgICAgICAgJ3B1cnBsZSc6ICAgICAgICAgICAgICAgICAnIzcyNjZiYScsXHJcbiAgICAgICAgJ2RhcmsnOiAgICAgICAgICAgICAgICAgICAnIzNhM2Y1MScsXHJcbiAgICAgICAgJ3llbGxvdyc6ICAgICAgICAgICAgICAgICAnI2ZhZDczMicsXHJcbiAgICAgICAgJ2dyYXktZGFya2VyJzogICAgICAgICAgICAnIzIzMjczNScsXHJcbiAgICAgICAgJ2dyYXktZGFyayc6ICAgICAgICAgICAgICAnIzNhM2Y1MScsXHJcbiAgICAgICAgJ2dyYXknOiAgICAgICAgICAgICAgICAgICAnI2RkZTZlOScsXHJcbiAgICAgICAgJ2dyYXktbGlnaHQnOiAgICAgICAgICAgICAnI2U0ZWFlYycsXHJcbiAgICAgICAgJ2dyYXktbGlnaHRlcic6ICAgICAgICAgICAnI2VkZjFmMidcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LkFQUF9NRURJQVFVRVJZID0ge1xyXG4gICAgICAgICdkZXNrdG9wTEcnOiAgICAgICAgICAgICAxMjAwLFxyXG4gICAgICAgICdkZXNrdG9wJzogICAgICAgICAgICAgICAgOTkyLFxyXG4gICAgICAgICd0YWJsZXQnOiAgICAgICAgICAgICAgICAgNzY4LFxyXG4gICAgICAgICdtb2JpbGUnOiAgICAgICAgICAgICAgICAgNDgwXHJcbiAgICB9O1xyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gRlVMTFNDUkVFTlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFNjcmVlbkZ1bGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTY3JlZW5GdWxsKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2NyZWVuZnVsbCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyICRkb2MgPSAkKGRvY3VtZW50KTtcclxuICAgICAgICB2YXIgJGZzVG9nZ2xlciA9ICQoJ1tkYXRhLXRvZ2dsZS1mdWxsc2NyZWVuXScpO1xyXG5cclxuICAgICAgICAvLyBOb3Qgc3VwcG9ydGVkIHVuZGVyIElFXHJcbiAgICAgICAgdmFyIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcbiAgICAgICAgaWYgKHVhLmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgISF1YS5tYXRjaCgvVHJpZGVudC4qcnZcXDoxMVxcLi8pKSB7XHJcbiAgICAgICAgICAgICRmc1RvZ2dsZXIuYWRkQ2xhc3MoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghJGZzVG9nZ2xlci5pcygnOnZpc2libGUnKSkgLy8gaGlkZGVuIG9uIG1vYmlsZXMgb3IgSUVcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAkZnNUb2dnbGVyLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU3dpdGNoIGljb24gaW5kaWNhdG9yXHJcbiAgICAgICAgICAgICAgICB0b2dnbGVGU0ljb24oJGZzVG9nZ2xlcik7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Z1bGxzY3JlZW4gbm90IGVuYWJsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoc2NyZWVuZnVsbC5yYXcgJiYgc2NyZWVuZnVsbC5yYXcuZnVsbHNjcmVlbmNoYW5nZSlcclxuICAgICAgICAgICAgJGRvYy5vbihzY3JlZW5mdWxsLnJhdy5mdWxsc2NyZWVuY2hhbmdlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZUZTSWNvbigkZnNUb2dnbGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZUZTSWNvbigkZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoc2NyZWVuZnVsbC5pc0Z1bGxzY3JlZW4pXHJcbiAgICAgICAgICAgICAgICAkZWxlbWVudC5jaGlsZHJlbignZW0nKS5yZW1vdmVDbGFzcygnZmEtZXhwYW5kJykuYWRkQ2xhc3MoJ2ZhLWNvbXByZXNzJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICRlbGVtZW50LmNoaWxkcmVuKCdlbScpLnJlbW92ZUNsYXNzKCdmYS1jb21wcmVzcycpLmFkZENsYXNzKCdmYS1leHBhbmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gTE9BRCBDVVNUT00gQ1NTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0TG9hZENTUyk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdExvYWRDU1MoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWxvYWQtY3NzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmlzKCdhJykpXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdXJpID0gZWxlbWVudC5kYXRhKCdsb2FkQ3NzJyksXHJcbiAgICAgICAgICAgICAgICBsaW5rO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVyaSkge1xyXG4gICAgICAgICAgICAgICAgbGluayA9IGNyZWF0ZUxpbmsodXJpKTtcclxuICAgICAgICAgICAgICAgIGlmICghbGluaykge1xyXG4gICAgICAgICAgICAgICAgICAgICQuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHN0eWxlc2hlZXQgbGluayBlbGVtZW50LicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJC5lcnJvcignTm8gc3R5bGVzaGVldCBsb2NhdGlvbiBkZWZpbmVkLicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpbmsodXJpKSB7XHJcbiAgICAgICAgdmFyIGxpbmtJZCA9ICdhdXRvbG9hZGVkLXN0eWxlc2hlZXQnLFxyXG4gICAgICAgICAgICBvbGRMaW5rID0gJCgnIycgKyBsaW5rSWQpLmF0dHIoJ2lkJywgbGlua0lkICsgJy1vbGQnKTtcclxuXHJcbiAgICAgICAgJCgnaGVhZCcpLmFwcGVuZCgkKCc8bGluay8+JykuYXR0cih7XHJcbiAgICAgICAgICAgICdpZCc6IGxpbmtJZCxcclxuICAgICAgICAgICAgJ3JlbCc6ICdzdHlsZXNoZWV0JyxcclxuICAgICAgICAgICAgJ2hyZWYnOiB1cmlcclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRMaW5rLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvbGRMaW5rLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICQoJyMnICsgbGlua0lkKTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFRSQU5TTEFUSU9OXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0VHJhbnNsYXRpb24pO1xyXG5cclxuXHJcbiAgICB2YXIgcHJlZmVycmVkTGFuZyA9ICdlbic7XHJcbiAgICB2YXIgcGF0aFByZWZpeCA9ICcvQ29udGVudC9pMThuJzsgLy8gZm9sZGVyIG9mIGpzb24gZmlsZXNcclxuICAgIHZhciBwYWNrTmFtZSA9ICdzaXRlJztcclxuICAgIHZhciBzdG9yYWdlS2V5ID0gJ2pxLWFwcExhbmcnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUcmFuc2xhdGlvbigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmxvY2FsaXplKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIGRldGVjdCBzYXZlZCBsYW5ndWFnZSBvciB1c2UgZGVmYXVsdFxyXG4gICAgICAgIHZhciBjdXJyTGFuZyA9IFN0b3JhZ2VzLmxvY2FsU3RvcmFnZS5nZXQoc3RvcmFnZUtleSkgfHwgcHJlZmVycmVkTGFuZztcclxuICAgICAgICAvLyBzZXQgaW5pdGlhbCBvcHRpb25zXHJcbiAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgIGxhbmd1YWdlOiBjdXJyTGFuZyxcclxuICAgICAgICAgICAgcGF0aFByZWZpeDogcGF0aFByZWZpeCxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGRhdGEsIGRlZmF1bHRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgU3RvcmFnZXMubG9jYWxTdG9yYWdlLnNldChzdG9yYWdlS2V5LCBjdXJyTGFuZyk7IC8vIHNhdmUgdGhlIGxhbmd1YWdlXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Q2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBTZXQgaW5pdGlhbCBsYW5ndWFnZVxyXG4gICAgICAgIHNldExhbmd1YWdlKG9wdHMpO1xyXG5cclxuICAgICAgICAvLyBMaXN0ZW4gZm9yIGNoYW5nZXNcclxuICAgICAgICAkKCdbZGF0YS1zZXQtbGFuZ10nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGN1cnJMYW5nID0gJCh0aGlzKS5kYXRhKCdzZXRMYW5nJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VyckxhbmcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRzLmxhbmd1YWdlID0gY3Vyckxhbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2Uob3B0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGVEcm9wZG93bigkKHRoaXMpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldExhbmd1YWdlKG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgJChcIltkYXRhLWxvY2FsaXplXVwiKS5sb2NhbGl6ZShwYWNrTmFtZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIGN1cnJlbnQgY2xpY2tlZCB0ZXh0IGFzIHRoZSBhY3RpdmUgZHJvcGRvd24gdGV4dFxyXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlRHJvcGRvd24oZWxlbSkge1xyXG4gICAgICAgICAgICB2YXIgbWVudSA9IGVsZW0ucGFyZW50cygnLmRyb3Bkb3duLW1lbnUnKTtcclxuICAgICAgICAgICAgaWYgKG1lbnUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlID0gbWVudS5wcmV2KCdidXR0b24sIGEnKTtcclxuICAgICAgICAgICAgICAgIHRvZ2dsZS50ZXh0KGVsZW0udGV4dCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBOQVZCQVIgU0VBUkNIXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0TmF2YmFyU2VhcmNoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0TmF2YmFyU2VhcmNoKCkge1xyXG5cclxuICAgICAgICB2YXIgbmF2U2VhcmNoID0gbmV3IG5hdmJhclNlYXJjaElucHV0KCk7XHJcblxyXG4gICAgICAgIC8vIE9wZW4gc2VhcmNoIGlucHV0XHJcbiAgICAgICAgdmFyICRzZWFyY2hPcGVuID0gJCgnW2RhdGEtc2VhcmNoLW9wZW5dJyk7XHJcblxyXG4gICAgICAgICRzZWFyY2hPcGVuXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0pXHJcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBuYXZTZWFyY2gudG9nZ2xlKTtcclxuXHJcbiAgICAgICAgLy8gQ2xvc2Ugc2VhcmNoIGlucHV0XHJcbiAgICAgICAgdmFyICRzZWFyY2hEaXNtaXNzID0gJCgnW2RhdGEtc2VhcmNoLWRpc21pc3NdJyk7XHJcbiAgICAgICAgdmFyIGlucHV0U2VsZWN0b3IgPSAnLm5hdmJhci1mb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJztcclxuXHJcbiAgICAgICAgJChpbnB1dFNlbGVjdG9yKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNykgLy8gRVNDXHJcbiAgICAgICAgICAgICAgICAgICAgbmF2U2VhcmNoLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNsaWNrIGFueXdoZXJlIGNsb3NlcyB0aGUgc2VhcmNoXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgbmF2U2VhcmNoLmRpc21pc3MpO1xyXG4gICAgICAgIC8vIGRpc21pc3NhYmxlIG9wdGlvbnNcclxuICAgICAgICAkc2VhcmNoRGlzbWlzc1xyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkgeyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgbmF2U2VhcmNoLmRpc21pc3MpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmF2YmFyU2VhcmNoSW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgbmF2YmFyRm9ybVNlbGVjdG9yID0gJ2Zvcm0ubmF2YmFyLWZvcm0nO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvZ2dsZTogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG5hdmJhckZvcm0gPSAkKG5hdmJhckZvcm1TZWxlY3Rvcik7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2YmFyRm9ybS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpc09wZW4gPSBuYXZiYXJGb3JtLmhhc0NsYXNzKCdvcGVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbmF2YmFyRm9ybS5maW5kKCdpbnB1dCcpW2lzT3BlbiA/ICdmb2N1cycgOiAnYmx1ciddKCk7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgZGlzbWlzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKG5hdmJhckZvcm1TZWxlY3RvcilcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ29wZW4nKSAvLyBDbG9zZSBjb250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykuYmx1cigpIC8vIHJlbW92ZSBmb2N1c1xyXG4gICAgICAgICAgICAgICAgLy8gLnZhbCgnJykgICAgICAgICAgICAgICAgICAgIC8vIEVtcHR5IGlucHV0XHJcbiAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIE5PVyBUSU1FUlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdE5vd1RpbWVyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Tm93VGltZXIoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLW5vd10nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBlbGVtZW50LmRhdGEoJ2Zvcm1hdCcpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlVGltZSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkdCA9IG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dChkdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZVRpbWUoKTtcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlVGltZSwgMTAwMCk7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gVG9nZ2xlIFJUTCBtb2RlIGZvciBkZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFJUTCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFJUTCgpIHtcclxuICAgICAgICB2YXIgbWFpbmNzcyA9ICQoJyNtYWluY3NzJyk7XHJcbiAgICAgICAgdmFyIGJzY3NzID0gJCgnI2JzY3NzJyk7XHJcbiAgICAgICAgJCgnI2Noay1ydGwnKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8vIGFwcCBydGwgY2hlY2tcclxuICAgICAgICAgICAgbWFpbmNzcy5hdHRyKCdocmVmJywgdGhpcy5jaGVja2VkID8gJy9Db250ZW50L2Nzcy9hcHAtcnRsLmNzcycgOiAnL0NvbnRlbnQvY3NzL2FwcC5jc3MnKTtcclxuICAgICAgICAgICAgLy8gYm9vdHN0cmFwIHJ0bCBjaGVja1xyXG4gICAgICAgICAgICBic2Nzcy5hdHRyKCdocmVmJywgdGhpcy5jaGVja2VkID8gJy9Db250ZW50L2Nzcy9ib290c3RyYXAtcnRsLmNzcycgOiAnL0NvbnRlbnQvY3NzL2Jvb3RzdHJhcC5jc3MnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFNJREVCQVJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U2lkZWJhcik7XHJcblxyXG5cclxuICAgIHZhciAkd2luO1xyXG4gICAgdmFyICRodG1sO1xyXG4gICAgdmFyICRib2R5O1xyXG4gICAgdmFyICRzaWRlYmFyO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRTaWRlYmFyKCkge1xyXG5cclxuICAgICAgICAkd2luID0gJCh3aW5kb3cpO1xyXG4gICAgICAgICRodG1sID0gJCgnaHRtbCcpO1xyXG4gICAgICAgICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgICRzaWRlYmFyID0gJCgnLnNpZGViYXInKTtcclxuXHJcbiAgICAgICAgLy8gQVVUT0NPTExBUFNFIElURU1TXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgdmFyIHNpZGViYXJDb2xsYXBzZSA9ICRzaWRlYmFyLmZpbmQoJy5jb2xsYXBzZScpO1xyXG4gICAgICAgIHNpZGViYXJDb2xsYXBzZS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykucGFyZW50cygnLmNvbGxhcHNlJykubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgc2lkZWJhckNvbGxhcHNlLmZpbHRlcignLnNob3cnKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU0lERUJBUiBBQ1RJVkUgU1RBVEVcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAvLyBGaW5kIGN1cnJlbnQgYWN0aXZlIGl0ZW1cclxuICAgICAgICB2YXIgY3VycmVudEl0ZW0gPSAkKCcuc2lkZWJhciAuYWN0aXZlJykucGFyZW50cygnbGknKTtcclxuXHJcbiAgICAgICAgLy8gaG92ZXIgbW9kZSBkb24ndCB0cnkgdG8gZXhwYW5kIGFjdGl2ZSBjb2xsYXBzZVxyXG4gICAgICAgIGlmICghdXNlQXNpZGVIb3ZlcigpKVxyXG4gICAgICAgICAgICBjdXJyZW50SXRlbVxyXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpIC8vIGFjdGl2YXRlIHRoZSBwYXJlbnRcclxuICAgICAgICAgICAgLmNoaWxkcmVuKCcuY29sbGFwc2UnKSAvLyBmaW5kIHRoZSBjb2xsYXBzZVxyXG4gICAgICAgICAgICAuY29sbGFwc2UoJ3Nob3cnKTsgLy8gYW5kIHNob3cgaXRcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoaXMgaWYgeW91IHVzZSBvbmx5IGNvbGxhcHNpYmxlIHNpZGViYXIgaXRlbXNcclxuICAgICAgICAkc2lkZWJhci5maW5kKCdsaSA+IGEgKyB1bCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAodXNlQXNpZGVIb3ZlcigpKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNJREVCQVIgQ09MTEFQU0VEIElURU0gSEFORExFUlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuICAgICAgICB2YXIgZXZlbnROYW1lID0gaXNUb3VjaCgpID8gJ2NsaWNrJyA6ICdtb3VzZWVudGVyJztcclxuICAgICAgICB2YXIgc3ViTmF2ID0gJCgpO1xyXG4gICAgICAgICRzaWRlYmFyLm9uKGV2ZW50TmFtZSwgJy5zaWRlYmFyLW5hdiA+IGxpJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNTaWRlYmFyQ29sbGFwc2VkKCkgfHwgdXNlQXNpZGVIb3ZlcigpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ViTmF2LnRyaWdnZXIoJ21vdXNlbGVhdmUnKTtcclxuICAgICAgICAgICAgICAgIHN1Yk5hdiA9IHRvZ2dsZU1lbnVJdGVtKCQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVzZWQgdG8gZGV0ZWN0IGNsaWNrIGFuZCB0b3VjaCBldmVudHMgb3V0c2lkZSB0aGUgc2lkZWJhclxyXG4gICAgICAgICAgICAgICAgc2lkZWJhckFkZEJhY2tkcm9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBzaWRlYmFyQW55Y2xpY2tDbG9zZSA9ICRzaWRlYmFyLmRhdGEoJ3NpZGViYXJBbnljbGlja0Nsb3NlJyk7XHJcblxyXG4gICAgICAgIC8vIEFsbG93cyB0byBjbG9zZVxyXG4gICAgICAgIGlmICh0eXBlb2Ygc2lkZWJhckFueWNsaWNrQ2xvc2UgIT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcud3JhcHBlcicpLm9uKCdjbGljay5zaWRlYmFyJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgY2hlY2sgaWYgc2lkZWJhciBub3QgdmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEkYm9keS5oYXNDbGFzcygnYXNpZGUtdG9nZ2xlZCcpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICghJHRhcmdldC5wYXJlbnRzKCcuYXNpZGUtY29udGFpbmVyJykubGVuZ3RoICYmIC8vIGlmIG5vdCBjaGlsZCBvZiBzaWRlYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgISR0YXJnZXQuaXMoJyN1c2VyLWJsb2NrLXRvZ2dsZScpICYmIC8vIHVzZXIgYmxvY2sgdG9nZ2xlIGFuY2hvclxyXG4gICAgICAgICAgICAgICAgICAgICEkdGFyZ2V0LnBhcmVudCgpLmlzKCcjdXNlci1ibG9jay10b2dnbGUnKSAvLyB1c2VyIGJsb2NrIHRvZ2dsZSBpY29uXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygnYXNpZGUtdG9nZ2xlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNpZGViYXJBZGRCYWNrZHJvcCgpIHtcclxuICAgICAgICB2YXIgJGJhY2tkcm9wID0gJCgnPGRpdi8+JywgeyAnY2xhc3MnOiAnZHJvcGRvd24tYmFja2Ryb3AnIH0pO1xyXG4gICAgICAgICRiYWNrZHJvcC5pbnNlcnRBZnRlcignLmFzaWRlLWNvbnRhaW5lcicpLm9uKFwiY2xpY2sgbW91c2VlbnRlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmVtb3ZlRmxvYXRpbmdOYXYoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBPcGVuIHRoZSBjb2xsYXBzZSBzaWRlYmFyIHN1Ym1lbnUgaXRlbXMgd2hlbiBvbiB0b3VjaCBkZXZpY2VzXHJcbiAgICAvLyAtIGRlc2t0b3Agb25seSBvcGVucyBvbiBob3ZlclxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVG91Y2hJdGVtKCRlbGVtZW50KSB7XHJcbiAgICAgICAgJGVsZW1lbnRcclxuICAgICAgICAgICAgLnNpYmxpbmdzKCdsaScpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnb3BlbicpXHJcbiAgICAgICAgICAgIC5lbmQoKVxyXG4gICAgICAgICAgICAudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGVzIGhvdmVyIHRvIG9wZW4gaXRlbXMgdW5kZXIgY29sbGFwc2VkIG1lbnVcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51SXRlbSgkbGlzdEl0ZW0pIHtcclxuXHJcbiAgICAgICAgcmVtb3ZlRmxvYXRpbmdOYXYoKTtcclxuXHJcbiAgICAgICAgdmFyIHVsID0gJGxpc3RJdGVtLmNoaWxkcmVuKCd1bCcpO1xyXG5cclxuICAgICAgICBpZiAoIXVsLmxlbmd0aCkgcmV0dXJuICQoKTtcclxuICAgICAgICBpZiAoJGxpc3RJdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlVG91Y2hJdGVtKCRsaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybiAkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgJGFzaWRlID0gJCgnLmFzaWRlLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHZhciAkYXNpZGVJbm5lciA9ICQoJy5hc2lkZS1pbm5lcicpOyAvLyBmb3IgdG9wIG9mZnNldCBjYWxjdWxhdGlvblxyXG4gICAgICAgIC8vIGZsb2F0IGFzaWRlIHVzZXMgZXh0cmEgcGFkZGluZyBvbiBhc2lkZVxyXG4gICAgICAgIHZhciBtYXIgPSBwYXJzZUludCgkYXNpZGVJbm5lci5jc3MoJ3BhZGRpbmctdG9wJyksIDApICsgcGFyc2VJbnQoJGFzaWRlLmNzcygncGFkZGluZy10b3AnKSwgMCk7XHJcblxyXG4gICAgICAgIHZhciBzdWJOYXYgPSB1bC5jbG9uZSgpLmFwcGVuZFRvKCRhc2lkZSk7XHJcblxyXG4gICAgICAgIHRvZ2dsZVRvdWNoSXRlbSgkbGlzdEl0ZW0pO1xyXG5cclxuICAgICAgICB2YXIgaXRlbVRvcCA9ICgkbGlzdEl0ZW0ucG9zaXRpb24oKS50b3AgKyBtYXIpIC0gJHNpZGViYXIuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgdmFyIHZ3SGVpZ2h0ID0gJHdpbi5oZWlnaHQoKTtcclxuXHJcbiAgICAgICAgc3ViTmF2XHJcbiAgICAgICAgICAgIC5hZGRDbGFzcygnbmF2LWZsb2F0aW5nJylcclxuICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogaXNGaXhlZCgpID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGl0ZW1Ub3AsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IChzdWJOYXYub3V0ZXJIZWlnaHQodHJ1ZSkgKyBpdGVtVG9wID4gdndIZWlnaHQpID8gMCA6ICdhdXRvJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3ViTmF2Lm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRvZ2dsZVRvdWNoSXRlbSgkbGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBzdWJOYXYucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdWJOYXY7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRmxvYXRpbmdOYXYoKSB7XHJcbiAgICAgICAgJCgnLnNpZGViYXItc3VibmF2Lm5hdi1mbG9hdGluZycpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5kcm9wZG93bi1iYWNrZHJvcCcpLnJlbW92ZSgpO1xyXG4gICAgICAgICQoJy5zaWRlYmFyIGxpLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzVG91Y2goKSB7XHJcbiAgICAgICAgcmV0dXJuICRodG1sLmhhc0NsYXNzKCd0b3VjaCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU2lkZWJhckNvbGxhcHNlZCgpIHtcclxuICAgICAgICByZXR1cm4gJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWNvbGxhcHNlZCcpIHx8ICRib2R5Lmhhc0NsYXNzKCdhc2lkZS1jb2xsYXBzZWQtdGV4dCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzU2lkZWJhclRvZ2dsZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRib2R5Lmhhc0NsYXNzKCdhc2lkZS10b2dnbGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuICR3aW4ud2lkdGgoKSA8IEFQUF9NRURJQVFVRVJZLnRhYmxldDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ZpeGVkKCkge1xyXG4gICAgICAgIHJldHVybiAkYm9keS5oYXNDbGFzcygnbGF5b3V0LWZpeGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXNlQXNpZGVIb3ZlcigpIHtcclxuICAgICAgICByZXR1cm4gJGJvZHkuaGFzQ2xhc3MoJ2FzaWRlLWhvdmVyJyk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBTTElNU0NST0xMXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U2xpbXNTcm9sbCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFNsaW1zU3JvbGwoKSB7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRIZWlnaHQgPSAyNTA7XHJcblxyXG4gICAgICAgICAgICBlbGVtZW50LnNsaW1TY3JvbGwoe1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAoZWxlbWVudC5kYXRhKCdoZWlnaHQnKSB8fCBkZWZhdWx0SGVpZ2h0KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDdXN0b20galF1ZXJ5XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFRhYmxlQ2hlY2tBbGwpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUYWJsZUNoZWNrQWxsKCkge1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jaGVjay1hbGxdJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAkdGhpcy5pbmRleCgpICsgMSxcclxuICAgICAgICAgICAgICAgIGNoZWNrYm94ID0gJHRoaXMuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyksXHJcbiAgICAgICAgICAgICAgICB0YWJsZSA9ICR0aGlzLnBhcmVudHMoJ3RhYmxlJyk7XHJcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0byBhZmZlY3Qgb25seSB0aGUgY29ycmVjdCBjaGVja2JveCBjb2x1bW5cclxuICAgICAgICAgICAgdGFibGUuZmluZCgndGJvZHkgPiB0ciA+IHRkOm50aC1jaGlsZCgnICsgaW5kZXggKyAnKSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKVxyXG4gICAgICAgICAgICAgICAgLnByb3AoJ2NoZWNrZWQnLCBjaGVja2JveFswXS5jaGVja2VkKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gVE9HR0xFIFNUQVRFXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0VG9nZ2xlU3RhdGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRUb2dnbGVTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xyXG4gICAgICAgIHZhciB0b2dnbGUgPSBuZXcgU3RhdGVUb2dnbGVyKCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZS1zdGF0ZV0nKVxyXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc25hbWUgPSBlbGVtZW50LmRhdGEoJ3RvZ2dsZVN0YXRlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZWxlbWVudC5kYXRhKCd0YXJnZXQnKSxcclxuICAgICAgICAgICAgICAgICAgICBub1BlcnNpc3QgPSAoZWxlbWVudC5hdHRyKCdkYXRhLW5vLXBlcnNpc3QnKSAhPT0gdW5kZWZpbmVkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTcGVjaWZ5IGEgdGFyZ2V0IHNlbGVjdG9yIHRvIHRvZ2dsZSBjbGFzc25hbWVcclxuICAgICAgICAgICAgICAgIC8vIHVzZSBib2R5IGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gdGFyZ2V0ID8gJCh0YXJnZXQpIDogJGJvZHk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNsYXNzbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKGNsYXNzbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcyhjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vUGVyc2lzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZS5yZW1vdmVTdGF0ZShjbGFzc25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYWRkQ2xhc3MoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub1BlcnNpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGUuYWRkU3RhdGUoY2xhc3NuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNvbWUgZWxlbWVudHMgbWF5IG5lZWQgdGhpcyB3aGVuIHRvZ2dsZWQgY2xhc3MgY2hhbmdlIHRoZSBjb250ZW50IHNpemVcclxuICAgICAgICAgICAgICAgICQod2luZG93KS5yZXNpemUoKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBIYW5kbGUgc3RhdGVzIHRvL2Zyb20gbG9jYWxzdG9yYWdlXHJcbiAgICB2YXIgU3RhdGVUb2dnbGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBTVE9SQUdFX0tFWV9OQU1FID0gJ2pxLXRvZ2dsZVN0YXRlJztcclxuXHJcbiAgICAgICAgLyoqIEFkZCBhIHN0YXRlIHRvIHRoZSBicm93c2VyIHN0b3JhZ2UgdG8gYmUgcmVzdG9yZWQgbGF0ZXIgKi9cclxuICAgICAgICB0aGlzLmFkZFN0YXRlID0gZnVuY3Rpb24oY2xhc3NuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChTVE9SQUdFX0tFWV9OQU1FKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSkgZGF0YS5wdXNoKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgIGVsc2UgZGF0YSA9IFtjbGFzc25hbWVdO1xyXG4gICAgICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZX05BTUUsIGRhdGEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLyoqIFJlbW92ZSBhIHN0YXRlIGZyb20gdGhlIGJyb3dzZXIgc3RvcmFnZSAqL1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU3RhdGUgPSBmdW5jdGlvbihjbGFzc25hbWUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBTdG9yYWdlcy5sb2NhbFN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZX05BTUUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZGF0YS5pbmRleE9mKGNsYXNzbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSBkYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICBTdG9yYWdlcy5sb2NhbFN0b3JhZ2Uuc2V0KFNUT1JBR0VfS0VZX05BTUUsIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvKiogTG9hZCB0aGUgc3RhdGUgc3RyaW5nIGFuZCByZXN0b3JlIHRoZSBjbGFzc2xpc3QgKi9cclxuICAgICAgICB0aGlzLnJlc3RvcmVTdGF0ZSA9IGZ1bmN0aW9uKCRlbGVtKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gU3RvcmFnZXMubG9jYWxTdG9yYWdlLmdldChTVE9SQUdFX0tFWV9OQU1FKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgICRlbGVtLmFkZENsYXNzKGRhdGEuam9pbignICcpKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuU3RhdGVUb2dnbGVyID0gU3RhdGVUb2dnbGVyO1xyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogdHJpZ2dlci1yZXNpemUuanNcclxuICogVHJpZ2dlcnMgYSB3aW5kb3cgcmVzaXplIGV2ZW50IGZyb20gYW55IGVsZW1lbnRcclxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0VHJpZ2dlclJlc2l6ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFRyaWdnZXJSZXNpemUoKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKCdbZGF0YS10cmlnZ2VyLXJlc2l6ZV0nKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBlbGVtZW50LmRhdGEoJ3RyaWdnZXJSZXNpemUnKVxyXG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbGwgSUUgZnJpZW5kbHkgZGlzcGF0Y2hFdmVudFxyXG4gICAgICAgICAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdVSUV2ZW50cycpO1xyXG4gICAgICAgICAgICAgICAgZXZ0LmluaXRVSUV2ZW50KCdyZXNpemUnLCB0cnVlLCBmYWxzZSwgd2luZG93LCAwKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICAgICAgICAgICAgICAvLyBtb2Rlcm4gZGlzcGF0Y2hFdmVudCB3YXlcclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncmVzaXplJykpO1xyXG4gICAgICAgICAgICB9LCB2YWx1ZSB8fCAzMDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gQ29sb3IgcGlja2VyXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Q29sb3JQaWNrZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDb2xvclBpY2tlcigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmNvbG9ycGlja2VyKSByZXR1cm47XHJcblxyXG4gICAgICAgICQoJy5kZW1vLWNvbG9ycGlja2VyJykuY29sb3JwaWNrZXIoKTtcclxuXHJcbiAgICAgICAgJCgnI2RlbW9fc2VsZWN0b3JzJykuY29sb3JwaWNrZXIoe1xyXG4gICAgICAgICAgICBjb2xvclNlbGVjdG9yczoge1xyXG4gICAgICAgICAgICAgICAgJ2RlZmF1bHQnOiAnIzc3Nzc3NycsXHJcbiAgICAgICAgICAgICAgICAncHJpbWFyeSc6IEFQUF9DT0xPUlNbJ3ByaW1hcnknXSxcclxuICAgICAgICAgICAgICAgICdzdWNjZXNzJzogQVBQX0NPTE9SU1snc3VjY2VzcyddLFxyXG4gICAgICAgICAgICAgICAgJ2luZm8nOiBBUFBfQ09MT1JTWydpbmZvJ10sXHJcbiAgICAgICAgICAgICAgICAnd2FybmluZyc6IEFQUF9DT0xPUlNbJ3dhcm5pbmcnXSxcclxuICAgICAgICAgICAgICAgICdkYW5nZXInOiBBUFBfQ09MT1JTWydkYW5nZXInXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gRm9ybXMgRGVtb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRGb3Jtc0RlbW8pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRGb3Jtc0RlbW8oKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5zbGlkZXIpIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4uY2hvc2VuKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmlucHV0bWFzaykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5maWxlc3R5bGUpIHJldHVybjtcclxuICAgICAgICBpZiAoISQuZm4ud3lzaXd5ZykgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5kYXRlcGlja2VyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEJPT1RTVFJBUCBTTElERVIgQ1RSTFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXVpLXNsaWRlcl0nKS5zbGlkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ0hPU0VOXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnLmNob3Nlbi1zZWxlY3QnKS5jaG9zZW4oKTtcclxuXHJcbiAgICAgICAgLy8gTUFTS0VEXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnW2RhdGEtbWFza2VkXScpLmlucHV0bWFzaygpO1xyXG5cclxuICAgICAgICAvLyBGSUxFU1RZTEVcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcuZmlsZXN0eWxlJykuZmlsZXN0eWxlKCk7XHJcblxyXG4gICAgICAgIC8vIFdZU0lXWUdcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcud3lzaXd5ZycpLnd5c2l3eWcoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIERBVEVUSU1FUElDS0VSXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnI2RhdGV0aW1lcGlja2VyMScpLmRhdGVwaWNrZXIoe1xyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgIGljb25zOiB7XHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnZmEgZmEtY2xvY2stbycsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnZmEgZmEtY2FsZW5kYXInLFxyXG4gICAgICAgICAgICAgICAgdXA6ICdmYSBmYS1jaGV2cm9uLXVwJyxcclxuICAgICAgICAgICAgICAgIGRvd246ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxyXG4gICAgICAgICAgICAgICAgbmV4dDogJ2ZhIGZhLWNoZXZyb24tcmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgdG9kYXk6ICdmYSBmYS1jcm9zc2hhaXJzJyxcclxuICAgICAgICAgICAgICAgIGNsZWFyOiAnZmEgZmEtdHJhc2gnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBvbmx5IHRpbWVcclxuICAgICAgICAkKCcjZGF0ZXRpbWVwaWNrZXIyJykuZGF0ZXBpY2tlcih7XHJcbiAgICAgICAgICAgIGZvcm1hdDogJ21tLWRkLXl5eXknXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogSW1hZ2UgQ3JvcHBlclxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRJbWFnZUNyb3BwZXIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRJbWFnZUNyb3BwZXIoKSB7XHJcblxyXG4gICAgICAgIGlmICghJC5mbi5jcm9wcGVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciAkaW1hZ2UgPSAkKCcuaW1nLWNvbnRhaW5lciA+IGltZycpLFxyXG4gICAgICAgICAgICAkZGF0YVggPSAkKCcjZGF0YVgnKSxcclxuICAgICAgICAgICAgJGRhdGFZID0gJCgnI2RhdGFZJyksXHJcbiAgICAgICAgICAgICRkYXRhSGVpZ2h0ID0gJCgnI2RhdGFIZWlnaHQnKSxcclxuICAgICAgICAgICAgJGRhdGFXaWR0aCA9ICQoJyNkYXRhV2lkdGgnKSxcclxuICAgICAgICAgICAgJGRhdGFSb3RhdGUgPSAkKCcjZGF0YVJvdGF0ZScpLFxyXG4gICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgLy8gZGF0YToge1xyXG4gICAgICAgICAgICAgICAgLy8gICB4OiA0MjAsXHJcbiAgICAgICAgICAgICAgICAvLyAgIHk6IDYwLFxyXG4gICAgICAgICAgICAgICAgLy8gICB3aWR0aDogNjQwLFxyXG4gICAgICAgICAgICAgICAgLy8gICBoZWlnaHQ6IDM2MFxyXG4gICAgICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgICAgIC8vIHN0cmljdDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyByZXNwb25zaXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrSW1hZ2VPcmlnaW46IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbW9kYWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gZ3VpZGVzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIGhpZ2hsaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBmYWxzZSxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhdXRvQ3JvcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBhdXRvQ3JvcEFyZWE6IDAuNSxcclxuICAgICAgICAgICAgICAgIC8vIGRyYWdDcm9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIG1vdmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gcm90YXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIHpvb21hYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIHRvdWNoRHJhZ1pvb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gbW91c2VXaGVlbFpvb206IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gY3JvcEJveE1vdmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gY3JvcEJveFJlc2l6YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyBkb3VibGVDbGlja1RvZ2dsZTogZmFsc2UsXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ2FudmFzV2lkdGg6IDMyMCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNhbnZhc0hlaWdodDogMTgwLFxyXG4gICAgICAgICAgICAgICAgLy8gbWluQ3JvcEJveFdpZHRoOiAxNjAsXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5Dcm9wQm94SGVpZ2h0OiA5MCxcclxuICAgICAgICAgICAgICAgIC8vIG1pbkNvbnRhaW5lcldpZHRoOiAzMjAsXHJcbiAgICAgICAgICAgICAgICAvLyBtaW5Db250YWluZXJIZWlnaHQ6IDE4MCxcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBidWlsZDogbnVsbCxcclxuICAgICAgICAgICAgICAgIC8vIGJ1aWx0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ3N0YXJ0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gZHJhZ21vdmU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAvLyBkcmFnZW5kOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gem9vbWluOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8gem9vbW91dDogbnVsbCxcclxuXHJcbiAgICAgICAgICAgICAgICBhc3BlY3RSYXRpbzogMTYgLyA5LFxyXG4gICAgICAgICAgICAgICAgcHJldmlldzogJy5pbWctcHJldmlldycsXHJcbiAgICAgICAgICAgICAgICBjcm9wOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJGRhdGFYLnZhbChNYXRoLnJvdW5kKGRhdGEueCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXRhWS52YWwoTWF0aC5yb3VuZChkYXRhLnkpKTtcclxuICAgICAgICAgICAgICAgICAgICAkZGF0YUhlaWdodC52YWwoTWF0aC5yb3VuZChkYXRhLmhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXRhV2lkdGgudmFsKE1hdGgucm91bmQoZGF0YS53aWR0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICRkYXRhUm90YXRlLnZhbChNYXRoLnJvdW5kKGRhdGEucm90YXRlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICRpbWFnZS5vbih7XHJcbiAgICAgICAgICAgICdidWlsZC5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2J1aWx0LmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZHJhZ3N0YXJ0LmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUsIGUuZHJhZ1R5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZHJhZ21vdmUuY3JvcHBlcic6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgZS5kcmFnVHlwZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdkcmFnZW5kLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUsIGUuZHJhZ1R5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnem9vbWluLmNyb3BwZXInOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnem9vbW91dC5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2NoYW5nZS5jcm9wcGVyJzogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNyb3BwZXIob3B0aW9ucyk7XHJcblxyXG5cclxuICAgICAgICAvLyBNZXRob2RzXHJcbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5vbignY2xpY2snLCAnW2RhdGEtbWV0aG9kXScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgJHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHJlc3VsdDtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGltYWdlLmRhdGEoJ2Nyb3BwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YS5tZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSAkLmV4dGVuZCh7fSwgZGF0YSk7IC8vIENsb25lIGEgbmV3IG9uZVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS50YXJnZXQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldCA9ICQoZGF0YS50YXJnZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEub3B0aW9uID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5vcHRpb24gPSBKU09OLnBhcnNlKCR0YXJnZXQudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICRpbWFnZS5jcm9wcGVyKGRhdGEubWV0aG9kLCBkYXRhLm9wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubWV0aG9kID09PSAnZ2V0Q3JvcHBlZENhbnZhcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKCcjZ2V0Q3JvcHBlZENhbnZhc01vZGFsJykubW9kYWwoKS5maW5kKCcubW9kYWwtYm9keScpLmh0bWwocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJC5pc1BsYWluT2JqZWN0KHJlc3VsdCkgJiYgJHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQudmFsKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRpbWFnZS5kYXRhKCdjcm9wcGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChlLndoaWNoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignbW92ZScsIC0xLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignbW92ZScsIDAsIC0xKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignbW92ZScsIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgMCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBJbXBvcnQgaW1hZ2VcclxuICAgICAgICB2YXIgJGlucHV0SW1hZ2UgPSAkKCcjaW5wdXRJbWFnZScpLFxyXG4gICAgICAgICAgICBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwsXHJcbiAgICAgICAgICAgIGJsb2JVUkw7XHJcblxyXG4gICAgICAgIGlmIChVUkwpIHtcclxuICAgICAgICAgICAgJGlucHV0SW1hZ2UuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbGVzID0gdGhpcy5maWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghJGltYWdlLmRhdGEoJ2Nyb3BwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZSA9IGZpbGVzWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoL15pbWFnZVxcL1xcdyskLy50ZXN0KGZpbGUudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvYlVSTCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZS5vbmUoJ2J1aWx0LmNyb3BwZXInLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVSTCk7IC8vIFJldm9rZSB3aGVuIGxvYWQgY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY3JvcHBlcigncmVzZXQnKS5jcm9wcGVyKCdyZXBsYWNlJywgYmxvYlVSTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dEltYWdlLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1BsZWFzZSBjaG9vc2UgYW4gaW1hZ2UgZmlsZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRpbnB1dEltYWdlLnBhcmVudCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIE9wdGlvbnNcclxuICAgICAgICAkKCcuZG9jcy1vcHRpb25zIDpjaGVja2JveCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghJGltYWdlLmRhdGEoJ2Nyb3BwZXInKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvcHRpb25zWyR0aGlzLnZhbCgpXSA9ICR0aGlzLnByb3AoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ2Rlc3Ryb3knKS5jcm9wcGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gVG9vbHRpcHNcclxuICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCgpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIFNlbGVjdDJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRTZWxlY3QyKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2VsZWN0MigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLnNlbGVjdDIpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0IDJcclxuXHJcbiAgICAgICAgJCgnI3NlbGVjdDItMScpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3NlbGVjdDItMicpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3NlbGVjdDItMycpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcDQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnI3NlbGVjdDItNCcpLnNlbGVjdDIoe1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhIHN0YXRlJyxcclxuICAgICAgICAgICAgYWxsb3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgICAgdGhlbWU6ICdib290c3RyYXA0J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICBpZiAodHlwZW9mIERyb3B6b25lID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xyXG5cclxuICAgIC8vIFByZXZlbnQgRHJvcHpvbmUgZnJvbSBhdXRvIGRpc2NvdmVyaW5nXHJcbiAgICAvLyBUaGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSB3YW50IHRvIGNyZWF0ZSB0aGVcclxuICAgIC8vIERyb3B6b25lIHByb2dyYW1tYXRpY2FsbHkgbGF0ZXJcclxuICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xyXG5cclxuICAgICQoaW5pdERyb3B6b25lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RHJvcHpvbmUoKSB7XHJcblxyXG4gICAgICAgIC8vIERyb3B6b25lIHNldHRpbmdzXHJcbiAgICAgICAgdmFyIGRyb3B6b25lT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgYXV0b1Byb2Nlc3NRdWV1ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXJhbGxlbFVwbG9hZHM6IDEwMCxcclxuICAgICAgICAgICAgbWF4RmlsZXM6IDEwMCxcclxuICAgICAgICAgICAgZGljdERlZmF1bHRNZXNzYWdlOiAnPGVtIGNsYXNzPVwiZmEgZmEtdXBsb2FkIHRleHQtbXV0ZWRcIj48L2VtPjxicj5Ecm9wIGZpbGVzIGhlcmUgdG8gdXBsb2FkJywgLy8gZGVmYXVsdCBtZXNzYWdlcyBiZWZvcmUgZmlyc3QgZHJvcFxyXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdmaWxlJywgLy8gVGhlIG5hbWUgdGhhdCB3aWxsIGJlIHVzZWQgdG8gdHJhbnNmZXIgdGhlIGZpbGVcclxuICAgICAgICAgICAgbWF4RmlsZXNpemU6IDIsIC8vIE1CXHJcbiAgICAgICAgICAgIGFkZFJlbW92ZUxpbmtzOiB0cnVlLFxyXG4gICAgICAgICAgICBhY2NlcHQ6IGZ1bmN0aW9uKGZpbGUsIGRvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT09ICdqdXN0aW5iaWViZXIuanBnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoJ05haGEsIHlvdSBkb250LiA6KScpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGR6SGFuZGxlciA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPXN1Ym1pdF0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBkekhhbmRsZXIucHJvY2Vzc1F1ZXVlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ2FkZGVkZmlsZScsIGZ1bmN0aW9uKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkZWQgZmlsZTogJyArIGZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ3JlbW92ZWRmaWxlJywgZnVuY3Rpb24oZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmVkIGZpbGU6ICcgKyBmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uKCdzZW5kaW5nbXVsdGlwbGUnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMub24oJ3N1Y2Nlc3NtdWx0aXBsZScsIGZ1bmN0aW9uKCAvKmZpbGVzLCByZXNwb25zZSovICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbignZXJyb3JtdWx0aXBsZScsIGZ1bmN0aW9uKCAvKmZpbGVzLCByZXNwb25zZSovICkge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBkcm9wem9uZUFyZWEgPSBuZXcgRHJvcHpvbmUoJyNkcm9wem9uZS1hcmVhJywgZHJvcHpvbmVPcHRpb25zKTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBGb3JtcyBEZW1vXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFdpemFyZCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFdpemFyZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLnZhbGlkYXRlKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEZPUk0gRVhBTVBMRVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgdmFyIGZvcm0gPSAkKFwiI2V4YW1wbGUtZm9ybVwiKTtcclxuICAgICAgICBmb3JtLnZhbGlkYXRlKHtcclxuICAgICAgICAgICAgZXJyb3JQbGFjZW1lbnQ6IGZ1bmN0aW9uIGVycm9yUGxhY2VtZW50KGVycm9yLCBlbGVtZW50KSB7IGVsZW1lbnQuYmVmb3JlKGVycm9yKTsgfSxcclxuICAgICAgICAgICAgcnVsZXM6IHtcclxuICAgICAgICAgICAgICAgIGNvbmZpcm06IHtcclxuICAgICAgICAgICAgICAgICAgICBlcXVhbFRvOiBcIiNwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBmb3JtLmNoaWxkcmVuKFwiZGl2XCIpLnN0ZXBzKHtcclxuICAgICAgICAgICAgaGVhZGVyVGFnOiBcImg0XCIsXHJcbiAgICAgICAgICAgIGJvZHlUYWc6IFwiZmllbGRzZXRcIixcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkVmZmVjdDogXCJzbGlkZUxlZnRcIixcclxuICAgICAgICAgICAgb25TdGVwQ2hhbmdpbmc6IGZ1bmN0aW9uKGV2ZW50LCBjdXJyZW50SW5kZXgsIG5ld0luZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtLnZhbGlkYXRlKCkuc2V0dGluZ3MuaWdub3JlID0gXCI6ZGlzYWJsZWQsOmhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0udmFsaWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25GaW5pc2hpbmc6IGZ1bmN0aW9uKGV2ZW50LCBjdXJyZW50SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZvcm0udmFsaWRhdGUoKS5zZXR0aW5ncy5pZ25vcmUgPSBcIjpkaXNhYmxlZFwiO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0udmFsaWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25GaW5pc2hlZDogZnVuY3Rpb24oZXZlbnQsIGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJTdWJtaXR0ZWQhXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN1Ym1pdCBmb3JtXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFZFUlRJQ0FMXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJChcIiNleGFtcGxlLXZlcnRpY2FsXCIpLnN0ZXBzKHtcclxuICAgICAgICAgICAgaGVhZGVyVGFnOiBcImg0XCIsXHJcbiAgICAgICAgICAgIGJvZHlUYWc6IFwic2VjdGlvblwiLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uRWZmZWN0OiBcInNsaWRlTGVmdFwiLFxyXG4gICAgICAgICAgICBzdGVwc09yaWVudGF0aW9uOiBcInZlcnRpY2FsXCJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBYZWRpdGFibGUgRGVtb1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFhFZGl0YWJsZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFhFZGl0YWJsZSgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmVkaXRhYmxlKSByZXR1cm5cclxuXHJcbiAgICAgICAgLy8gRm9udCBBd2Vzb21lIHN1cHBvcnRcclxuICAgICAgICAkLmZuLmVkaXRhYmxlZm9ybS5idXR0b25zID1cclxuICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBlZGl0YWJsZS1zdWJtaXRcIj4nICtcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY2hlY2tcIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBlZGl0YWJsZS1jYW5jZWxcIj4nICtcclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmEgZmEtZncgZmEtdGltZXNcIj48L2k+JyArXHJcbiAgICAgICAgICAgICc8L2J1dHRvbj4nO1xyXG5cclxuICAgICAgICAvL2RlZmF1bHRzXHJcbiAgICAgICAgLy8kLmZuLmVkaXRhYmxlLmRlZmF1bHRzLnVybCA9ICd1cmwvdG8vc2VydmVyJztcclxuXHJcbiAgICAgICAgLy9lbmFibGUgLyBkaXNhYmxlXHJcbiAgICAgICAgJCgnI2VuYWJsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcjdXNlciAuZWRpdGFibGUnKS5lZGl0YWJsZSgndG9nZ2xlRGlzYWJsZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9lZGl0YWJsZXNcclxuICAgICAgICAkKCcjdXNlcm5hbWUnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIC8vIHVybDogJ3VybC90by9zZXJ2ZXInLFxyXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgICAgIHBrOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiAndXNlcm5hbWUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0VudGVyIHVzZXJuYW1lJyxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2ZpcnN0bmFtZScpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgdmFsaWRhdGU6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoJC50cmltKHZhbHVlKSA9PT0gJycpIHJldHVybiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNzZXgnKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIHByZXBlbmQ6IFwibm90IHNlbGVjdGVkXCIsXHJcbiAgICAgICAgICAgIHNvdXJjZTogW1xyXG4gICAgICAgICAgICAgICAgeyB2YWx1ZTogMSwgdGV4dDogJ01hbGUnIH0sXHJcbiAgICAgICAgICAgICAgICB7IHZhbHVlOiAyLCB0ZXh0OiAnRmVtYWxlJyB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZ1bmN0aW9uKHZhbHVlLCBzb3VyY2VEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29sb3JzID0geyBcIlwiOiBcImdyYXlcIiwgMTogXCJncmVlblwiLCAyOiBcImJsdWVcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSAkLmdyZXAoc291cmNlRGF0YSwgZnVuY3Rpb24obykgeyByZXR1cm4gby52YWx1ZSA9PSB2YWx1ZTsgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS50ZXh0KGVsZW1bMF0udGV4dCkuY3NzKFwiY29sb3JcIiwgY29sb3JzW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZW1wdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI3N0YXR1cycpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2dyb3VwJykuZWRpdGFibGUoe1xyXG4gICAgICAgICAgICBzaG93YnV0dG9uczogZmFsc2UsXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNkb2InKS5lZGl0YWJsZSh7XHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNldmVudCcpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgcGxhY2VtZW50OiAncmlnaHQnLFxyXG4gICAgICAgICAgICBjb21ib2RhdGU6IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0SXRlbTogJ25hbWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vZGU6ICdpbmxpbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJyNjb21tZW50cycpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgc2hvd2J1dHRvbnM6ICdib3R0b20nLFxyXG4gICAgICAgICAgICBtb2RlOiAnaW5saW5lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjbm90ZScpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcjcGVuY2lsJykuY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICQoJyNub3RlJykuZWRpdGFibGUoJ3RvZ2dsZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjdXNlciAuZWRpdGFibGUnKS5vbignaGlkZGVuJywgZnVuY3Rpb24oZSwgcmVhc29uKSB7XHJcbiAgICAgICAgICAgIGlmIChyZWFzb24gPT09ICdzYXZlJyB8fCByZWFzb24gPT09ICdub2NoYW5nZScpIHtcclxuICAgICAgICAgICAgICAgIHZhciAkbmV4dCA9ICQodGhpcykuY2xvc2VzdCgndHInKS5uZXh0KCkuZmluZCgnLmVkaXRhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoJCgnI2F1dG9vcGVuJykuaXMoJzpjaGVja2VkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5lZGl0YWJsZSgnc2hvdycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRuZXh0LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVEFCTEVcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcjdXNlcnMgYScpLmVkaXRhYmxlKHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBuYW1lOiAndXNlcm5hbWUnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ0VudGVyIHVzZXJuYW1lJyxcclxuICAgICAgICAgICAgbW9kZTogJ2lubGluZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDdXN0b20galF1ZXJ5XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIFdoZW4gZG9tIHJlYWR5LCBpbml0IGNhbGVuZGFyIGFuZCBldmVudHNcclxuICAgICQoaW5pdEZ1bGxDYWxlbmRhcik7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdEZ1bGxDYWxlbmRhcigpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmZ1bGxDYWxlbmRhcikgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBUaGUgZWxlbWVudCB0aGF0IHdpbGwgZGlzcGxheSB0aGUgY2FsZW5kYXJcclxuICAgICAgICB2YXIgY2FsZW5kYXIgPSAkKCcjY2FsZW5kYXInKTtcclxuXHJcbiAgICAgICAgdmFyIGRlbW9FdmVudHMgPSBjcmVhdGVEZW1vRXZlbnRzKCk7XHJcblxyXG4gICAgICAgIGluaXRFeHRlcm5hbEV2ZW50cyhjYWxlbmRhcik7XHJcblxyXG4gICAgICAgIGluaXRDYWxlbmRhcihjYWxlbmRhciwgZGVtb0V2ZW50cyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBnbG9iYWwgc2hhcmVkIHZhciB0byBrbm93IHdoYXQgd2UgYXJlIGRyYWdnaW5nXHJcbiAgICB2YXIgZHJhZ2dpbmdFdmVudCA9IG51bGw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFeHRlcm5hbEV2ZW50IG9iamVjdFxyXG4gICAgICogQHBhcmFtIGpRdWVyeSBPYmplY3QgZWxlbWVudHMgU2V0IG9mIGVsZW1lbnQgYXMgalF1ZXJ5IG9iamVjdHNcclxuICAgICAqL1xyXG4gICAgdmFyIEV4dGVybmFsRXZlbnQgPSBmdW5jdGlvbihlbGVtZW50cykge1xyXG5cclxuICAgICAgICBpZiAoIWVsZW1lbnRzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGVsZW1lbnRzLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBFdmVudCBPYmplY3QgKGh0dHA6Ly9hcnNoYXcuY29tL2Z1bGxjYWxlbmRhci9kb2NzL2V2ZW50X2RhdGEvRXZlbnRfT2JqZWN0LylcclxuICAgICAgICAgICAgLy8gaXQgZG9lc24ndCBuZWVkIHRvIGhhdmUgYSBzdGFydCBvciBlbmRcclxuICAgICAgICAgICAgdmFyIGNhbGVuZGFyRXZlbnRPYmplY3QgPSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJC50cmltKCR0aGlzLnRleHQoKSkgLy8gdXNlIHRoZSBlbGVtZW50J3MgdGV4dCBhcyB0aGUgZXZlbnQgdGl0bGVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBFdmVudCBPYmplY3QgaW4gdGhlIERPTSBlbGVtZW50IHNvIHdlIGNhbiBnZXQgdG8gaXQgbGF0ZXJcclxuICAgICAgICAgICAgJHRoaXMuZGF0YSgnY2FsZW5kYXJFdmVudE9iamVjdCcsIGNhbGVuZGFyRXZlbnRPYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgLy8gbWFrZSB0aGUgZXZlbnQgZHJhZ2dhYmxlIHVzaW5nIGpRdWVyeSBVSVxyXG4gICAgICAgICAgICAkdGhpcy5kcmFnZ2FibGUoe1xyXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDcwLFxyXG4gICAgICAgICAgICAgICAgcmV2ZXJ0OiB0cnVlLCAvLyB3aWxsIGNhdXNlIHRoZSBldmVudCB0byBnbyBiYWNrIHRvIGl0c1xyXG4gICAgICAgICAgICAgICAgcmV2ZXJ0RHVyYXRpb246IDAgLy8gIG9yaWdpbmFsIHBvc2l0aW9uIGFmdGVyIHRoZSBkcmFnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2UgZnVsbCBjYWxlbmRhciBwbHVnaW4gYW5kIGF0dGFjaCBiZWhhdmlvclxyXG4gICAgICogQHBhcmFtICBqUXVlcnkgW2NhbEVsZW1lbnRdIFRoZSBjYWxlbmRhciBkb20gZWxlbWVudCB3cmFwcGVkIGludG8galF1ZXJ5XHJcbiAgICAgKiBAcGFyYW0gIEV2ZW50T2JqZWN0IFtldmVudHNdIEFuIG9iamVjdCB3aXRoIHRoZSBldmVudCBsaXN0IHRvIGxvYWQgd2hlbiB0aGUgY2FsZW5kYXIgZGlzcGxheXNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdENhbGVuZGFyKGNhbEVsZW1lbnQsIGV2ZW50cykge1xyXG5cclxuICAgICAgICAvLyBjaGVjayB0byByZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgIHZhciByZW1vdmVBZnRlckRyb3AgPSAkKCcjcmVtb3ZlLWFmdGVyLWRyb3AnKTtcclxuXHJcbiAgICAgICAgY2FsRWxlbWVudC5mdWxsQ2FsZW5kYXIoe1xyXG4gICAgICAgICAgICAvLyBpc1JUTDogdHJ1ZSxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnbW9udGgsYWdlbmRhV2VlayxhZ2VuZGFEYXknXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJ1dHRvbkljb25zOiB7IC8vIG5vdGUgdGhlIHNwYWNlIGF0IHRoZSBiZWdpbm5pbmdcclxuICAgICAgICAgICAgICAgIHByZXY6ICcgZmEgZmEtY2FyZXQtbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBuZXh0OiAnIGZhIGZhLWNhcmV0LXJpZ2h0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBidXR0b25UZXh0OiB7XHJcbiAgICAgICAgICAgICAgICB0b2RheTogJ3RvZGF5JyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbW9udGgnLFxyXG4gICAgICAgICAgICAgICAgd2VlazogJ3dlZWsnLFxyXG4gICAgICAgICAgICAgICAgZGF5OiAnZGF5J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZHJvcHBhYmxlOiB0cnVlLCAvLyB0aGlzIGFsbG93cyB0aGluZ3MgdG8gYmUgZHJvcHBlZCBvbnRvIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICBkcm9wOiBmdW5jdGlvbihkYXRlLCBhbGxEYXkpIHsgLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiBzb21ldGhpbmcgaXMgZHJvcHBlZFxyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgdGhlIGRyb3BwZWQgZWxlbWVudCdzIHN0b3JlZCBFdmVudCBPYmplY3RcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50T2JqZWN0ID0gJHRoaXMuZGF0YSgnY2FsZW5kYXJFdmVudE9iamVjdCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIHNvbWV0aGluZyB3ZW50IHdyb25nLCBhYm9ydFxyXG4gICAgICAgICAgICAgICAgaWYgKCFvcmlnaW5hbEV2ZW50T2JqZWN0KSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2xvbmUgdGhlIG9iamVjdCB0byBhdm9pZCBtdWx0aXBsZSBldmVudHMgd2l0aCByZWZlcmVuY2UgdG8gdGhlIHNhbWUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgY2xvbmVkRXZlbnRPYmplY3QgPSAkLmV4dGVuZCh7fSwgb3JpZ2luYWxFdmVudE9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYXNzaWduIHRoZSByZXBvcnRlZCBkYXRlXHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5zdGFydCA9IGRhdGU7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5hbGxEYXkgPSBhbGxEYXk7XHJcbiAgICAgICAgICAgICAgICBjbG9uZWRFdmVudE9iamVjdC5iYWNrZ3JvdW5kQ29sb3IgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtY29sb3InKTtcclxuICAgICAgICAgICAgICAgIGNsb25lZEV2ZW50T2JqZWN0LmJvcmRlckNvbG9yID0gJHRoaXMuY3NzKCdib3JkZXItY29sb3InKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgdGhlIGV2ZW50IG9uIHRoZSBjYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGxhc3QgYHRydWVgIGFyZ3VtZW50IGRldGVybWluZXMgaWYgdGhlIGV2ZW50IFwic3RpY2tzXCJcclxuICAgICAgICAgICAgICAgIC8vIChodHRwOi8vYXJzaGF3LmNvbS9mdWxsY2FsZW5kYXIvZG9jcy9ldmVudF9yZW5kZXJpbmcvcmVuZGVyRXZlbnQvKVxyXG4gICAgICAgICAgICAgICAgY2FsRWxlbWVudC5mdWxsQ2FsZW5kYXIoJ3JlbmRlckV2ZW50JywgY2xvbmVkRXZlbnRPYmplY3QsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlmIG5lY2Vzc2FyeSByZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyRHJvcC5pcygnOmNoZWNrZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICR0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudERyYWdTdGFydDogZnVuY3Rpb24oZXZlbnQsIGpzLCB1aSkge1xyXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmdFdmVudCA9IGV2ZW50O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBUaGlzIGFycmF5IGlzIHRoZSBldmVudHMgc291cmNlc1xyXG4gICAgICAgICAgICBldmVudHM6IGV2ZW50c1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdHMgdGhlIGV4dGVybmFsIGV2ZW50cyBjYXJkXHJcbiAgICAgKiBAcGFyYW0gIGpRdWVyeSBbY2FsRWxlbWVudF0gVGhlIGNhbGVuZGFyIGRvbSBlbGVtZW50IHdyYXBwZWQgaW50byBqUXVlcnlcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaW5pdEV4dGVybmFsRXZlbnRzKGNhbEVsZW1lbnQpIHtcclxuICAgICAgICAvLyBDYXJkIHdpdGggdGhlIGV4dGVybmFsIGV2ZW50cyBsaXN0XHJcbiAgICAgICAgdmFyIGV4dGVybmFsRXZlbnRzID0gJCgnLmV4dGVybmFsLWV2ZW50cycpO1xyXG5cclxuICAgICAgICAvLyBpbml0IHRoZSBleHRlcm5hbCBldmVudHMgaW4gdGhlIGNhcmRcclxuICAgICAgICBuZXcgRXh0ZXJuYWxFdmVudChleHRlcm5hbEV2ZW50cy5jaGlsZHJlbignZGl2JykpO1xyXG5cclxuICAgICAgICAvLyBFeHRlcm5hbCBldmVudCBjb2xvciBpcyBkYW5nZXItcmVkIGJ5IGRlZmF1bHRcclxuICAgICAgICB2YXIgY3VyckNvbG9yID0gJyNmNjUwNGQnO1xyXG4gICAgICAgIC8vIENvbG9yIHNlbGVjdG9yIGJ1dHRvblxyXG4gICAgICAgIHZhciBldmVudEFkZEJ0biA9ICQoJy5leHRlcm5hbC1ldmVudC1hZGQtYnRuJyk7XHJcbiAgICAgICAgLy8gTmV3IGV4dGVybmFsIGV2ZW50IG5hbWUgaW5wdXRcclxuICAgICAgICB2YXIgZXZlbnROYW1lSW5wdXQgPSAkKCcuZXh0ZXJuYWwtZXZlbnQtbmFtZScpO1xyXG4gICAgICAgIC8vIENvbG9yIHN3aXRjaGVyc1xyXG4gICAgICAgIHZhciBldmVudENvbG9yU2VsZWN0b3IgPSAkKCcuZXh0ZXJuYWwtZXZlbnQtY29sb3Itc2VsZWN0b3IgLmNpcmNsZScpO1xyXG5cclxuICAgICAgICAvLyBUcmFzaCBldmVudHMgRHJvcGFyZWFcclxuICAgICAgICAkKCcuZXh0ZXJuYWwtZXZlbnRzLXRyYXNoJykuZHJvcHBhYmxlKHtcclxuICAgICAgICAgICAgYWNjZXB0OiAnLmZjLWV2ZW50JyxcclxuICAgICAgICAgICAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxyXG4gICAgICAgICAgICBob3ZlckNsYXNzOiAnaG92ZXJlZCcsXHJcbiAgICAgICAgICAgIHRvbGVyYW5jZTogJ3RvdWNoJyxcclxuICAgICAgICAgICAgZHJvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gWW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBzZW5kIGFuIGFqYXggcmVxdWVzdFxyXG4gICAgICAgICAgICAgICAgLy8gdG8gcmVtb3ZlIHRoZSBldmVudCBmcm9tIHRoZSByZXBvc2l0b3J5XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRyYWdnaW5nRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWlkID0gZHJhZ2dpbmdFdmVudC5pZCB8fCBkcmFnZ2luZ0V2ZW50Ll9pZDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsRWxlbWVudC5mdWxsQ2FsZW5kYXIoJ3JlbW92ZUV2ZW50cycsIGVpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBkb20gZWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHVpLmRyYWdnYWJsZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGVhclxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nRXZlbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGV2ZW50Q29sb3JTZWxlY3Rvci5jbGljayhmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNhdmUgY29sb3JcclxuICAgICAgICAgICAgY3VyckNvbG9yID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XHJcbiAgICAgICAgICAgIC8vIERlLXNlbGVjdCBhbGwgYW5kIHNlbGVjdCB0aGUgY3VycmVudCBvbmVcclxuICAgICAgICAgICAgZXZlbnRDb2xvclNlbGVjdG9yLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnRBZGRCdG4uY2xpY2soZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgZXZlbnQgbmFtZSBmcm9tIGlucHV0XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBldmVudE5hbWVJbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgLy8gRG9udCBhbGxvdyBlbXB0eSB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKCQudHJpbSh2YWwpID09PSAnJykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBldmVudCBlbGVtZW50XHJcbiAgICAgICAgICAgIHZhciBuZXdFdmVudCA9ICQoJzxkaXYvPicpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBjdXJyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IGN1cnJDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAnY29sb3InOiAnI2ZmZidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuaHRtbCh2YWwpO1xyXG5cclxuICAgICAgICAgICAgLy8gUHJlcGVuZHMgdG8gdGhlIGV4dGVybmFsIGV2ZW50cyBsaXN0XHJcbiAgICAgICAgICAgIGV4dGVybmFsRXZlbnRzLnByZXBlbmQobmV3RXZlbnQpO1xyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBuZXcgZXZlbnQgZWxlbWVudFxyXG4gICAgICAgICAgICBuZXcgRXh0ZXJuYWxFdmVudChuZXdFdmVudCk7XHJcbiAgICAgICAgICAgIC8vIENsZWFyIGlucHV0XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZUlucHV0LnZhbCgnJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIGV2ZW50cyB0byBkaXNwbGF5IGluIHRoZSBmaXJzdCBsb2FkIG9mIHRoZSBjYWxlbmRhclxyXG4gICAgICogV3JhcCBpbnRvIHRoaXMgZnVuY3Rpb24gYSByZXF1ZXN0IHRvIGEgc291cmNlIHRvIGdldCB2aWEgYWpheCB0aGUgc3RvcmVkIGV2ZW50c1xyXG4gICAgICogQHJldHVybiBBcnJheSBUaGUgYXJyYXkgd2l0aCB0aGUgZXZlbnRzXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbW9FdmVudHMoKSB7XHJcbiAgICAgICAgLy8gRGF0ZSBmb3IgdGhlIGNhbGVuZGFyIGV2ZW50cyAoZHVtbXkgZGF0YSlcclxuICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIGQgPSBkYXRlLmdldERhdGUoKSxcclxuICAgICAgICAgICAgbSA9IGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICAgICAgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWxsIERheSBFdmVudCcsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCAxKSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y1Njk1NCcsIC8vcmVkXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2Y1Njk1NCcgLy9yZWRcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG9uZyBFdmVudCcsXHJcbiAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSh5LCBtLCBkIC0gNSksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoeSwgbSwgZCAtIDIpLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjM5YzEyJywgLy95ZWxsb3dcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZjM5YzEyJyAvL3llbGxvd1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdNZWV0aW5nJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIGQsIDEwLCAzMCksXHJcbiAgICAgICAgICAgIGFsbERheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDczYjcnLCAvL0JsdWVcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDA3M2I3JyAvL0JsdWVcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTHVuY2gnLFxyXG4gICAgICAgICAgICBzdGFydDogbmV3IERhdGUoeSwgbSwgZCwgMTIsIDApLFxyXG4gICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKHksIG0sIGQsIDE0LCAwKSxcclxuICAgICAgICAgICAgYWxsRGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzAwYzBlZicsIC8vSW5mbyAoYXF1YSlcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjMDBjMGVmJyAvL0luZm8gKGFxdWEpXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JpcnRoZGF5IFBhcnR5JyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIGQgKyAxLCAxOSwgMCksXHJcbiAgICAgICAgICAgIGVuZDogbmV3IERhdGUoeSwgbSwgZCArIDEsIDIyLCAzMCksXHJcbiAgICAgICAgICAgIGFsbERheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMGE2NWEnLCAvL1N1Y2Nlc3MgKGdyZWVuKVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMwMGE2NWEnIC8vU3VjY2VzcyAoZ3JlZW4pXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0aXRsZTogJ09wZW4gR29vZ2xlJyxcclxuICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKHksIG0sIDI4KSxcclxuICAgICAgICAgICAgZW5kOiBuZXcgRGF0ZSh5LCBtLCAyOSksXHJcbiAgICAgICAgICAgIHVybDogJy8vZ29vZ2xlLmNvbS8nLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2M4ZGJjJywgLy9QcmltYXJ5IChsaWdodC1ibHVlKVxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyMzYzhkYmMnIC8vUHJpbWFyeSAobGlnaHQtYmx1ZSlcclxuICAgICAgICB9XTtcclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEpRQ2xvdWRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0V29yZENsb3VkKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0V29yZENsb3VkKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4ualFDbG91ZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvL0NyZWF0ZSBhbiBhcnJheSBvZiB3b3JkIG9iamVjdHMsIGVhY2ggcmVwcmVzZW50aW5nIGEgd29yZCBpbiB0aGUgY2xvdWRcclxuICAgICAgICB2YXIgd29yZF9hcnJheSA9IFtcclxuICAgICAgICAgICAgeyB0ZXh0OiAnTG9yZW0nLCB3ZWlnaHQ6IDEzLCAvKmxpbms6ICdodHRwOi8vdGhlbWljb24uY28nKi8gfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnSXBzdW0nLCB3ZWlnaHQ6IDEwLjUgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnRG9sb3InLCB3ZWlnaHQ6IDkuNCB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdTaXQnLCB3ZWlnaHQ6IDggfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnQW1ldCcsIHdlaWdodDogNi4yIH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0NvbnNlY3RldHVyJywgd2VpZ2h0OiA1IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0FkaXBpc2NpbmcnLCB3ZWlnaHQ6IDUgfSxcclxuICAgICAgICAgICAgeyB0ZXh0OiAnU2l0Jywgd2VpZ2h0OiA4IH0sXHJcbiAgICAgICAgICAgIHsgdGV4dDogJ0FtZXQnLCB3ZWlnaHQ6IDYuMiB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdDb25zZWN0ZXR1cicsIHdlaWdodDogNSB9LFxyXG4gICAgICAgICAgICB7IHRleHQ6ICdBZGlwaXNjaW5nJywgd2VpZ2h0OiA1IH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAkKFwiI2pxY2xvdWRcIikualFDbG91ZCh3b3JkX2FycmF5LCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNDAsXHJcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxyXG4gICAgICAgICAgICBzdGVwczogN1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEN1c3RvbSBqUXVlcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0U2VhcmNoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0U2VhcmNoKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uc2xpZGVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKCEkLmZuLmNob3NlbikgcmV0dXJuO1xyXG4gICAgICAgIGlmICghJC5mbi5kYXRlcGlja2VyKSByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIEJPT1RTVFJBUCBTTElERVIgQ1RSTFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXVpLXNsaWRlcl0nKS5zbGlkZXIoKTtcclxuXHJcbiAgICAgICAgLy8gQ0hPU0VOXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgICAgICAgJCgnLmNob3Nlbi1zZWxlY3QnKS5jaG9zZW4oKTtcclxuXHJcbiAgICAgICAgLy8gREFURVRJTUVQSUNLRVJcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICAgICAgICAkKCcjZGF0ZXRpbWVwaWNrZXInKS5kYXRlcGlja2VyKHtcclxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICBpY29uczoge1xyXG4gICAgICAgICAgICAgICAgdGltZTogJ2ZhIGZhLWNsb2NrLW8nLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogJ2ZhIGZhLWNhbGVuZGFyJyxcclxuICAgICAgICAgICAgICAgIHVwOiAnZmEgZmEtY2hldnJvbi11cCcsXHJcbiAgICAgICAgICAgICAgICBkb3duOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiAnZmEgZmEtY2hldnJvbi1sZWZ0JyxcclxuICAgICAgICAgICAgICAgIG5leHQ6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcclxuICAgICAgICAgICAgICAgIHRvZGF5OiAnZmEgZmEtY3Jvc3NoYWlycycsXHJcbiAgICAgICAgICAgICAgICBjbGVhcjogJ2ZhIGZhLXRyYXNoJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLyoqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqIE1vZHVsZTogZ21hcC5qc1xyXG4gKiBJbml0IEdvb2dsZSBNYXAgcGx1Z2luXHJcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdEdvb2dsZU1hcHMpO1xyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIE1hcCBTdHlsZSBkZWZpbml0aW9uXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBHZXQgbW9yZSBzdHlsZXMgZnJvbSBodHRwOi8vc25henp5bWFwcy5jb20vc3R5bGUvMjkvbGlnaHQtbW9ub2Nocm9tZVxyXG4gICAgLy8gLSBKdXN0IHJlcGxhY2UgYW5kIGFzc2lnbiB0byAnTWFwU3R5bGVzJyB0aGUgbmV3IHN0eWxlIGFycmF5XHJcbiAgICB2YXIgTWFwU3R5bGVzID0gW3sgZmVhdHVyZVR5cGU6ICd3YXRlcicsIHN0eWxlcnM6IFt7IHZpc2liaWxpdHk6ICdvbicgfSwgeyBjb2xvcjogJyNiZGQxZjknIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdhbGwnLCBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyMzMzQxNjUnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdsYW5kc2NhcGUnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNlOWViZjEnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjYzVjNmM2JyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZC5hcnRlcmlhbCcsIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLCBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZmYnIH1dIH0sIHsgZmVhdHVyZVR5cGU6ICdyb2FkLmxvY2FsJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2ZmZicgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLCBlbGVtZW50VHlwZTogJ2dlb21ldHJ5Jywgc3R5bGVyczogW3sgY29sb3I6ICcjZDhkYmUwJyB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncG9pJywgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2NmZDVlMCcgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlJywgc3R5bGVyczogW3sgdmlzaWJpbGl0eTogJ29uJyB9LCB7IGxpZ2h0bmVzczogMzMgfV0gfSwgeyBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJywgZWxlbWVudFR5cGU6ICdsYWJlbHMnLCBzdHlsZXJzOiBbeyB2aXNpYmlsaXR5OiAnb24nIH0sIHsgbGlnaHRuZXNzOiAyMCB9XSB9LCB7IGZlYXR1cmVUeXBlOiAncm9hZCcsIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q4ZGJlMCcsIGxpZ2h0bmVzczogMjAgfV0gfV07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRHb29nbGVNYXBzKCkge1xyXG5cclxuICAgICAgICBpZiAoISQuZm4uZ01hcCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgbWFwU2VsZWN0b3IgPSAnW2RhdGEtZ21hcF0nO1xyXG4gICAgICAgIHZhciBnTWFwUmVmcyA9IFtdO1xyXG5cclxuICAgICAgICAkKG1hcFNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3NlcyA9ICR0aGlzLmRhdGEoJ2FkZHJlc3MnKSAmJiAkdGhpcy5kYXRhKCdhZGRyZXNzJykuc3BsaXQoJzsnKSxcclxuICAgICAgICAgICAgICAgIHRpdGxlcyA9ICR0aGlzLmRhdGEoJ3RpdGxlJykgJiYgJHRoaXMuZGF0YSgndGl0bGUnKS5zcGxpdCgnOycpLFxyXG4gICAgICAgICAgICAgICAgem9vbSA9ICR0aGlzLmRhdGEoJ3pvb20nKSB8fCAxNCxcclxuICAgICAgICAgICAgICAgIG1hcHR5cGUgPSAkdGhpcy5kYXRhKCdtYXB0eXBlJykgfHwgJ1JPQURNQVAnLCAvLyBvciAnVEVSUkFJTidcclxuICAgICAgICAgICAgICAgIG1hcmtlcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhZGRyZXNzZXMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGEgaW4gYWRkcmVzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGRyZXNzZXNbYV0gPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFya2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3Nlc1thXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6ICh0aXRsZXMgJiYgdGl0bGVzW2FdKSB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVwOiB0cnVlIC8qIEFsd2F5cyBwb3B1cCAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFuQ29udHJvbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZUNvbnRyb2w6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVydmlld01hcENvbnRyb2w6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXB0eXBlOiBtYXB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcnM6IG1hcmtlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgem9vbTogem9vbVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE1vcmUgb3B0aW9ucyBodHRwczovL2dpdGh1Yi5jb20vbWFyaW9lc3RyYWRhL2pRdWVyeS1nTWFwXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBnTWFwID0gJHRoaXMuZ01hcChvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmID0gZ01hcC5kYXRhKCdnTWFwLnJlZmVyZW5jZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2F2ZSBpbiB0aGUgbWFwIHJlZmVyZW5jZXMgbGlzdFxyXG4gICAgICAgICAgICAgICAgZ01hcFJlZnMucHVzaChyZWYpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgc3R5bGVzXHJcbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMuZGF0YSgnc3R5bGVkJykgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZWYuc2V0T3B0aW9ucyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogTWFwU3R5bGVzXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pOyAvL2VhY2hcclxuXHJcbiAgICB9XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvLyBDdXN0b20galF1ZXJ5XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgICQoaW5pdFZlY3Rvck1hcCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFZlY3Rvck1hcCgpIHtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKCdbZGF0YS12ZWN0b3ItbWFwXScpO1xyXG5cclxuICAgICAgICB2YXIgc2VyaWVzRGF0YSA9IHtcclxuICAgICAgICAgICAgJ0NBJzogMTExMDAsIC8vIENhbmFkYVxyXG4gICAgICAgICAgICAnREUnOiAyNTEwLCAvLyBHZXJtYW55XHJcbiAgICAgICAgICAgICdGUic6IDM3MTAsIC8vIEZyYW5jZVxyXG4gICAgICAgICAgICAnQVUnOiA1NzEwLCAvLyBBdXN0cmFsaWFcclxuICAgICAgICAgICAgJ0dCJzogODMxMCwgLy8gR3JlYXQgQnJpdGFpblxyXG4gICAgICAgICAgICAnUlUnOiA5MzEwLCAvLyBSdXNzaWFcclxuICAgICAgICAgICAgJ0JSJzogNjYxMCwgLy8gQnJhemlsXHJcbiAgICAgICAgICAgICdJTic6IDc4MTAsIC8vIEluZGlhXHJcbiAgICAgICAgICAgICdDTic6IDQzMTAsIC8vIENoaW5hXHJcbiAgICAgICAgICAgICdVUyc6IDgzOSwgLy8gVVNBXHJcbiAgICAgICAgICAgICdTQSc6IDQxMCAvLyBTYXVkaSBBcmFiaWFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgbWFya2Vyc0RhdGEgPSBbXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDEuOTAsIDEyLjQ1XSwgbmFtZTogJ1ZhdGljYW4gQ2l0eScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs0My43MywgNy40MV0sIG5hbWU6ICdNb25hY28nIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbLTAuNTIsIDE2Ni45M10sIG5hbWU6ICdOYXVydScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFstOC41MSwgMTc5LjIxXSwgbmFtZTogJ1R1dmFsdScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs3LjExLCAxNzEuMDZdLCBuYW1lOiAnTWFyc2hhbGwgSXNsYW5kcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxNy4zLCAtNjIuNzNdLCBuYW1lOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzMuMiwgNzMuMjJdLCBuYW1lOiAnTWFsZGl2ZXMnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbMzUuODgsIDE0LjVdLCBuYW1lOiAnTWFsdGEnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDEuMCwgLTcxLjA2XSwgbmFtZTogJ05ldyBFbmdsYW5kJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzEyLjA1LCAtNjEuNzVdLCBuYW1lOiAnR3JlbmFkYScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFsxMy4xNiwgLTU5LjU1XSwgbmFtZTogJ0JhcmJhZG9zJyB9LFxyXG4gICAgICAgICAgICB7IGxhdExuZzogWzE3LjExLCAtNjEuODVdLCBuYW1lOiAnQW50aWd1YSBhbmQgQmFyYnVkYScgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFstNC42MSwgNTUuNDVdLCBuYW1lOiAnU2V5Y2hlbGxlcycgfSxcclxuICAgICAgICAgICAgeyBsYXRMbmc6IFs3LjM1LCAxMzQuNDZdLCBuYW1lOiAnUGFsYXUnIH0sXHJcbiAgICAgICAgICAgIHsgbGF0TG5nOiBbNDIuNSwgMS41MV0sIG5hbWU6ICdBbmRvcnJhJyB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbmV3IFZlY3Rvck1hcChlbGVtZW50LCBzZXJpZXNEYXRhLCBtYXJrZXJzRGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxufSkod2luZG93LCBkb2N1bWVudCwgd2luZG93LmpRdWVyeSk7IiwiLy8gSlZFQ1RPUiBNQVBcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAvLyBBbGxvdyBHbG9iYWwgYWNjZXNzXHJcbiAgICB3aW5kb3cuVmVjdG9yTWFwID0gVmVjdG9yTWFwXHJcblxyXG4gICAgdmFyIGRlZmF1bHRDb2xvcnMgPSB7XHJcbiAgICAgICAgbWFya2VyQ29sb3I6ICcjMjNiN2U1JywgLy8gdGhlIG1hcmtlciBwb2ludHNcclxuICAgICAgICBiZ0NvbG9yOiAndHJhbnNwYXJlbnQnLCAvLyB0aGUgYmFja2dyb3VuZFxyXG4gICAgICAgIHNjYWxlQ29sb3JzOiBbJyM4NzhjOWEnXSwgLy8gdGhlIGNvbG9yIG9mIHRoZSByZWdpb24gaW4gdGhlIHNlcmllXHJcbiAgICAgICAgcmVnaW9uRmlsbDogJyNiYmJlYzYnIC8vIHRoZSBiYXNlIHJlZ2lvbiBjb2xvclxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBWZWN0b3JNYXAoZWxlbWVudCwgc2VyaWVzRGF0YSwgbWFya2Vyc0RhdGEpIHtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Lmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgYXR0cnMgPSBlbGVtZW50LmRhdGEoKSxcclxuICAgICAgICAgICAgbWFwSGVpZ2h0ID0gYXR0cnMuaGVpZ2h0IHx8ICczMDAnLFxyXG4gICAgICAgICAgICBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgbWFya2VyQ29sb3I6IGF0dHJzLm1hcmtlckNvbG9yIHx8IGRlZmF1bHRDb2xvcnMubWFya2VyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBiZ0NvbG9yOiBhdHRycy5iZ0NvbG9yIHx8IGRlZmF1bHRDb2xvcnMuYmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHNjYWxlOiBhdHRycy5zY2FsZSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVDb2xvcnM6IGF0dHJzLnNjYWxlQ29sb3JzIHx8IGRlZmF1bHRDb2xvcnMuc2NhbGVDb2xvcnMsXHJcbiAgICAgICAgICAgICAgICByZWdpb25GaWxsOiBhdHRycy5yZWdpb25GaWxsIHx8IGRlZmF1bHRDb2xvcnMucmVnaW9uRmlsbCxcclxuICAgICAgICAgICAgICAgIG1hcE5hbWU6IGF0dHJzLm1hcE5hbWUgfHwgJ3dvcmxkX21pbGxfZW4nXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGVsZW1lbnQuY3NzKCdoZWlnaHQnLCBtYXBIZWlnaHQpO1xyXG5cclxuICAgICAgICBpbml0KGVsZW1lbnQsIG9wdGlvbnMsIHNlcmllc0RhdGEsIG1hcmtlcnNEYXRhKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgkZWxlbWVudCwgb3B0cywgc2VyaWVzLCBtYXJrZXJzKSB7XHJcblxyXG4gICAgICAgICAgICAkZWxlbWVudC52ZWN0b3JNYXAoe1xyXG4gICAgICAgICAgICAgICAgbWFwOiBvcHRzLm1hcE5hbWUsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG9wdHMuYmdDb2xvcixcclxuICAgICAgICAgICAgICAgIHpvb21NaW46IDEsXHJcbiAgICAgICAgICAgICAgICB6b29tTWF4OiA4LFxyXG4gICAgICAgICAgICAgICAgem9vbU9uU2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlZ2lvblN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlsbCc6IG9wdHMucmVnaW9uRmlsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpbGwtb3BhY2l0eSc6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2UnOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2Utd2lkdGgnOiAxLjUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdHJva2Utb3BhY2l0eSc6IDFcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaWxsLW9wYWNpdHknOiAwLjhcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICdibHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRIb3Zlcjoge31cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb2N1c09uOiB7IHg6IDAuNCwgeTogMC42LCBzY2FsZTogb3B0cy5zY2FsZSB9LFxyXG4gICAgICAgICAgICAgICAgbWFya2VyU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IG9wdHMubWFya2VyQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZTogb3B0cy5tYXJrZXJDb2xvclxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJlZ2lvbkxhYmVsU2hvdzogZnVuY3Rpb24oZSwgZWwsIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VyaWVzICYmIHNlcmllc1tjb2RlXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaHRtbChlbC5odG1sKCkgKyAnOiAnICsgc2VyaWVzW2NvZGVdICsgJyB2aXNpdG9ycycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1hcmtlcnM6IG1hcmtlcnMsXHJcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICByZWdpb25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IHNlcmllcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IG9wdHMuc2NhbGVDb2xvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbGl6ZUZ1bmN0aW9uOiAncG9seW5vbWlhbCdcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gLy8gZW5kIGluaXRcclxuICAgIH07XHJcblxyXG59KSh3aW5kb3csIGRvY3VtZW50LCB3aW5kb3cualF1ZXJ5KTsiLCIvKipcclxuICogVXNlZCBmb3IgdXNlciBwYWdlc1xyXG4gKiBMb2dpbiBhbmQgUmVnaXN0ZXJcclxuICovXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXRQYXJzbGV5Rm9yUGFnZXMpXHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFBhcnNsZXlGb3JQYWdlcygpIHtcclxuXHJcbiAgICAgICAgLy8gUGFyc2xleSBvcHRpb25zIHNldHVwIGZvciBib290c3RyYXAgdmFsaWRhdGlvbiBjbGFzc2VzXHJcbiAgICAgICAgdmFyIHBhcnNsZXlPcHRpb25zID0ge1xyXG4gICAgICAgICAgICBlcnJvckNsYXNzOiAnaXMtaW52YWxpZCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NDbGFzczogJ2lzLXZhbGlkJyxcclxuICAgICAgICAgICAgY2xhc3NIYW5kbGVyOiBmdW5jdGlvbihQYXJzbGV5RmllbGQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuZm9ybS1ncm91cCcpLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmxlbmd0aCkgLy8gc3VwcG9ydCBjdXN0b20gY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICBlbCA9IFBhcnNsZXlGaWVsZC4kZWxlbWVudC5wYXJlbnRzKCcuYy1jaGVja2JveCcpLmZpbmQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yc0NvbnRhaW5lcjogZnVuY3Rpb24oUGFyc2xleUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGFyc2xleUZpZWxkLiRlbGVtZW50LnBhcmVudHMoJy5mb3JtLWdyb3VwJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yc1dyYXBwZXI6ICc8ZGl2IGNsYXNzPVwidGV4dC1oZWxwXCI+JyxcclxuICAgICAgICAgICAgZXJyb3JUZW1wbGF0ZTogJzxkaXY+PC9kaXY+J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIExvZ2luIGZvcm0gdmFsaWRhdGlvbiB3aXRoIFBhcnNsZXlcclxuICAgICAgICB2YXIgbG9naW5Gb3JtID0gJChcIiNsb2dpbkZvcm1cIik7XHJcbiAgICAgICAgaWYgKGxvZ2luRm9ybS5sZW5ndGgpXHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5wYXJzbGV5KHBhcnNsZXlPcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgZm9ybSB2YWxpZGF0aW9uIHdpdGggUGFyc2xleVxyXG4gICAgICAgIHZhciByZWdpc3RlckZvcm0gPSAkKFwiI3JlZ2lzdGVyRm9ybVwiKTtcclxuICAgICAgICBpZiAocmVnaXN0ZXJGb3JtLmxlbmd0aClcclxuICAgICAgICAgICAgcmVnaXN0ZXJGb3JtLnBhcnNsZXkocGFyc2xleU9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEJPT1RHUklEXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Qm9vdGdyaWQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRCb290Z3JpZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLmJvb3RncmlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICQoJyNib290Z3JpZC1iYXNpYycpLmJvb3RncmlkKHtcclxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZW1wbGF0ZXMgZm9yIEJTNFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uOiAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwie3tjdHgudGV4dH19XCI+e3tjdHguY29udGVudH19PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRyb3BEb3duOiAnPGRpdiBjbGFzcz1cInt7Y3NzLmRyb3BEb3duTWVudX19XCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtbm9jYXJldFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PHNwYW4gY2xhc3M9XCJ7e2Nzcy5kcm9wRG93bk1lbnVUZXh0fX1cIj57e2N0eC5jb250ZW50fX08L3NwYW4+PC9idXR0b24+PHVsIGNsYXNzPVwie3tjc3MuZHJvcERvd25NZW51SXRlbXN9fVwiIHJvbGU9XCJtZW51XCI+PC91bD48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uRHJvcERvd25JdGVtOiAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxhIGhyZWY9XCJcIiBkYXRhLWFjdGlvbj1cInt7Y3R4LmFjdGlvbn19XCIgY2xhc3M9XCJkcm9wZG93bi1saW5rIHt7Y3NzLmRyb3BEb3duSXRlbUJ1dHRvbn19XCI+e3tjdHgudGV4dH19PC9hPjwvbGk+JyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRyb3BEb3duQ2hlY2tib3hJdGVtOiAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxsYWJlbCBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gcC0wXCI+PGlucHV0IG5hbWU9XCJ7e2N0eC5uYW1lfX1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIjFcIiBjbGFzcz1cInt7Y3NzLmRyb3BEb3duSXRlbUNoZWNrYm94fX1cIiB7e2N0eC5jaGVja2VkfX0gLz4ge3tjdHgubGFiZWx9fTwvbGFiZWw+PC9saT4nLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkl0ZW06ICc8bGkgY2xhc3M9XCJwYWdlLWl0ZW0ge3tjdHguY3NzfX1cIj48YSBocmVmPVwiXCIgZGF0YS1wYWdlPVwie3tjdHgucGFnZX19XCIgY2xhc3M9XCJwYWdlLWxpbmsge3tjc3MucGFnaW5hdGlvbkJ1dHRvbn19XCI+e3tjdHgudGV4dH19PC9hPjwvbGk+JyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcjYm9vdGdyaWQtc2VsZWN0aW9uJykuYm9vdGdyaWQoe1xyXG4gICAgICAgICAgICBzZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIG11bHRpU2VsZWN0OiB0cnVlLFxyXG4gICAgICAgICAgICByb3dTZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIGtlZXBTZWxlY3Rpb246IHRydWUsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0OlxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2hlY2tib3ggYy1jaGVja2JveFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGNsYXNzPVwibWItMFwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwie3tjdHgudHlwZX19XCIgY2xhc3M9XCJ7e2Nzcy5zZWxlY3RCb3h9fVwiIHZhbHVlPVwie3tjdHgudmFsdWV9fVwiIHt7Y3R4LmNoZWNrZWR9fT4nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImZhIGZhLWNoZWNrXCI+PC9zcGFuPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9sYWJlbD4nK1xyXG4gICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgLy8gdGVtcGxhdGVzIGZvciBCUzRcclxuICAgICAgICAgICAgICAgIGFjdGlvbkJ1dHRvbjogJzxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cInt7Y3R4LnRleHR9fVwiPnt7Y3R4LmNvbnRlbnR9fTwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25Ecm9wRG93bjogJzxkaXYgY2xhc3M9XCJ7e2Nzcy5kcm9wRG93bk1lbnV9fVwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkcm9wZG93bi10b2dnbGUgZHJvcGRvd24tdG9nZ2xlLW5vY2FyZXRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiPjxzcGFuIGNsYXNzPVwie3tjc3MuZHJvcERvd25NZW51VGV4dH19XCI+e3tjdHguY29udGVudH19PC9zcGFuPjwvYnV0dG9uPjx1bCBjbGFzcz1cInt7Y3NzLmRyb3BEb3duTWVudUl0ZW1zfX1cIiByb2xlPVwibWVudVwiPjwvdWw+PC9kaXY+JyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRyb3BEb3duSXRlbTogJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj48YSBocmVmPVwiXCIgZGF0YS1hY3Rpb249XCJ7e2N0eC5hY3Rpb259fVwiIGNsYXNzPVwiZHJvcGRvd24tbGluayB7e2Nzcy5kcm9wRG93bkl0ZW1CdXR0b259fVwiPnt7Y3R4LnRleHR9fTwvYT48L2xpPicsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25Ecm9wRG93bkNoZWNrYm94SXRlbTogJzxsaSBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj48bGFiZWwgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHAtMFwiPjxpbnB1dCBuYW1lPVwie3tjdHgubmFtZX19XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIxXCIgY2xhc3M9XCJ7e2Nzcy5kcm9wRG93bkl0ZW1DaGVja2JveH19XCIge3tjdHguY2hlY2tlZH19IC8+IHt7Y3R4LmxhYmVsfX08L2xhYmVsPjwvbGk+JyxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JdGVtOiAnPGxpIGNsYXNzPVwicGFnZS1pdGVtIHt7Y3R4LmNzc319XCI+PGEgaHJlZj1cIlwiIGRhdGEtcGFnZT1cInt7Y3R4LnBhZ2V9fVwiIGNsYXNzPVwicGFnZS1saW5rIHt7Y3NzLnBhZ2luYXRpb25CdXR0b259fVwiPnt7Y3R4LnRleHR9fTwvYT48L2xpPicsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGdyaWQgPSAkKCcjYm9vdGdyaWQtY29tbWFuZCcpLmJvb3RncmlkKHtcclxuICAgICAgICAgICAgZm9ybWF0dGVyczoge1xyXG4gICAgICAgICAgICAgICAgY29tbWFuZHM6IGZ1bmN0aW9uKGNvbHVtbiwgcm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm8gbXItMiBjb21tYW5kLWVkaXRcIiBkYXRhLXJvdy1pZD1cIicgKyByb3cuaWQgKyAnXCI+PGVtIGNsYXNzPVwiZmEgZmEtZWRpdCBmYS1md1wiPjwvZW0+PC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRhbmdlciBjb21tYW5kLWRlbGV0ZVwiIGRhdGEtcm93LWlkPVwiJyArIHJvdy5pZCArICdcIj48ZW0gY2xhc3M9XCJmYSBmYS10cmFzaCBmYS1md1wiPjwvZW0+PC9idXR0b24+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0ZW1wbGF0ZXMgZm9yIEJTNFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uQnV0dG9uOiAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwie3tjdHgudGV4dH19XCI+e3tjdHguY29udGVudH19PC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRyb3BEb3duOiAnPGRpdiBjbGFzcz1cInt7Y3NzLmRyb3BEb3duTWVudX19XCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZSBkcm9wZG93bi10b2dnbGUtbm9jYXJldFwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCI+PHNwYW4gY2xhc3M9XCJ7e2Nzcy5kcm9wRG93bk1lbnVUZXh0fX1cIj57e2N0eC5jb250ZW50fX08L3NwYW4+PC9idXR0b24+PHVsIGNsYXNzPVwie3tjc3MuZHJvcERvd25NZW51SXRlbXN9fVwiIHJvbGU9XCJtZW51XCI+PC91bD48L2Rpdj4nLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uRHJvcERvd25JdGVtOiAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxhIGhyZWY9XCJcIiBkYXRhLWFjdGlvbj1cInt7Y3R4LmFjdGlvbn19XCIgY2xhc3M9XCJkcm9wZG93bi1saW5rIHt7Y3NzLmRyb3BEb3duSXRlbUJ1dHRvbn19XCI+e3tjdHgudGV4dH19PC9hPjwvbGk+JyxcclxuICAgICAgICAgICAgICAgIGFjdGlvbkRyb3BEb3duQ2hlY2tib3hJdGVtOiAnPGxpIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPjxsYWJlbCBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gcC0wXCI+PGlucHV0IG5hbWU9XCJ7e2N0eC5uYW1lfX1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cIjFcIiBjbGFzcz1cInt7Y3NzLmRyb3BEb3duSXRlbUNoZWNrYm94fX1cIiB7e2N0eC5jaGVja2VkfX0gLz4ge3tjdHgubGFiZWx9fTwvbGFiZWw+PC9saT4nLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbkl0ZW06ICc8bGkgY2xhc3M9XCJwYWdlLWl0ZW0ge3tjdHguY3NzfX1cIj48YSBocmVmPVwiXCIgZGF0YS1wYWdlPVwie3tjdHgucGFnZX19XCIgY2xhc3M9XCJwYWdlLWxpbmsge3tjc3MucGFnaW5hdGlvbkJ1dHRvbn19XCI+e3tjdHgudGV4dH19PC9hPjwvbGk+JyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLm9uKCdsb2FkZWQucnMuanF1ZXJ5LmJvb3RncmlkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIC8qIEV4ZWN1dGVzIGFmdGVyIGRhdGEgaXMgbG9hZGVkIGFuZCByZW5kZXJlZCAqL1xyXG4gICAgICAgICAgICBncmlkLmZpbmQoJy5jb21tYW5kLWVkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgcHJlc3NlZCBlZGl0IG9uIHJvdzogJyArICQodGhpcykuZGF0YSgncm93LWlkJykpO1xyXG4gICAgICAgICAgICB9KS5lbmQoKS5maW5kKCcuY29tbWFuZC1kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgcHJlc3NlZCBkZWxldGUgb24gcm93OiAnICsgJCh0aGlzKS5kYXRhKCdyb3ctaWQnKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIERBVEFUQUJMRVNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbihmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCAkLCB1bmRlZmluZWQpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICAkKGluaXREYXRhdGFibGVzKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0RGF0YXRhYmxlcygpIHtcclxuXHJcbiAgICAgICAgaWYgKCEkLmZuLkRhdGFUYWJsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBaZXJvIGNvbmZpZ3VyYXRpb25cclxuXHJcbiAgICAgICAgJCgnI2RhdGF0YWJsZTEnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAncGFnaW5nJzogdHJ1ZSwgLy8gVGFibGUgcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAnb3JkZXJpbmcnOiB0cnVlLCAvLyBDb2x1bW4gb3JkZXJpbmdcclxuICAgICAgICAgICAgJ2luZm8nOiB0cnVlLCAvLyBCb3R0b20gbGVmdCBzdGF0dXMgdGV4dFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBUZXh0IHRyYW5zbGF0aW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgLy8gTm90ZSB0aGUgcmVxdWlyZWQga2V5d29yZHMgYmV0d2VlbiB1bmRlcnNjb3JlcyAoZS5nIF9NRU5VXylcclxuICAgICAgICAgICAgb0xhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICBzU2VhcmNoOiAnPGVtIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvZW0+JyxcclxuICAgICAgICAgICAgICAgIHNMZW5ndGhNZW51OiAnX01FTlVfIHJlY29yZHMgcGVyIHBhZ2UnLFxyXG4gICAgICAgICAgICAgICAgaW5mbzogJ1Nob3dpbmcgcGFnZSBfUEFHRV8gb2YgX1BBR0VTXycsXHJcbiAgICAgICAgICAgICAgICB6ZXJvUmVjb3JkczogJ05vdGhpbmcgZm91bmQgLSBzb3JyeScsXHJcbiAgICAgICAgICAgICAgICBpbmZvRW1wdHk6ICdObyByZWNvcmRzIGF2YWlsYWJsZScsXHJcbiAgICAgICAgICAgICAgICBpbmZvRmlsdGVyZWQ6ICcoZmlsdGVyZWQgZnJvbSBfTUFYXyB0b3RhbCByZWNvcmRzKScsXHJcbiAgICAgICAgICAgICAgICBvUGFnaW5hdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBzTmV4dDogJzxlbSBjbGFzcz1cImZhIGZhLWNhcmV0LXJpZ2h0XCI+PC9lbT4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNQcmV2aW91czogJzxlbSBjbGFzcz1cImZhIGZhLWNhcmV0LWxlZnRcIj48L2VtPidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gRmlsdGVyXHJcblxyXG4gICAgICAgICQoJyNkYXRhdGFibGUyJykuRGF0YVRhYmxlKHtcclxuICAgICAgICAgICAgJ3BhZ2luZyc6IHRydWUsIC8vIFRhYmxlIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgJ29yZGVyaW5nJzogdHJ1ZSwgLy8gQ29sdW1uIG9yZGVyaW5nXHJcbiAgICAgICAgICAgICdpbmZvJzogdHJ1ZSwgLy8gQm90dG9tIGxlZnQgc3RhdHVzIHRleHRcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gVGV4dCB0cmFuc2xhdGlvbiBvcHRpb25zXHJcbiAgICAgICAgICAgIC8vIE5vdGUgdGhlIHJlcXVpcmVkIGtleXdvcmRzIGJldHdlZW4gdW5kZXJzY29yZXMgKGUuZyBfTUVOVV8pXHJcbiAgICAgICAgICAgIG9MYW5ndWFnZToge1xyXG4gICAgICAgICAgICAgICAgc1NlYXJjaDogJ1NlYXJjaCBhbGwgY29sdW1uczonLFxyXG4gICAgICAgICAgICAgICAgc0xlbmd0aE1lbnU6ICdfTUVOVV8gcmVjb3JkcyBwZXIgcGFnZScsXHJcbiAgICAgICAgICAgICAgICBpbmZvOiAnU2hvd2luZyBwYWdlIF9QQUdFXyBvZiBfUEFHRVNfJyxcclxuICAgICAgICAgICAgICAgIHplcm9SZWNvcmRzOiAnTm90aGluZyBmb3VuZCAtIHNvcnJ5JyxcclxuICAgICAgICAgICAgICAgIGluZm9FbXB0eTogJ05vIHJlY29yZHMgYXZhaWxhYmxlJyxcclxuICAgICAgICAgICAgICAgIGluZm9GaWx0ZXJlZDogJyhmaWx0ZXJlZCBmcm9tIF9NQVhfIHRvdGFsIHJlY29yZHMpJyxcclxuICAgICAgICAgICAgICAgIG9QYWdpbmF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNOZXh0OiAnPGVtIGNsYXNzPVwiZmEgZmEtY2FyZXQtcmlnaHRcIj48L2VtPicsXHJcbiAgICAgICAgICAgICAgICAgICAgc1ByZXZpb3VzOiAnPGVtIGNsYXNzPVwiZmEgZmEtY2FyZXQtbGVmdFwiPjwvZW0+J1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBEYXRhdGFibGUgQnV0dG9ucyBzZXR1cFxyXG4gICAgICAgICAgICBkb206ICdCZnJ0aXAnLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7IGV4dGVuZDogJ2NvcHknLCBjbGFzc05hbWU6ICdidG4taW5mbycgfSxcclxuICAgICAgICAgICAgICAgIHsgZXh0ZW5kOiAnY3N2JywgY2xhc3NOYW1lOiAnYnRuLWluZm8nIH0sXHJcbiAgICAgICAgICAgICAgICB7IGV4dGVuZDogJ2V4Y2VsJywgY2xhc3NOYW1lOiAnYnRuLWluZm8nLCB0aXRsZTogJ1hMUy1GaWxlJyB9LFxyXG4gICAgICAgICAgICAgICAgeyBleHRlbmQ6ICdwZGYnLCBjbGFzc05hbWU6ICdidG4taW5mbycsIHRpdGxlOiAkKCd0aXRsZScpLnRleHQoKSB9LFxyXG4gICAgICAgICAgICAgICAgeyBleHRlbmQ6ICdwcmludCcsIGNsYXNzTmFtZTogJ2J0bi1pbmZvJyB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJCgnI2RhdGF0YWJsZTMnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgICAgICAncGFnaW5nJzogdHJ1ZSwgLy8gVGFibGUgcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAnb3JkZXJpbmcnOiB0cnVlLCAvLyBDb2x1bW4gb3JkZXJpbmdcclxuICAgICAgICAgICAgJ2luZm8nOiB0cnVlLCAvLyBCb3R0b20gbGVmdCBzdGF0dXMgdGV4dFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyBUZXh0IHRyYW5zbGF0aW9uIG9wdGlvbnNcclxuICAgICAgICAgICAgLy8gTm90ZSB0aGUgcmVxdWlyZWQga2V5d29yZHMgYmV0d2VlbiB1bmRlcnNjb3JlcyAoZS5nIF9NRU5VXylcclxuICAgICAgICAgICAgb0xhbmd1YWdlOiB7XHJcbiAgICAgICAgICAgICAgICBzU2VhcmNoOiAnU2VhcmNoIGFsbCBjb2x1bW5zOicsXHJcbiAgICAgICAgICAgICAgICBzTGVuZ3RoTWVudTogJ19NRU5VXyByZWNvcmRzIHBlciBwYWdlJyxcclxuICAgICAgICAgICAgICAgIGluZm86ICdTaG93aW5nIHBhZ2UgX1BBR0VfIG9mIF9QQUdFU18nLFxyXG4gICAgICAgICAgICAgICAgemVyb1JlY29yZHM6ICdOb3RoaW5nIGZvdW5kIC0gc29ycnknLFxyXG4gICAgICAgICAgICAgICAgaW5mb0VtcHR5OiAnTm8gcmVjb3JkcyBhdmFpbGFibGUnLFxyXG4gICAgICAgICAgICAgICAgaW5mb0ZpbHRlcmVkOiAnKGZpbHRlcmVkIGZyb20gX01BWF8gdG90YWwgcmVjb3JkcyknLFxyXG4gICAgICAgICAgICAgICAgb1BhZ2luYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc05leHQ6ICc8ZW0gY2xhc3M9XCJmYSBmYS1jYXJldC1yaWdodFwiPjwvZW0+JyxcclxuICAgICAgICAgICAgICAgICAgICBzUHJldmlvdXM6ICc8ZW0gY2xhc3M9XCJmYSBmYS1jYXJldC1sZWZ0XCI+PC9lbT4nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIERhdGF0YWJsZSBrZXkgc2V0dXBcclxuICAgICAgICAgICAga2V5czogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyIsIi8vIEN1c3RvbSBqUXVlcnlcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgJCwgdW5kZWZpbmVkKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJChpbml0Q3VzdG9tKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q3VzdG9tKCkge1xyXG5cclxuICAgICAgICAvLyBjdXN0b20gY29kZVxyXG5cclxuICAgIH1cclxuXHJcbn0pKHdpbmRvdywgZG9jdW1lbnQsIHdpbmRvdy5qUXVlcnkpOyJdfQ==
