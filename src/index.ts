import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './modules/user/user.routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
