const baseURL = 'http://localhost:3000/admin/kaique'

const local = axios.create({ baseURL });

async function delCategory(categorieId) {
    const data = { categorieId }

    try {
        await local.delete('/category', { data });
        window.location.reload();
    } catch (err) {
        console.log(err);
    }
}


async function editCategory(event, categoryId) {
    event.preventDefault();

    const nameCategory = document.getElementById(`name-${categoryId}`);
    const newCategory = document.getElementById(categoryId).value
    data = {
        categoryId,
        name: newCategory
    }

    try {
        const response = await local.patch('/category', data);
        JSON.stringify(response);
        
        nameCategory.innerHTML = response.data.newName
    } catch(err) {
        console.log(err);
    }
}