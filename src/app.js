const express = require('express');
const weatherRoutes = require('./api/weather');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/weather', weatherRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app; // Export for testing
