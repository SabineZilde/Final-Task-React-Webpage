import express from 'express';
import Comment from '../models/Comment.js'

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const query = Comment.find({});
        const comments = await query.exec();

        res.json(comments);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params; 
    try {
        const query = Comment.findById(id);
        const comment = await query.exec();

        if (!comment) {
            res.status(404).json({ notFound: true });
            return;
        }
        comment.username = req.body.username;
        comment.time = req.body.time;
        comment.comment = req.body.comment;
        
        res.json(comment);

    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.post('/', async (req, res) => {
    const newCommentData = {
        username: req.body.username,
        time: req.body.time,
        comment: req.body.comment,
    };
    const comment = new Comment(newCommentData); 
    try {
        const commentEntity = await comment.save();
        res.json(commentEntity);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params; 
    try {
        const query = Comment.findById(id);
        const comment = await query.exec();

        if (!comment) {
            res.status(404).json({ notFound: true });
            return;
        }

        comment.username = req.body.username;
        comment.time = req.body.time;
        comment.comment = req.body.comment;

        await comment.save();
        res.json(comment);

    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const query = Comment.deleteOne({
            _id: id
        });
        await query.exec();
        res.json({ success: true });

    } catch (e) {
        res.json({ error: true, message: e });
    }
});

export default router;