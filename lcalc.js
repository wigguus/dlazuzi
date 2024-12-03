function onHeartClicked() {


    var inp1value = document.getElementById("inpt1").value;
    var inp2value = document.getElementById("inpt2").value;

    if (inp1value != inp2value && inp1value.length > 0 && inp2value.length > 0) {

        document.getElementById("heart").style.opacity = "1";
        document.getElementById("heart").style.top = "50%";

        setTimeout(function () { 
            const lista = [
                "zuzia",
                "zuza",
                "zuźka",
                "zuzi",
                "zuzka",
                "zuśka",
                "zuzieńka",
                "zuziczka",
                "zuzulka",
                "zuzunia",
                "zuziulka",
                "zuziołek",
                "zuzanna",
                "fomit",
                "fomitka",
                "pawełek",
                "pawelec",
                "pawełcio",
                "pawełek",
                "pawełunio",
                "pawuś",
                "pawcio",
                "pawulek",
                "pawunia",
                "pawko",
                "pawciołek",
                "pawlonek", 
                "paweł",
                "virkyu",
                "wiggy",
                "wigguś",
                "poemat"
            ];


            var pierwszeKtores = false;
            var drugieKtores = false;

            for(var i = 0; i < lista.length; i++) { 
                if (inp1value.toString().toLowerCase() == lista[i].toString().toLowerCase()) {
                    var pierwszeKtores = true;
                } else if (inp2value.toString().toLowerCase() == lista[i].toString().toLowerCase()) {
                    var drugieKtores = true;
                }
            };

            document.getElementById("title").innerHTML = "<span class=\"whitetitle\">" + inp1value + " + " + inp2value + " = " + "</span><span class=\"pinktitle\">" + inp1value.substring(0, inp1value.length/2) + inp2value.substring(inp2value.length/2, inp2value.length.length) + "</span>";
            document.getElementById("textbutton").style.display = "block";
            document.getElementById("textbutton").style.display = "none";
            
            document.getElementById("heart").style.top = "125%";
            document.getElementById("heart").style.opacity = "0";

            document.getElementById("input-container").style.display = "none";

            var prct = Math.floor(Math.random() * 101);
            
            if (pierwszeKtores && drugieKtores) {
                var prct = 100;
            }

            document.getElementById("description").innerHTML = "<span class=\"pinktitle\">" + prct.toString() + "%</span><span class=\"whitetitle\"> - O to prawdziwe procenty kalkulatora milosci! Mam nadzieje, ze dziala prawidlowo!</span>";

        }, 1000)

        
    } else {
        var inp1value = document.getElementById("inpt1").value;
        var inp2value = document.getElementById("inpt2").value;

        if (inp1value != inp2value && inp1value.length > 0 && inp2value.length > 0) {

            document.getElementById("heart").style.opacity = "1";
            document.getElementById("heart").style.top = "50%";
    
            setTimeout(function () { 
                const zdrobnieniaZuzia = [
                    "zuzia",
                    "zuza",
                    "zuźka",
                    "zuzi",
                    "zuzka",
                    "zuśka",
                    "zuzieńka",
                    "zuziczka",
                    "zuzulka",
                    "zuzunia",
                    "zuziulka",
                    "zuziołek",
                    "zuzanna",
                    "fomit",
                    "fomitka"
                ];
    
                const zdrobnieniaPawel = [
                    "pawełek",
                    "pawelec",
                    "pawełcio",
                    "pawełek",
                    "pawełunio",
                    "pawuś",
                    "pawcio",
                    "pawulek",
                    "pawunia",
                    "pawko",
                    "pawciołek",
                    "pawlonek", 
                    "paweł"
                ];
    
    
                var pierwszeKtores = false;
                var drugieKtores = false;
    
                zdrobnieniaPawel.forEach(element => {
                    if (inp1value.toString().toLowerCase == element.toString().toLowerCase) {
                        var pierwszeKtores = true;
                    } else if (inp2value.toString().toLowerCase == element.toString().toLowerCase) {
                        var drugieKtores = true;
                    }
                });
    
                zdrobnieniaZuzia.forEach(element => {
                    if (inp1value.toString().toLowerCase == element.toString().toLowerCase) {
                        var pierwszeKtores = true;
                    } else if (inp2value.toString().toLowerCase == element.toString().toLowerCase) {
                        var drugieKtores = true;
                    }
                });
    
                document.getElementById("title").innerHTML = "<span class=\"whitetitle\">" + inp1value + " + " + inp2value + " = " + "</span><span class=\"pinktitle\">" + inp1value.substring(0, inp1value.length/2) + inp2value.substring(inp2value.length/2, inp2value.length.length) + "</span>";
                document.getElementById("textbutton").style.display = "block";
                document.getElementById("textbutton").style.display = "none";
                
                document.getElementById("heart").style.top = "125%";
                document.getElementById("heart").style.opacity = "0";
    
                var percent = Math.floor(Math.random() * 101);
    
                document.getElementById("description").innerHTML = "<span class=\"pinktitle\>" + percent + "%</span><span class=\"whitetitle> - O to prawdziwe procenty kalkulatora milosci! Mam nadzieje, ze dziala prawidlowo!</span>";
    
            }, 1000)
    
            
        } else {
            if (inp1value.length == 0) {
                document.getElementById("inpt1").style.boxShadow = "0 0 45px #ff000050";
            }
            if (inp2value.length == 0) {
                document.getElementById("inpt2").style.boxShadow = "0 0 45px #ff000050";
            }
        }

    }
}