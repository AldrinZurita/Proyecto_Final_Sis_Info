-- Creacion de triggers
USE proyecto_sisinfo;

DELIMITER $$

CREATE TRIGGER creacion_de_usuario
AFTER INSERT ON usuarios
FOR EACH ROW
BEGIN
    INSERT INTO cambios (descripcion, ci_usuario, tabla_afectada, id_afectado)
    VALUES (
		CONCAT('Nuevo usuario registrado'),
        NEW.ci_usuario,
        'usuarios',
        NEW.ci_usuario
        );
END$$

DELIMITER $$

CREATE TRIGGER cambio_estado_reserva
AFTER UPDATE ON reservas.estado
FOR EACH ROW
BEGIN
    INSERT INTO cambios (descripcion, ci_usuario, tabla_afectada, id_afectado)
    VALUES (
        CONCAT('Se cambió el estado de la reserva ', OLD.id, ' de "', OLD.estado, '" a "', NEW.estado, '"'),
        NEW.ci_usuario,
        'reservas',
        OLD.id
    );
END$$

DELIMITER ;

