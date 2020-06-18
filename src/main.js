const CHART = document.getElementById( 'myChart' );

let myDoughnutChart = new Chart( CHART, {
    type: 'doughnut',
    data: {
        labels: [ 'Boy & Boy', 'Boy & Girl', 'Girl & Girl' ],
        datasets: [{
            label: 'Sexes',
            data: [ 5, 12, 7 ],
            backgroundColor: [ '#e7305b', '#9bdeac', '#e5cfe5' ]
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
})