-- CreateTable
CREATE TABLE "coments" (
    "comment_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "post_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "comment_content" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "coments_post_id_key" ON "coments"("post_id");

-- CreateIndex
CREATE UNIQUE INDEX "coments_user_id_key" ON "coments"("user_id");
