import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`Server is up and listening on port ${port}`);
});

app.get('/home', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'Hello there',
  });
});

export default app;
