-- CreateTable
CREATE TABLE "public"."admin" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "password" VARCHAR(256) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "image" VARCHAR(256) NOT NULL,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL,
    "slug" VARCHAR(256),

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."product" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "material" VARCHAR(256),
    "slug" VARCHAR(256),
    "primary_image" VARCHAR(256) NOT NULL,
    "images" JSONB,
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "public"."admin"("email");

-- CreateIndex
CREATE INDEX "category_id" ON "public"."product"("category_id");

-- AddForeignKey
ALTER TABLE "public"."product" ADD CONSTRAINT "fk_product_category" FOREIGN KEY ("category_id") REFERENCES "public"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
