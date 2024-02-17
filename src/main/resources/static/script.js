const bookingForm = document.getElementById('bookingForm');
const ticketList = document.getElementById('ticketList');
const deleteTicketsBtn = document.getElementById('deleteTicketsBtn');
const inputs = bookingForm.querySelectorAll('input, select');

const tickets = [];

bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const movie = bookingForm.movie.value;
    const antall = bookingForm.antall.value;
    const fornavn = bookingForm.fornavn.value;
    const etternavn = bookingForm.etternavn.value;
    const telefonnr = bookingForm.telefonnr.value;
    const epost = bookingForm.epost.value;

    if (movie && antall && fornavn && etternavn && telefonnr && epost) {
        const ticket = {
            movie: movie,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost
        };

        tickets.push(ticket);
        renderTickets();
        clearInputs();
    } else {
        alert('Alle feltene må fylles ut.');
    }
});

deleteTicketsBtn.addEventListener('click', function () {
    tickets.length = 0;
    renderTickets();
});

function renderTickets() {
    ticketList.innerHTML = '';
    tickets.forEach(function (ticket) {
        const listItem = document.createElement('li');
        listItem.textContent = `${ticket.antall} billetter til ${ticket.movie}, bestilt av ${ticket.fornavn} ${ticket.etternavn}. Kontakt: ${ticket.telefonnr}, ${ticket.epost}`;
        ticketList.appendChild(listItem);
    });
}

function clearInputs() {
    inputs.forEach(function (input) {
        input.value = '';
    });
}