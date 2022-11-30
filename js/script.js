var sec=0
var min=0
var hr=0
var interval

function digitos(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function play_number(){
    watch()
    interval= setInterval(watch,10) 
}

function pause_number(){ 
    clearInterval(interval)
}

function reset_number(){ 
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00' 
}

function watch(){ 
    sec++ 
    if(sec==60){ 
        min++
        sec=0
        if(min==60){ 
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=digitos(hr)+':'+digitos(min)+':'+digitos(sec) 
}
