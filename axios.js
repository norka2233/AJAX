const URL = 'https://test-users-api.herokuapp.com/users/';

async function getUser() {
  try {
    const response = await axios.get(URL);
    const path = response.data.data;
      if(response.status === 200){
        renderUser(path);
      }else {
        throw new Error();
      }
  }
  catch(err) {
    err.innerHTML = 'Couldnt get user account'
  }
}
getUser();

async function addUser(userData){
  try {
    const saveServer = await axios.post(URL, userData);
    if (SaveToServer.status == 200) {
      renderUserCard({
        ...SaveToServer.data.data,
        id: SaveToServer.data.data._id})
            }
    else{
      throw new Error();
    }
    document.getElementById('#name').value = '';
    document.getElementById('#age').value = 0;
  }
  catch(err) {
    err.innerHTML = 'Cannot save profile';
  }
}

async function deleteUserFromServer(id, userProfile){
  try {
    const deleteUser = await axios.delete('https://test-users-api.herokuapp.com/users/'+`${id}`);
    if (deleteUser.status === 200) {
        userProfile.remove();
    }
    else {
      throw new Error();
    } 
  }
  catch(err) {
    err.innerHTML = 'Cannot delete an account';

  }

}
