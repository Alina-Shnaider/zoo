const React = require('react');

module.exports = function AddForm({ title }) {
  return (
    <div className="form_row">
      <div className="s12 pink lighten-4 ">
        <form
          className="addForm"
          id="addForm"
          action="/animals/addAnimal"
          method="POST"
        >
          <div className="row">
            <div className="input-field col s6">
              <input name="name" placeholder="Название животного" required />
            </div>
            <div className="input-field col s6">
              <input name="image" placeholder="ссылка на фотографию" required />
            </div>
            <div className="input-field col s6">
              <input name="description" placeholder="Описание" required />
            </div>
            <button type="submit">Добавить животное</button>
          </div>
          <h2 className='errorAdd'></h2>
        </form>
      </div>
    </div>
  );
};