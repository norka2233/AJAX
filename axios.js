const URL = 'https://test-users-api.herokuapp.com/users/';

async function getUser() {
  try {
    const response = await axios.get(URL);
    const path = response.data.data;
      if(response.status === 200){
        renderUser(path);
      }
      else {
        throw new Error();
      }
  }
  catch(err) {
    err.innerHTML = 'Couldnt get user account'
  }
}
getUser();

function addUser(userData){
  return new Promise(async (resolve, reject) => {
    try {
      const saveServer = await axios.post(URL, userData);
      if (saveServer.status === 200) {
          return resolve({
            ...saveServer.data.data,
            id: saveServer.data.data._id,
          });
      } else {
        return reject(new Error('Something went wrong!'))
      }
    } catch(err) {
      return reject(new Error('Cannot save profile'));
    }
  });
}
// async function addUser(userData)
//     .then((user) => {
//       document.getElementById('name').value = '';
//       document.getElementById('age').value = 0;
//       renderUserProfile(user);
//     })
//     .catch(err => {
//       console.log(err);
//       // insert error into html
// }
// });
// }

async function deleteUserFromServer(id,userProfile){
  try {
    const deleteUser = await axios.delete('https://test-users-api.herokuapp.com/users/'+`${id}`)
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
