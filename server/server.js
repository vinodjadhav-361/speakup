const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const tweetRoutes = require('./routes/tweets');
const userRoutes = require('./routes/users');
const messageRoutes = require('./routes/messages');
const notificationRoutes = require('./routes/notifications');
const bookmarkRoutes = require('./routes/bookmarks');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tweets', tweetRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/bookmarks', bookmarkRoutes);

mongoose.connect('mongodb://localhost:27017/speakup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

