import comentario from './comandos_feed.js'


class comentarios{
    comentario = {}

    adicionarComentario(comment_id,post_id,user_id,content_comments){
            const novoComentario = new comentario(comment_id,post_id,user_id,content_comments)
            this.comentario[comment_id] = novoComentario
    }
    
}