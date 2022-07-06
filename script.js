const end = document.getElementById("end");
const nowDate = new Date();
var doc = 0;
var mentor = 0;


function skillCalc() {
    if (document.getElementById('docu').checked === true) {
        doc = .3;
    } else {doc = 0;}
    
    if (document.getElementById('mentor').checked === true) {
        mentor = .3;
    } else {mentor = 0;}
    
    let xp = document.getElementById('hoursPerWeek').value * (dateCalc(nowDate.getTime(), document.getElementById('endMonth').valueAsNumber)) * (.4 + mentor + doc);
    let percent = 1 + (13.6 * Math.log(xp));
    if (percent>100) {
        percent=100;
    }
    end.textContent = 'You will have level ' + Math.round(percent) + '% ' + document.getElementById('skillName').value + ' by the time provided.';
}

function dateCalc(dt1, dt2) {
    var difference = (dt2 - dt1)/ 1000;
    difference /= (60 * 60 * 24 * 7);
    return (Math.abs(difference));
}