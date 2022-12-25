const executeOrder = () => {
    const orderId = document.getElementById('order-id-input').value;
    document.getElementById('order-id-input').value = ""

    createOrderCard(orderId)

    document.getElementById(orderId).innerText="Order Placed"


    chefReceived(orderId)
        .then(pizzaSauceAdded)
        .then(firstLayerOfCheezeAdded)
        .then(toppingsAdded)
        .then(secondLayerOfCheezeAdded)
        .then(pizzaBaked)
        .then(oreganoAddedAndPacked)
        .then(packageReceivedAtCounter)
        .then(() => {
            document.getElementById(orderId).innerText="The order is ready and handed over "
                  })

}




// <div class="col-md-3 order-status-card">
//     <div class="card text-center">
//         <div class="card-header">
//             Order Id:8778
//         </div>
//         <div class="card-body">
//             <p class="card-text">Mediam size pizzaz</p>
//             <p class="card-text">Bill Amount: <b>$34</b></p>
//             <p class="card-text"><span class="badge bg-success">chef receiveduccess</span> </p>

//             <a href="#" class="btn btn-danger btn-sm">Cancel</a>
//         </div>
//         <div class="card-footer">
//             22-12-2022
//         </div>
//     </div>
// </div> 