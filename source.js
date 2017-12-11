$(document).ready(function(){
    $('select').material_select();

    $('.classes').children().each(function() {
        $(this).on('keyup', function() {
            if ($(this).data('c_val') != $(this).val()) {
                alert('value changed!');
                //do other stuff
            }
            $(this).data('c_val', $(this).val());
        }).data('c_val', $(this).val());

            //totalGPA += parseFloat(this.value);
            //$(".output").html("<p>Total GPA: " + totalGPA + "</p>")
    });

});

var totalGPA = 0;

function addClass()
{
    id++;
}

function convertGPA(letter)
{
    if (letter == "A")
        return 4;
    if (letter == "A-")
        return 3.7;
    if (letter == "B+")
        return 3.3;
    if (letter == "B")
        return 3;
    if (letter == "B-")
        return 2.7;
    if (letter == "C+")
        return 2.3;
    if (letter == "C")
        return 2;
    if (letter == "C-")
        return 1.7;
    if (letter == "D+")
        return 1.3;
    if (letter == "D")
        return 1;
    if (letter == "D-")
        return 0.7;
    if (letter == "E")
        return 0;
}

function calculateGPA()
{
    var classes = [], hours = [], hourTotal = 0;
    $( ".Class" ).each(function() {
        if ($(this).val() != "") {
            classes.push($(this).val())
            //alert("fff" + $(this).val() + "fff");
        }
    });

    $( ".Hours" ).each(function() {
        if ($(this).val() != "") {
            hours.push($( this ).val());
            hourTotal += parseFloat($( this ).val());
            //alert($( this ).val());
        }
    });

    var gpaTotal = 0;

    for (var i = 0; i < classes.length; i++)
        gpaTotal += classes[i] * hours[i];

    gpaTotal /= hourTotal;
    $(".output").text(gpaTotal);
}