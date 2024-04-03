const { Car } = require("../models");

const getCar = async (req, res) => {
    try {
        const car = await Car.findAll();

        res.render("customers/index.ejs", {
            customers,
            message: req.flash("message", ""),
        });
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

const createCustomerPage = async (req, res) => {
    try {
        res.render("customers/create.ejs");
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

const createCar = async (req, res) => {
    try {
        const newCar = await Car.create(req.body);
        console.log("Car created successfully")
        console.log(newCar);
        res.status(200).json({
            status: "success",
            data: {
                newCar,
            },
        });
    } catch (err) {
        console.log(err.message);
        res.status(400).json({
            status: "error",
            message: err.message
        })
    }
};

const editCustomerPage = async (req, res) => {
    try {
        const customer = await Customer.findByPk(req.params.id);

        res.render("customers/edit.ejs", {
            customer,
        });
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

const editCustomer = async (req, res) => {
    try {
        await Customer.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        req.flash("message", "Diedit");
        res.redirect("/customers");
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        await Customer.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.redirect("/customers");
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

module.exports = {
    createCustomerPage,
    createCar,
    editCustomerPage,
    editCustomer,
    deleteCustomer,
};