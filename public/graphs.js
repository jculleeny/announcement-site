const ctx = document.getElementById( 'myChart' ).getContext( '2d' );

function updateChart() {
    myChart.data.datasets[0].data = twinData;
    myChart.update();
}

let bbCount = 0;
let bgCount = 0;
let ggCount = 0;
let twinData = [ bbCount, bgCount, ggCount ];
console.log( twinData );

const getData = async () => {
    const api_url = 'http://localhost:3000/form';
    const response = await fetch( api_url );
    const json = await response.json();

    const bb = 'boy-boy';
    const bg = 'boy-girl';
    const gg = 'girl-girl';



    for ( let i = 0; i < json.length; i++ ) {
        //console.log( json[i].genders );
        if ( json[i].genders === bb ) {
            bbCount++;
            //console.log( 'bb ' + bbCount );
        } else if ( json[i].genders === bg ) {
            bgCount++;
            //console.log( 'bg ' + bgCount );
        } else if ( json[i].genders === gg ) {
            ggCount++;
            //console.log( 'gg ' + ggCount );
        };
    };
};
//getData();

( async () => {
    try {
        return getData();
    } catch( err ) {
        console.log( err );
    }
})()

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Boy and Boy', 'Boy and Girl', 'Girl and Girl'],
        datasets: [
            {
                label: 'Boo',
                backgroundColor: [ '#e67e22', '#16a085', '#2980b9' ],
                data: twinData
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


updateChart();