function validar(){
    var form = document.getElementById('form');
    var nome  = true
    form.addEventListener('submit', function(e) {
        var name = document.getElementById('name');
        if((name.value.length) <3){
            document.getElementById("v_n").innerHTML = "<font color=\"red\" size=2>*mínimo 3 caracteres</font>";
            e.preventDefault();
        }
        else{
            for (var i = 0; i < name.value.length; i++) {
                if(!isNaN(name.value.substring(i))){
                    document.getElementById("v_n").innerHTML = "<font color=\"red\" size=2>*não pode ter números.</font>";
                    e.preventDefault();
                    break;
                } 
                else{
                    document.getElementById("v_n").innerHTML = "";
                }
            }

        }
        var sname = document.getElementById('sname');
        if((sname.value.length) <3){
            document.getElementById("v_sn").innerHTML = "<font color=\"red\" size=2>*mínimo 5 caracteres</font>";
            e.preventDefault();
        }
        else{
            for (var i = 0; i < sname.value.length; i++) {
                if(!isNaN(sname.value.substring(i))){
                    document.getElementById("v_sn").innerHTML = "<font color=\"red\" size=2>*não pode ter números.</font>";
                    e.preventDefault();
                    break;
                }
                else{
                    document.getElementById("v_sn").innerHTML = "";
                }

            }
        }
        var end = document.getElementById('end');
        if((end.value.length) < 5){
            document.getElementById("v_end").innerHTML = "<font color=\"red\" size=2>*mínimo 5 caracteres</font>";
            e.preventDefault();
        } 
        else{
            document.getElementById("v_end").innerHTML = "";
        }
        var senha = document.getElementById('senha');
        var confirms = document.getElementById('confirms');
        if(senha.value != confirms.value){
            document.getElementById("v_s").innerHTML = "<font color=\"red\" size=2>*senha é diferente.</font>";
            e.preventDefault();
        }
        else{
            document.getElementById("v_s").innerHTML = "";
        }
        if(!TestaCPF){
            document.getElementById("v_cpf").innerHTML = "<font color=\"red\" size=2>*CPF inválido.</font>";
            e.preventDefault();
        }
        else{
            document.getElementById("v_cpf").innerHTML = "";
        }
        var cidade = document.getElementById("cidade");
        if ((cidade.value) == 0) {
            document.getElementById("v_cid").innerHTML = "<font color=\"red\" size=2>*selecione um.</font>";
            e.preventDefault();
        }
        else{
            document.getElementById("v_cid").innerHTML = "";
        }
        var estado = document.getElementById("estado");
        if ((estado.value) == 0) {
            document.getElementById("v_est").innerHTML = "<font color=\"red\" size=2>*selecione um.</font>";
            e.preventDefault();
        }
        else{
            document.getElementById("v_est").innerHTML = "";
        }
        var email = document.getElementById("email").value;
        var aux = email.value.split("@");
        email = aux[1].split(".");
        email[0] = toString(email[0].toLowerCase());
        console.log(email[0]);
        if(email[0].equals("gmail") || email[0].equals("yahoo") || email[0].equals("outlook") || email[0].equals("hotmail") || email[0].equals("bol") || email[0].equals("live")){
            document.getElementById("v_email").innerHTML = "<font color=\"red\" size=2>*email não valido.</font>";
            e.preventDefault();
        }
        else{
            document.getElementById("v_email").innerHTML = "";
        }
    });
}
function TestaCPF() {
    var strCPF = document.getElementById("cpf");
    var array =((strCPF.value).split("."));
    var dig = array[2];
    var aux = array.pop();
    dig = dig.split("-");
    aux = array.push(dig[0]);
    aux = array.push(dig[1]);
    strCPF = "";
    for (var i = 0; i < array.length; i++) {
        strCPF += array[i];
    }
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;
     
    for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
     
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
     
    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
     
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}