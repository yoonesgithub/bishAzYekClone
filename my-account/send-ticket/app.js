$(document).ready(function () {
    $("#open-panel-links").click(function() {
        console.log("click");
        $("#panel-links").toggleClass("d-none");
    })
    $(".open-details-menu").click(function(e) {
        $(".open-details-menu").toggleClass('bg-white text-green text-secondary')
        console.log($(e.currentTarget).find("span").html());
        $(e.currentTarget).find("span").html() == "remove"
        ? $(e.currentTarget).find("span").html("add")
        : $(e.currentTarget).find("span").html("remove")
        $(e.currentTarget).next().first().slideToggle(300);  
    })
    $("#open-ticket-form").click(function () { 
        $("#ticket-form").slideDown(500);
    });
    let fanniOptions = [
        {
            title: 'خطای سایت',
            value: 'site error'
        },
        {
            title: 'نبود محصول در پنل کاربری',
            value: 'empty-panel'
        }
    ]
    let maliOptions = [
        {
            title: 'خطا در پرداخت',
            value: 'payment-error'
        },
        {
            title: 'مشکلات مالی و حسابداری',
            value: 'accounting-error'
        }
    ]

    $("#ticket-departeman").change(function () { 
        console.log(
            $("#ticket-departeman").val()
        );
        switch ($("#ticket-departeman").val()) {
            case 'mali':
                appendToTicketType(maliOptions);
                break;
            case 'fanni':
                appendToTicketType(fanniOptions);
                break;
            default:
                $("#ticket-type").val('');
                $(".step-2").hide(100);
                break;
        }
    });
    function appendToTicketType(options) {
        console.log(options);
        $("#ticket-type").empty();
        if(options.length) {
            options.forEach(opt => {
                let option = $("<option></option>");
                option.attr('value', opt.value);
                option.html(opt.title);
                $("#ticket-type").append(option);
            });

        } else {
            $("#ticket-type").val('');
            $("#ticket-type").empty();
            $(".step-2").hide(0);
        }
        $("#ticket-type").prepend(
            $("<option></option>").html("لطفا یک مورد را انتخاب کنید").attr('selected', true)
        );
    }
    $("#ticket-type").change(function () { 
        console.log("type change");
        $(".step-2").show(0);
    });
});
