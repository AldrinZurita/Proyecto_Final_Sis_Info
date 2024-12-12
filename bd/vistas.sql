-- Creacion de vistas
USE proyecto_sisinfo;

CREATE VIEW usuarios_pendientes AS
SELECT u.*
FROM usuarios AS u 
LEFT JOIN empresas AS e ON u.ci = e.usuario
LEFT JOIN presidentes_otb as pr ON u.ci = pr.usuario
WHERE u.estado = 1;

CREATE VIEW transferencias_pendientes AS
SELECT u.*
FROM usuarios AS u 
LEFT JOIN empresas AS e ON u.ci = e.usuario
LEFT JOIN presidentes_otb as pr ON u.ci = pr.usuario
WHERE u.estado = 1;

CREATE VIEW eventos_futuros AS
SELECT 
    e.nombre AS evento,
    e.descripcion AS descripcion,
    e.fecha_evento AS fecha,
    ep.nombre AS lugar
FROM eventos AS e
INNER JOIN reservas AS r ON e.id_reserva = r.id
INNER JOIN espacios_publicos AS ep ON r.id_espacio_publico = ep.id
WHERE r.estado = 'pagada' AND e.fecha_evento >= CURRENT_DATE;

CREATE VIEW eventos_pasados AS
SELECT
    e.nombre AS evento,
    e.descripcion AS descripcion,
    e.fecha_evento AS fecha,
    ep.nombre AS lugar
FROM eventos AS e
INNER JOIN reservas AS r ON e.id_reserva = r.id
INNER JOIN espacios_publicos AS ep ON r.id_espacio_publico = ep.id
WHERE e.fecha_evento <= CURRENT_DATE;