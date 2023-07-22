import feed from './feed_service.js'
import { Router } from 'express'

const Coment = new feed();
const router = Router();


router.post("/comentar", async (request,response)=>{
    const{  user_id, content_comments} = request.body;
    try{
        const novoComentario =  await Coment.adicionarComentario(  user_id, content_comments)
        response.status(201).json(novoComentario)
    }
    catch(err){
        response.status(400).json({erro: err.message});
    }
    

})

router.get('/comentario',async (request, response) => {
    const lista = await Coment.listarComentarios();
    response.status(200).json(lista);

})

export default router