const updRate = document.querySelectorAll('.UpdateRate');

if (updRate) {
  updRate.forEach((el) =>
    el.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { weekend, dayOff, action } = e.target;

      // const { id } = e.target.dataset;
      // const  id  = e.target.dataset.id;
      const res = await fetch(action, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          weekend: weekend.value,
          dayOff: dayOff.value,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (data.message === 'ok') {
        const div = document.querySelector('.textOk');
        console.log(div);
        div.innerHTML = 'Изменения успешно сохранены';
        function set() {
          document.querySelector('.textOk').innerText = '';
        }
        setTimeout(set, 2000);
      }
    })
  );
}
