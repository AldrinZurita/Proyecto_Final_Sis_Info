-- Inserccion de los datos basicos
USE espacios_bo;

INSERT INTO `roles` (rol) VALUES 
    ('super_admin'),
    ('admin'),
    ('presidente_otb'),
    ('empresa');

INSERT INTO `estados` (estado) VALUES 
    ('pendiente'),
    ('aceptado'),
    ('rechazado'),
    ('pagado'),
    ('cancelado'),
    ('cancelado-reembolzado'),
    ('por entregar');
    
INSERT INTO `tipos-eventos` (tipo) VALUES
	('Feria'),
    ('Cultural'),
    ('Social'),
    ('Bienestar Social');
    
INSERT INTO `permisos` (nombre) VALUES
	('Venta de alimentos y bebidas'),
    ('Venta y Consumo de bebidas alcoholicas'),
    ('Espectaculos publicos'),
    ('Seguridad'),
    ('Comercio'),
    ('Ambiental'),
    ('Transito');

INSERT INTO `estados` (estado) VALUES
	('por pagar'),
    ('pagada'),
    ('pendiente'),
    ('realizada'),
    ('cancelada');

INSERT INTO `usuarios` (ci, nombre, ap_paterno, ap_materno, email, contrasena, direccion, telefono, rol, estado) VALUES
    (3, 'presi1', '*', '*', 'presi1@gmail.com', '$2b$10$yqx7sIkFS3JP6bKk7zYDh.KrJmauKcVurhBl355iQbyhlzIwecEyC', 'direccion', '12345678', 3, 2),
    (4, 'presi2', '*', '*', 'presi2@gmail.com', '$2b$10$Z3VhwNnl9bMzun/nQIdDX.2L.UDjgfDLBSi9jqe08x1Tc9.LAzniS', 'direccion', '21345678', 3, 2),
    (5, 'empresa1', '*', '*', 'empresa1@gmail.com', '$2b$10$kSrgBfgtr1kboP5Zy..AG.tDeE3DmlA/wkIBbM3Z0oxtx5IY.IGXO', 'direccion', '31245678', 4, 2),
    (6, 'empresa2', '*', '*', 'empresa2@gmail.com', '$2b$10$mvHGMYQYRGMVwvqmQdCB4.weDMWYLvclxqohvvU2NNl8KjX2HXsvW', 'direccion', '41235678', 4, 2),
    (1, 'super-admin', '*', '*', 'supadmin@gmail.com', '$2b$10$axNv20Oabanqsy7xpuCbv.lS5tYONgzrZiW9GCdyNjQogNwpIwbnq', 'direccion', '51234678', 1, 2),
    (2, 'admin', '*', '*', 'admin@gmail.com', '$2b$10$7PChYOjZUaUvBOm3yf.oa.A4rA9WKqIiJBlbmoW.5gbF4VIpx.aKi', 'direccion',  '61234578', 2, 2);

INSERT INTO `presidentes-otb` (usuario, otb, documento) VALUES
    (3, 'OTB T1', NULL),
    (4, 'OTB T2', NULL);

INSERT INTO `empresas` (usuario, empresa, documento) VALUES
    (5, 'EMPRESA T1', NULL),
    (6, 'EMPRESA T2', NULL);

