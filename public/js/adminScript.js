const addRate = document.querySelector('.form');

if (addRate) {
  addRate.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, url, description, price } = e.target;
    const { id } = e.target.dataset;
    // const  id  = e.target.dataset.id;
    const res = await fetch(`/api/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        url: url.value,
        price: price.value,
        description: description.value,
      }),
    });
    const data = await res.json();
    if (data.productUpd[0] > 0) {
      window.location.href = '/products';
    }
  });
}
