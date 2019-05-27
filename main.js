const createBtn = document.querySelector('#button');
const userContainer = document.querySelector('.user-container');
const err = document.querySelector('.err');


createBtn.addEventListener('click', saveUser);
function saveUser() {
  const age = document.querySelector('#age').value;
  const name = document.querySelector('#name').value;

  if(name == NaN){
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
  addUser(userData);
}

function renderUserProfile(user) {
  users.forEach(user => {
    const userProfile = document.createElement('div');
    userProfile.classList.add('user-profile')
    userContainer.appendChild(userProfile);

    userProfile.innerHTML =
    `<input type="submit" value ="${user.name}" class="input"></input>
    <input type="submit" value ="${user.age}"class="input"></input>`


    const userDelete = documensuchkat.createElement('button');
    userDelete.classList.add('delete-button');
    userDelete.innerHTML = 'Delete';

    userProfile.appendChild(userDelete);

    userDelete.addEventListener('click', () => {
      deleteUserFromServer(user.id, userProfile);
  })
})
}


function renderUser(path){
  path.forEach(el => renderUserProfile(el));
}
