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

-- ====================================================
-- INSERCIONES
-- Inserta datos solo si no existía la primera tabla, si
-- ya existe entonces ignora las siguientes líneas
--
IF @tableExists = 0 THEN
  INSERT INTO `business` VALUES (3,'SIMULADORES','SIMULATORS','Gracias al avance del desarrollo de software, los sistemas de entrenamiento virtual han evolucionado de tal manera que permiten el empleo de simuladores para la formación y capacitación en varias áreas, dentro de las cuales se encuentran los polígonos de tiro. CODALTEC ofrece soluciones de sistemas de entrenamiento mediante simuladores de polígono de tiro que emplean réplicas de armas cortas y/o armas largas para el entrenamiento militar y civil. Técnica, precisión y memoria muscular, son los temas en los que los estudiantes pueden mejorar para el manejo de armas de fuego mediante los simuladores de polígono de tiro','Gracias al avance del desarrollo de software, los sistemas de entrenamiento virtual han evolucionado de tal manera que permiten el empleo de simuladores para la formación y capacitación en varias áreas, dentro de las cuales se encuentran los polígonos de tiro. CODALTEC ofrece soluciones de sistemas de entrenamiento mediante simuladores de polígono de tiro que emplean réplicas de armas cortas y/o armas largas para el entrenamiento militar y civil. Técnica, precisión y memoria muscular, son los temas en los que los estudiantes pueden mejorar para el manejo de armas de fuego mediante los simuladores de polígono de tiro','https://www.youtube.com/watch?v=USPg8TCaEHo','https://www.youtube.com/embed/HMUknMHbJa4','2022-11-08'),(5,'LÍNEA HISTÓRICA DE PRODUCTOS','HISTORICAL PRODUCT LINE','Si necesitas personal experto para tus proyectos, estás en el lugar adecuado. Con un personal mixto compuesto por oficiales y suboficiales de las diferentes Fuerzas Militares y de Policía deColombia junto con personal civil altamente capacitado en diferentes áreas de la ingeniería y gerencia de proyectos, CODALTEC ofrece servicios de consultorías y asesorías enfocadas en la ciencia, la tecnología y la innovación en el sector Defensa, contando con conocimientos administrativos y técnicos que pueden ser llevados también al ámbito civil. Todos nuestros proyectos cuentan con la opción de incluir el soporte logístico integrado de modo que se garantice la prevalencia en el tiempo de las soluciones que ofrecemos a nuestros clientes. Como parte del sector Defensa, CODALTEC cuenta con amplios conocimientos en proyectos de seguridad, centros de mando y control, sistemas de control de acceso, sistemas de videovigilancia, sistemas de protección ambiental, entre otros','Si necesitas personal experto para tus proyectos, estás en el lugar adecuado. Con un personal mixto compuesto por oficiales y suboficiales de las diferentes Fuerzas Militares y de Policía deColombia junto con personal civil altamente capacitado en diferentes áreas de la ingeniería y gerencia de proyectos, CODALTEC ofrece servicios de consultorías y asesorías enfocadas en la ciencia, la tecnología y la innovación en el sector Defensa, contando con conocimientos administrativos y técnicos que pueden ser llevados también al ámbito civil. Todos nuestros proyectos cuentan con la opción de incluir el soporte logístico integrado de modo que se garantice la prevalencia en el tiempo de las soluciones que ofrecemos a nuestros clientes. Como parte del sector Defensa, CODALTEC cuenta con amplios conocimientos en proyectos de seguridad, centros de mando y control, sistemas de control de acceso, sistemas de videovigilancia, sistemas de protección ambiental, entre otros','https://www.youtube.com/watch?v=USPg8TCaEHo','https://www.youtube.com/embed/3X_7eZkt3JU','2022-11-08'),(7,'INHIBIDORES DE DRONES','DRONE JAMMERS','Interfiere los servicios de posicionamiento, radiocontrol y transmisión de vídeo.Bandas de inhibición: 4 GPS L1, GPS L2, WiFi 2.4GHz y WiFi 5,8GHz. Principio de funcionamiento. Interferencia electromagnética. Alcance de inhibición: 1km* (Puede variar dependiendo la posición del control y el dron) 4 Antenas directivas de ultra banda ancha (UWB) Peso estimado 30 kg. Integrado dentro de una maleta Pelican, con dimensiones externas: 63,2 cm x 60,2 cm x 33,3 cm. Cuenta con dos ventiladores, uno de extracción y otro de inyección de aire. Alimentación: 110 VAC @ 60Hz. Puerto de conexión ethernet para operación remota. Posibilidad de selección de las bandas de forma individual o cualquier combinación de ellas. Si se bloquean todos los servicios en la mayoría de drones comerciales se aterriza en el lugar donde se encuentre o si le queda algo de GPS intenta volver al sitio de despegue','Interferes with positioning, radio control and video transmission services. Jamming bands: 4 GPS L1, GPS L2, WiFi 2.4GHz and WiFi 5.8GHz. Operating principle. Electromagnetic interference. Inhibition range: 1km* (May vary depending on the position of the control and the drone) 4 Ultra Wideband (UWB) directional antennas Estimated weight 30 kg. Integrated inside a Pelican case, with external dimensions: 63.2 cm x 60.2 cm x 33.3 cm. Two fans, one for air extraction and one for air injection. Power supply: 110 VAC @ 60Hz. Ethernet connection port for remote operation. Possibility of selecting the bands individually or any combination of them. If all services are blocked in most commercial drones it lands where it is or if it has some GPS left it tries to return to the takeoff site.','https://www.youtube.com/embed/mWADuvOqbDk','https://www.youtube.com/embed/mWADuvOqbDk','2023-06-08');
  INSERT INTO `contact` VALUES (34,'Alejandro','Forero','prueba3@g.com',3102198024,'Consultorias','sadfasdfasdf','2022-10-26'),(35,'Alejandro','Forero','alejofova@gmail.com',3102198024,'Administración de recursos','Hola como estas, esto es un testeo para valer verga en la vida y no más','2022-10-26'),(36,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Simuladores','Algo bien melo sisa sisa','2022-10-27'),(37,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Garantia y soporte','sadf asdfasdf asdf asdf ','2022-10-27'),(38,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Garantia y soporte','sadf asdfasdf asdf asdf ','2022-10-27'),(39,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Servicios','gdhn fghj fghj holaaaaaaaaaaaaaaaaaaaaa','2022-10-27'),(40,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Servicios','hola como estas Edwerd','2022-10-27'),(41,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Simuladores','Hola como estas, soy ALjeandro forero','2022-10-27'),(42,'Alejandro','Forero','jcamilovallejos@gmail.com',3102198024,'Administración de recursos','HOLA COMO ESTAS ','2022-10-28'),(43,'Pepe','Mujica','prueba3@g.com',2312123123,'Administración de recursos','descriptionContactdescriptionContactdescriptionContact descriptionContactdescriptionContactdescriptionContact','2022-10-31'),(44,'Pepe','Mujica','prueba3@g.com',2312123123,'Consultorias','onSubmitPqrsd onSubmitPqrsd onSubmitPqrsd onSubmitPqrsd onSubmitPqrsd','2022-10-31'),(45,'Pepe','Mujica','prueba3@g.com',2312123123,'Servicios','Al enviar la informacion contenida en este formulario, usted acepta la política de Habeas Data, conforme lo dispuesto por la Ley 1581 de 2012, Artículo 9°: Autorización del Titular; y el De','2022-10-31'),(51,'Brayan Stiven','Hernandez Manchola','bryan.xp98@outlook.com',3008914193,'Otras','*****************************************\nSenores Codaltec.\n\nEl presente email contiene lo siguiente:\n\nTrabajo en el departamento de sistemas, actualmente me encuentro disponible, me gustaría ser parte del equipo de trabajo de la compañía, poder conocer las instalaciones y las condiciones que requieren para el trabajo. \n\nCoordialmente\n\nBrayan Stiven Hernandez M\nTecnico de Soporte Externo\nDesarrollo web\nANALISTA DE SISTEMAS, TECNOLOGIA, INFORMACION Y DESARROLLO.\n\nEmail: Bryan.xp98@outlook.com\nEmail: Bryan.xp98@gmail.com\n\nTel: +57 3008914193\nTel: +57 3196683085\n\n_____________________________\n\nBogotá – Colombia\n\n \n\nEste mensaje puede contener información confidencial y privilegiada. Si ha sido enviado a Usted por error, responda por favor informando al remitente de ello, elimine este mensaje y absténgase de divulgar su contenido.\n\nThis message may contain confidential and privi.\n\n______________','2023-03-06'),(52,'Brayan Stiven','Hernandez Manchola','bryan.xp98@outlook.com',3008914193,'Otras','*****************************************\nSenores Codaltec.\n\nEl presente email contiene lo siguiente:\n\nTrabajo en el departamento de sistemas, actualmente me encuentro disponible, me gustaría ser parte del equipo de trabajo de la compañía, poder conocer las instalaciones y las condiciones que requieren para el trabajo. \n\nCoordialmente\n\nBrayan Stiven Hernandez M\nTecnico de Soporte Externo\nDesarrollo web\nANALISTA DE SISTEMAS, TECNOLOGIA, INFORMACION Y DESARROLLO.\n\nEmail: Bryan.xp98@outlook.com\nEmail: Bryan.xp98@gmail.com\n\nTel: +57 3008914193\nTel: +57 3196683085\n\n_____________________________\n\nBogotá – Colombia\n\n \n\nEste mensaje puede contener información confidencial y privilegiada. Si ha sido enviado a Usted por error, responda por favor informando al remitente de ello, elimine este mensaje y absténgase de divulgar su contenido.\n\nThis message may contain confidential and privi.\n\n______________','2023-03-06'),(53,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Servicios','Solicitud de reunión tema tecnológico satelital última tecnología','2023-03-13'),(54,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Servicios','Solicitud de reunión tema tecnológico satelital última tecnología','2023-03-13'),(55,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Servicios','Solicitud de reunión tema tecnológico satelital última tecnología','2023-03-13'),(56,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Servicios','Solicitud de reunión tema tecnológico satelital última tecnología','2023-03-13'),(57,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Otras','solicitud ','2023-03-13'),(58,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Otras','solicitud ','2023-03-13'),(59,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Seguridad electronica','solicito una cita. ','2023-03-13'),(60,'ALBERTO','SUAREZ VELASQUEZ','asuarez@colsago.com',3103200940,'Seguridad electronica','solicito una cita. ','2023-03-13'),(61,'MIGUEL ANGEL','AYALA','gerencia@casaindustrialalemana.com',3158140603,'Simuladores','Señores:\nCOLDATEC\nCiudad.\n\nCordial saludo.\nNuestra empresa, CASA INDUSTRIAL ALEMANA es representante de diversas empresas Europeas proveedoras de Plantas y equipos para fabricantes de municiones y explosivos.\nActualmente, somos proveedores de INDUMIL, en Colombia y de otras instituciones a nivel Latinoamericano.\n\nUno de nuestros clientes tiene en proyecto la instalación de un SIMULADOR DE TIRO, y es el motivo por el cual los estamos contactando.\nNos gustaría conocer el proceso para obtener una oferta por parte de COLDATEC y las persona de contacto para este proyecto.\nTenemos algunas especificaciones deseadas por el cliente, para ver si se pueden ajustar o modificar, de acuerdo con su experiencia y soporte.\n\nAgradecemos la atención y estamos atentos a sus comentarios,\nAtte.\nMIGUEL ANGEL AYALA R.\nDIRECTOR COMERCIAL\nCALLE 127 # 70 G - 78, 111121, BOGOTA, COLOMBIA\nTEL: (57 1) - 2952360 - CEL: 3158140603 \nwww.casaindustrialalemana.com\n','2023-03-21'),(62,'MIGUEL ANGEL','AYALA','gerencia@casaindustrialalemana.com',3158140603,'Simuladores','Señores:\nCOLDATEC\nCiudad.\n\nCordial saludo.\nNuestra empresa, CASA INDUSTRIAL ALEMANA es representante de diversas empresas Europeas proveedoras de Plantas y equipos para fabricantes de municiones y explosivos.\nActualmente, somos proveedores de INDUMIL, en Colombia y de otras instituciones a nivel Latinoamericano.\n\nUno de nuestros clientes tiene en proyecto la instalación de un SIMULADOR DE TIRO, y es el motivo por el cual los estamos contactando.\nNos gustaría conocer el proceso para obtener una oferta por parte de COLDATEC y las persona de contacto para este proyecto.\nTenemos algunas especificaciones deseadas por el cliente, para ver si se pueden ajustar o modificar, de acuerdo con su experiencia y soporte.\n\nAgradecemos la atención y estamos atentos a sus comentarios,\nAtte.\nMIGUEL ANGEL AYALA R.\nDIRECTOR COMERCIAL\nCALLE 127 # 70 G - 78, 111121, BOGOTA, COLOMBIA\nTEL: (57 1) - 2952360 - CEL: 3158140603 \nwww.casaindustrialalemana.com\n','2023-03-21'),(63,'MIGUEL ANGEL','AYALA','gerencia@casaindustrialalemana.com',3158140603,'Ventas','Señores:\nCOLDATEC\nCiudad.\n\nCordial saludo.\nNuestra empresa, CASA INDUSTRIAL ALEMANA es representante de diversas empresas Europeas proveedoras de Plantas y equipos para fabricantes de municiones y explosivos.\nActualmente, somos proveedores de INDUMIL, en Colombia y de otras instituciones a nivel Latinoamericano.\n\nUno de nuestros clientes tiene en proyecto la instalación de un SIMULADOR DE TIRO, y es el motivo por el cual los estamos contactando.\nNos gustaría conocer el proceso para obtener una oferta por parte de COLDATEC y las persona de contacto para este proyecto.\nTenemos algunas especificaciones deseadas por el cliente, para ver si se pueden ajustar o modificar, de acuerdo con su experiencia y soporte.\n\nAgradecemos la atención y estamos atentos a sus comentarios,\nAtte.\nMIGUEL ANGEL AYALA R.\nDIRECTOR COMERCIAL\nCALLE 127 # 70 G - 78, 111121, BOGOTA, COLOMBIA\nTEL: (57 1) - 2952360 - CEL: 3158140603 \nwww.casaindustrialalemana.com','2023-03-21'),(64,'Gabriel','Solórzano Arias','jsolorzano@msp.go.cr',50687883588,'Radares e inhibidores','Servicio de Vigilancia Aérea de Costa Rica ','2023-03-23'),(65,'Gabriel','Solórzano Arias','jsolorzano@msp.go.cr',50687883588,'Radares e inhibidores','Servicio de Vigilancia Aérea de Costa Rica ','2023-03-23'),(66,'Carlos ','Cevallos ','carloscev17@hotmail.com',593984278821,'Simuladores','Hola soy de Ecuador y estoy interesado en información sobre los simuladores de tiro por favor ','2023-04-05'),(67,'Carlos ','Cevallos ','carloscev17@hotmail.com',593984278821,'Simuladores','Hola soy de Ecuador y estoy interesado en información sobre los simuladores de tiro por favor ','2023-04-05'),(68,'Carlos ','Cevallos ','carloscev17@hotmail.com',593984278821,'Simuladores','Hola soy de Ecuador y estoy interesado en información sobre los simuladores de tiro por favor ','2023-04-05'),(69,'WENDY JOHANNA','ROJAS ABRIL','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(70,'WENDY JOHANNA','ROJAS ABRIL','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(71,'WENDY JOHANNA','ROJAS ABRIL','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(72,'WENDY JOHANNA','ROJAS ABRIL','wrojas@proyectosemtel.com.co',3017536167,'Consultorias','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(73,'WENDY JOHANNA','ROJAS ABRIL','wrojas@proyectosemtel.com.co',3017536167,'Consultorias','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(74,'Wendy Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Consultorias','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(75,'Wendy Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Radares e inhibidores','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(76,'Wendy Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(77,'Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados por ustedes a la CAR. ','2023-05-31'),(78,'Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados a la CAR. ','2023-05-31'),(79,'Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados a la CAR. ','2023-05-31'),(80,'Johanna','Rojas','wrojas@proyectosemtel.com.co',3017536167,'Otras','Prestación del servicio de laboratorio para sensores geosismicos terrestres suministrados a la CAR. ','2023-05-31'),(81,'Paola González','Sellos Colombianos SAS','ventas@selloscolombianos.com',3044756057,'Otras','Amablemente solicitamos información acerca del proceso de registro para nuevo proveedor. Somos Fabricantes de repuestos para maquinaria de producción. Gracias.','2023-10-26'),(82,'Paola González','Sellos Colombianos SAS','ventas@selloscolombianos.com',3044756057,'Otras','Amablemente solicitamos información acerca del proceso de registro para nuevo proveedor. Somos Fabricantes de repuestos para maquinaria de producción. Gracias.','2023-10-26'),(83,'Paola González','Sellos Colombianos SAS','ventas@selloscolombianos.com',3044756057,'Otras','Amablemente solicitamos información acerca del proceso de registro para nuevo proveedor. Somos Fabricantes de repuestos para maquinaria de producción. Gracias.','2023-10-26');
  INSERT INTO `financial` VALUES (7,'Estados Financieros 2022','1678788163809.pdf','2023-03-14'),(8,'Estados Financieros 2021','1678788600487.pdf','2023-03-14'),(9,'Estados Financieros 2020','1678788880811.pdf','2023-03-14'),(10,'Estados Financieros 2019','1678789124665.pdf','2023-03-14'),(11,'Estados Financieros 2018','1678789269350.pdf','2023-03-14'),(12,'Estados Financieros 2017','1678789522095.pdf','2023-03-14'),(13,'Estados Financieros 2016','1678789701549.pdf','2023-03-14'),(14,'Estados Financieros 2015','1678789910617.pdf','2023-03-14'),(15,'Estados Financieros 2014','1678790117764.pdf','2023-03-14'),(16,'Estados Financieros 2013','1678790287615.pdf','2023-03-14'),(17,'Estados Financieros 2012','1678790429761.pdf','2023-03-14');
  INSERT INTO `internal_control` VALUES (14,'POLITICA CONTROL INTERNO 2023','2023/05/31','1686172238704.pdf','2023-06-07');
  INSERT INTO `news` VALUES (2,'1668110992352.jpg','CODALTEC - SAAB','CODALTEC - SAAB','Tras el éxito de los dos primeros proyectos entre Codaltec y Saab, las empresas firmaron un nuevo acuerdo de colaboración para dos proyectos adicionales que iniciarán en octubre de 2022 y se extenderán por un año. Este continuo trabajo conjunto en herramientas de Realidad Virtual servirá para el desarrollo de software de simulación de vuelo del Gripen E/F, y también en el marco de un potencial proyecto Gripen para Colombia.','Following the success of the first two projects between Codaltec and Saab, the companies signed a new collaboration agreement for two additional projects that will start in October 2022 and run for one year. This continued joint work on Virtual Reality tools will serve for the development of Gripen E/F flight simulation software, and also in the framework of a potential Gripen project for Colombia.','2022-11-08'),(3,'1668111069599.JPG','ENTREGA BODYCAMS','DELIVERY BODYCAMS','La Corporación de Alta Tecnología para la Defensa - CODALTEC Alianza con la Policía Nacional realizó la implementación del proyecto Sistema de Gestión de Evidencias Digitales con Bodycams (cámaras corporales) para la vigilancia del Sistema de Transporte Masivo Transmilenio. En la Estación de Transmilenio Los Héroes se hizo entrega a la Alcaldía Mayor de Bogotá de 100 cámaras corporales que usarán los Uniformados del Comando de Policía del Transporte Masivo para mayor vigilancia y seguridad de los Bogotanos, las cuales también serán implementadas en las estaciones de Santa Fe, Usme, Teusaquillo, Puente Aranda, Antonio Nariño y Portal del Sur.','The Corporación de Alta Tecnología para la Defensa - CODALTEC, in partnership with the National Police, implemented the Digital Evidence Management System with Bodycams (body cameras) for the surveillance of the Transmilenio Mass Transit System. At the Los Héroes Transmilenio Station, 100 body cameras were delivered to the Mayor\'s Office of Bogotá, which will be used by the Uniformed Members of the Mass Transit Police Command for greater surveillance and security of Bogotanos, which will also be implemented in the Santa Fe, Usme, Teusaquillo, Puente Aranda, Antonio Nariño and Portal del Sur stations.','2022-11-10'),(4,'1668109433566.jpeg','Expociencia Meta','Expociencia Meta','CODALTEC participó al evento EXPOCIENCIA - META, con uno de los casos de éxito INHIBIDOR DE DRONES, desarrollado por nuestros ingenieros de investigacion y desarrollo, quienes cuentan con altas capacidades en materia de I+D+i, aunado a ello la ventaja de operar en cualquier lugar de nuestra geografia colombiana.','CODALTEC participated in the event EXPOCIENCIA - META, with one of the success cases DRONE INHIBITOR, developed by our research and development engineers, who have high capabilities in R & D, coupled with the advantage of operating anywhere in our Colombian geography.','2022-11-10');
  INSERT INTO `products` VALUES (10,5,'Administración de recursos','Resource management','El servicio de administración de actividades y/o proyectos de ciencia, tecnología e innovación existe como una herramienta para entidades, unidades y/o escuelas de educación superior que requieren de un equipo especializado que garantice un desarrollo adecuado de su actividad científica. Los profesionales designados llevan a cabo las labores de gestión contractual para las adquisiciones de bienes y servicios, supervisión continúa a proveedores, y seguimiento financiero y contable de los recursos. Estas labores se ejecutan a través de procesos ágiles que permiten una gestión eficiente de los recursos','The administration service for science, technology and innovation activities and/or projects exists as a tool for entities, units and/or schools of higher education that require a specialized team to guarantee the adequate development of their scientific activity. The designated professionals carry out the tasks of contractual management for the acquisition of goods and services, continuous supervision of suppliers, and financial and accounting follow-up of resources. These tasks are carried out through agile processes that allow an efficient management of resources.','1668097921170.jpg','2022-11-10'),(11,5,'Soporte logístico integrado','Integrated logistic support','CODALTEC tiene la capacidad de dar soporte y mantenimiento a los productos que fabrica, así mismo, dentro de los servicios que proveemos nuestros clientes pueden encontrar el soporte y mantenimiento de equipos de simulación y de seguridad electrónica de terceros.','CODALTEC has the capacity to provide support and maintenance for the products it manufactures. Likewise, within the services we provide our customers can find support and maintenance of simulation and electronic security equipment from third parties.','1668097940304.jpg','2022-11-10'),(12,5,'Seguridad electrónica','Electronic security','CODALTEC compañía especializada en diseño, estructuración, implementación y ejecución de soluciones para integración de sistemas especializados de seguridad electrónica: sistemas de CCTV, control de acceso, equipos de inspección, video vigilancia, intrusión, detección, analítica de datos, softwares elaborados a la medida y necesidad de nuestros clientes con ingenieros certificados en las mejores marcas reconocidas del mercado, con los más altos estándares de calidad y servicio.','CODALTEC company specialized in design, structuring, implementation and execution of solutions for integration of specialized electronic security systems: CCTV systems, access control, inspection equipment, video surveillance, intrusion, detection, data analytics, software tailored to the needs of our customers with certified engineers in the best brands in the market, with the highest standards of quality and service.','1668097962592.jpg','2022-11-10'),(13,5,'Consultorías','Consultancies','Gracias a la capacidad de talento humano, la experiencia y el conocimiento generado a través de los años en CODALTEC, tenemos disponible para nuestros clientes servicios de consultorio en RF, gestión de proyectos y simulación','Thanks to the capacity of human talent, experience and knowledge generated over the years in CODALTEC, we have available for our customers consulting services in RF, project management and simulation.','1668098000191.png','2022-11-10'),(18,3,'Simulador GECKO','GECKO Simulator','Está compuesto por una línea de tiro, reproduce las prácticas de entrenamiento de tiro principalmente para empresas de vigilancia y seguridad privada. El tirador puede entrenar la técnica, precisión, reacción, y memoria muscular para el manejo de armas de fuego, evaluando paralelamente su desempeño con herramientas del sistema. Para facilitar el proceso de entrenamiento se dispone de un sistema de evaluación e instrucción, este controla la realización de los ejercicios y realiza la calificación final con un completo reporte de los resultados obtenidos. Además, el entrenamiento es realizado con un arma (no letal) adaptada, la cual dispone de características físicas iguales al arma real, garantizando la reducción de costos en el entrenamiento a su vez que se mantiene la seguridad del alumno.','It is composed of a shooting line, it reproduces the shooting training practices mainly for private security and surveillance companies. The shooter can train the technique, precision, reaction, and muscle memory for the handling of firearms, evaluating his performance in parallel with the system\'s tools. To facilitate the training process, an evaluation and instruction system is available, which controls the performance of the exercises and performs the final qualification with a complete report of the results obtained. In addition, the training is carried out with an adapted (non-lethal) weapon, which has the same physical characteristics as the real weapon, guaranteeing the reduction of training costs while maintaining the safety of the student.','1686169479597.PNG','2022-11-10'),(19,3,'Simulador LYNX','LYNX Simulator','Permite incluir nuevos escenarios cómo actualizaciones que podrán hacerse a futuro. En cuanto a los ejercicios, un módulo de estudiante es capaz de ejecutar los ejercicios que sean diseñados por una estación de instructor LYNX.\n\nLas siguientes imágenes muestran algunos ejemplos de los ejercicios pre-diseñados. Estos ejercicios permiten practicar en blancos estáticos, en movimientos, a diferentes distancias y con diferentes condiciones ambientales.','It allows new scenarios to be included as updates that can be made in the future. As for the exercises, a student module is able to execute the exercises that are designed by a LYNX instructor station.\n\nThe following images show some examples of pre-designed exercises. These drills allow to practice on static targets, moving targets, at different distances and with different environmental conditions.','1686170050898.PNG','2022-11-10');
  INSERT INTO `sliders` VALUES (3,'1668096770711.jpeg','EXPOCIENCIA-META','EXPOCIENCIA-META','CODALTEC asistió al evento EXPOCIENCIA - META, con uno de los casos de éxito \"INHIBIDOR DE DRONES\".','CODALTEC attended the EXPOCIENCIA - META event, with one of the success cases \"DRONE INHIBITOR\".','2022-11-10'),(4,'1668096836185.JPG','CODALTEC','CODALTEC','Somos una entidad comprometida con el avance tecnológico del país, creando espacios de investigación, desarrollo y producción, con soluciones innovadoras por talento humano altamente capacitado.','Somos una entidad comprometida con el avance tecnológico del país, creando espacios de investigación, desarrollo y producción, con soluciones innovadoras por talento humano altamente capacitado.','2022-11-10'),(5,'1686079502737.jpg','LYNX','LYNX','Los centros de simulación LYNX, son una muestra de nuestras capacidades en desarrollo de tecnología para nuestras fuerzas militares y de policía, ayudando así a la disminución de un 90% en los costos de entrenamiento.','The LYNX simulation centers are a demonstration of our capabilities in developing technology for our military and police forces, thus helping to reduce training costs by 90%.','2023-06-06');
  INSERT INTO `users` VALUES (9,'alejofova@gmail.com','$2b$10$hXVAUcCONsIiQDRV/2exr.RfKVRPkq5CtWGz5KeFRnP0dxH5B9o3S','admin','2023-02-22','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksImlhdCI6MTY3NzEwMDQxNiwiZXhwIjoxNjc3MTAxMzE2fQ.6Y1lhY8RIOONsfK8n-S5o1A5eyYmk9sAOVB-XIAcS9Y'),(10,'ahiguera@codaltec.com','$2b$10$wO/hwef.h3rxezWiGf7qbeWz0Kf.cN1kl8HnNx5D3409V9vnfhdkC','contenido','2023-02-27',NULL),(11,'controlinterno@codaltec.com','$2b$10$rfceD.Vp0WDcj6PV3j1r4ubJfoT6iWggDRjT4Wr9gr7ZBtNh7qsS6','control interno','2023-02-27',NULL),(12,'egarcia@codaltec.com','$2b$10$9BY8vT0syx3GZ39Qf2IeIemBe0hAV/RLCc4DeoPElKmBovVL3VMUO','contratación','2023-02-27',NULL),(13,'asistenciadegerencia@codaltec.com','$2b$10$y6Dspoljekff85IoM9lnb.M4ZyGFMTAiaQ/xp0AOu.zPCpPYYFvua','contenido','2023-02-27',NULL),(14,'comunicaciones@codaltec.com','$2b$10$2JW/TUhrrPJAZ7ctlf4JeOqZgt7aLggPXkAAl6MRZlegh2LzRC/7e','Redes','2023-05-09',NULL);
END IF;