const express = require('express');
const router = express.Router();
const { verEmpleados,
        empleadoPorId,
        crearEmpleado,
        actualizarEmpleado,
        eliminarEmpleado } = require('../controllers/employees');



router.get('/', verEmpleados);

router.get('/:id', empleadoPorId);

router.post('/', crearEmpleado);

router.put('/:id', actualizarEmpleado);

router.delete('/:id', eliminarEmpleado);


module.exports = router;