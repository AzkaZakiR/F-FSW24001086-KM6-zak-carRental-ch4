const { Car } = require("../models");

const getCar = async (req, res) => {
    try {
        const car = await Car.findAll();

        // res.render("customers/index.ejs", {
        //     customers,
        //     message: req.flash("message", ""),
        // });
        res.status(200).json({
            status: "success",
            dataLength: car.length,
            data: car
        })
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};
const carPage = async (req, res) => {
    try {
        const cars = await Car.findAll();

        res.render("cars/car.ejs", {
            cars,
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

const editCar = async (req, res) => {
    try {
        await Car.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            status: "success",
            message: "Car successfully updated"
        })
        // req.flash("message", "Diedit");
        // res.redirect("/customers");
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

const deleteCar = async (req, res) => {
    try {
        await Car.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.status(200).json({
            status: "success",
            message: "Car deleted"
        })
        // res.redirect("/customers");
    } catch (err) {
        res.render("error.ejs", {
            message: err.message,
        });
    }
};

module.exports = {
    getCar,
    carPage,
    createCustomerPage,
    createCar,
    editCustomerPage,
    editCar,
    deleteCar,
};