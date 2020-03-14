    // random guess model
    // rom: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
    //google.load('visualization', '1', { 'packages': ['corechart'] });
    google.charts.load('current', { 'packages': ['corechart'] });

    var table = document.getElementById("class_table");
    var row_count = table.rows.length;
    // console.log(row_count);
    var num_vampire = 0;
    var num_human = row_count - 1;
    var sel = document.getElementById('select_logic');
    var index_value = sel.options[sel.selectedIndex].value;

    // prepare pie chart
    $(document).ready(function() {
        //google.charts.load('current', {
        //'packages': ['corechart']
        //});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(
            function() {
                drawChart();
            });
        $("#pie_div").load("", function() {
            var chart;
            var data;
            var options;
            // Callback that creates and populates a data table,
            // instantiates the pie chart, passes in the data and
            // draws it.

            function drawChart() {

                // Create the data table.
                data = new google.visualization.DataTable();
                data.addColumn('string', 'Element');
                data.addColumn('number', 'Number');
                data.addRows([
                    ['Human', num_human],
                    ['Vampire', num_vampire]
                ]);
                // Set chart options
                options = {
                    'title': 'How many vampires in the class?',
                    'width': 400,
                    'height': 300
                };

                // Instantiate and draw our chart, passing in some options.
                chart = new google.visualization.PieChart(document.getElementById('pie_div'));
                chart.draw(data, options);
            }
        });
    });

    // dynamic select dropdown
    function change_logic() {
        if (index_value == 'random_logic') {
            vampire_rand();
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //$("select").change(function())



    //random guess model
    function vampire_rand() {
        // change icon
        if (num_human > 2) {
            var student_id = getRandomInt(1, row_count - 1);
            // create student id string based on randomly generated int
            var student_id_str = 'student_' + student_id.toString() + "_img";
            document.getElementById(student_id_str).src = "src/vampire.jpg";
            num_human -= 1;
            num_vampire += 1;
        } else {
            window.alert("No more random guess.");
            //reset the icon to human
            for (i = 1; i < row_count; i++) {
                var student_id_str = 'student_' + i + '_img';
                document.getElementById(student_id_str).src = 'src/human.png';
                num_human = row_count;
                num_vampire = 0;
            }
        }
    }





    function convert_vampire() {
        // var magic
        if (num_human > 2) {
            //num_vampire += 1;
            //num_human -= 1;
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