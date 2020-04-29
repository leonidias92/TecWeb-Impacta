# Professor, sobre a atividade que o senhor irá testar para correção, tenho algumas observações para que possa
  facilitar o teste pois eu mudei algumas coisas para pdoer conseguir fazer a AC, ou parte dela no caso.

# Sobre o SpecRunner, conforme eu havia questionado na semana passada, o senhor rodaria a AC nele primeiro, e depois
  faria o teste manual. Infelizmente posso adiantar que a minha não funciona no SpecRunner, pois eu efetuei algumas
  mudanças no body, e não consegui fazer as mesmas no SpecRunner afim de rodar.

# Referente aos requisitos solicitados:
  1 - Os números ao serem clicados devem aparecer no campo de id resultado.
	- Funcionando sem problemas

  2 - As operações também devem adicionar o símbolo no campo de resultado.
	- Funcionando sem problemas

  3 - NÃO pode ser incluído uma operação se não houver nenhum número ou se já houver alguma operação no resultado.
	- Não consegui fazer, infelizmente nem mesmo a calculadora do windows faz isso, ela auto preenche o número 0.
	  Na minha calculadora você consegue digitar o operador primeiro, porem ao solicitar um resultado, a pagina
	  emite um alert.

  4 - O ponto é utilizado para números decimais.
	- Funcionando sem problemas

  5 - Ao clicar no igual (=), o resultado da operação deve substituir a expressão no campo resultado.
	- Funcionando sem problemas

  6 - Se houver apenas um número no campo, o botão igual não faz nada (mantém o número).
	- Funcionando sem problemas

  7 - Se houver o primeiro número e a operação, sem o segundo número, o botão igual deve colocar uma mensagem de erro
      no resultado: Erro de operação.
	- Funcionando parcialmente. No caso da multiplicação, com a forma que eu utilizei, ele acaba fazendo exponencial
	  dos 2 números. Referente aos outros operadores, ele retorna um erro "Invalid left-hand side in assignment", não
	  consegui exibir com sucesso o "Erro de Operação" sendo colocado no campo de resultado. Mais um paramêtro que a 
	  calculadora do windows não possui, ela auto preenche um número 1.

  8 - O ponto (.) só pode ser adicionado uma vez por número.
	- Funcionando parcialmente. Ele retorna um erro em forma de alert, mas também não consegui capturar esse erro, ou usar
	  a função split de forma que eu pudesse analisar os elementos de forma separada, ou fazer de alguma forma que a
	  calculadora não deixasse digitar 2 vezes.