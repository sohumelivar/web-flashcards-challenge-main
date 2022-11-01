const regForm = document.querySelector('#regForm');

regForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const username = event.target.username.value;
  const password = event.target.password.value;
  const obj = { email, username, password };
  const response = await fetch('/registration_form', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  if (response.status === 403) {
    window.location.href = '/registration_form?error=incorrect';
  } else {
    const a = await response.json();
    window.location.href = `/profile/${a.id}`;
  }
});

const playBtn = document.querySelector('#playBtn');
playBtn?.addEventListener('click', () => {
  window.location.href = '/decks';
});

const backBtn = document.querySelector('.back');
backBtn?.addEventListener('click', () => {
  window.location.href = '/';
});
