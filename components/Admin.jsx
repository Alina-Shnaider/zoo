const Layout = require('./Layout');
const React = require('react');

module.exports = function Admin({ title }) {
  return (
    <Layout title={title}>
      <div className="rate">
        <div className="rateCard1">
          <form className="login" action="/api/auth/login" method="POST">
            <div className="row">
              <div className="deti">Регистрация</div>
              <div className="input">
                <div className="Weekdays">Логин</div>
                <input name="name" id="name" className="validate" required />
              </div>
            </div>
            <div className="row">
              <div className="input">
                <div className="day off">Пароль</div>
                <input name="password" id="name" className="validate" required />
              </div>
            </div>
            <button className="btn" type="submit">
              <i className="btn1">Вход</i>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
