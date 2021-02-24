# Modal

Janela sopreposta ao resto da página

## Props

|       Nome       |   Tipo   | Mandatório |   Padrão   |                                                                                                    Descrição                                                                                                    |
| :--------------: | :------: | :--------: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     visible      | boolean  |    Sim     |            |                                                                                     Define se o modal está visível ou não.                                                                                      |
| toggleVisibility | function |    Sim     |            |                                                                           Troca a o valor da propriedade visible entre true e false.                                                                            |
|       Size       |  Object  |    Não     | 5vh ou 5vw |                                                  Use as propriedades top,bottom,left e right para especificar <br>a margem da janela relativa a borda da tela.                                                  |
|    useOverlay    | boolean  |    Não     |    true    |                                                                        Colocar ou não um fundo preto de média opacidade atrás da janela.                                                                        |
|     lockBody     | boolean  |    Não     |    true    |                                                                                       Travar o scroll da página ao abrir.                                                                                       |
|      header      |  Object  |    não     |     {}     | Se especificado, renderiza um cabeçalho na janela. A propriedade title dita o título <br>mostrado, e a propriedade CSS aplica estilos customizados. Olhe a fonte do arquivo <br>para saber quais classes editar |
|    transition    |  string  |    Não     |     ""     |                                                  Se espicificada uma direção (top,bottom,left ou right) <br>faz a janela vir daquela direção em uma animação.                                                   |
