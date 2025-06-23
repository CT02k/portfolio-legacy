-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_href_key" ON "Project"("href");
