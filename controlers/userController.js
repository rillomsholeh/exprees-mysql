const HttpError = require('../interface/HttpError')
const User = require('../models/users')

const id = async (req, res, next) => {
    try {
        const filter = await User.findByPk(req.params.id)
        if (!filter) {
            res.status(404).json({message: 'Data not Found', code: 404})
        }
        console.log(filter);
        return res.status(200).json({message: 'Success', filter})
    } catch (error) {
        const err = new HttpError('Server Error', 503, 500)
        return next(err)
    }
}

const all = async (req, res, next) => {
    try {
        const data = await User.findAll();
        if (!data) {
            res.status(404).json({message: 'Data Empty please fill data', code: 404})
        }
        console.log(data);
        return res.status(200).json({message: 'Success all', data})
    } catch (error) {
        const err = new HttpError('Server Error', 503, 500)
        return next(err)
    }
}

const create = async (req, res, next) => {
    try {
        const add = await User.create({
            name: 'Charlotte',
            email: 'charlotte@gmail.com',
            address: 'Jakarta'
        })
        console.log(add);
        return res.status(200).json({message: 'Success create', add})
    } catch (error) {
        const err = new HttpError('Server Error', 503, 500)
        return next(err)
    }
}

const update = async (req, res, next) => {
    const id = req.params.id
    try {
        await User.update({
            name : 'Icha', 
            email: 'icha@gmail.com'
        }, {
            where: {
                id
            }
        })
        const updateData = await User.findByPk(req.params.id)
        return res.status(200).json({message: 'Success update', updateData})
    } catch (error) {
        const err = new HttpError('Server Error', 503, 500)
        return next(err)
    }
}

const destroy = async (req, res, next) => {
    const id = req.params.id
    try {
        const clear = await User.destroy({
            where : {
                id
            }
        })
        return res.status(200).json({message: 'Success destroy', clear})
    } catch (error) {
        const err = new HttpError('Server Error', 503, 500)
        return next(err)
    }
}

module.exports = {
    id,
    all,
    create,
    update,
    destroy
}