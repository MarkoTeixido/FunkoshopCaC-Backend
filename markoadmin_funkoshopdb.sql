-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql-markoadmin.alwaysdata.net
-- Generation Time: Dec 12, 2023 at 02:09 PM
-- Server version: 10.6.14-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `markoadmin_funkoshopdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(10) UNSIGNED NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_description`) VALUES
(1, 'funkos', NULL),
(2, 'ropa', NULL),
(3, 'accesorios', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `licence`
--

CREATE TABLE `licence` (
  `licence_id` int(10) UNSIGNED NOT NULL,
  `licence_name` varchar(45) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `licence`
--

INSERT INTO `licence` (`licence_id`, `licence_name`, `licence_description`, `licence_image`) VALUES
(1, 'Star Wars', 'dasdadsa', NULL),
(2, 'Harry Potter', 'asdasfasFsa', NULL),
(3, 'Pokemon', 'fsdfasasa', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int(11) DEFAULT NULL,
  `image_front` varchar(200) NOT NULL,
  `image_back` varchar(200) NOT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `licence_id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `image_front`, `image_back`, `create_time`, `licence_id`, `category_id`) VALUES
(1, 'Stormtrooper Lightsaber', 'Figura coleccionable funko', 1799.99, 10, NULL, 'STW001004', NULL, '/images/star-wars/trooper-1.webp', '/images/star-wars/trooper-box.webp', '2023-12-11 09:42:39', 1, 1),
(2, 'Pidgeotto Flying', 'Figura coleccionable funko', 1799.99, 10, NULL, 'PKM001003', NULL, '/images/pokemon/pidgeotto-1.webp', '/images/pokemon/pidgeotto-box.webp', '2023-12-11 09:42:39', 3, 1),
(3, 'Luna Lovegood Lion Mask', 'Figura coleccionable funko', 1799.99, 10, NULL, 'HPT001003', NULL, '/images/harry-potter/luna-1.webp', '/images/harry-potter/luna-box.webp', '2023-12-11 09:42:39', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(16) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `create_time` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `licence`
--
ALTER TABLE `licence`
  ADD PRIMARY KEY (`licence_id`),
  ADD UNIQUE KEY `licence_id_UNIQUE` (`licence_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD UNIQUE KEY `product_id_UNIQUE` (`product_id`),
  ADD KEY `licence_id` (`licence_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `licence`
--
ALTER TABLE `licence`
  MODIFY `licence_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `licence_id` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
