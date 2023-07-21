const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <nav>
      <div className="nav-wrapper  green darken-4">
        <a href="#" className="brand-logo">
          {user}
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {/* {user ? ( */}
          <>
            <li>
              <a href="/animals">Наши животные</a>
            </li>
            <li>
              <a href="/adminRate">Тарифы</a>
            </li>
            {/* <li className="logout">
                <h3>Logout</h3>
              </li> */}
          </>
          {/* //   ) : (
        //     <li>
        //       <a href="/auth/reg">Регистрация</a>
        //     </li>
        //   )} */}
        </ul>
      </div>
    </nav>
  );
};
