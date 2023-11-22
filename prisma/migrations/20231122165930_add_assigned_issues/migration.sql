-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `assginedToUserId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_assginedToUserId_fkey` FOREIGN KEY (`assginedToUserId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
