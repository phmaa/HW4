// random guess model
// rom: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

var num_vampire = 0;
var num_human = 5;
var table = document.getElementById("class_table");
console.log(num_human);
var row_count = table.rows.length;
console.log(row_count);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vampire_rand() {
    // change icon
    if (num_human > 1) {
        var student_id = getRandomInt(1, 5);
        // create student id string based on randomly generated int
        var student_id_str = 'student_' + student_id.toString() + "_img";
        document.getElementById(student_id_str).src = "src/vampire.jpg";
        num_human -= 1;
        num_vampire += 1;
    } else {
        window.alert("Only one human left. No more random guess.");
    }

}


function convert_vampire() {
    // var magic
    if (num_vampire == 1) {
        window.alert("Only one vampire left. No more conversion.");
    } else if (num_vampire == 2) {
        window.alert("Only two vampires left. Mercy please.");
        num_vampire -= 1; //num_vampire = num_vampire -1;
        num_human += 1;
        data.removeRow(1);
        data.removeRow(0);
        data.insertRows(0, [
            ['Human', num_human]
        ]);
        data.insertRows(1, [
            ['Vampire', num_vampire]
        ]);
        chart.draw(data, options);
    } else {
        num_vampire -= 1;
        num_human += 1;
        data.removeRow(1);
        data.removeRow(0);
        data.insertRows(0, [
            ['Human', num_human]
        ]);
        data.insertRows(1, [
            ['Vampire', num_vampire]
        ]);
        chart.draw(data, options);
    }
}