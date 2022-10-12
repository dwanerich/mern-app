// express server set up

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import morgan from 'morgan';
import userRouter from './routes/user.js'
import sneakerRouter from './routes/sneaker.js'





const app = express();

app.use(morgan('dev'))
app.use(express.json({limit: "30mb", extended: true }));
app.use(express.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/users', userRouter)
app.use('/sneaker', sneakerRouter)




// app.get('/', (req, res) => {
  // res.send('Hello Express')
// });

const PORT = 2000;

// app.listen(PORT, () => {
//   console.log(`server running on port: ${PORT}`)
// })

const CONNECTION_URL = 'mongodb+srv://RichPerez:RichPerez301@cluster0.ccji2pp.mongodb.net/?retryWrites=true&w=majority';

await mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));
