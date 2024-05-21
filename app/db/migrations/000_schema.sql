CREATE DATABASE IF NOT EXISTS codaltec;
USE codaltec;

--
-- Table structure for table `business`
--

-- DROP TABLE IF EXISTS `business`;
CREATE TABLE IF NOT EXISTS `business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `es_name` varchar(256) NOT NULL,
  `en_name` varchar(256) NOT NULL,
  `es_description` text NOT NULL,
  `en_description` text NOT NULL,
  `icon` varchar(256) NOT NULL,
  `youtube` varchar(256) NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Table structure for table `contact`
--

-- DROP TABLE IF EXISTS `contact`;
CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `apellidos` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `phone` bigint(16) NOT NULL,
  `subject` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
CREATE TABLE IF NOT EXISTS `contract` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `process_number` varchar(128) NOT NULL,
  `process_type` varchar(128) NOT NULL,
  `state` varchar(32) NOT NULL,
  `purpose` text NOT NULL,
  `amount` varchar(128) NOT NULL,
  `date` varchar(64) NOT NULL,
  `file` varchar(128) NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `financial`
--

DROP TABLE IF EXISTS `financial`;
CREATE TABLE IF NOT EXISTS`financial` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `file` varchar(128) NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Table structure for table `internal_control`
--

DROP TABLE IF EXISTS `internal_control`;
CREATE TABLE IF NOT EXISTS `internal_control` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `date` varchar(64) NOT NULL,
  `file` varchar(128) NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(256) NOT NULL,
  `es_title` varchar(64) NOT NULL,
  `en_title` varchar(64) NOT NULL,
  `es_description` text NOT NULL,
  `en_description` text NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Table structure for table `pqr`
--

DROP TABLE IF EXISTS `pqr`;
CREATE TABLE IF NOT EXISTS `pqr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(32) NOT NULL,
  `answer` text NOT NULL,
  `type_person` varchar(32) NOT NULL,
  `name` varchar(32) NOT NULL,
  `apellidos` varchar(32) NOT NULL,
  `type_document` varchar(32) NOT NULL,
  `document` int(11) NOT NULL,
  `email` varchar(32) NOT NULL,
  `phone` int(16) NOT NULL,
  `subject` varchar(32) NOT NULL,
  `description` varchar(255) NOT NULL,
  `file` varchar(64) NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) NOT NULL,
  `es_name` varchar(256) NOT NULL,
  `en_name` varchar(256) NOT NULL,
  `es_description` text NOT NULL,
  `en_description` text NOT NULL,
  `image` varchar(256) NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `business_id` (`business_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`business_id`) REFERENCES `business` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

--
-- Table structure for table `sliders`
--

DROP TABLE IF EXISTS `sliders`;
CREATE TABLE IF NOT EXISTS `sliders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(256) NOT NULL,
  `es_title` varchar(256) NOT NULL,
  `en_title` varchar(256) NOT NULL,
  `es_description` text NOT NULL,
  `en_description` text NOT NULL,
  `create_at` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(124) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(32) NOT NULL,
  `create_at` date NOT NULL,
  `recovery_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
