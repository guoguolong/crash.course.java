<?php 
$image_basedir = './';

$dude = new Imagick($image_basedir . 'images/photo.jpg');
$mask = new Imagick($image_basedir . 'images/frame.png');
$dude->setImageMatte(1); 
$dude->compositeImage($mask, Imagick::COMPOSITE_DSTIN, 0, 0);
$dude->writeImage($image_basedir . 'mask.png');

//3437 2551
