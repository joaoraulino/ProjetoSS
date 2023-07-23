-- CreateTable
CREATE TABLE "coments" (
    "comment_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "post_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "content_comments" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "coments_post_id_key" ON "coments"("post_id");
