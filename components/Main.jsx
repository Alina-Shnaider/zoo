const Layout = require('./Layout');
const React = require('react');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="main">
        <div className="object">
          <img src="https://foni.club/uploads/posts/2023-01/1672556675_foni-club-p-kartinki-na-telefon-zhivotnie-vertikalnie-6.jpg" />
          <div className="text"> Добро пожаловать на сайт нашего зоопарка!<br/>  <br/>Мы ждем Вас в гости с 10:00 до 21:00 <br/> <br/> <br/> <br/> <br/> P.S. Пожалуйста, всегда будьте аккуратны с животными. Не кормите их и не жмякайте руками,ведь у них тоже есть личное пространство</div>
        </div>
      </div>
    </Layout>
  );
};
