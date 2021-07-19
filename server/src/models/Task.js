import mongoose from 'mongoose';

//defining a structure how our data entity will look
const taskSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    images: {
        small: {
            type: String,
            default: true,
        },
        forArticles: {
            ype: String,
            default: [],
        },
    },
    shortText: {
        type: String,
        default: true, 
    },
    middleText: {
        type: String,
        default: true, 
    },
    longText: {
        type: String,
        default: true, 
    },
    slug: {
        type: String,
        default: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

//create a module
const task = mongoose.model('Tasks', taskSchema);

export default task;
