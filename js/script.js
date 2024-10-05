const socket = io();
const editor = document.getElementById('editor');
const livePreview = document.getElementById('livePreview');

editor.addEventListener('input', () => {
    const content = editor.value;
    livePreview.innerHTML = content.replace(/\n/g, '<br>');
    socket.emit('update', content);
});

socket.on('update', (data) => {
    editor.value = data;
    livePreview.innerHTML = data.replace(/\n/g, '<br>');
});
