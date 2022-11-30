/* variaveis */
var sec=0
var min=0
var hr=0
var interval

function digitos(digit){ /* colocar duas casas nos digitos, completando com zero*/
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function play_number(){
    watch()
    interval= setInterval(watch,10) /*setInterval - função de tempo que será executada a watch*/
}

function pause_number(){ /* cearInterval - para o tempo*/
    clearInterval(interval)
}

function reset_number(){ /*para o tempo e zera as variaveis segundos e minutos*/
    clearInterval(interval) /* cearInterval - para o tempo*/
    sec=0
    min=0
    document.getElementById('watch').innerText='00:00:00' /* Zera o texto do cronometro*/
}

function watch(){ /*monta o cronometro com hora, mes e segundos*/
    sec++ /*adiciona um no segundo*/
    if(sec==60){ /* quando chega a 60 segundos zera e vira um minuto*/
        min++
        sec=0
        if(min==60){ /* quando chega a 60 minutos zera e vira uma hora*/
            min=0
            hr++
        }
    }
    document.getElementById('watch').innerText=digitos(hr)+':'+digitos(min)+':'+digitos(sec) /*Imprime o tempo*/
}

/* JASON */
indow.addEventListener('load', () => {
    registerSW()
})

async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('./sw.js')
        }catch(e){
            console.log('Falha no registro SW')
        }
    }
}
