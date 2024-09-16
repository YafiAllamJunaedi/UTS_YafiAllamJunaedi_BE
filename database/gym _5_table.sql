-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2024 at 12:50 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gym`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `join_date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MembershipId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `age`, `join_date`, `createdAt`, `updatedAt`, `MembershipId`) VALUES
(4, 'Danis', 15, '2024-09-16 10:46:10', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 3),
(5, 'Pajri', 16, '2024-09-16 10:46:10', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 4),
(6, 'Reza', 17, '2024-08-21 00:00:00', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 4);

-- --------------------------------------------------------

--
-- Table structure for table `membership`
--

CREATE TABLE `membership` (
  `id` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `membership`
--

INSERT INTO `membership` (`id`, `type`, `price`, `createdAt`, `updatedAt`) VALUES
(3, 'Regular', 300000, '2024-09-16 10:46:10', '2024-09-16 10:46:10'),
(4, 'Premium', 500000, '2024-09-16 10:46:10', '2024-09-16 10:46:10');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `room_name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `WorkoutSessionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `room_name`, `createdAt`, `updatedAt`, `WorkoutSessionId`) VALUES
(1, 'Pilates Room', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 4);

-- --------------------------------------------------------

--
-- Table structure for table `trainer`
--

CREATE TABLE `trainer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `speciality` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainer`
--

INSERT INTO `trainer` (`id`, `name`, `speciality`, `createdAt`, `updatedAt`) VALUES
(2, 'Zharif', 'Bulking', '2024-09-16 10:46:10', '2024-09-16 10:46:10');

-- --------------------------------------------------------

--
-- Table structure for table `workoutsession`
--

CREATE TABLE `workoutsession` (
  `id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MemberId` int(11) DEFAULT NULL,
  `TrainerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `workoutsession`
--

INSERT INTO `workoutsession` (`id`, `date`, `createdAt`, `updatedAt`, `MemberId`, `TrainerId`) VALUES
(4, '2024-09-16 10:46:10', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 4, 2),
(5, '2024-09-16 10:46:10', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 5, 2),
(6, '2024-09-16 10:46:10', '2024-09-16 10:46:10', '2024-09-16 10:46:10', 6, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MembershipId` (`MembershipId`);

--
-- Indexes for table `membership`
--
ALTER TABLE `membership`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `WorkoutSessionId` (`WorkoutSessionId`);

--
-- Indexes for table `trainer`
--
ALTER TABLE `trainer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `workoutsession`
--
ALTER TABLE `workoutsession`
  ADD PRIMARY KEY (`id`),
  ADD KEY `MemberId` (`MemberId`),
  ADD KEY `TrainerId` (`TrainerId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `membership`
--
ALTER TABLE `membership`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trainer`
--
ALTER TABLE `trainer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `workoutsession`
--
ALTER TABLE `workoutsession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `member`
--
ALTER TABLE `member`
  ADD CONSTRAINT `member_ibfk_1` FOREIGN KEY (`MembershipId`) REFERENCES `membership` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`WorkoutSessionId`) REFERENCES `workoutsession` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `workoutsession`
--
ALTER TABLE `workoutsession`
  ADD CONSTRAINT `workoutsession_ibfk_1` FOREIGN KEY (`MemberId`) REFERENCES `member` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `workoutsession_ibfk_2` FOREIGN KEY (`TrainerId`) REFERENCES `trainer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
