(() => {
  const form = document.getElementById('formAgendamento');
  const ok = document.getElementById('msgSucesso');
  const data = document.getElementById('data');
  data.min = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }
    form.classList.remove('was-validated');
    ok.classList.remove('d-none');
    form.reset();
  });

  // fecha o menu mobile ao clicar em um link
  document.querySelectorAll('.navbar-collapse .nav-link, .navbar-collapse .btn').forEach(l =>
    l.addEventListener('click', () => {
      const c = bootstrap.Collapse.getInstance(document.getElementById('menu'));
      if (c) c.hide();
    })
  );
})();