import express from 'express';
import router from './feed_controller.js'

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // ou domínio específico
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // ou outros cabeçalhos personalizados
    res.setHeader('Access-Control-Allow-Credentials', true); // se necessário
    next();
});

app.use(router);


app.listen(3000,()=>{
    console.log('servidor funcionando na porta 3000')
});






