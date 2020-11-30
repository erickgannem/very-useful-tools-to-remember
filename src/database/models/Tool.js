import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const toolSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const Tool = model('Tool', toolSchema);

export default Tool;
