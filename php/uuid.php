<?php
// $time = explode(' ', microtime());
// // 获取当前微秒，重复概率 百万分之一:
// echo $time[1] . substr($time[0], 2, 6);

// METHOD 2;
// 根据不同服务器ID设置对应区间

function get_host_config_current_id(){
    // host_id : 1 => 区间 1-100
    // host_id ： 2 => 区间 101 -> 200

    global $host_id, $current_id, $step;

    if(empty($host_id)){
        $host_id = 2; // 设置默认值
    }

    if(empty($current_id)){
        $current_id = 0; // 设置默认值
    }

    if(empty($step)){
        $step = 100; // 设置间隔
    }

    if($current_id < $host_id * $step || $current_id > ($host_id + 1) * $step){
        $current_id = $host_id * $step;
    }else{
        $current_id ++;
    }
    return str_pad($current_id,3,"0",STR_PAD_LEFT);
}
echo $time[1] . substr($time[0], 2, 3) . get_host_config_current_id();



// METHOD 3;
function fast_uuid($suffix_len=3){
static $being_timestamp = 1336681180;// 2012-5-10

$time = explode(' ', microtime());
$id = ($time[1] - $being_timestamp) . sprintf('%06u', substr($time[0], 2, 5));
if ($suffix_len > 0)
{
    $id .= substr(sprintf('%010u', mt_rand()), 0, $suffix_len);
}
return $id;
}

echo fast_uuid();