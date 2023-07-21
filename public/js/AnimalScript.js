const AddForm = document.getElementById('addForm');
const AnimalsList = document.querySelector('.row_animalsList');

if (AnimalsList) {
  AnimalsList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('deleteAnimal')) {
      const res = await fetch('/animals');
    }
  });
}

if (AddForm) {
  AddForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, description, action, method, image } = e.target;
    const res = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        image: image.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    if (data.html) {
      AnimalsList.insertAdjacentHTML('afterbegin', data.html);
    }
    if (data.message) {
      document.querySelector('errorAdd').innerHTML(data.message);
    }
  });
}
