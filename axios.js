const URL = 'https://test-users-api.herokuapp.com/users/';

async function getUser() {
  try{
    const response = await axios.get(URL);
    const path = response.data.data;

  }
  catch(err) {
    err.innerHTML = 'Couldnt get user account'
  }
}
getUser;

async function addUser(){

}

async function deleteUser(){

}
