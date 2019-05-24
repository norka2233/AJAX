const createBtn = document.querySelector('#button');
const userContainer = document.querySelector('.user-container');
const userProfile = document.querySelector('user-profile');


createBtn.addEventListener('click', saveUser);
function saveUser() {

  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;

  if(name == NaN){
    return console.log('Incorrect Name');

  }
  if(!(age > 1 && age < 150)){
    return console.log('Incorrect age');
  }
}

function renderUserProfile(user) {
  const userProfile = document.createElement('div');

  userProfile.classList.add('user-profile')
  userContainer.appendChild(userProfile);

  userCard.innerHTML =
  `<input type="submit" value ="${user.name}" class="input"></input>
  <input type="submit" value ="${user.age}"class="input"></input>`
}

const userDelete = document.createElement('button');

userDelete.classList.add('delete-button');
userDelete.innerHTML = 'Delete';

userProfile.appendChild(userDelete);

userDelete.addEventListener('click', () => {
  deleteFull(user.id, userProfile);
})

function renderUser(path){
  path.forEach(el => renderUserProfile(el));
}
