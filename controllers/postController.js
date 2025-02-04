import Post from '../models/Post.js'
import User from '../models/User.js'

// Send post route
const sendPost = async (req, res) => {
    const owner = req.params.name;
    const user = await User.findOne({ name: owner });
    const { title, content, categorie } = req.body;

    if (!title || !content || !categorie) {
        return res.status(422).json('Todos os campos são obrigatórios');
    }

    const newPost = new Post({
        title,
        content,
        categorie,
        owner
    });

    try {
        await newPost.save();
        res.status(201).redirect(`/user/${user.name}`)
    } catch (err) {
        res.status(500).render('errors/notFound');
        console.log('Erro ao tentar salvar postagem: ', err);
    }
}

export default sendPost