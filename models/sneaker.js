import mongoose from "mongoose";

const sneakerSchema = mongoose.Schema({
  title: String,
  size: String,
  condition: String,
  name: String,
  creator: String,
  tags: [String],
  imageUrl: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  likeCount: {
    type: Number,
    default: 0
  }
})
const SneakerModal = mongoose.model("Sneaker",sneakerSchema)
export default SneakerModal
