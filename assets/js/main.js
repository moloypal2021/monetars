
$(".sidebox").hide();

$("#btn-close").click(function (){
    $(".child-2").css("width" , '0px');
    $(".test-box").removeClass('col-lg-10');
    $(".test-box").addClass('col-lg-8');
    $(".child-2").fadeOut();
    $(".child-1").css("width" , '100%');

    $(".sidebox").animate({
        width: 'toggle'
    });

    $(".sidebox-2").animate({
        width: 'toggle'
    });
});

$(".btn-mobile-open").click(function (){
    $(".child-2").fadeIn();
    $(".sidebox").animate({
        width: 'toggle'
    });
});

$(".btn-open").click(function (){
    $('.child-1').css("width",$('.child-1').width()-300+"px");
    $(".test-box").removeClass('col-lg-8');
    $(".test-box").addClass('col-lg-10');
    $(".child-2").css("width" , '320px');
    $(".child-2").fadeIn();

    $(".sidebox").animate({
        width: 'toggle'
    });

    $(".sidebox-2").animate({
        width: 'toggle'
    });
});
$(".btn-promo").click(function (){
    $("#promo-modal").modal("show");
});
$(".btn-login").click(function (){
    $("#register-modal").modal("hide");
    $("#forgot-modal").modal("hide");
    $("#login-modal").modal("show");
});

$(".btn-register").click(function (){
    $("#login-modal").modal("hide");
    $("#forgot-modal").modal("hide");
    $("#register-modal").modal("show");
});

$(".reset-btn").click(function (){
    $("#login-modal").modal("hide");
    $("#register-modal").modal("hide");
    $("#forgot-modal").modal("show");
});

$("#withdraw-btn").click(function (){
    $("#withdraw-modal").modal("show");
});


$("#daily-box").show();
$("#daily-head").show();
$(".up-body").show();
$("#monthly-box").hide();
$("#monthly-head").hide();
$(".support-box").hide();

$(".btn-general").click(function (){
    $(".support-btn").removeClass('active');
    $(this).addClass('active');
    $(".support-box").hide();
    $(".up-body").show();
});

$(".support-btn").click(function (){
    console.log('sdjkshdkj');
    $(".btn-general").removeClass('active');
    $(this).addClass('active');
    $(".up-body").hide();
    $(".support-box").show();
});

$("#btn-daily").click(function (){
    $("#btn-monthly").removeClass('active');
    $(this).addClass('active');
    $("#monthly-box").hide();
    $("#monthly-head").hide();
    $("#daily-box").show();
    $("#daily-head").show();
});

$("#btn-monthly").click(function (){
    $("#btn-daily").removeClass('active');
    $(this).addClass('active');
    $("#daily-box").hide();
    $("#daily-head").hide();
    $("#monthly-box").show();
    $("#monthly-head").show();
});

$("#btn-user").click(function (){
    $("#user-modal").modal("show");
});

$("#survey-btn").click(function (){
    $("#survey-modal").modal("show");
});

$(".lock").hide();
function getBalance(cwt)
{
    if ($(cwt).is(":checked"))
    {
        // $(".form-check-label").html('Lock Balance');
        $(".open").hide();
        $(".lock").fadeIn();
    }
    else
    {
        // $(".form-check-label").html('Balance');
        $(".lock").hide();
        $(".open").fadeIn();
    }
}

document.addEventListener("DOMContentLoaded", function(){
    $(".pre-loader").show();
    setTimeout(function (){
        $(".pre-loader").hide();
    }, 1000);
});

$(document).ready(function (){
    // top slider below header
    $('.slider').slick({
        arrows: false,
        infinite: true,
        autoPlay: false,
        dots: false,
        speed: 1000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 844,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

    // mobile splash screen slider
    $('.splash-slider').slick({
        arrows: false,
        infinite: true,
        autoPlay: true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    });

    // login form validation
    $("#login-form").validate({
        rules: {
            email : {
                required: true,
                email :true,
                maxlength: 50
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 12
            }
        },
        messages: {
            email: {
                email: 'Enter a valid email',
                required: 'Email is required',
                maxlength: 'Email length must not be longer than 50 characters'
            },
            password:{
                required: "Password is required",
                minlength: "Password must contain at least 8 characters",
                maxlength: "Password must contain at most 12 characters"
            },
        },
        submitHandler: function(form) {
            return true;
        }
    });

    // register form validation
    $("#register-form").validate({
        rules: {
            name : {
                required: true,
                maxlength: 50
            },
            email : {
                required: true,
                email :true,
                maxlength: 50
            },
            new_password: {
                required: true,
                minlength: 8,
                maxlength: 12
            },
            cpassword: {
                required: true,
                equalTo: "#new_password"
            },
            terms : {
                required: true
            },
        },
        messages: {
            name: {
                required: 'Username is required',
                maxlength: 'Username must not be longer than 50 characters'
            },
            email: {
                email: 'Enter a valid email',
                required: 'Email is required',
                maxlength: 'Email length must not be longer than 50 characters'
            },
            new_password:{
                required: "Password is required",
                minlength: "Password must contain at least 8 characters",
                maxlength: "Password must contain at most 12 characters"
            },
            cpassword: {
                required: "Password is Required*",
                equalTo: "Password must be equal to New Password"
            },
            terms: {
                required: 'Please check terms and conditions',
            }
        },
        submitHandler: function(form) {
            return true;
        }
    });

    // forgot password form validation
    $("#forgot-form").validate({
        rules: {
            email : {
                required: true,
                email :true,
                maxlength: 50
            }
        },
        messages: {
            email: {
                email: 'Enter a valid email',
                required: 'Email is required',
                maxlength: 'Email length must not be longer than 50 characters'
            }
        },
        submitHandler: function(form) {
            return true;
        }
    });

    // reset password form validation
    $("#reset-form").validate({
        rules: {
            new_pass: {
                required: true,
                minlength: 8,
                maxlength: 12
            },
            cpass: {
                required: true,
                equalTo: "#new_pass"
            }
        },
        messages: {
            new_pass:{
                required: "Password is required",
                minlength: "Password must contain at least 8 characters",
                maxlength: "Password must contain at most 12 characters"
            },
            cpass: {
                required: "Password is Required*",
                equalTo: "Password must be equal to New Password"
            }
        },
        submitHandler: function(form) {
            return true;
        }
    });

    Highcharts.chart('earning-graph', {

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: ''
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: ''
            }
        },

        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 10
            }
        },

        series: [{
            name: 'Earning',
            data: [1342, 2233, 4878, 6435, 1789, 3343]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
            }]
        }

    });

    Highcharts.chart('earning-graph-2', {

        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: ''
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: ''
            }
        },

        // legend: {
        //     layout: 'vertical',
        //     align: 'right',
        //     verticalAlign: 'middle'
        // },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 21
            }
        },

        series: [{
            name: 'Earning',
            data: [10342, 23233, 4878, 30435, 26789, 30343]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
            }]
        }

    });

    $('.slider').slick({
        arrows: false,
        infinite: true,
        dots: false,
        autoPlay: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });
});