-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-02-2022 a las 10:21:34
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `luisfragabenitez`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscribite`
--

CREATE TABLE `inscribite` (
  `id_alumno` int(250) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `apellidopat` varchar(250) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `ciudad` varchar(250) NOT NULL,
  `curso` varchar(250) NOT NULL,
  `telefono` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `inscribite`
--

INSERT INTO `inscribite` (`id_alumno`, `nombre`, `apellidopat`, `usuario`, `ciudad`, `curso`, `telefono`) VALUES
(1, 'Cosme', 'Fulanito', 'Cosme2021', 'Lanus', 'PHP', 12345678),
(2, 'Juan ', 'Perez', 'juancito2022', 'CABA', 'HTML', 87654321);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `producto_id` int(11) NOT NULL,
  `producto_nombre` varchar(250) NOT NULL,
  `producto_precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`producto_id`, `producto_nombre`, `producto_precio`) VALUES
(1, 'HTML', 9250),
(12, 'Javascript', 9800),
(14, 'Ruby', 9800);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `suscriptos`
--

CREATE TABLE `suscriptos` (
  `Email` varchar(250) NOT NULL,
  `Password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `suscriptos`
--

INSERT INTO `suscriptos` (`Email`, `Password`) VALUES
('luchofraga@gmail.com', ''),
('luchofraga@gmail.com', ''),
('weewrr@ewrwer.wer.werew', ''),
('weewrr@gmail.com', ''),
('weewrr@gmail.com', ''),
('luchofraga82@hotmail.com', ''),
('luchofraga@gmail.com', ''),
('luchofraga@gmail.com', ''),
('luchofraga@gmail.com', ''),
('lore@gmail.com', ''),
('luchofraga@gmail.com', ''),
('weewrr@gmail.com', ''),
('luchofraga@gmail.com', ''),
('luchofraga@gmail.com', ''),
('[value-1]', '[value-2]'),
('lore@gmail.com', ''),
('weewrr@gmail.com', ''),
('weewrr@gmail.com', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inscribite`
--
ALTER TABLE `inscribite`
  ADD PRIMARY KEY (`id_alumno`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`producto_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inscribite`
--
ALTER TABLE `inscribite`
  MODIFY `id_alumno` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `producto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
