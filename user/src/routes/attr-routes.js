const express = require('express')
const GlbAttrs = require('../database/models/ModelAttr')
const auth = require('../utils/auth')
const routes = express.Router()

routes.post('/attr/upload', auth, async (req, res) => {
    const newGlbAttr= req.body

    const fieldsToAdd = Object.keys(newGlbAttr)
    const fieldsInModel = ['name', 'url', 'size', 'encrypted', 'timestamp']
    const isAdditionAllowed = fieldsToAdd.every((field) => fieldsInModel.includes(field))

    if (!isAdditionAllowed) {
        return res.status(400).send({ error: 'Invalid fields to Add!' })
    }

    try {
        const glbattr = await GlbAttrs({
            ...newGlbAttr,
            user: req.user._id,
        })

        await glbattr.save()

        res.send({ glbattr })
    }
    catch (e) {
        res.status(400).send(e)
    }
})

routes.post('/attr/history', auth, async (req, res) => {
    try {

        const glbattrs = await GlbAttrs.find({
            user: req.user._id
        })

        res.send(glbattrs)
    }
    catch (e) {
        res.status(500).send
    }
})

/*routes.patch('/todo/update', auth, async (req, res) => {
    const changedTodo = req.body
    const fieldsToUpdate = Object.keys(changedTodo)
    const fieldsInModel = ['_id', 'important', 'done']
    const isUpdateAllowed = fieldsToUpdate.every((field) => fieldsInModel.includes(field))

    if (!isUpdateAllowed) {
        return res.status(400).send({ error: 'Invalid fields to update!' })
    }
    const updateObj = {}
    if (changedTodo.hasOwnProperty("important")) {
        updateObj.important = changedTodo.important
    }

    if (changedTodo.hasOwnProperty("done")) {
        updateObj.done = changedTodo.done
    }

    try {
        const todo = await ToDos.findByIdAndUpdate({
                _id: changedTodo._id,
                user: req.user._id,
            },
            updateObj,
            { new: true, runValidators: true })

        if (!todo) { return res.status(404).send() }

        res.send(todo)

    } catch (e) {
        res.status(400).send(e)
    }
})*/

/*routes.delete('/todo/delete', auth, async (req, res) => {
    try {
        const todo = await ToDos.findById(req.body._id)

        await todo.remove()
        res.send(todo)

    } catch (e) {
        res.status(500).send()
    }
})*/

module.exports = routes
