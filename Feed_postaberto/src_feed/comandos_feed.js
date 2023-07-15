export default comentario

class comentario {
   
    constructor(comment_id,post_id,user_id, content_comments){
        this.comment_id = comment_id
        this.post_id = post_id
        this.user_id = user_id
        this.content_comments = content_comments
    }

}

const comentario = new comentario()