-- Adminer 4.8.1 MySQL 8.2.0 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `Product`;
CREATE TABLE `Product` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` char(30) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Name` (`Name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Product` (`ID`, `Name`) VALUES
(9,	'Гвозди'),
(6,	'Жалюзи'),
(7,	'Камера наружная'),
(12,	'Краска \"Цветочек\"'),
(2,	'Обои'),
(1,	'Отвертка'),
(3,	'Перчатки строительные - 1'),
(4,	'Перчатки строительные - 2'),
(5,	'Плитка-мозайка'),
(11,	'Ручка оконная'),
(8,	'Стекло'),
(15,	'Стремянка'),
(10,	'Цемент \"100\"'),
(13,	'Цемент \"200\"'),
(16,	'Шурупы');

DROP TABLE IF EXISTS `Shop`;
CREATE TABLE `Shop` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Name` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Address` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Address` (`Address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Shop` (`ID`, `Name`, `Address`) VALUES
(1,	'Бенилюкс',	'Ржевский просп., 22'),
(2,	'Бенилюкс',	' Владимирский просп., 19'),
(3,	'Азбука ремонта',	'Новочеркаский просп., 26'),
(4,	'Леруа Мерлен',	'Рабочая ул., 17'),
(5,	'Гарант',	'Суворовский удица, 15'),
(6,	'Стройка',	'Райский просп., 82'),
(7,	'Петрович',	'Мажайское шоссе, 10'),
(12,	'Петрович',	'Таганка, 22'),
(13,	'OBI',	'Арбат, 1');

DROP TABLE IF EXISTS `Shop_Product`;
CREATE TABLE `Shop_Product` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ID_Shop` int NOT NULL,
  `ID_Product` int NOT NULL,
  `Price` float NOT NULL,
  `Count` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_Product` (`ID_Product`),
  KEY `ID_Shop` (`ID_Shop`),
  CONSTRAINT `shop_product_ibfk_1` FOREIGN KEY (`ID_Product`) REFERENCES `Product` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `shop_product_ibfk_2` FOREIGN KEY (`ID_Shop`) REFERENCES `Shop` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Shop_Product` (`ID`, `ID_Shop`, `ID_Product`, `Price`, `Count`) VALUES
(1,	4,	7,	240,	94),
(2,	5,	8,	90,	70),
(3,	4,	8,	88,	40),
(4,	4,	5,	350,	94),
(5,	4,	10,	50,	2),
(6,	5,	7,	200,	100),
(7,	2,	7,	200,	200),
(9,	1,	9,	300,	98),
(10,	1,	6,	250,	47),
(23,	2,	10,	80,	500),
(24,	2,	11,	480,	30),
(25,	3,	3,	800,	8),
(26,	3,	4,	782,	6),
(27,	12,	16,	0,	100);

-- 2023-12-25 10:01:02