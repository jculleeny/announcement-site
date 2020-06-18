const CHART = document.getElementById( 'myChart' );

let myDoughnutChart = new Chart( CHART, {
    type: 'pie',
    data: {
        labels: [ 'Boy & Boy', 'Boy & Girl', 'Girl & Girl' ],
        datasets: [{
            label: 'Sexes',
            data: [ 5, 12, 7 ],
            backgroundColor: [ 'blue', 'red', 'yellow' ]
        }]
    }
})