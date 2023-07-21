const Layout = require('./Layout');
const React = require('react');

module.exports = function Rate({ title }) {
  return (
    <Layout title={title}>
      <div className="form row">
        <div className="s12 pink lighten-4 ">
          <form className="col s12 addForm" action="/api/products/addProduct" method="POST">
            <div className="row">
              <div className="input-field col s6">
                <input name="name" id="name" className="validate" placeholder="name" required />
              </div>
              <div className="input-field col s6">
                <input name="url" id="url" className="validate" placeholder="url" required />
              </div>
              <div className="input-field col s6">
                <input name="price" id="price" className="validate" placeholder="price" required />
              </div>
              <div className="input-field col s6">
                <input
                  name="description"
                  id="description"
                  className="validate purple-text"
                  placeholder="description"
                  required
                />
              </div>
              <button className="btn waves-effect waves-light purple lighten-3" type="submit">
                add
                <i className="material-icons right"> Clik</i>
              </button>
            </div>
            <h2 className="errorAdd"></h2>
          </form>
        </div>
      </div>
    </Layout>
  );
};
