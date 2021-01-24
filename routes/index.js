const router = require('express').Router();
const authentication = require('../middlewares/authentication');
const productionRouter = require('./productionRouter');
const userRouter = require('./userRouter');

router.get('/', (req, res) => {
    res.send({ message: 'Berhasil deploy heroku'})
})

router.use('/users', userRouter);

router.use('/products', authentication);

router.use('/products', productionRouter);

module.exports = router;