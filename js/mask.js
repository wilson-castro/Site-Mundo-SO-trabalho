$(document).ready(function(){
    $('#date').mask('00/00/0000');
    $('#phone').mask('(00)900000-0000');
    $('#cpf').mask('000.000.000-00', {reverse: true});
    $('#rg').mask('00.000.000-0'); 
});