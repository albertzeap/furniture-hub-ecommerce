// const URI = "http://localhost:5000/orders";

// const OrderApi = {

//     getOrders: (setOrders) => {
//         fetch(URI)
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             console.log(data);
//             setOrders(data);
//         })
//         .catch((error) => {console.log(error)})
//     },

//     getOrderByUserId: (setOrderList, userId) => {
//         fetch(URI + "?userId=" + userId )
//         .then((results) => {
//             return results.json();
//         })
//         .then((data) => {
//             console.log(data);
//             setOrderList(data);
//         })
//         .catch((error) => {console.log(error)})
//     },

//     createOrder: (id, userId, date, products, totalPrice) => {
//         // Create the POST request
//         fetch(URI, {
//          method: "POST",
//          body: JSON.stringify({
//              id: id,
//              userId: userId,
//              date : date,
//              products: products,
//              totalPrice: totalPrice,
//          }),
//          headers: {
//              "Content-type": "application/json; charset=UTF-8"
//          }
//      })
//      .then((response) => response.json())
//      .then((data) => {
//          console.log(data);
//          alert("Order successful!");
//      });
//      }

// }

// export default OrderApi;