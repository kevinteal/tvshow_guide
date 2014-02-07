-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Feb 07, 2014 at 09:32 PM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tvshows`
--

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
  PRIMARY KEY (`showid`),
  KEY `mydayname` (`mydayname`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=81 ;

--
-- Dumping data for table `myshowkev`
--

INSERT INTO `myshowkev` (`showid`, `mydayname`, `showname`, `season_num`, `episode_num`, `last_airdate`, `list_link`) VALUES
(3, 'Sunday', 'The Simpsons', 25, 11, 'January26,2014', 'http://en.wikipedia.org/wiki/List_of_The_Simpsons_episodes'),
(4, 'Sunday', 'Family Guy', 12, 11, 'January26,2014', 'http://en.wikipedia.org/wiki/List_of_Family_Guy_episodes'),
(5, 'Sunday', 'American Dad', 10, 11, 'January26,2014', 'http://en.wikipedia.org/wiki/List_of_American_Dad!_episodes'),
(10, 'Sunday', 'The Walking Dead', 4, 8, 'December1,2013', 'http://en.wikipedia.org/wiki/List_of_The_Walking_Dead_episodes'),
(17, 'Monday', 'How I Met Your Mother', 9, 17, 'February3,2014', 'http://en.wikipedia.org/wiki/List_of_How_I_Met_Your_Mother_episodes'),
(25, 'Wednesday', 'Modern Family', 5, 14, 'February5,2014', 'http://en.wikipedia.org/wiki/List_of_Modern_Family_episodes'),
(30, 'Wednesday', 'South Park', 17, 10, 'December11,2013', 'http://en.wikipedia.org/wiki/List_of_South_Park_episodes'),
(31, 'Saturday', 'Mythbusters', 13, 5, 'February1,2014', 'http://en.wikipedia.org/wiki/List_of_MythBusters_episodes'),
(32, 'Thursday', 'The Big Bang Theory', 7, 15, 'February6,2014', 'http://en.wikipedia.org/wiki/List_of_The_Big_Bang_Theory_episodes'),
(33, 'Thursday', 'Community', 5, 6, 'January30,2014', 'http://en.wikipedia.org/wiki/List_of_Community_episodes'),
(38, 'Friday', 'Gold Rush', 4, 13, 'January31,2014', 'http://en.wikipedia.org/wiki/List_of_Gold_Rush_episodes'),
(41, 'Sunday', 'Homeland', 3, 12, 'December15,2013', 'http://en.wikipedia.org/wiki/List_of_Homeland_episodes'),
(43, 'Sunday', 'Bobs Burgers', 4, 11, 'January26,2014', 'http://en.wikipedia.org/wiki/List_of_Bob''s_Burgers_episodes'),
(51, 'Monday', 'The Blacklist', 1, 13, 'January27,2014', 'http://en.wikipedia.org/wiki/List_of_The_Blacklist_episodes'),
(52, 'Tuesday', 'The Goldbergs', 1, 15, 'February4,2014', 'http://en.wikipedia.org/wiki/The_Goldbergs_(TV_series)'),
(54, 'Tuesday', 'Brooklyn Nine-Nine', 1, 16, 'February4,2014', 'http://en.wikipedia.org/wiki/Brooklyn_Nine-Nine'),
(56, 'Thursday', 'Elementary ', 2, 15, 'February6,2014', 'http://en.wikipedia.org/wiki/List_of_Elementary_episodes'),
(58, 'Thursday', 'The Michael J. Fox Show', 1, 15, 'January23,2014', 'http://en.wikipedia.org/wiki/The_Michael_J._Fox_Show'),
(60, 'Sunday', 'Hello Ladies', 1, 8, 'November17,2013', 'http://en.wikipedia.org/wiki/Hello_Ladies'),
(61, 'Wednesday', 'The Americans', 1, 14, 'February5,2014', 'http://en.wikipedia.org/wiki/List_of_The_Americans_episodes'),
(62, 'Wednesday', 'Louie', 3, 13, 'September27,2012', 'http://en.wikipedia.org/wiki/List_of_Louie_episodes'),
(63, 'Wednesday', 'Wilfred', 3, 13, 'September5,2013', 'http://en.wikipedia.org/wiki/List_of_Wilfred_(U.S._TV_series)_episodes'),
(64, 'Wednesday', 'Legit', 1, 13, 'April11,2013', 'http://en.wikipedia.org/wiki/List_of_Legit_episodes'),
(65, 'Monday', 'Archer', 5, 4, 'February3,2014', 'http://en.wikipedia.org/wiki/List_of_Archer_episodes#Season_5_.282014.29'),
(66, 'Wednesday', 'American Horror Story', 3, 13, 'January29,2014', 'http://en.wikipedia.org/wiki/List_of_American_Horror_Story_episodes'),
(67, 'Sunday', 'Resurrection', 1, 0, 'unaired', 'http://en.wikipedia.org/wiki/Resurrection_(U.S._TV_series)'),
(68, 'Sunday', 'The Mentalist', 6, 12, 'January12,2014', 'http://en.wikipedia.org/wiki/List_of_The_Mentalist_episodes'),
(69, 'Monday', 'Intelligence', 1, 5, 'February3,2014', 'http://en.wikipedia.org/wiki/Intelligence_(U.S._TV_series)'),
(71, 'Monday', 'The Following', 2, 3, 'February3,2014', 'http://en.wikipedia.org/wiki/List_of_The_Following_episodes'),
(72, 'Friday', 'Rectify', 1, 6, 'May20,2013', 'http://en.wikipedia.org/wiki/List_of_Rectify_episodes'),
(74, 'Friday', 'True Detective', 1, 3, 'January26,2014', 'http://en.wikipedia.org/wiki/True_Detective_(TV_series)'),
(75, 'Friday', 'The Leftovers', 1, 0, 'unaired', 'http://en.wikipedia.org/wiki/The_Leftovers_(TV_series)'),
(76, 'Friday', 'Silicon Valley', 1, 0, 'unaired', 'http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)'),
(77, 'Sunday', 'Hannibal', 1, 13, 'June20,2013', 'http://en.wikipedia.org/wiki/List_of_Hannibal_episodes'),
(78, 'Saturday', 'The Shield', 7, 13, 'November25,2008', 'http://en.wikipedia.org/wiki/List_of_The_Shield_episodes'),
(79, 'Wednesday', 'Psych ', 8, 5, 'February5,2014', 'http://en.wikipedia.org/wiki/List_of_Psych_episodes'),
(80, 'Saturday', 'The Wire', 5, 10, 'March9,2008', 'http://en.wikipedia.org/wiki/List_of_The_Wire_episodes');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `myshowkev`
--
ALTER TABLE `myshowkev`
  ADD CONSTRAINT `myshowkev_ibfk_1` FOREIGN KEY (`mydayname`) REFERENCES `mydaykev` (`mydayname`);
