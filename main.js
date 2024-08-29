// Define a data alvo
const targetDate = new Date('2024-08-30T19:30:00').getTime();

// Atualiza o contador a cada segundo
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Cálculo do tempo restante
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o tempo restante
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Atualiza e exibe a hora atual
    const nowDate = new Date();
    const currentTime = nowDate.toLocaleTimeString('pt-BR');
    document.getElementById('currentTime').innerText = currentTime;

    // Quando a contagem terminar
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = "Chegou o momento!";
    }
}, 1000);
