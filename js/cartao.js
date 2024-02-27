document.getElementById('cardForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var cardNumber = document.getElementById('cardNumber').value;
    var cardName = document.getElementById('cardName').value;
    var expirationDate = document.getElementById('expirationDate').value;
    var cvv = document.getElementById('cvv').value;

    var message = `
      <p>Número do Cartão: ${cardNumber}</p>
      <p>Nome no Cartão: ${cardName}</p>
      <p>Data de Validade: ${expirationDate}</p>
      <p>CVV: ${cvv}</p>
    `;

    document.getElementById('message').innerHTML = message;
});
