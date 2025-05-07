-- CreateTable
CREATE TABLE `user_tb` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `userFullname` VARCHAR(100) NOT NULL,
    `userBirthDate` VARCHAR(100) NOT NULL,
    `userName` VARCHAR(50) NOT NULL,
    `userPassword` VARCHAR(50) NOT NULL,
    `userImage` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `money_tracking_tb` (
    `moneyId` INTEGER NOT NULL AUTO_INCREMENT,
    `moneyDetail` VARCHAR(100) NULL,
    `moneyDate` VARCHAR(100) NULL,
    `moneyInOut` DOUBLE NOT NULL,
    `moneyType` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`moneyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
