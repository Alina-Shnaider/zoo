const login = document.querySelector('.login');

if (login) {
  login.addEventListener('submit', async (e) => {
    e.preventDefault();
  });
  const { name, password, metod, action } = e.target;
  const res = await fetch(action, {
    metod,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name.value,
      password: password.value,
    }),
  });
  const data = await res.json();
  if (data.message === 'ok') {
    window.location.href = '/';
  }
}
