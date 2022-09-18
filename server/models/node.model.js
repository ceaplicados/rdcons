const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: false },
    type: { type: String, required: true },
}, {
    timestamps: true,
});

const Node = mongoose.model('Node', nodeSchema);

module.exports = Node;
