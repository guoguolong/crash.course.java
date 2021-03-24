import React, { useState, useEffect, useRef} from 'react';

const friendList = [
    { id: 1, name: 'Allen', isOnline: false},
    { id: 2, name: 'Koda', isOnline: false},
    { id: 3, name: 'Judy', isOnline: false},
];

const ChatAPI = {};
ChatAPI.subscribeToFriendStatus = function (friendID, callback) {
    console.log('subscribe: ', friendID)
    let isOnline = true;
    if (friendID == 3) isOnline = false
    callback({isOnline: isOnline})
}
ChatAPI.unsubscribeFromFriendStatus = function (friendID, callback) {
    console.log('Unsubscribe: ', friendID)
    callback({isOnline: false})
}

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    });

    return isOnline;
}

function Circle(props) {
    return (
        <div style={{ background: props.color, borderRadius: 30, width: 60, height: 60 }}></div>
    )
}
export default function FriendApp() {
    // 相当于render函数，每次recipientID 触发 render函数（即下面的代码）重新执行。 
    const [recipientID, setRecipientID] = useState(1);
    console.log('Friend App...', new Date())
    const isRecipientOnline = useFriendStatus(recipientID);
    const intervalRef = useRef();
    return (
        <>
            <input ref={intervalRef} defaultValue="Input your name."></input>
            <button onClick={() => {
                console.log('Get Input Value:::', intervalRef.current.value);
            }}>Get Input</button>
            
            <Circle color={isRecipientOnline ? 'green' : 'red'} />
            <select
                value={recipientID}
                onChange={e => setRecipientID(Number(e.target.value))}
            >
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </>
    );
}