function select(){
    var est = document.getElementById("estado").value;
    switch (est) {
        case "ac":
            document.getElementById("cidade").innerHTML = "<option value=\"Rio Branco\">Rio Branco</option> <option value=\"Cruzeiro do Sul\">Cruzeiro do Sul</option> <option value=\"Feijó\">Feijó</option>";
        break;
        case "al":
            document.getElementById("cidade").innerHTML = "<option value=\"Maceió\">Maceió</option> <option value=\"Penedo\">Penedo</option> <option value=\"Arapiraca\">Arapiraca</option>";
        break;
        case "am":
            document.getElementById("cidade").innerHTML = "<option value=\"Manaus\">Manaus</option> <option value=\"Parintins\">Parintins</option> <option value=\"Coari\">Coari</option>";
        break;
        case "pi":
            document.getElementById("cidade").innerHTML = " <option value=\"Teresina\">Teresina</option> <option value=\"Picos\">Picos</option> <option value=\"Oeiras\">Oeiras</option>";
        break;
        case "mt":
            document.getElementById("cidade").innerHTML = " <option value=\"Cuiabá\">Cuiabá</option> <option value=\"Sorriso\">Sorriso</option> <option value=\"Sinop\">Sinop</option>";
        break;
        case "ma":
            document.getElementById("cidade").innerHTML = " <option value=\"São Luís\">São Luís</option> <option value=\"Caxias\">Caxias</option> <option value=\"Bacabal\">Bacabal</option>";
        break;
        case "ap":
            document.getElementById("cidade").innerHTML = " <option value=\"Macapá\">Macapá</option> <option value=\"Santana\">Santana</option> <option value=\"Oiapoque\">Oiapoque</option>";
        break;
        case "ba":
            document.getElementById("cidade").innerHTML = " <option value=\"Salvador\">Salvador</option> <option value=\"Barreiras\">Barreiras</option> <option value=\"Alagoinhas\">Alagoinhas</option>";
        break;
        case "ce":
            document.getElementById("cidade").innerHTML = " <option value=\"Fortaleza\">Fortaleza</option> <option value=\"Caucaia\">Caucaia</option> <option value=\"Sobral\">Sobral</option>";
        break;
        case "pr":
            document.getElementById("cidade").innerHTML = " <option value=\"Curitiba\">Curitiba</option> <option value=\"Maringá\">Maringá</option> <option value=\"Londrina\">Londrina</option>";
        break;
        case "df":
            document.getElementById("cidade").innerHTML = " <option value=\"Brasília\">Brasília</option> <option value=\"Gama\">Gama</option> <option value=\"Ceilândia\">Ceilândia</option>";
        break;
        case "es":
            document.getElementById("cidade").innerHTML = " <option value=\"Vitória\">Vitória</option> <option value=\"Serra\">Serra</option> <option value=\"Colatina\">Colatina</option>";
        break;
        case "rj":
            document.getElementById("cidade").innerHTML = " <option value=\"Rio de Janeiro\">Rio de Janeiro</option> <option value=\"Petrópolis\">Petrópolis</option> <option value=\"Niterói\">Niterói</option>";
        break;
        case "sp":
            document.getElementById("cidade").innerHTML = " <option value=\"São Paulo\">São Paulo</option> <option value=\"Campinas\">Campinas</option> <option value=\"Santos\">Santos</option>";
        break;
        case "go":
            document.getElementById("cidade").innerHTML = " <option value=\"Goiânia\">Goiânia</option> <option value=\"Jataí\">Jataí</option> <option value=\"Anápolis\">Anápolis</option>";
        break;
        case "ms":
            document.getElementById("cidade").innerHTML = " <option value=\"Campo Grande\">Campo Grande</option> <option value=\"Corumbá\">Corumbá</option> <option value=\"Bonito\">Bonito</option>";
        break;
        case "mg":
            document.getElementById("cidade").innerHTML = " <option value=\"Belo Horizonte\">Belo Horizonte</option> <option value=\"Juiz de Fora\">Juiz de Fora</option> <option value=\"Mariana\">Mariana</option>";
        break;
        case "pa":
            document.getElementById("cidade").innerHTML = " <option value=\"Belém\">Belém</option> <option value=\"Santarém\">Santarém</option> <option value=\"Marabá\">Marabá</option>";
        break;
        case "pb":
            document.getElementById("cidade").innerHTML = " <option value=\"João Pessoa\">João Pessoa</option> <option value=\"Campina Grande\">Campina Grande</option> <option value=\"Patos\">Patos</option>";
        break;
        case "pe":
            document.getElementById("cidade").innerHTML = " <option value=\"Recife\">Recife</option> <option value=\"Caruaru\">Caruaru</option> <option value=\"Olinda\">Olinda</option>";
        break;
        case "rn":
            document.getElementById("cidade").innerHTML = " <option value=\"Natal\">Natal</option> <option value=\"Parnamirim\">Parnamirim</option> <option value=\"Touros\">Touros</option>";
        break;
        case "ro":
            document.getElementById("cidade").innerHTML = " <option value=\"Porto Velho\">Porto Velho</option> <option value=\"Ariquemes\">Ariquemes</option> <option value=\"Cacoal\">Cacoal</option>";
        break;
        case "to":
            document.getElementById("cidade").innerHTML = " <option value=\"Palmas\">Palmas</option> <option value=\"Araguaína\">Araguaína</option> <option value=\"Gurupi\">Gurupi</option>";
        break;
        case "se":
            document.getElementById("cidade").innerHTML = " <option value=\"Aracaju\">Aracaju</option> <option value=\"Lagarto\">Lagarto</option> <option value=\"Laranjeiras\">Laranjeiras</option>";
        break;
        case "sc":
            document.getElementById("cidade").innerHTML = " <option value=\"Florianópolis\">Florianópolis</option> <option value=\"Joinville\">Joinville</option> <option value=\"Blumenau\">Blumenau</option>";
        break;
        case "rr":
            document.getElementById("cidade").innerHTML = " <option value=\"Boa Vista\">Boa Vista</option> <option value=\"Mucajaí\">Mucajaí</option> <option value=\"Rorainópolis\">Rorainópolis</option>";
        break;
        case "rs":
            document.getElementById("cidade").innerHTML = " <option value=\"Porto Alegre\">Porto Alegre</option> <option value=\"Pelotas\">Pelotas</option> <option value=\"Caxias do Sul\">Caxias do Sul</option>";
        break;
        default:
            document.getElementById("cidade").innerHTML = " <option value=\"0\">Selecione um estado.</option>";
        break;
    }
}