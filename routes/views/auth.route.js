// const router = require('express').Router();
// const RegistrForm = require('../../components/RegistrForm');

// router.get('/reg', (req, res) => {
//   res.renderComponent(RegistrForm, { title: 'Registr' });
// });
// router.get('/logout', (req, res) => {
//   req.session.destroy((error) => {
//     if (error) {
//       return res.status(500).json({ message: 'Ошибка при удалении сессии' });
//     }

//     res
//       .clearCookie('user_sid') // серверное удаление куки по имени
//       .json({ message: 'Успешный выход' });
//   });
// });

// module.exports = router;
