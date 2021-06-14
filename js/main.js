var cuentas = [
    { nombre: "Victor", saldo: 200, password: 'hello' },
    { nombre: "Kenny", saldo: 290, password: '133t' },
    { nombre: "Maui", saldo: 67, password: '123' }
  ];
  
  let flag;
  let position;

  function inicioSesion(){
     let usuario= document.querySelector('.user').value;
     let pass = document.querySelector('.pass').value;
     if(usuario=== ''  && pass === ''){
         alert('Por favor introduzca sus datos.')
     }else if(usuario=== '' || pass === ''){
        alert('Llene ambos campos por favor')
     }else{
         for (let v =0; v < cuentas.length; v++){
            if (usuario === cuentas[v]['nombre'] && pass === cuentas[v]['password']){
                flag = true;
                position = v;
                break;
              }else{
                  flag = false;
                  
              }
         }
         if (flag === true){
             console.log(position);
            document.querySelector('.inicio').style.display ='none';
            document.querySelector('.bn').style.display ='none';
            document.querySelector('.datos').style.display ='block';
            document.querySelector('#saldo').innerHTML =cuentas[position]['saldo']+'$';
            document.querySelector('#usertext').innerHTML ='Bienvenido: ' +cuentas[position]['nombre'];
         }else if(flag === false){
             alert('Acceso no autorizado, revise su usuario o contraseña.');
         }
     }
    
  } 
 
  function ingresaMonto(){
    let montoNuevo= document.querySelector('.nuevo').value;
    if (montoNuevo === ''){
        alert('Introduzca una cantidad por favor')
    }else{
        montoNuevo= parseInt(montoNuevo) + cuentas[position]['saldo'];
        if (montoNuevo>990){
            alert('Lo siento, la cuenta no debe rebasar los 990$ de saldo')
        }else{
            cuentas[position]['saldo'] =montoNuevo;
            alert(`Tu nuevo saldo disponibles es ${cuentas[position]['saldo']}$`)
            document.querySelector('#saldo').innerHTML =cuentas[position]['saldo']+'$';
        }
    }
  
 }

 function retiraMonto(){
    let montoNuevo= document.querySelector('.nuevo').value;
    if (montoNuevo === ''){
        alert('Introduzca una cantidad por favor')
    }else{
        montoNuevo= cuentas[position]['saldo']- parseInt(montoNuevo);
        if(montoNuevo<10){
            alert('Lo siento, la cuenta no debe tener menos de 10$ de saldo')
        }else{
            cuentas[position]['saldo'] =montoNuevo;
            alert(`Tu nuevo saldo disponibles es ${cuentas[position]['saldo']}$`)
            document.querySelector('#saldo').innerHTML =cuentas[position]['saldo']+'$';
        }
       
    }
    
   
 }