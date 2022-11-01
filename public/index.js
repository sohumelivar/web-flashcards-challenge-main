document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const username = event.target.username.value;
  const password = event.target.password.value;
  const obj = { email, username, password };
  // console.log('=========>', obj);
  // const formStat = event.target;
  const response = await fetch('/registration_form', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  console.log('===>', response);
  // console.log(await response.json());
  if (response.status === 403) {
    window.location.href = '/registration_form?error=incorrect';
  } else {
    window.location.href = 'https://translate.google.com/';
  }
});
