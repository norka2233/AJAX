const createBtn = document.querySelector('#button');
const userContainer = document.querySelector('.user-container');
const err = document.querySelector('.err');


createBtn.addEventListener('click', saveUser);
function saveUser() {
  const age = document.querySelector('#age').value;
  const name = document.querySelector('#name').value;

  if(isNaN(name)){
    err.innerHTML = 'incorrect name';
    return false;
  }
  if(!(age > 1 && age < 150)){
    err.innerHTML = 'incorrect age';
    return false;
  }
  const userData = {
    name,age
  }
  addUser(userData)
    .then((user) => {
      document.getElementById('name').value = '';
      document.getElementById('age').value = 0;
      renderUserProfile(user);
    })
    .catch(err => {
      console.log(err);
      // insert error into html
    })
}
}

function renderUserProfile(user) {
  // user.forEach(user => {
    const userProfile = document.createElement('div');
    userProfile.classList.add('user-profile');
    userContainer.appendChild(userProfile);

    userProfile.innerHTML =
    `<input type="submit" value ="${user.name}" class="input"></input>
    <input type="submit" value ="${user.age}"class="input"></input>`


    const userDelete = document.createElement('button');
    userDelete.classList.add('delete-button');
    userDelete.innerHTML = 'Delete';

    userProfile.appendChild(userDelete);

    userDelete.addEventListener('click', () => {
      deleteUserFromServer(user.id, userProfile);
  })
}
// }


function renderUser(path){
  path.forEach(el => renderUserProfile(el));
}
