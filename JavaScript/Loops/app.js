for(let i = 0; i <10; i++){
    console.log(i);
}

const seatingChart = [["James", "Alice", "Cooper"], ["Ronnie", "Max", "Tommy"], ["Holly", "Emily", "Brad"]];

for(let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    for(let j = 0; j < row.length; j++){
        console.log(row[j]);
    }
}