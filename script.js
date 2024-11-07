// Définissez la date cible pour le compte à rebours
const targetDate = new Date("Novembre 09, 2024 16:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calcul des jours, heures, minutes et secondes restants
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Affichez les valeurs dans les éléments HTML correspondants
    document.querySelector(".days").innerText = days < 10 ? '0' + days : days;
    document.querySelector(".hours").innerText = hours < 10 ? '0' + hours : hours;
    document.querySelector(".minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector(".seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

    // Si le compte à rebours est terminé, afficher le score
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".worldcup-count-down").innerHTML = "<h3 class='score'> 0:0</h3>";
    }
}

// Mettez à jour le compte à rebours toutes les secondes
const countdownInterval = setInterval(updateCountdown, 1000);

function redirectToStadium() {
    window.location.href = "/stadium";
}


// Sélectionner les éléments du DOM
const ticketButton = document.getElementById("ticketButton");
const ticketModal = document.getElementById("ticketModal");
const closeModalButton = document.getElementById("closeModal");
const buyTicketButton = document.getElementById("buyTicket");

// Ouvrir le modal lorsque l'utilisateur clique sur le bouton "Get the ticket"
ticketButton.addEventListener("click", () => {
    ticketModal.style.display = "flex";
});

// Fermer le modal lorsque l'utilisateur clique sur "Close"
closeModalButton.addEventListener("click", () => {
    ticketModal.style.display = "none";
});

// Exemple de traitement de l'achat du ticket (ici, il affiche une alerte)
buyTicketButton.addEventListener("click", () => {
    const seatingArea = document.getElementById("seatingArea").value;
    const ticketQuantity = document.getElementById("ticketQuantity").value;
    alert(`You bought ${ticketQuantity} tickets for the ${seatingArea} area.`);
    ticketModal.style.display = "none";  // Fermer le modal après l'achat
});


// Sélectionner les éléments du DOM avec les nouveaux identifiants
const scheduleModalButton = document.getElementById("scheduleModalButton");
const newScheduleModal = document.getElementById("newScheduleModal");
const closeScheduleModalButton = document.getElementById("closeScheduleModal");

// Ouvrir le nouveau modal lorsque l'utilisateur clique sur "Explore the schedule"
scheduleModalButton.addEventListener("click", () => {
    newScheduleModal.style.display = "flex";
});

// Fermer le nouveau modal lorsque l'utilisateur clique sur le bouton de fermeture
closeScheduleModalButton.addEventListener("click", () => {
    newScheduleModal.style.display = "none";
});

// Fermer le nouveau modal si l'utilisateur clique en dehors du modal
window.addEventListener("click", (event) => {
    if (event.target === newScheduleModal) {
        newScheduleModal.style.display = "none";
    }
});


