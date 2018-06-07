1. Abre um prompt para o usuário digitar a palavra que deseja criptografar;

2. Se o usuário não digitar nada abre um alert avisando para digitar algo;

3. Se não, a palavra entra em um FOR onde pega cada letra da palavra digitada;

4. A letra é transformada em letra maiuscula e armazenada na variável letters;

5. Se a letra que está na variavel letters for igual a letra que entrou no for, então a letra inicial é maiucula e é chamado a função encryptUppercase com a letra maiuscula em parametro;

	5.1 A função encryptUppercase recebe a letra maiuscula e pega o numero decimal dela na tabela ASCII;
	
	5.2 é usado uma formula para andar 7 casas a frente na tabela ASCII, e pegar o numero decimal da nova letra;
	
	5.3 O novo numero decimal é tranformado na nova letra e retornado;
	
6. Se a letra que está na variavel letters for diferente da letra que entrou no for, então a letra inicial é minuscula e é chamado a função encryptLowercase com a letra minuscula em parametro;

	6.1 A função encryptLowercase recebe a letra minuscula e pega o numero decimal dela na tabela ASCII;
	
	6.2 é usado uma formula para andar 7 casas a frente na tabela ASCII, e pegar o numero decimal da nova letra;
	
	6.3 O novo numero decimal é tranformado na nova letra e retornado;
	
7. A letra retornada pela função é adicionada em uma variável formando a nova palavra codificada;

8. A palavra codificada é mostrada na tela, junto com o botão criptografar e descriptografar;

9. Ao clicar no botão criptografar, abre um novo prompt para o usuário digitar a nova palavra a ser codificada;

10. Ao clicar em descriptografar, é chamada a função decrypt;

11. Na função decrypt a palavra criptografada entra em um FOR onde pega cada letra da palavra;

12. A letra é transformada em letra maiuscula e armazenada na variável letters;

13. Se a letra que está na variavel letters for igual a letra que entrou no for, então a letra inicial é maiucula e é chamado a função decryptUppercase com a letra maiuscula em parametro;

	13.1 A função decryptUppercase recebe a letra maiuscula e pega o numero decimal dela na tabela ASCII;
	
	13.2 é usado uma formula para voltar 20 casas na tabela ASCII, e pegar o numero decimal da letra que era antes de criptografar;
	
	13.3 O novo numero decimal é tranformado na nova letra e retornado;
	
14. Se a letra que está na variavel letters for diferente da letra que entrou no for, então a letra inicial é minuscula e é chamado a função decryptLowercase com a letra minuscula em parametro;

	14.1 A função decryptLowercase recebe a letra minuscula e pega o numero decimal dela na tabela ASCII;
	
	14.2 é usado uma formula para voltar 26 casas na tabela ASCII, e pegar o numero decimal da nova letra que era antes de criptografar;
	
	14.3 O novo numero decimal é tranformado na nova letra e retornado;

15. A letra retornada pela função é adicionada em uma variável formando a nova palavra decodificada;

16. A palavra codificada é mostrada na tela, através de um alert;

<a href="https://imgur.com/itW18jM">Fluxograma</a>
# produto-final-cifra_de_cesar
