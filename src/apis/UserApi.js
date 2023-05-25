const URI = "http://localhost:5000/users";

const UserApi = {

    getUsers: (setUserList) => {
        fetch(URI)
        .then((result) => {
            // console.log("RESULT");
            // console.log(result);
            
            return result.json();
        })
        .then((data) =>{
            // console.log("DATA: ");
            console.log(data);
            
            setUserList(data);

            // userList = data;             
        })
        .catch((error)=>{console.log(error)});
    },

    getUserById: (userId,setUser) => {
        fetch(URI + "/"+ userId)
        .then((result) => {
            return result.json()
        })
        .then((data) => {
            setUser(data);
        })
        .catch(error => console.log(error));
    },
    getUserByUsernamePassword: (setUser,username, password) => {
        fetch(URI + "?username=" + username + "&password=" + password )
        .then((result) => {
            return result.json();
        })
        .then((data) =>{
            console.log(data[0])
            setUser(data[0]);
                       
        })
        .catch((error)=>{console.log(error)});
    },

    createUser: (id, fn, ln, pnumber, username, password) => {
        
        // Create the POST request
        fetch(URI, {
            method: "POST",
            body: JSON.stringify({
                id: id,
                firstName: fn,
                lastName : ln,
                phoneNumber: pnumber,
                username: username,
                password: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            
            alert("User account created!\nUsername:" + data.username);
        });
    },
}

export default UserApi;