const Layout = require('./Layout');
const React = require('react');

module.exports = function AdminRate({ title, rate }) {
  console.log(rate[0].Person);
  return (
    <Layout title={title}>
      <div className="rate">
        {rate.map((el) => (
          <div className="rateCard1">
            <form className="UpdateRate" action={`/api/adminRate/bdRate/${el.id}`} data-id={el.id}>
              <div className="row">
                <div className="deti">{el.Person.name}</div>
                <div className="input">
                  <div className="Weekdays">Будни</div>
                  <input
                    name="weekend"
                    id="weekend"
                    className="validate"
                    required
                    defaultValue={el.weekend}
                  />
                </div>
              </div>
              <div className="row">
                <div className="input">
                  <div className="day off">Выходные</div>
                  <input
                    name="dayOff"
                    id="dayOff"
                    className="validate"
                    required
                    defaultValue={el.dayOff}
                  />
                </div>
              </div>
              <button className="btn" type="submit">
                <i className="btn1">Изменить</i>
              </button>
            </form>
          
          </div>
        ))}
        <div className="textOk"></div>
      </div>
    </Layout>
  );
};
