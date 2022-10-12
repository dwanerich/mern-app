import SneakerModal from '../models/sneaker.js'

export const createSneaker = async (req,res) =>{
  const sneaker = req.body;
  const newSneaker = new SneakerModal({
    ...sneaker,
    createdAt: new Date().toISOString()
  })

  try {
      await newSneaker.save()
      res.status(201).json(newSneaker)

  }
  catch (error){
    res.status(404).json({ message: "Something went wrong" })
  }
}

export const getSneakers = async(req,res) => {
  try {
    const sneakers = await SneakerModal.find()
    res.status(201).json(sneakers)
  }
  catch (error) {
    res.status(404).json({ message: "Failed fetching Sneakers"})
  }
}