INSERT INTO `espacios-publicos` (nombre, altitud, latitud, descripcion, url_imagen, tipo) VALUES
    ('Plaza 14 de Septiembre', -17.393777, -66.156942,
    'Plaza central arbolada con una fuente y una columna adornadas, que conmemora la independencia',
    'https://lh5.googleusercontent.com/p/AF1QipPYMlCFdbIp8C-e0NyYEvHLcDcvQLH4ZNtqhGXR=w408-h306-k-no',
    'plaza'),
    ('Plaza Colon', -17.387988, -66.155790,
    'Plaza popular como punto de encuentro en un parque con paseos arbolados, lechos florales y estanques con fuentes.',
    'https://lh5.googleusercontent.com/p/AF1QipNijoWxTfb-iNr5MAdnJizaF8owdRTTPM3KFlQS=w408-h306-k-no',
    'plaza'),
    ('El Prado', -17.386789, -66.156518,
    'Jardín en una calle arbolada con instalaciones de temporada en una glorieta al aire libre y bancos con sombra.',
    'https://lh3.googleusercontent.com/p/AF1QipMTyaYGZm_gb_Nu-Fls7ImGhdFReUc7lLtLrdjy=s680-w680-h510',
    'plaza'),
    ('Plaza de Las Banderas', -17.382307, -66.159867,
    'Plaza con banderas nacionales y monumento de piedra a la democracia.',
    'https://lh3.googleusercontent.com/p/AF1QipOvpBeGGGshphUVAgQCBVMPLQn21UDUBidomVlH=s680-w680-h510-rw',
    'plaza'),
    ('Plaza Corazonistas', -17.393100, -66.161506,
    'Plaza concurrida rodeada de palmeras, con flores coloridas, 2 fuentes y un monumento.',
    'https://lh3.googleusercontent.com/p/AF1QipMHvUXMEiMpjAoFWMPO4NbRbO2uLo6L3k_BjADa=s680-w680-h510',
    'plaza'),
    ('Plaza Sucre', -17.392117, -66.148058,
    'Plaza rodeada de árboles, popular entre estudiantes de universidad cercana como área de lectura y recreación.',
    'https://lh5.googleusercontent.com/p/AF1QipNWOQGSvI1ksiMbm8eF1JBmo_bCHNNqVS4elb1W=w408-h408-k-no',
    'plaza'),
    ('Plaza de la Mujer', -17.388691, -66.149964,
    'Plaza rodeada de frondosos árboles y mucha vegetacion.',
    'https://lh5.googleusercontent.com/p/AF1QipP9a78GmU4IgUtIa2f-Ac57fu3MgUu5XeEVjJ5D=w600-h321-p-k-no',
    'plaza'),
    ('Plaza Quintanilla', -17.381913, -66.151790,
    'Plaza urbana circular con árboles, césped y asientos en la que se realizan eventos y festivales.',
    'https://lh5.googleusercontent.com/p/AF1QipMBz2-uOg1qzuhdCPY0Zh7MjR7lZJQm-Zmw2kOk=w408-h306-k-no',
    'plaza'),
    ('Plazuela Cobija', -17.390366, -66.163074,
    'Plazuela tranquila, con hermosa vegetación, bellos árboles y hermosas esculturas',
    'https://lh5.googleusercontent.com/p/AF1QipMBF-k1Tq2gjPAW6znRJ9y55aHak8aJB9w7ILNa=w540-h312-n-k-no',
    'plaza'),
    ('Plazuela San Sebastián', -17.398756, -66.159815,
    ' ',
    'https://lh5.googleusercontent.com/p/AF1QipNoMyXIrAWerYpSiPjcOIBCs2T4mZ-pghG7W1ff=w426-h240-k-no',
    'plaza'),
    ('Parque del Arquitecto', -17.377349, -66.145369,
    ' ',
    'https://assets.xomio.com/listings/images/rl-134288721__1__720.jpg',
    'plaza'),
    ('Complejo Acuatico La Chimba', -17.401618, -66.173887,
    'Centro con piscinas olimpicas',
    'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2019/6/27/whatsapp_image_2019-06-27_at_7.11.29_pm.jpeg?itok=9kBcMxPv',
    'deportivo'),
    ('Pabellon de Gimnasia', -17.405126, -66.185114,
    ' ',
    'https://www.lostiempos.com/sites/default/files/styles/pipocas_sub_home/public/sedes_cocha_2018/pabellon_de_gimnasia.jpg?itok=FTVTof-v',
    'deportivo'),
    ('Estadio Sudamericano Felix Capriles', -17.379221, -66.161718,
    ' ',
    'https://eldeber.com.bo/_next/image?url=https%3A%2F%2Fstatic.eldeber.com.bo%2FFiles%2FSizes%2F2024%2F9%2F27%2Fel-estadio-flix-capriles._2016135749_760x520.jpg&w=3840&q=75',
    'deportivo'),
    ('Coliseo Evo Morales', -17.381268, -66.161296,
    ' ',
    'https://cd1.eju.tv/wp-content/uploads/2018/05/5b056f4be4961.jpg',
    'deportivo'),
    ('Gimnasio Polifuncional SARCO', -17.369685, -66.176407,
    ' ',
    'https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2012/09/27/2012N72564.jpg',
    'deportivo'),
    ('Circuito Municipal de BMX', -17.445243, -66.172001,
    ' ',
    'https://pbs.twimg.com/media/E5TYfliXEAgAg9F?format=jpg&name=large',
    'deportivo'),
    ('FEXCO', -17.418034, -66.129624,
    ' ',
    'https://pxcdn.reduno.com.bo/reduno/062023/1686083556053.jpg',
    'cultural'),
    ('Centro Artistico Municipal Bicentenario', -17.390638, -66.158500,
    ' ',
    'https://www.opinion.com.bo/media/opinion/images/2020/09/16/2020091620552472130.jpg',
    'cultural'),
    ('Teatro Acha', -17.392696, -66.156831,
    ' ',
    'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2017/3/25/1_c_2_tiemposssssssss.jpg?itok=WKi9uS4Z',
    'cultural'),
    ('Teatro Ulises Hermosa', -17.397295, -66.135280,
    'Teatro al aire libre',
    'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2024/9/13/web_whatsapp_image_2024-09-06_at_7.05.41_pm.jpg?itok=VNaCHLye',
    'cultural'),
    ('Coronilla ', -17.381664, -66.117321,
    ' ',
    'https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2023/4/24/1_me_1_lopezzzzzzzz.jpg?itok=ZzMNgg3b',
    'cultural'),
    ('Museo Casona Santivañez', -17.394537, -66.159108,
    ' ',
    'https://www.opinion.com.bo/asset/thumbnail,992,558,center,center/media/opinion/images/2024/03/27/2024032722470693979.jpg',
    'cultural');
    