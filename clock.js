function clock() { 
    const fullDate = new Date(); 

    var hours = fullDate.getHours(); 
    var mins = fullDate.getMinutes(); 
    var seconds = fullDate.getSeconds(); 
    
    if (hours < 10) {
        hours = '0' + hours; 
    }
    if (mins < 10) {
        hours = '0' + mins; 
    }
    if (seconds < 10) {
        hours = '0' + seconds; 
    }

    document.getElementById('hour').innerHTML = hours; 
    document.getElementById('minute').innerHTML = ':' + mins; 
    document.getElementById('second').innerHTML = ':' + seconds; 
    /* this changes the value of the id=hours to the hours varible in js which = the current hours */    
}

setInterval(clock,500); 
/* the setInterval update the 'clock' function every 1sec (1000 millisecs) */