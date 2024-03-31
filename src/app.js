const express = require('express');
const weatherRoutes = require('./api/weather');

const app = express();

app.use(express.json());
app.use('/api/weather', weatherRoutes);

if (require.main === module) {
    const port = process.env.TEST_PORT || 3000;
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = app; // Export for testing
