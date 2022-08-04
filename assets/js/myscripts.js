const today = moment().format('LLLL');
$("#currentDay").html(`Today is ${today}`);


$(document).ready(function () {

    $(".saveBtn").on('click', function () {
        let time = $(this).parent(".time-block").attr("id");
        let activity = $(this).siblings(".description").val();
        localStorage.setItem(time, activity);
    });


    $(".description").each(function () {
        $(".deleteBtn").on('click', function () {
            let time = $(this).parent(".time-block").attr("id");
            let activity = $(this).siblings(".description").val();
            localStorage.removeItem(time, activity);
            $(".description").val('');

        })
    });

    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
    $("#20 .description").val(localStorage.getItem("20"));


    function CheckTimeBlock() {
        const recentTime = moment().hour();
        $(".time-block").each(function () {
            const blockTime = $(this).attr("id");

            if (blockTime < recentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (blockTime == recentTime) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }

            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    };

    CheckTimeBlock();

});

