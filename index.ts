import express from 'express';

const app = express();
app.use(express.json());

const port = 3050;


app.get(('/'), (req,res) => {
    res.status(200).send()
});


app.listen(port, () => console.log(`Listening on port: ${port}`));