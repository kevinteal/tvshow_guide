-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 23, 2014 at 12:03 PM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tvshows`
--
CREATE DATABASE IF NOT EXISTS `tvshows` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `tvshows`;

-- --------------------------------------------------------

--
-- Table structure for table `mydaykev`
--

CREATE TABLE IF NOT EXISTS `mydaykev` (
  `mydayname` varchar(10) NOT NULL,
  PRIMARY KEY (`mydayname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mydaykev`
--

INSERT INTO `mydaykev` (`mydayname`) VALUES
('Friday'),
('Monday'),
('Saturday'),
('Sunday'),
('Thursday'),
('Tuesday'),
('Wednesday');

-- --------------------------------------------------------

--
-- Table structure for table `myshowkev`
--

CREATE TABLE IF NOT EXISTS `myshowkev` (
  `showid` int(11) NOT NULL AUTO_INCREMENT,
  `mydayname` varchar(10) DEFAULT NULL,
  `showname` varchar(40) NOT NULL,
  `season_num` int(11) NOT NULL,
  `episode_num` int(11) NOT NULL,
  `last_airdate` varchar(60) NOT NULL,
  `list_link` text NOT NULL,
  `tvrageapi_id` int(11) NOT NULL,
  PRIMARY KEY (`showid`),
  KEY `mydayname` (`mydayname`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=81 ;

--
-- Dumping data for table `myshowkev`
--

INSERT INTO `myshowkev` (`showid`, `mydayname`, `showname`, `season_num`, `episode_num`, `last_airdate`, `list_link`, `tvrageapi_id`) VALUES
(3, 'Sunday', 'The Simpsons', 25, 14, 'March16,2014', 'http://en.wikipedia.org/wiki/List_of_The_Simpsons_episodes', 6190),
(4, 'Sunday', 'Family Guy', 12, 13, 'March16,2014', 'http://en.wikipedia.org/wiki/List_of_Family_Guy_episodes', 3506),
(5, 'Sunday', 'American Dad', 10, 12, 'March16,2014', 'http://en.wikipedia.org/wiki/List_of_American_Dad!_episodes', 2594),
(10, 'Sunday', 'The Walking Dead', 4, 14, 'March16,2014', 'http://en.wikipedia.org/wiki/List_of_The_Walking_Dead_episodes', 25056),
(17, 'Monday', 'How I Met Your Mother', 9, 21, 'March17,2014', 'http://en.wikipedia.org/wiki/List_of_How_I_Met_Your_Mother_episodes', 3918),
(25, 'Wednesday', 'Modern Family', 5, 17, 'March12,2014', 'http://en.wikipedia.org/wiki/List_of_Modern_Family_episodes', 22622),
(30, 'Wednesday', 'South Park', 17, 10, 'December11,2013', 'http://en.wikipedia.org/wiki/List_of_South_Park_episodes', 5266),
(31, 'Saturday', 'Mythbusters', 13, 9, 'March1,2014', 'http://en.wikipedia.org/wiki/List_of_MythBusters_episodes', 4605),
(32, 'Thursday', 'The Big Bang Theory', 7, 18, 'March13,2014', 'http://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_episodes', 8511),
(33, 'Thursday', 'Community', 5, 10, 'March20,2014', 'http://en.wikipedia.org/wiki/List_of_Community_episodes', 22589),
(38, 'Friday', 'Gold Rush', 4, 20, 'March14,2014', 'http://en.wikipedia.org/wiki/List_of_Gold_Rush_episodes', 26961),
(41, 'Sunday', 'Homeland', 3, 12, 'December15,2013', 'http://en.wikipedia.org/wiki/List_of_Homeland_episodes', 27811),
(43, 'Sunday', 'Bobs Burgers', 4, 13, 'March16,2014', 'http://en.wikipedia.org/wiki/List_of_Bob''s_Burgers_episodes', 24607),
(51, 'Monday', 'The Blacklist', 1, 17, 'March17,2014', 'http://en.wikipedia.org/wiki/List_of_The_Blacklist_episodes', 35048),
(52, 'Tuesday', 'The Goldbergs', 1, 17, 'March18,2014', 'http://en.wikipedia.org/wiki/The_Goldbergs_(TV_series)', 35814),
(54, 'Tuesday', 'Brooklyn Nine-Nine', 1, 18, 'February25,2014', 'http://en.wikipedia.org/wiki/Brooklyn_Nine-Nine', 35774),
(56, 'Thursday', 'Elementary ', 2, 18, 'March13,2014', 'http://en.wikipedia.org/wiki/List_of_Elementary_episodes', 30750),
(58, 'Thursday', 'The Michael J. Fox Show', 1, 15, 'January23,2014', 'http://en.wikipedia.org/wiki/The_Michael_J._Fox_Show', 35854),
(60, 'Sunday', 'Hello Ladies', 1, 8, 'November17,2013', 'http://en.wikipedia.org/wiki/Hello_Ladies', 32368),
(61, 'Wednesday', 'The Americans', 1, 18, 'March19,2014', 'http://en.wikipedia.org/wiki/List_of_The_Americans_episodes', 30449),
(62, 'Wednesday', 'Louie', 3, 13, 'September27,2012', 'http://en.wikipedia.org/wiki/List_of_Louie_episodes', 24504),
(63, 'Wednesday', 'Wilfred', 3, 13, 'September5,2013', 'http://en.wikipedia.org/wiki/List_of_Wilfred_(U.S._TV_series)_episodes', 25709),
(64, 'Wednesday', 'Legit', 1, 17, 'March19,2014', 'http://en.wikipedia.org/wiki/List_of_Legit_episodes', 31934),
(65, 'Monday', 'Archer', 5, 8, 'March17,2014', 'http://en.wikipedia.org/wiki/List_of_Archer_episodes#Season_5_.282014.29', 23354),
(66, 'Wednesday', 'American Horror Story', 3, 13, 'January29,2014', 'http://en.wikipedia.org/wiki/List_of_American_Horror_Story_episodes', 28776),
(67, 'Sunday', 'Resurrection', 1, 2, 'March16,2014', 'http://en.wikipedia.org/wiki/Resurrection_(U.S._TV_series)', 34321),
(68, 'Sunday', 'The Mentalist', 6, 14, 'March16,2014', 'http://en.wikipedia.org/wiki/List_of_The_Mentalist_episodes', 18967),
(69, 'Monday', 'Intelligence', 1, 11, 'March17,2014', 'http://en.wikipedia.org/wiki/Intelligence_(U.S._TV_series)', 34469),
(71, 'Monday', 'The Following', 2, 9, 'March17,2014', 'http://en.wikipedia.org/wiki/List_of_The_Following_episodes', 31672),
(72, 'Friday', 'Rectify', 1, 6, 'May20,2013', 'http://en.wikipedia.org/wiki/List_of_Rectify_episodes', 30069),
(74, 'Sunday', 'True Detective', 1, 9, 'March9,2014', 'http://en.wikipedia.org/wiki/True_Detective_(TV_series)', 31369),
(75, 'Friday', 'The Leftovers', 1, 0, 'unaired', 'http://en.wikipedia.org/wiki/The_Leftovers_(TV_series)', 34506),
(76, 'Friday', 'Silicon Valley', 1, 0, 'unaired', 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)', 33759),
(77, 'Sunday', 'Hannibal', 1, 13, 'June20,2013', 'http://en.wikipedia.org/wiki/List_of_Hannibal_episodes', 30909),
(78, 'Saturday', 'The Shield', 7, 13, 'November25,2008', 'http://en.wikipedia.org/wiki/List_of_The_Shield_episodes', 6185),
(79, 'Wednesday', 'Psych ', 8, 9, 'March19,2014', 'http://en.wikipedia.org/wiki/List_of_Psych_episodes', 8322),
(80, 'Saturday', 'The Wire', 5, 10, 'March9,2008', 'http://en.wikipedia.org/wiki/List_of_The_Wire_episodes', 6296);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `myshowkev`
--
ALTER TABLE `myshowkev`
  ADD CONSTRAINT `myshowkev_ibfk_1` FOREIGN KEY (`mydayname`) REFERENCES `mydaykev` (`mydayname`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
