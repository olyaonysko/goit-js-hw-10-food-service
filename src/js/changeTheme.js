const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  input: document.querySelector('.js-switch-input'),
  body: document.querySelector('body'),
};

refs.input.addEventListener('click', changeTheme);

function changeTheme(event) {
  if (event.target.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
    return;
  }
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === Theme.DARK) {
  refs.input.checked = true;
  refs.body.classList.add(Theme.DARK);
} else {
  refs.input.checked = false;
  refs.body.classList.add(Theme.LIGHT);
}
