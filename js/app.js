const btn = document.getElementById('btn-convertir');

btn.addEventListener('click', function(){
    let temp = document.getElementById('temperatura').value;
    let valor = document.getElementById('valor').value;

    if(valor == 1){
        temp = Math.round((temp * 9/5) + 32, 4);//fahrenheit
        document.getElementById('resultado').textContent = "la temperatura en fahrenheit es:"+temp+" F°";
        temp = 0;
    }else{
        temp = Math.round((temp - 32) * 5/9, 4);//celcius
        document.getElementById('resultado').textContent = "la temperatura en celcius es:"+temp+" C°";
        temp = 0;
    }
});