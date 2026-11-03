
const burger = document.querySelector('.burger');
const nav = document.getElementById('menu');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
  });
}

const filter = document.getElementById('teamFilter');

if (filter) {
  filter.addEventListener('change', () => {
    const team = filter.value;

    document.querySelectorAll('#schedule tbody tr').forEach(row => {
      const hide = team !== 'all' && !row.dataset.teams.includes(team);
      row.classList.toggle('hidden', hide);
    });
  });
}

const form = document.getElementById('joinForm');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      const message = field.parentElement.querySelector('.err');
      const isBad = !field.value.trim() || (field.type === 'email' && !field.checkValidity());

      message.textContent = isBad ? 'Заполните поле: ' + field.dataset.name : '';
      if (isBad) valid = false;
    });

    if (valid) {
      form.classList.add('hidden');
      document.getElementById('done').classList.remove('hidden');
    }
  });
}
