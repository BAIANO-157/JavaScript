let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada"
                 : (quartosDisponiveis > 8) ? "Aguardando confirmação"
                 : "Sem quartos disponíveis";
 console.log(statusReserva); // Saida; "Reserva confirmada"                