<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: x-csrf-token');
echo '姓名,年龄,性别,所在城市' . PHP_EOL;
echo '王羲之,35,1,"California, America"' . PHP_EOL;
echo '李安石,24,0,"Beiking, China"' . PHP_EOL;
echo 'li明阳,38,1,"Taiwan"' . PHP_EOL;
