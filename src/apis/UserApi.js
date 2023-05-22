const URI = "http://localhost:5000/users";

const UserApi = {

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
            setUser(data);
                       
        })
        .catch((error)=>{console.log(error)});
    }
}

export default UserApi;