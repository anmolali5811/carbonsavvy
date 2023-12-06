-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2023 at 06:08 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carbonsavvy`
--

-- --------------------------------------------------------

--
-- Table structure for table `prediction`
--

CREATE TABLE `prediction` (
  `sno` int(11) NOT NULL,
  `wind` text NOT NULL,
  `vehicle` text NOT NULL,
  `solar` text NOT NULL,
  `garbage` text NOT NULL,
  `evehicle` text NOT NULL,
  `industries` text NOT NULL,
  `forest` text NOT NULL,
  `population` int(11) NOT NULL,
  `bio` text NOT NULL,
  `recycle` text NOT NULL,
  `thermal` text NOT NULL,
  `buildings` text NOT NULL,
  `nuclear` text NOT NULL,
  `co2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prediction`
--

INSERT INTO `prediction` (`sno`, `wind`, `vehicle`, `solar`, `garbage`, `evehicle`, `industries`, `forest`, `population`, `bio`, `recycle`, `thermal`, `buildings`, `nuclear`, `co2`) VALUES
(6, '0.95577', '0', '8.14', '0', '0.538', '6.047', '88.8', 4, '4', '307', '21', '306.38', '17.28', '14.853'),
(7, '0.95577', '0', '8.14', '0', '0.538', '6.047', '88.8', 4, '4', '307', '21', '306.38', '17.28', '14.853'),
(8, '0.02763', '75', '2.95', '0', '0.428', '6.595', '21.8', 5, '3', '252', '18.3', '395.63', '4.32', '29.632'),
(9, '0.02763', '75', '2.95', '0', '0.428', '6.595', '21.8', 5, '3', '252', '18.3', '395.63', '4.32', '29.632'),
(10, '0.02763', '75', '2.95', '0', '0.428', '6.595', '21.8', 5, '3', '252', '18.3', '395.63', '4.32', '29.632'),
(11, '0.02763', '75', '2.95', '0', '0.428', '6.595', '21.8', 5, '3', '252', '18.3', '395.63', '4.32', '29.632'),
(12, '0.02763', '75', '2.95', '0', '0.428', '6.595', '21.8', 5, '3', '252', '18.3', '395.63', '4.32', '29.632'),
(13, '0.05602', '0', '2.46', '0', '0.488', '7.831', '53.6', 3, '3', '193', '17.8', '392.63', '4.45', '46.869'),
(14, '0.05602', '0', '2.46', '0', '0.488', '7.831', '53.6', 3, '3', '193', '17.8', '392.63', '4.45', '46.869'),
(15, '0.0315', '95', '1.47', '0', '0.403', '6.975', '15.3', 8, '3', '402', '17', '396.9', '4.56', '33.897'),
(16, '2.36862', '0', '19.58', '0', '0.871', '4.926', '95.7', 1, '5', '403', '14.7', '391.71', '29.53', '14.381'),
(17, '2.36862', '0', '19.58', '0', '0.871', '4.926', '95.7', 1, '5', '403', '14.7', '391.71', '29.53', '14.381'),
(18, '0.01538', '90', '2.5', '0', '0.394', '7.454', '34.2', 6, '3', '244', '15.9', '386.34', '3.11', '41.897'),
(19, '0.01538', '90', '2.5', '0', '0.394', '7.454', '34.2', 6, '3', '244', '15.9', '386.34', '3.11', '43.0'),
(20, '0.01538', '90', '2.5', '0', '0.394', '7.454', '34.2', 6, '3', '244', '15.9', '386.34', '3.11', '43.0'),
(21, '0.01538', '90', '2.5', '0', '0.394', '7.454', '34.2', 6, '3', '244', '15.9', '386.34', '3.11', '43.0'),
(22, '5.1', '3.5', '1.4', '0', '0.394', '7.454', '40.5', 8, '5', '256', '15.1', '386.34', '3.11', '40.861'),
(23, '5.1', '3.4', '3.75', '0', '0.469', '6.816', '40.5', 8, '5', '252', '18.3', '392.9', '3.95', '32.989');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `prediction`
--
ALTER TABLE `prediction`
  ADD PRIMARY KEY (`sno`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `prediction`
--
ALTER TABLE `prediction`
  MODIFY `sno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
