function createOrderCard(orderId)
{
    let orderCardsWrapper = document.getElementById('order-cards-wrapper')


    let colDiv = document.createElement('div');
    let cardDiv = document.createElement('div');
    let cardheader = document.createElement('div');
    let cancelBtn = document.createElement('i');
    let cardBody = document.createElement('div');
    let cardText1 = document.createElement('p')
    let cardText2 = document.createElement('p')
    let cardText3 = document.createElement('p')
	let statusBadge = document.createElement('span')
	let cardFooter = document.createElement('div')

    cardheader.innerHTML = `<span> Order Id:${orderId}</spapn>`
    cardText1.innerText="mediam sixze pizzza"
    cardText2.innerHTML='Bill Amount: <b>$34</b>'
    statusBadge.innerText ='First layer of cheeze added'
    cardFooter.innerText = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
      });


    statusBadge.id=orderId;

    colDiv.classList = "col-md-3 order-status-card"
    cardDiv.classList = "card text-center"
    cardheader.classList = "card-header"
    cancelBtn.classList="fa-solid fa-rectangle-xmark cancel-btn"
    cardBody.classList = "card-body"
    cardText1.classList = 'card-text'
    cardText2.classList = 'card-text'
    cardText3.classList = 'card-text'
	statusBadge.classList = 'badge rounded-pill bg-success'
	cardFooter.classList = 'card-footer'


    orderCardsWrapper.appendChild(colDiv)
    colDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardheader);
    cardheader.appendChild(cancelBtn);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardText1);
    cardBody.appendChild(cardText2);
    cardBody.appendChild(cardText3);
    cardText3.appendChild(statusBadge);
    cardDiv.appendChild(cardFooter);



    cancelBtn.addEventListener('click',()=>
    {
        // orderCardsWrapper.removeChild(colDiv);
        colDiv.style.display="none"
    })

}