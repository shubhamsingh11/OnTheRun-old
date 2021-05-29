import express from 'express';
import mongoose from 'mongoose';

const app = express();

const ConnectionURL = "mongodb+srv://shubham1109:KkWrSEthEW57KHOz@cluster0.iwcwr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000 ;

mongoose.connect(ConnectionURL , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT , () => console.log(`Server Running on PORT : http://localhost:${PORT}`)))
    .catch(() => console.log(`${error} Port did not connect`));
