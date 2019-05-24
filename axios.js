const URL = 'https://test-users-api.herokuapp.com/users/';

async function getUser() {
  try {
    const response = await axios.get(URL);
    const path = response.data.data;

  }
  catch(err) {
    err.innerHTML = 'Couldnt get user account'
  }
}
getUser;

async function addUser(userData){
  try {
    const saveServer = await axios.post(URL, userData);
    document.getElementById('#name').value = '';
    document.getElementById('#age').value = 0;
  }
  catch(err) {
    err.innerHTML = 'Cannot save profile';
  }
}

async function deleteUser(){
  try {
    const deleteUser = await axios.delete('https://test-users-api.herokuapp.com/users/'+`${id}`);

  }
  catch(err) {
    err.innerHTML = 'Cannot delete an account';

  }

}
