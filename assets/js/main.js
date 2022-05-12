let inputMonth = document.getElementById('inputMonth');
let imgOut = document.getElementById('imgOut');
let hOut = document.getElementById('hOut');
let pOut = document.getElementById('pOut');

function showHoroskop() {
    console.log('steandl');
    switch (inputMonth.value) {
        case "Mar":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_aries.png');
            hOut.innerHTML = "ARIES:";
            pOut.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone…";
            break;
        case "Apr":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_taurus.png');
            hOut.innerHTML = "TAURUS:";
            pOut.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";
            break;
        case "May":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_gemini.png');
            hOut.innerHTML = "GEMINI";
            pOut.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
            break;
        case "Jun":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_cancer.png');
            hOut.innerHTML = "CANCER:";
            pOut.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your…";
            break;
        case "Jul":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_leo.png');
            hOut.innerHTML = "LEO:";
            pOut.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
            break;
        case "Aug":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_virgo.png');
            hOut.innerHTML = "VIRGO:";
            pOut.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
            break;
        case "Sep":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_libra.png');
            hOut.innerHTML = "LIBRA";
            pOut.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today.";
            break;
        case "Oct":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_scorpio.png');
            hOut.innerHTML = "SCORPIO";
            pOut.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
            break;
        case "Nov":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_sagittarius.png');
            hOut.innerHTML = "SAGITTARIUS";
            pOut.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";
            break;
        case "Dez":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_capricorn.png');
            hOut.innerHTML = "CAPRICORN";
            pOut.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity.";
            break;
        case "Jan":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_aquarius.png');
            hOut.innerHTML = "AQUARIUS";
            pOut.innerHTML = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…";
            break;
        case "Feb":
            imgOut.setAttribute("src", 'https://www.horoscopedates.com/img/icon_pisces.png');
            hOut.innerHTML = "PISCES";
            pOut.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all…";
            break;
        default:
            hOut.innerHTML = "Pleaase give a month";

    }
}