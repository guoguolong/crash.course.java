<?php
function resize($folder)
{
    if (is_dir($folder)) {
        if ($dh = opendir($folder)) {
            $count = 0;
            while (($filename = readdir($dh)) !== false) {
                $full_file_path = $folder . DIRECTORY_SEPARATOR . $filename;
                if ((is_dir($full_file_path)) && $filename != "." && $filename != "..") {
                    resize($full_file_path, true);
                } else {
                	if(preg_match('/\.jpg$/', $full_file_path)) {
                        $im = imagecreatefromjpeg($full_file_path);
                        list($width, $height) = getimagesize($full_file_path);
                        $scale_width = 1010;
                        $scale_height = round($scale_width * $height/$width);  
                        $to_image = imagecreatetruecolor($scale_width, $scale_height);
                        $color    = imagecolorallocate($to_image, 255, 255, 255);
                        imagefill($to_image, 0, 0, $color);
                        imagecopyresampled($to_image, $im, 0, 0, 0, 0, $scale_width, $scale_height, $width, $height);
                        imagejpeg($to_image, $full_file_path);
                        echo $full_file_path . " done.\r\n";
                	}
                }
            }
            closedir($dh);
        }

        if (count(scandir($folder)) <= 2) {
            if ($rm_folder) rmdir($folder);
        }
    }
}

resize('.');