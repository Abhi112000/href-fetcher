
import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { fetchHrefData } from './routes/fetch.js'; // Ensure this path is correct

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Your existing endpoint to fetch href data
app.post('/fetch-href-data', async (req, res) => {
    const { url } = req.body;
    // Call your function to fetch href data from the URL
    await fetchHrefData(url);
    res.status(200).send({ message: 'Data fetched successfully' });
});

// Endpoint to get URL and label data from JSON file
app.get('/get-url-data', async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../extractedURLFile/URL_and_Label_pro.json'); // Adjust the path accordingly
        const data = await fs.readFile(filePath, 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('Error reading URL data:', error);
        res.status(500).send({ message: 'Error reading URL data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
