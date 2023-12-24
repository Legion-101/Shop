-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 25 2023 г., 00:37
-- Версия сервера: 8.0.34
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `shop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Product`
--

CREATE TABLE `Product` (
  `ID` int NOT NULL,
  `Name` char(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Product`
--

INSERT INTO `Product` (`ID`, `Name`) VALUES
(16, '1212'),
(9, 'Авокадо'),
(6, 'Ананас'),
(10, 'Киви'),
(13, 'Конфеты \'Ириска\''),
(5, 'Конфеты \"Ferrero Mon Cheri\"'),
(2, 'Конфеты \"Ferrero Rocher\"'),
(1, 'Конфеты \"Raffaello\"'),
(7, 'Мороженое Oreo'),
(12, 'Ореховая паста Milka'),
(11, 'Помело'),
(3, 'Торт \"Медовик\"'),
(4, 'Торт \"Наполеон\"'),
(15, 'Чупачупс'),
(8, 'Шоколад Milka молочный');

-- --------------------------------------------------------

--
-- Структура таблицы `Shop`
--

CREATE TABLE `Shop` (
  `ID` int NOT NULL,
  `Name` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Address` char(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Shop`
--

INSERT INTO `Shop` (`ID`, `Name`, `Address`) VALUES
(1, 'Перекресток', 'Каменноостровский просп., 10'),
(2, 'EUROSPAR', ' Владимирский просп., 19'),
(3, 'Азбука вкуса', ' Литейный просп., 26'),
(4, 'ВкусВилл', ' 7-я Советская ул., 18/21'),
(5, 'Пятерочка', 'Суворовский просп., 10'),
(6, 'Магнит', 'Невский просп., 158'),
(7, 'Пятерочка', 'Тихорецкий пр. 10'),
(12, 'магазин 1', 'ул 1'),
(13, 'магазин 1', 'ул 2'),
(14, 'магазин 3', 'ул 3'),
(15, '111', '222'),
(16, 'wsq', 'da'),
(17, 'aaa', 'aaa'),
(18, 'bbb', 'bbb');

-- --------------------------------------------------------

--
-- Структура таблицы `Shop_Product`
--

CREATE TABLE `Shop_Product` (
  `ID` int NOT NULL,
  `ID_Shop` int NOT NULL,
  `ID_Product` int NOT NULL,
  `Price` float NOT NULL,
  `Count` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `Shop_Product`
--

INSERT INTO `Shop_Product` (`ID`, `ID_Shop`, `ID_Product`, `Price`, `Count`) VALUES
(1, 4, 7, 240, 94),
(2, 5, 8, 90, 70),
(3, 4, 8, 88, 40),
(4, 4, 5, 350, 94),
(5, 4, 10, 50, 2),
(6, 5, 7, 200, 100),
(7, 2, 7, 200, 200),
(9, 1, 9, 300, 98),
(10, 1, 6, 250, 47),
(23, 2, 10, 80, 500),
(24, 2, 11, 480, 30),
(25, 3, 3, 800, 8),
(26, 3, 4, 782, 6),
(27, 12, 16, 0, 100);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Product`
--
ALTER TABLE `Product`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Name` (`Name`);

--
-- Индексы таблицы `Shop`
--
ALTER TABLE `Shop`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Address` (`Address`);

--
-- Индексы таблицы `Shop_Product`
--
ALTER TABLE `Shop_Product`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Product` (`ID_Product`),
  ADD KEY `ID_Shop` (`ID_Shop`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Product`
--
ALTER TABLE `Product`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `Shop`
--
ALTER TABLE `Shop`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `Shop_Product`
--
ALTER TABLE `Shop_Product`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Shop_Product`
--
ALTER TABLE `Shop_Product`
  ADD CONSTRAINT `shop_product_ibfk_1` FOREIGN KEY (`ID_Product`) REFERENCES `Product` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `shop_product_ibfk_2` FOREIGN KEY (`ID_Shop`) REFERENCES `Shop` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
