$(document).ready(function () {
    //Ripple
    let $btnRipple = $('.btn--ripple'),
        $btnRippleInk, btnRippleH, btnRippleX, btnRippleY;
    $btnRipple.on('mouseenter', function (e) {
        let $t = $(this);
        if ($t.find(".btn--ripple-ink").length === 0) {
            $t.prepend("<span class='btn--ripple-ink'></span>");
        }

        $btnRippleInk = $t.find(".btn--ripple-ink");
        $btnRippleInk.removeClass("btn--ripple-animate");
        if (!$btnRippleInk.height() && !$btnRippleInk.width()) {
            btnRippleH = Math.max($t.outerWidth(), $t.outerHeight());
            $btnRippleInk.css({height: btnRippleH, width: btnRippleH});
        }

        btnRippleX = e.pageX - $t.offset().left - $btnRippleInk.width() / 2;
        btnRippleY = e.pageY - $t.offset().top - $btnRippleInk.height() / 2;
        $btnRippleInk.css({top: btnRippleY + 'px', left: btnRippleX + 'px'}).addClass("btn--ripple-animate");
    });
    $('#Login_form').on('click', function (e) {
        e.preventDefault()
        // var notification = alertify.notify('عملیات با موفقیت انجام شد', 'success', 5, function () {
        //     console.log('dismissed');
        // });

    })

    let login_register_url = "http://127.0.0.1:8000/account/"
    let log_reg_form = $("#Login_form")
    let reg_log_div = $(".reg_log_div")
    let phone_input = $("input[name=phone_number]")
    console.log(phone_input)
    log_reg_form.submit(function (e) {
        e.preventDefault();
        let form = new FormData(this)
        console.log(form, "$$$$$$$$")
        $.ajax({
            contentType: false,
            cache: false,
            processData: false,
            url: login_register_url,
            type: "POST",
            data: form,
            beforeSend: function (e) {
                let alerts = $(".alert")
                alerts.remove()
            },
            success: function (e) {
                console.log(e)
                if (e.notAllowed) {
                    window.location.href = e.url
                }
                if (e.sms_error) {
                    var notification = alertify.notify('لطفا دوباره امتحان کنید', 'error', 5, function () {
                        console.log('dismissed');
                    });

                    function redirecet_url() {
                        window.location.href = e.url
                    }

                    const myTimeout = setTimeout(redirecet_url, 2000);
                }
                if (e.many) {
                    reg_log_div.append(`
× !خطا تلاش بیش از حد
لطفا بعد از 5 دقیقه امتحان کنید
`)
                    phone_input.val('')

                    function redirecet_url() {
                        window.location.href = e.url
                    }

                    const myTimeout = setTimeout(redirecet_url, 2000);
                }
                if (e.time) {
                    reg_log_div.append(`
× دسترسی شما محدود شده است
`)
                    phone_input.val('')

                    function redirecet_url() {
                        window.location.href = e.url
                    }

                    const myTimeout = setTimeout(redirecet_url, 2000);
                }
                if (e.digit) {
                    reg_log_div.append(`
× !خطا شماره صحیح نیست
`)
                    phone_input.val('')
                }
                if (e.len) {
                    reg_log_div.append(`
× !خطا شماره صحیح نیست
`)
                    phone_input.val('')
                }
                if (e.starts) {
                    reg_log_div.append(`
× !خطا با صفر شروع کنید
`)
                    phone_input.val('')
                }
                if (e.sent) {
                    var notification = alertify.notify('کد با موفقیت ارسال شد', 'success', 5, function () {
                        console.log('dismissed');
                    });

                    function redirecet_url() {
                        window.location.href = e.url
                    }

                    const myTimeout = setTimeout(redirecet_url, 2000);
                }
            }
        })
    })


})