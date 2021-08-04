const { response, request } = require('express');
const connection = require('../database/database');

const verEmpleados = (req, res) => {
    connection.query('SELECT * FROM employees', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
};

const empleadoPorId = (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

const crearEmpleado = (req, res) => {

    const { id, name, salary } = req.body;
    const newEmployee = { id, name, salary };

    connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, result, fields) => {
        if(result[0]) {
            res.json(`Ya existe un empleado con el id ${id}`);
        } else {
            connection.query('INSERT INTO employees SET ?', [newEmployee], (err, rows, fields) =>{
                if(!err) {
                    res.json({Status: `Employee Saved`});
                } else {
                    console.log(err);
                }
            });
        }
    });
    
};

const actualizarEmpleado = (req, res) => {

    const { name, salary } = req.body;
    const { id } = req.params;

    connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, result, fields) => {
        if(!result[0]) {
            res.json(`No existe ningún empleado con el id ${id}`);
        } else {
            connection.query('UPDATE employees SET name=?, salary=? WHERE id=?', [name, salary, id], (err, rows, fields) =>{
                if(!err) {
                    res.json({Status: `Employee Updated`});
                } else {
                    console.log(err);
                }
            });
        }
    });
};

const eliminarEmpleado = (req, res) => {

    const { id } = req.params;

    connection.query('SELECT * FROM employees WHERE id = ?', [id], (err, result, fields) => {
        if(!result[0]) {
            res.json(`No existe ningún empleado con el id ${id}`);
        } else {
            connection.query('DELETE FROM employees WHERE id=?', [id], (err, rows, fields) =>{
                if(!err) {
                    res.json({Status: `Employee Deleted`});
                } else {
                    console.log(err);
                }
            });
        }
    });
};


module.exports = {
    verEmpleados,
    empleadoPorId,
    crearEmpleado,
    actualizarEmpleado,
    eliminarEmpleado
};