const userName = document.getElementById('user-name').value;

const baseURL = `http://localhost:3000/user/${userName}`
const local = axios.create({ baseURL });

async function logout () {
    try {
        local.post('/logout');
    } catch (err) {
        console.log(err);
    }
    
}

async function delPost(postId) {
    const data = { postId }

    try {
        await local.delete('/post', { data });
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
   
}

async function editPost(event, postId) {
    event.preventDefault();

    const title = document.getElementById(`title-${postId}`).value;
    const content = document.getElementById(`content-${postId}`).value;
    const category = document.getElementById(`category-${postId}`).value;

    const data = { postId, title, content, category };

    try {
        await local.patch('/post', data);
        window.location.reload()
    } catch (error) {
        console.log('Erro ao fazer a solicitação:', error);
    }
}
