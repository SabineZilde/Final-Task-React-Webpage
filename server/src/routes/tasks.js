import express from 'express';
import Task from '../models/Task.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = Task.find({}); // {} empty object - to find all the data
        const tasks = await query.exec();

        res.json(tasks);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params; // destructuring id from requirement parameters
    // update the task 
    try {
        const query = Task.findById(id);
        const task = await query.exec();

        //if task doesn't exist
        if (!task) {
            res.status(404).json({ notFound: true });
            return;
        }
        //updating, modifying the object properties
        task.title = req.body.title;
        task.image = req.body.image;
        task.shortText = req.body.shortText;
        task.middleText = req.body.middleText;
        task.longText = req.body.longText;
        task.slug = req.body.slug;


        res.json(task);

    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.post('/', async (req, res) => {
    const newTaskData = {
        title: req.body.title,
        image: req.body.image,
        shortText: req.body.shortText,
        middleText: req.body.middleText,
        longText: req.body.longText,
        tslug: req.body.slug,
    };
    const task = new Task(newTaskData); // Task is a Class
    try {
        const taskEntity = await task.save(); // by calling save method we are telling it to save in database
        res.json(taskEntity);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params; // destructuring id from requirement parameters
    // update the task 
    try {
        const query = Task.findById(id);
        const task = await query.exec();

        //if task doesn't exist
        if (!task) {
            res.status(404).json({ notFound: true });
            return;
        }
        //updating, modifying the object properties
        task.title = req.body.title;
        task.labels = req.body.labels;
        task.isCompleted = req.body.isCompleted;

        await task.save(); // triggers the save in the db
        res.json(task);

    } catch (e) {
        res.json({ error: true, message: e });
    }
    // res.json({ success: true });
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query = Task.deleteOne({
            _id: id
        });
        await query.exec();
        res.json({ success: true });

    } catch (e) {
        res.json({ error: true, message: e });
    }
});

export default router;