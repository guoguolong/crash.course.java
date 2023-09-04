<?php 
$image_basedir = './';

$im =  new Imagick($image_basedir . 'images/widget.jpg');
$album = new Imagick($image_basedir . 'images/bg.jpg');  
// $im->rotated(....)
$album->compositeimage($im, Imagick::COMPOSITE_OVER, 10 ,20);  
$album->writeImage($image_basedir . 'album.jpg'); 