import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class feed{

     async adicionarComentario( post_id, user_id, content_comments){

        return await prisma.coments.create({
        data: {
            user_id, 
            content_comments

        }
       })

    }
    async listarComentarios(){
        return await prisma.coments.findMany();
    
};

}

export default feed
