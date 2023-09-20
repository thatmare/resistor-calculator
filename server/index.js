import app from './app.js';
import cors from 'cors';

app.use(cors());

app.get('/api', (req, res) => {
    res.json({
        "users": ['userOne', 'userTwo', 'userThree']
    })
});

app.listen(5000, () => {
    console.log('Server started on port 5000')
});