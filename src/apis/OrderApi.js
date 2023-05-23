const URI = "http://localhost:5000/orders";

const OrderApi = {

    getOrderByUserId: (setOrderList, userId) => {
        fetch(URI + "?userId=" + userId )
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            console.log(data);
            setOrderList(data);
        })
        .catch((error) => {console.log(error)})
    }

}

export default OrderApi;