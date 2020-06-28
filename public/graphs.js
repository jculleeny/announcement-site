const ctx = document.getElementById( 'myChart' ).getContext( '2d' );

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Boy and Boy', 'Boy and Girl', 'Girl and Girl'],
        datasets: [
            {
                label: 'Boo',
                backgroundColor: [ '#e67e22', '#16a085', '#2980b9' ],
                data: [ 10, 20, 30 ]
            }
        ]
    },
    options: {
        responsive: false,
        rotation: Math.PI,
        circumference: 1*Math.PI,
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
});

// const bb = 'Boy and Boy';
// const bg = 'Boy and Girl';
// const gg = 'Girl and Girl';