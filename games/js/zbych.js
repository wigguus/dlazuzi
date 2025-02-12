document.onkeydown = function(e) {
    const regex = /^[A-Za-z]$/;

    if (regex.test(e.key)) {
        if (!lost) {
            document.getElementById("keyboard" + e.key.toUpperCase()).click();
        }
            
    }

    
    
}

let lost = false;

let passwords = ['Kocham Zuzie!', 'Moja Zuzia', "Twoj Pawel", "Moja przyszla zona", "Kolego", "slonce", "bull", "Pani zazdrosna", "Twoj przyszly maz", "sushi", "Dziecior", "emerytka", "nerd", "sabaton", "kielce", "sawicka", "kuci, kuci", "zbych", "zbysio", "jadzia", "xitek", "kadzielnia", "kocyk", "park", "halloween", "maratony", "soczek swiat", "malpy", "malpy vs balony", "dlazuzi", "bransoletki:(", "kitkat", "klotnik", "cukiereczek", "majster", "isaac", "slesz", "hypixel", "kokscraft", "tnt  tag", "gra polegajaca na oddawaniu innym ludziom bomby", "kocham kotki i tradycyjne gotki", "sbck", "mozesz nie repostowac 234592345213 tiktokuw"];

console.log("Passwords: " + passwords.length)

let zbysioStatus = 10;
let r = document.querySelector(':root');

let alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let currentPassword = passwords[Math.floor(Math.random() * passwords.length)].toString().toUpperCase();
let cryptedPassword = currentPassword.toString();

let usedLetters = [];

function cryptPassword() {
    for (var i = 0; i < alphabetArray.length; i++) {
        cryptedPassword = cryptedPassword.replaceAll(alphabetArray[i], "_");
    }
    document.getElementById("password").innerHTML = cryptedPassword.toString();
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function checkLetter(letter) {
    usedLetters.push(letter.toString());
    for (var i = 0; i < currentPassword.length; i++) {
        if (letter.toString() == currentPassword.charAt(i).toString())  {

            document.getElementById("keyboard" + letter.toString()).style.zIndex = "-1";
            document.getElementById("keyboard" + letter.toString()).style.background = "#7CFF7C";
            document.getElementById("keyboard" + letter.toString()).setAttribute("onclick", "return;");
            

                cryptedPassword = cryptedPassword.replaceAt(i, letter.toString());
                console.log("Successfully changed the crypted password! Used letter " + letter.toString());

                document.getElementById("password").innerHTML = cryptedPassword.toString();

                var foundLetter = true;
                if (cryptedPassword == currentPassword) {
                document.getElementById("notif").style.display = "flex";

                setTimeout(function() {
                    document.getElementById("notif").style.opacity = 1;

                    document.getElementById("notifText").innerText = "Brawo, odgadłaś hasło!\nHasło: " + currentPassword.toString();
                }, 500);
            }
        }
    }

    if (foundLetter) {
        foundLetter = false;
    } else {
        zbysioStatus -= 1;

        document.getElementById("keyboard" + letter.toString()).style.zIndex = "-1";
        document.getElementById("keyboard" + letter.toString()).style.background = "#737373";
        document.getElementById("keyboard" + letter.toString()).setAttribute("onclick", "return;");

        if (zbysioStatus == 9) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu miauknął.";
            r.style.setProperty('--zbychColor', '#66FF66');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 8) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu zatyka oczka.";
            r.style.setProperty('--zbychColor', '#7CFF7C');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 7) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu ziewa.";
            r.style.setProperty('--zbychColor', '#8CFF8C');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 6) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu robi 🤨.";
            r.style.setProperty('--zbychColor', '#A2FFA2');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 5) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu chce uciec.";
            r.style.setProperty('--zbychColor', '#B0FFB0');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 4) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu głośno miauczy.";
            r.style.setProperty('--zbychColor', '#B8FFB8');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 3) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu chce przemówić<br>ludzkim głosem.";
            r.style.setProperty('--zbychColor', '#C6FFC6');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else if (zbysioStatus == 2) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu zaczyna się<br>denerwować.";
            r.style.setProperty('--zbychColor', '#FF9966');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else  if (zbysioStatus == 1) {
            document.getElementById("statusZbysia").innerHTML = "Zbysiu mówi, że przegrasz.";
            r.style.setProperty('--zbychColor', '#FF6666 ');

            document.getElementById("game-zbycho-image").style.backgroundImage = 'url(../assets/zbych/game-icon/status' + zbysioStatus.toString() + '.png)'; 
        } else {
            document.getElementById("notifText").innerText = "Przegrałaś >:C\nHasło: " + currentPassword.toString();

            document.getElementById("notif").style.display = "flex";

            setTimeout(function() {
                document.getElementById("notif").style.opacity = 1;
            }, 500);

            lost = true;

            console.log("Password wasnt guessed! Password: " + currentPassword);
     
        }
    }
    console.log("Used Letters: " + usedLetters);
}