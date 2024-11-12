/*
  Warnings:

  - You are about to drop the column `proprietario` on the `empresa` table. All the data in the column will be lost.
  - You are about to drop the column `ramo` on the `empresa` table. All the data in the column will be lost.
  - You are about to drop the column `setores` on the `empresa` table. All the data in the column will be lost.
  - Added the required column `CNPJ` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Empresa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `Empresa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `empresa` DROP COLUMN `proprietario`,
    DROP COLUMN `ramo`,
    DROP COLUMN `setores`,
    ADD COLUMN `CNPJ` VARCHAR(191) NOT NULL,
    ADD COLUMN `endereco` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NOT NULL,
    MODIFY `nome` VARCHAR(191) NOT NULL;
