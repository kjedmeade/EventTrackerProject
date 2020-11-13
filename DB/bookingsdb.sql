-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bookingsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `bookingsdb` ;

-- -----------------------------------------------------
-- Schema bookingsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bookingsdb` DEFAULT CHARACTER SET utf8 ;
USE `bookingsdb` ;

-- -----------------------------------------------------
-- Table `bookings`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bookings` ;

CREATE TABLE IF NOT EXISTS `bookings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL DEFAULT 'null',
  `last_name` VARCHAR(45) NULL DEFAULT 'null',
  `email` VARCHAR(45) NULL DEFAULT 'null',
  `photo_type` VARCHAR(45) NULL DEFAULT 'null',
  `location` VARCHAR(45) NULL DEFAULT 'null',
  `duration` INT NULL DEFAULT NULL,
  `notes` VARCHAR(100) NULL DEFAULT 'null',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS bookingsuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'bookingsuser'@'localhost' IDENTIFIED BY 'bookingsuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'bookingsuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `bookings`
-- -----------------------------------------------------
START TRANSACTION;
USE `bookingsdb`;
INSERT INTO `bookings` (`id`, `first_name`, `last_name`, `email`, `photo_type`, `location`, `duration`, `notes`) VALUES (1, 'Craig', 'Martin', 'j.craig@yahoo.com', 'Portrait', 'San Diego, CA', 2, 'Booked family portrait session');
INSERT INTO `bookings` (`id`, `first_name`, `last_name`, `email`, `photo_type`, `location`, `duration`, `notes`) VALUES (2, 'Jill', 'Mitchell', 'jillmitchell@gmail.com', 'Wedding', 'San Diego, CA', 8, 'More details to come');
INSERT INTO `bookings` (`id`, `first_name`, `last_name`, `email`, `photo_type`, `location`, `duration`, `notes`) VALUES (3, 'Carla', 'Lee', 'carlalee@gmail.com', 'Portrait', 'Denver, CO', 2, 'Booked family portait session');
INSERT INTO `bookings` (`id`, `first_name`, `last_name`, `email`, `photo_type`, `location`, `duration`, `notes`) VALUES (4, 'Kristy', 'Collins', 'kcollins@gmail.com', 'Portrait', 'Denver, CO', 2, 'Newborn portrait session');
INSERT INTO `bookings` (`id`, `first_name`, `last_name`, `email`, `photo_type`, `location`, `duration`, `notes`) VALUES (DEFAULT, NULL, NULL, NULL, '', '', 2, NULL);
INSERT INTO `bookings` (`id`, `first_name`, `last_name`, `email`, `photo_type`, `location`, `duration`, `notes`) VALUES (DEFAULT, NULL, NULL, NULL, NULL, '', NULL, NULL);

COMMIT;

