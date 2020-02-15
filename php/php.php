<!DOCTYPE html>
<html>
<head>
	<title>validação</title>
	<meta charset="utf-8">
	<?php 
		$nome = $_POST['name'];
		$sname = $_POST['sname'];
		$date= $_POST['date'];
		$phone= $_POST['phone'];
		$cpf= $_POST['cpf'];
		$rg= $_POST['rg'];
		$end= $_POST['end'];
		$email= $_POST['email'];
		$login= $_POST['login'];
		$senha= $_POST['senha'];
	?>
</head>
<body>
	<?php 
		echo "Nome: ".$nome."<br>";
		echo "Sobrenome: ".$sname."<br>";
		echo "Data de Nascimento: ".$date."<br>";
		echo "Sexo: ".$_POST['sexo']."<br>";
		echo "Telefone: ".$_POST['phone']."<br>";
		echo "CPF: ".$_POST['cpf']."<br>";
		echo "RG: ".$_POST['rg']."<br>";
		echo "Endereço: ".$_POST['end']."<br>";
		echo "Estado: ".$_POST['estado']."<br>";
		echo "Cidade: ".$_POST['cidade']."<br>";
		echo "Email: ".$_POST['email']."<br>";
		echo "Áreas de Interesse selecionadas: <br>";
		if(isset($_POST['area']))
			foreach ($_POST['area'] as $i) {
				echo $i."<br>";
			}
		else{
			echo "Nenhuma.<br>";
		}
		echo "Login: ".$_POST['login']."<br>";
		echo "Senha: ".$_POST['senha']."<br>";
	?>
	<a href="../form.html"><button>OK</button></a>
</body>
</html>
