-- Base de datos: `db_curso_app`
CREATE DATABASE IF NOT EXISTS `db_curso_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_curso_app`;

-- --------------------------------------------------------

-- Estructura de tabla para la tabla `persona`
CREATE TABLE `persona` (
    `idpersona` INT AUTO_INCREMENT PRIMARY KEY,
    `cedula` VARCHAR(20) NOT NULL,
    `nombres` VARCHAR(50) NOT NULL,
    `apellidos` VARCHAR(50) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL,
    `telefono` VARCHAR(50) DEFAULT NULL,
    `direccion` VARCHAR(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Volcado de datos para las tablas nuevas (ejemplos)
INSERT INTO `persona` (`cedula`, `nombres`, `apellidos`, `fecha_nacimiento`, `telefono`, `direccion`) VALUES
('1234567890', 'David', 'Lara', '1985-01-15', '123456789', 'Calle Falsa 123'),
('0987654321', 'Carlos', 'Zea', '1990-02-20', '987654321', 'Avenida Siempre Viva 742');

