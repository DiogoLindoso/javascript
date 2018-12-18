/*function validarcpf(){
    var cpf = this.value;
    var primeiroDigito = 0;
    var segundoDigito = 0;
    var cont = 0;
    for(i=10; i>1; i--){
        primeiroDigito+=cpf[10-i] * i;
    }
    for(i=11; i>1; i--){
        segundoDigito+= cpf[11-i] * i;
    }
    for(i=0; i<11; i++){
        if(cpf[i] === cpf[i+1]){
            cont++
        }
    }
    primeiroDigito = (primeiroDigito*10) % 11;
    segundoDigito = (segundoDigito*10) % 11;
    if(primeiroDigito == cpf[9] && segundoDigito == cpf[10] && cont < 10){
        this.className = 'true';
    }else{
        this.className = 'false';
    }
}
var el = document.getElementById('cpf');
el.onblur = validarcpf;
*/

$('#cpf').on('blur',function(){
    var cpf = $(this).val();
    var $elcpf = $('#cpf');
    var primeiroDigito = 0;
    var segundoDigito = 0;
    var cont = 0;
    for(i=10; i>1; i--){
        primeiroDigito+=cpf[10-i] * i;
    }
    for(i=11; i>1; i--){
        segundoDigito+= cpf[11-i] * i;
    }
    for(i=0; i<11; i++){
        if(cpf[i] === cpf[i+1]){
            cont++
        }
    }
    primeiroDigito = (primeiroDigito*10) % 11;
    segundoDigito = (segundoDigito*10) % 11;
    if(primeiroDigito == cpf[9] && segundoDigito == cpf[10] && cont < 10){
        $elcpf.removeClass('false');
        $elcpf.addClass('true');
    }else{
        $elcpf.removeClass('true');
        $elcpf.addClass('false');
    }
}
);