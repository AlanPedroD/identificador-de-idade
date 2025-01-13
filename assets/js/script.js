
function verificar(){
 var data = new Date();
 var ano = data.getFullYear();
 var inputAno = document.querySelector('#inputAno');
 var resultado = document.querySelector('#resultado');
 var img = document.getElementById("imagem")

 if (inputAno.value.length == 0 || inputAno.value > ano ){
    alert('[ERRO] Verifique os dados e tente novamente');
} else{
 var sexo = document.getElementsByName('sexo')
 var idade = ano - Number(inputAno.value);
 var genero = ''
//  var img = document.createElement('img');
//  img.setAttribute('id', 'foto');
 
 if (sexo[0].checked){
     genero = 'Homem';

    if(idade >= 0 && idade < 11){
        img.src = "assets/image/menino-redondo.png"    
    } else if(idade < 21){
        img.src = "assets/image/homem-jovem-red.png"
    } else if(idade < 40){
        img.src ="assets/image/homem40red.png"
    } else if(idade < 60){
        img.src = "assets/image/homem50-red.png"
    }else{
        img.src = "assets/image/velho-red.png"
    }

 } else if(sexo[1].checked){
     genero = 'Mulher';

     if(idade >= 0 && idade < 11){
        img.src = "assets/image/menina-redonda.png"
    } else if(idade < 21){
        img.src = "assets/image/mulher-jovem-red.png"
    } else if(idade < 40){
        img.src = "assets/image/mulher40red.png"
    } else if(idade < 60){
        img.src = "assets/image/mulher50-red.png"
    }else{
        img.src = "assets/image/velha-red.png"
    }
 }

 

 resultado.innerHTML = `Detectamos ${genero} de ${idade} anos`;
 resultado.appendChild(img);
 
}

}
