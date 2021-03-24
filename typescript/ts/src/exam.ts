interface Stream{
    open(): void;
    dispose(): void;
}

interface File {
    open(): void;
    delete(): void;
}

function fetchResource(): Stream | File {
    return {
        open: function() {console.log('open')},
        dispose: function() {console.log('disposing')},
        delete: function() {console.log('delete')},
    }
}

function isDeleteable(openable: Stream|File): openable is File {
    return (<File>openable).delete !== undefined
}

let resource = fetchResource();
resource.open();

if(isDeleteable(resource)) {
    resource.delete();
} else {
    resource.dispose();
}