--
-- Revisa si existe la tabla business en la base de datos codaltec
--
SET @tableExists = (
  SELECT COUNT(*)
  FROM information_schema.tables
  WHERE table_schema = 'codaltec'
  AND table_name = 'business'
);

--
-- Crea la base de datos si no existe
--
CREATE DATABASE IF NOT EXISTS codaltec;

--
-- Utiliza la base de datos codaltec
--
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
  `youtube` varchar(256),
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
  `process_number` varchar(128),
  `process_type` varchar(128),
  `state` varchar(32),
  `purpose` text NOT NULL,
  `amount` varchar(128),
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
  `date` varchar(64),
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

-- ====================================================
-- INSERCIONES
-- Inserta datos solo si no existía la primera tabla, si
-- ya existe entonces ignora las siguientes líneas
--
IF @tableExists = 0 THEN
  INSERT INTO `business` VALUES (3,'SIMULADORES','SIMULATORS','Gracias al desarrollo de software, los sistemas de entrenamiento virtual usan simuladores para capacitación en áreas como polígonos de tiro. CODALTEC ofrece simuladores con réplicas de armas para entrenamiento militar y civil, mejorando técnica, precisión y memoria muscular.
','Thanks to software development, virtual training systems use simulators for training in areas such as shooting ranges. CODALTEC offers simulators with replica weapons for military and civilian training, improving technique, accuracy and muscle memory.','hero3.jpg','https://www.youtube.com/embed/HMUknMHbJa4','2022-11-08'),(5,'LÍNEA HISTÓRICA DE PRODUCTOS','HISTORICAL PRODUCT LINE','CODALTEC ofrece consultorías y asesorías con personal experto en ingeniería y gerencia de proyectos, especializado en ciencia, tecnología e innovación para Defensa y ámbito civil. Incluye soporte logístico integrado y conocimientos en seguridad, mando y control, videovigilancia y protección ambiental.','CODALTEC offers consulting and advisory services with expert personnel in engineering and project management, specialized in science, technology and innovation for defense and civilian areas. It includes integrated logistic support and expertise in security, command and control, video surveillance and environmental protection.','hero2.jpg','https://www.youtube.com/embed/3X_7eZkt3JU','2022-11-08'),(7,'INHIBIDORES DE DRONES','DRONE JAMMERS','Interfiere servicios de posicionamiento, radiocontrol y vídeo. Bandas: GPS L1, GPS L2, WiFi 2.4GHz y 5.8GHz. Alcance: 1km. 4 antenas UWB, peso 30 kg, en maleta Pelican (63.2x60.2x33.3 cm). Dos ventiladores, alimentación 110 VAC, puerto ethernet para operación remota. Selección de bandas individual o combinada.
','Interferes with positioning, radio control and video services. Bands: GPS L1, GPS L2, WiFi 2.4GHz and 5.8GHz. Range: 1km. 4 UWB antennas, weight 30 kg, in Pelican case (63.2x60.2x60.2x33.3 cm). Two fans, 110 VAC power supply, Ethernet port for remote operation. Single or combined band selection.','hero1.jpg','https://www.youtube.com/embed/mWADuvOqbDk','2023-06-08');
  INSERT INTO `financial` VALUES (17,'Estados Financieros 2012','1678790429761.pdf','2023-03-14');
  INSERT INTO `internal_control` VALUES (14,'POLITICA CONTROL INTERNO 2023','2023/05/31','1686172238704.pdf','2023-06-07');
  INSERT INTO `news` VALUES (2,'1668110992352.jpg','CODALTEC - SAAB','CODALTEC - SAAB','Tras el éxito de los dos primeros proyectos entre Codaltec y Saab, las empresas firmaron un nuevo acuerdo de colaboración para dos proyectos adicionales que iniciarán en octubre de 2022 y se extenderán por un año. Este continuo trabajo conjunto en herramientas de Realidad Virtual servirá para el desarrollo de software de simulación de vuelo del Gripen E/F, y también en el marco de un potencial proyecto Gripen para Colombia.','Following the success of the first two projects between Codaltec and Saab, the companies signed a new collaboration agreement for two additional projects that will start in October 2022 and run for one year. This continued joint work on Virtual Reality tools will serve for the development of Gripen E/F flight simulation software, and also in the framework of a potential Gripen project for Colombia.','2022-11-08'),(3,'1668111069599.JPG','ENTREGA BODYCAMS','DELIVERY BODYCAMS','La Corporación de Alta Tecnología para la Defensa - CODALTEC Alianza con la Policía Nacional realizó la implementación del proyecto Sistema de Gestión de Evidencias Digitales con Bodycams (cámaras corporales) para la vigilancia del Sistema de Transporte Masivo Transmilenio. En la Estación de Transmilenio Los Héroes se hizo entrega a la Alcaldía Mayor de Bogotá de 100 cámaras corporales que usarán los Uniformados del Comando de Policía del Transporte Masivo para mayor vigilancia y seguridad de los Bogotanos, las cuales también serán implementadas en las estaciones de Santa Fe, Usme, Teusaquillo, Puente Aranda, Antonio Nariño y Portal del Sur.','The Corporación de Alta Tecnología para la Defensa - CODALTEC, in partnership with the National Police, implemented the Digital Evidence Management System with Bodycams (body cameras) for the surveillance of the Transmilenio Mass Transit System. At the Los Héroes Transmilenio Station, 100 body cameras were delivered to the Mayor\'s Office of Bogotá, which will be used by the Uniformed Members of the Mass Transit Police Command for greater surveillance and security of Bogotanos, which will also be implemented in the Santa Fe, Usme, Teusaquillo, Puente Aranda, Antonio Nariño and Portal del Sur stations.','2022-11-10'),(4,'1668109433566.jpeg','Expociencia Meta','Expociencia Meta','CODALTEC participó al evento EXPOCIENCIA - META, con uno de los casos de éxito INHIBIDOR DE DRONES, desarrollado por nuestros ingenieros de investigacion y desarrollo, quienes cuentan con altas capacidades en materia de I+D+i, aunado a ello la ventaja de operar en cualquier lugar de nuestra geografia colombiana.','CODALTEC participated in the event EXPOCIENCIA - META, with one of the success cases DRONE INHIBITOR, developed by our research and development engineers, who have high capabilities in R & D, coupled with the advantage of operating anywhere in our Colombian geography.','2022-11-10');
  INSERT INTO `products` VALUES (10,5,'Administración de recursos','Resource management','El servicio de administración de actividades y/o proyectos de ciencia, tecnología e innovación existe como una herramienta para entidades, unidades y/o escuelas de educación superior que requieren de un equipo especializado que garantice un desarrollo adecuado de su actividad científica. Los profesionales designados llevan a cabo las labores de gestión contractual para las adquisiciones de bienes y servicios, supervisión continúa a proveedores, y seguimiento financiero y contable de los recursos. Estas labores se ejecutan a través de procesos ágiles que permiten una gestión eficiente de los recursos','The administration service for science, technology and innovation activities and/or projects exists as a tool for entities, units and/or schools of higher education that require a specialized team to guarantee the adequate development of their scientific activity. The designated professionals carry out the tasks of contractual management for the acquisition of goods and services, continuous supervision of suppliers, and financial and accounting follow-up of resources. These tasks are carried out through agile processes that allow an efficient management of resources.','1668097921170.jpg','2022-11-10'),(11,5,'Soporte logístico integrado','Integrated logistic support','CODALTEC tiene la capacidad de dar soporte y mantenimiento a los productos que fabrica, así mismo, dentro de los servicios que proveemos nuestros clientes pueden encontrar el soporte y mantenimiento de equipos de simulación y de seguridad electrónica de terceros.','CODALTEC has the capacity to provide support and maintenance for the products it manufactures. Likewise, within the services we provide our customers can find support and maintenance of simulation and electronic security equipment from third parties.','1668097940304.jpg','2022-11-10'),(12,5,'Seguridad electrónica','Electronic security','CODALTEC compañía especializada en diseño, estructuración, implementación y ejecución de soluciones para integración de sistemas especializados de seguridad electrónica: sistemas de CCTV, control de acceso, equipos de inspección, video vigilancia, intrusión, detección, analítica de datos, softwares elaborados a la medida y necesidad de nuestros clientes con ingenieros certificados en las mejores marcas reconocidas del mercado, con los más altos estándares de calidad y servicio.','CODALTEC company specialized in design, structuring, implementation and execution of solutions for integration of specialized electronic security systems: CCTV systems, access control, inspection equipment, video surveillance, intrusion, detection, data analytics, software tailored to the needs of our customers with certified engineers in the best brands in the market, with the highest standards of quality and service.','1668097962592.jpg','2022-11-10'),(13,5,'Consultorías','Consultancies','Gracias a la capacidad de talento humano, la experiencia y el conocimiento generado a través de los años en CODALTEC, tenemos disponible para nuestros clientes servicios de consultorio en RF, gestión de proyectos y simulación','Thanks to the capacity of human talent, experience and knowledge generated over the years in CODALTEC, we have available for our customers consulting services in RF, project management and simulation.','1668098000191.png','2022-11-10'),(18,3,'Simulador GECKO','GECKO Simulator','Está compuesto por una línea de tiro, reproduce las prácticas de entrenamiento de tiro principalmente para empresas de vigilancia y seguridad privada. El tirador puede entrenar la técnica, precisión, reacción, y memoria muscular para el manejo de armas de fuego, evaluando paralelamente su desempeño con herramientas del sistema. Para facilitar el proceso de entrenamiento se dispone de un sistema de evaluación e instrucción, este controla la realización de los ejercicios y realiza la calificación final con un completo reporte de los resultados obtenidos. Además, el entrenamiento es realizado con un arma (no letal) adaptada, la cual dispone de características físicas iguales al arma real, garantizando la reducción de costos en el entrenamiento a su vez que se mantiene la seguridad del alumno.','It is composed of a shooting line, it reproduces the shooting training practices mainly for private security and surveillance companies. The shooter can train the technique, precision, reaction, and muscle memory for the handling of firearms, evaluating his performance in parallel with the system\'s tools. To facilitate the training process, an evaluation and instruction system is available, which controls the performance of the exercises and performs the final qualification with a complete report of the results obtained. In addition, the training is carried out with an adapted (non-lethal) weapon, which has the same physical characteristics as the real weapon, guaranteeing the reduction of training costs while maintaining the safety of the student.','1686169479597.PNG','2022-11-10'),(19,3,'Simulador LYNX','LYNX Simulator','Permite incluir nuevos escenarios cómo actualizaciones que podrán hacerse a futuro. En cuanto a los ejercicios, un módulo de estudiante es capaz de ejecutar los ejercicios que sean diseñados por una estación de instructor LYNX.\n\nLas siguientes imágenes muestran algunos ejemplos de los ejercicios pre-diseñados. Estos ejercicios permiten practicar en blancos estáticos, en movimientos, a diferentes distancias y con diferentes condiciones ambientales.','It allows new scenarios to be included as updates that can be made in the future. As for the exercises, a student module is able to execute the exercises that are designed by a LYNX instructor station.\n\nThe following images show some examples of pre-designed exercises. These drills allow to practice on static targets, moving targets, at different distances and with different environmental conditions.','1686170050898.PNG','2022-11-10');
  INSERT INTO `sliders` VALUES (3,'1668096770711.jpeg','EXPOCIENCIA-META','EXPOCIENCIA-META','CODALTEC asistió al evento EXPOCIENCIA - META, con uno de los casos de éxito \"INHIBIDOR DE DRONES\".','CODALTEC attended the EXPOCIENCIA - META event, with one of the success cases \"DRONE INHIBITOR\".','2022-11-10'),(4,'1668096836185.JPG','CODALTEC','CODALTEC','Somos una entidad comprometida con el avance tecnológico del país, creando espacios de investigación, desarrollo y producción, con soluciones innovadoras por talento humano altamente capacitado.','Somos una entidad comprometida con el avance tecnológico del país, creando espacios de investigación, desarrollo y producción, con soluciones innovadoras por talento humano altamente capacitado.','2022-11-10'),(5,'1686079502737.jpg','LYNX','LYNX','Los centros de simulación LYNX, son una muestra de nuestras capacidades en desarrollo de tecnología para nuestras fuerzas militares y de policía, ayudando así a la disminución de un 90% en los costos de entrenamiento.','The LYNX simulation centers are a demonstration of our capabilities in developing technology for our military and police forces, thus helping to reduce training costs by 90%.','2023-06-06');
  INSERT INTO `users` VALUES (9,'alejofova@gmail.com','$2b$10$hXVAUcCONsIiQDRV/2exr.RfKVRPkq5CtWGz5KeFRnP0dxH5B9o3S','admin','2023-02-22','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksImlhdCI6MTY3NzEwMDQxNiwiZXhwIjoxNjc3MTAxMzE2fQ.6Y1lhY8RIOONsfK8n-S5o1A5eyYmk9sAOVB-XIAcS9Y'),(10,'ahiguera@codaltec.com','$2b$10$wO/hwef.h3rxezWiGf7qbeWz0Kf.cN1kl8HnNx5D3409V9vnfhdkC','contenido','2023-02-27',NULL),(11,'controlinterno@codaltec.com','$2b$10$rfceD.Vp0WDcj6PV3j1r4ubJfoT6iWggDRjT4Wr9gr7ZBtNh7qsS6','control interno','2023-02-27',NULL),(12,'egarcia@codaltec.com','$2b$10$9BY8vT0syx3GZ39Qf2IeIemBe0hAV/RLCc4DeoPElKmBovVL3VMUO','contratación','2023-02-27',NULL),(13,'asistenciadegerencia@codaltec.com','$2b$10$y6Dspoljekff85IoM9lnb.M4ZyGFMTAiaQ/xp0AOu.zPCpPYYFvua','contenido','2023-02-27',NULL),(14,'comunicaciones@codaltec.com','$2b$10$2JW/TUhrrPJAZ7ctlf4JeOqZgt7aLggPXkAAl6MRZlegh2LzRC/7e','Redes','2023-05-09',NULL);
END IF;