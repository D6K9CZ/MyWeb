// Jazykové přepínání
const langSwitch = document.querySelectorAll('.lang-switch');
langSwitch.forEach(btn => {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('lang-en');
  });
});

// Dynamický formulář – zobraz další pole dle výběru služby
const serviceSelect = document.querySelector('#service-select');
const dynamicFields = document.querySelector('#dynamic-fields');

if (serviceSelect) {
  serviceSelect.addEventListener('change', () => {
    const value = serviceSelect.value;
    dynamicFields.innerHTML = '';

    if (value === 'Masáže') {
      dynamicFields.innerHTML = `
        <label for="typ-masaze">Typ masáže</label>
        <select id="typ-masaze">
          <option>Záda</option>
          <option>Šíje</option>
          <option>Nohy</option>
          <option>Ruce</option>
          <option>Hrudník</option>
        </select>
        <label for="termin">Preferovaný termín</label>
        <input type="text" id="termin" placeholder="např. příští týden večer">
      `;
    }
    // další podmínky můžeš přidat pro jiné služby
  });
}

// Lazy loading efekt (fade-in při scrollování)
const fadeElems = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));

// WhatsApp button scroll fix
const whatsappBtn = document.getElementById('whatsapp-btn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    window.open('https://wa.me/420123456789', '_blank');
  });
}
