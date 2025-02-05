const baseURL = window.location.href

const local = axios.create({ baseURL })

async function delCategorie(categorieId) {
    const data = {
        categorieId
    }
    try {
        const response = await local.delete('/categorie', { data });
        window.location.reload()
    } catch (err) {
        console.log(response.data.msg);
    } 
}
