let velociad_global = 1
class participante{
    constructor(nombre,cedula,municipio,edad){
        this.cedula=cedula
        this.nombre=nombre
        this.municipio =municipio 
        this.edad=edad
        this.estado="NOASISTE"
        this.r1=""
        this.r2=""
        this.r3=""
        this.r4=""
        this.r5=""
        this.r6=""
        this.c="00"
        this.n="00"
        this.ci="00"
        this.r=0
        this.d=""
        this.t=0
        this.tiempo=0
    }
}
let participantes=[]
function agregar(cedula,nombre,municipio,edad){
    participantes.push(new participante(cedula,nombre,municipio,edad))
}
function mandar(){
    return participantes
}

function confirmar(){
    boton = document.getElementById("confirmar")
    console.log(participantes.length)
    for (let i=0;i < participantes.length ;i++){
            const checkbox= document.getElementById(i+"")
            var estados=""
            boton.addEventListener("checked", function(){
                if(checkbox.checked){
                    estados="ASISTE"
                }
                else{
                    estados="NOASISTE"
                }
                participantes[i].estado=estados
                
            })
            
        }
}
function asitencias(i){
    const checkbox= document.getElementById(i)
    console.log(i)
    checkbox.addEventListener("checked", function(){
        if(checkbox.checked){
            estados="ASISTE"
        }
        else{
            estados="NOASISTE"
        }
        participantes[parseInt(i)].estado=estados
        console.log(participantes[parseInt(i)].estado)
    })

}

