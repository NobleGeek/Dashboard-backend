import dotenv from 'dotenv'
import connectDB from './DB/index.js'
import {app} from './app.js'

dotenv.config({
    path: '../env'
  }
)

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error('DB connection failed:', err);
  });