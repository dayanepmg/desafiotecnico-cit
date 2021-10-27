# desafiotecnico-cit

1 - Acessar o site https://123milhas.com/ <br>
2 - Acessar a aba Hotéis<br>
3 - Em destino, adicionar um local de sua escolha<br>
4 - Em Check-in/Check-out adicionar uma data de sua escolha.<br>
5 - Em Quartos e hóspedes, adicionar 2 adultos e duas crianças, uma de 9 anos e outra de 10 anos.<br>
6 - Clicar em Buscar<br>

# Instalação
1 - git clone https://github.com/dayanepmg/desafiotecnico-cit.git<br>
2 - Com o VSCode aberto na pasta desafiotecnico-cit, abrir o terminal e digitar: npm install cypress@3.6.0 em seguida: npm install -D cypress-xpath<br>
3 - Após instalação digitar: npm run cypress:open<br>
4 - Recortar e colar o arquivo: #hotel_room_reservation.spec.js# na pasta cypress=>integration<br>
5 - Copiar a linha: require('cypress-xpath') no arquivo: cypress=>suport=>index.js <br>
6 - No painel aberto do cypress, executar o teste contido no arquivo #hotel_room_reservation.spec# clicando sobre ele.<br>