function relog(R2,R3,R4,R5,R6,c,n,ci,hora,ri,i){
    const v = 7 / 3.6
    let recor =0
    participantes[i].r1=hora
     let seconds = horaASegundos(hora);
     let timer;

     const velocidad = velociad_global; 

     function updateTimer() {
     seconds++;
     const hours = Math.floor(seconds / 3600);
     const minutes = Math.floor((seconds % 3600) / 60);
     const secs = seconds % 60;
     
     let formattedTime = 
         `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if(seconds>86400){
            formattedTime="00:00:00"
            seconds=0
    }
    participantes[i].tiempo=participantes[i].tiempo+ 1
     participantes[i].r2=formattedTime
     let aleatorio= Math.random() 
     recor =(recor+(v*aleatorio))
     if((recor/1000).toFixed(2)>10){
        stopTimer()
        relog2(R4,R5,R6,n,ci,participantes[i].r2,ri,i)
     }
     participantes[i].r=(recor/1000)
     participantes[i].c=(recor/1000).toFixed(2)
     ordenar(orden)
     if ((v*aleatorio) <= 0.000001) {
        stopTimer()
        participantes[i].c="DESCALIFICADO"
        participantes[i].d="DESCALIFICADO"
        participantes[i].t=72000
    }
     }
     function startTimer() {
     if (!timer) {
         timer = setInterval(updateTimer, velociad_global); // Usa la variable de velocidad
     }
     }
     function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
     // Iniciar el temporizador
     startTimer();
 }

 function relog2(R4,R5,R6,n,ci,hora,ri,i){
    const v =1.72
    let recor =0
    participantes[i].r3=hora
     let seconds = horaASegundos(hora);
     let timer;
     let r=participantes[i].r

     const velocidad = velociad_global; 

     function updateTimer() {
     seconds++;
     const hours = Math.floor(seconds / 3600);
     const minutes = Math.floor((seconds % 3600) / 60);
     const secs = seconds % 60;
     
     let formattedTime = 
         `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
     
    if(seconds>86400){
            formattedTime="00:00:00"
            seconds=0
    }
     participantes[i].r4=formattedTime
     let aleatorio= Math.random() 
     recor =(recor+(v*aleatorio))
     participantes[i].tiempo=participantes[i].tiempo + 1
     participantes[i].r=(r+(recor/1000))
     participantes[i].n=(recor/1000).toFixed(2)
     ordenar(orden)
     if((recor/1000).toFixed(2)>10){
        stopTimer()
        relog3(R6,ci,participantes[i].r4,ri,i)
     }
     if ((v*aleatorio) <= 0.00001) {
        stopTimer()
        participantes[i].n="DESCALIFICADO"
        participantes[i].d="DESCALIFICADO"
        participantes[i].t=72000
    }
     }
     function startTimer() {
     if (!timer) {
         timer = setInterval(updateTimer, velociad_global); 
     }
     }
     function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
     // Iniciar el temporizador
     startTimer();
 }

 function relog3(id,idd,hora,ri,i){
    const v = 45 / 3.6
    let recor =0
    let r=participantes[i].r
    participantes[i].r5=hora
    let seconds = horaASegundos(hora);
     let timer;

     const velocidad = velociad_global; 

     function updateTimer() {
     seconds++;
     const hours = Math.floor(seconds / 3600);
     const minutes = Math.floor((seconds % 3600) / 60);
     const secs = seconds % 60;
     
     let formattedTime = 
         `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if(seconds>86400){
        formattedTime="00:00:00"
        seconds=0
    }
     participantes[i].r6=formattedTime
     let aleatorio= Math.random() 
     recor =(recor+(v*aleatorio))
     participantes[i].tiempo=participantes[i].tiempo + 1
     participantes[i].r=(r+(recor/1000))
     participantes[i].ci=(recor/1000).toFixed(2)
     ordenar(orden)
     if(participantes[i].ci>30){;
        participantes[i].r=50
        participantes[i].t=horaASegundos(formattedTime)
        ordenar(Ultimo_ordenar)
        podios()
        stopTimer()
     }
     if ((v*aleatorio) <= 0.0001) {
        stopTimer()
        participantes[i].ci="DESCALIFICADO"
        participantes[i].d="DESCALIFICADO";
        participantes[i].t=72000
    }
     
     }
     function startTimer() {
     if (!timer) {
         timer = setInterval(updateTimer, velociad_global); // Usa la variable de velocidad
     }
     }
     function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }
     // Iniciar el temporizador
     startTimer();
 }

 function validarHora() {
    const hh = document.getElementById("hh").value.padStart(2, '0');
    const mm = document.getElementById("mm").value.padStart(2, '0');
    const ss = document.getElementById("ss").value.padStart(2, '0');

    if (hh > 23 || mm > 59 || ss > 59) {
        alert("¡Hora inválida! Use HH (0-23), MM (0-59), SS (0-59)");
        return;
    }

    const hora24 = `${hh}:${mm}:${ss}`;
    console.log(hora24)
    return hora24
}
function horaASegundos(horaString) {
    const [hh, mm, ss] = horaString.split(":").map(Number);
    if (isNaN(hh) || isNaN(mm) || isNaN(ss)) {
        throw new Error("Formato de hora inválido. Use HH:MM:SS");
    }
    
    const segundosTotales = (hh * 3600) + (mm * 60) + ss;
    return segundosTotales;
}
function orden() {
    const listaOrdenada = [...participantes];
    listaOrdenada.sort((a, b) => b.r - a.r);
    
    return listaOrdenada;
  }
//   aqui
function Ultimo_ordenar() {
    const listaOrdenada = [...participantes];
    listaOrdenada.sort((a, b) =>  a.t - b.t);
    return listaOrdenada;
  }
  function ordenar(metodo){
    listaN=metodo()
    // 
    document.getElementById("cuerpo1").innerHTML=""
    for(let i =0 ;i<listaN.length;i++){
        if(listaN[i].estado==="ASISTE" ){
            const tr = document.createElement("tr")
            const td_nombre = document.createElement("td")
            td_nombre.textContent=listaN[i].nombre
            const td_cedula = document.createElement("td")
            td_cedula.textContent=listaN[i].cedula
            const td_municipio = document.createElement("td")
            td_municipio.textContent=listaN[i].municipio
            const td_edad = document.createElement("td")
            td_edad.textContent=listaN[i].edad

            const relog1 = document.createElement("td")
            relog1.textContent=listaN[i].r1
            const caminata = document.createElement("td")
            caminata.textContent=listaN[i].c
            const relog2 = document.createElement("td")
            relog2.textContent=listaN[i].r2

            const relog3 = document.createElement("td")
            relog3.textContent=listaN[i].r3
            const natacion = document.createElement("td")
            natacion.textContent=listaN[i].n
            const relog4 = document.createElement("td")
            relog4.textContent=listaN[i].r4

            const relog5 = document.createElement("td")
            relog5.textContent=listaN[i].r5

            const ciclismo = document.createElement("td")
            ciclismo.textContent=listaN[i].ci
            const relog6 = document.createElement("td")
            relog6.textContent=listaN[i].r6
            const r = document.createElement("td")
            r.textContent=listaN[i].r.toFixed(2)
            tr.append(td_nombre,td_cedula,td_municipio,td_edad,relog1,caminata,relog2,relog3,natacion,relog4,relog5,ciclismo,relog6,r)
            document.getElementById("cuerpo1").appendChild(tr)
        }}}
    function podios(){
        let listaNueva=Ultimo_ordenar()
        document.getElementById("cuerpo3").innerHTML=""
        let cont=0
    for(let i =0 ;i<listaN.length;i++){
        if(listaNueva[i].estado==="ASISTE"  && cont<3){
            const tr = document.createElement("tr")
            const td_nombre = document.createElement("td")
            td_nombre.textContent=listaNueva[i].nombre
            const td_cedula = document.createElement("td")
            td_cedula.textContent=listaNueva[i].cedula
            const td_municipio = document.createElement("td")
            td_municipio.textContent=listaNueva[i].municipio
            const td_edad = document.createElement("td")
            td_edad.textContent=listaNueva[i].edad
            const tiempos = document.createElement("td")
            tiempos.textContent=segundosAHorasMinutosSegundos(listaNueva[i].tiempo)
            tr.append(td_nombre,td_cedula,td_municipio,tiempos)
            document.getElementById("cuerpo3").appendChild(tr)
            cont+=1
        }
    }}
    function segundosAHorasMinutosSegundos(segundos) {
        segundos = Math.max(0, segundos);
    
        const horas = Math.floor(segundos / 3600);
        const minutos = Math.floor((segundos % 3600) / 60);
        const segs = Math.floor(segundos % 60);
        const formatoHora = String(horas).padStart(2, '0');
        const formatoMinuto = String(minutos).padStart(2, '0');
        const formatoSegundo = String(segs).padStart(2, '0');
    
        return `${formatoHora}:${formatoMinuto}:${formatoSegundo}`;
    }