<?php
function fast_uuid($suffix_len = 3){
static $being_timestamp = 1336681180;// 2012-5-10

$time = explode(' ', microtime());
$id = ($time[1] - $being_timestamp) . '-' . sprintf('%06u', substr($time[0], 2, 5));
if ($suffix_len > 0)
{
    $id .= '-' . substr(sprintf('%010u', mt_rand()), 0, $suffix_len);
}
return $id;
}

echo fast_uuid();

insert() {
    $result = Feed::save($attributes)
    if(!$result) {
        $attributes['feed_id'] = fast_uuid(); 
        $result = Feed::save($attributes)
    }
    while(true) {
        $result = Feed::save($attributes)
    }
    $result = Feed::save($attributes)
    if(!$result) {
        $attributes['feed_id'] = fast_uuid(); 
        $result = Feed::save($attributes)
    }
}