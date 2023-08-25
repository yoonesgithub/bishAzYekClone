$(document).ready(function () {
    let hazineha = {
        prices: {
            ejareh: 0,
            hoghoogh:0,
            bimeh: 0,
            fanni:0,
            sabet:0,
        },
        type: 'daily'
    }
    function calculate() {
        console.log(hazineha);
        hazineha.prices.ejareh = $("#ejare").val();
        hazineha.prices.hoghoogh = $("#hoghoogh").val();
        hazineha.prices.bimeh = $("#bimeh").val();
        hazineha.prices.fanni = $("#fanni").val();
        hazineha.prices.sabet = $("#sabet").val();
        let invalid = Object.values(hazineha.prices).some(val => /[^\d\W]/.test(val));
        if(invalid) {
            $("#err-msg").show(100);
        } else {
            $("#err-msg").hide();
            const  totalCost = Object.values(hazineha.prices).reduce((acc,val) => {
               return acc += Number(val)
            },0)
            const x = (totalCost / 2) * 10;
            let y = 0;
            if(hazineha.type == 'nightly') {
                $("#show-type").html("داروخانه شبانه‌روزی")
                y = x / 30
            } else {
                $("#show-type").html("داروخانه روزانه")
                y = x / 25
            }
            $(".needed-income").html(Math.floor(y))
            $("#result").show(1000);
        }
    }
    $("#close-result").click(function() {
        clearInputs();
        $("#result").hide(1000);
    })
    function clearInputs() {
        hazineha.prices.ejareh = $("#ejare").val('');
        hazineha.prices.hoghoogh = $("#hoghoogh").val('');
        hazineha.prices.bimeh = $("#bimeh").val('');
        hazineha.prices.fanni = $("#fanni").val('');
        hazineha.prices.sabet = $("#sabet").val('');
        hazineha = {
            prices: {
                ejareh: 0,
                hoghoogh:0,
                bimeh: 0,
                fanni:0,
                sabet:0,
            },
            type: 'daily'
        }
    }
    $("#start-calculation").click(function() {
        calculate()
    })
    function changeType(type) {
        if(type == "day") {
            hazineha.type = "daily"
            $("#night").removeClass("gradient-bg-green text-white");
            $("#day").addClass("gradient-bg-green text-white");
        } else if(type == "night") {
            hazineha.type = "nightly"
            $("#day").removeClass("gradient-bg-green text-white");
            $("#night").addClass("gradient-bg-green text-white");
        }
    }
    $("#day").click(function() {
        changeType("day")
    })
    $("#night").click(function() {
        changeType("night")
    })
});