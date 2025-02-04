import Post from '../models/Post.js'
import User from '../models/User.js'

// Send post route
const sendPost = async (req, res) => {
    const userName = req.userName;
    const user = await User.findOne({ name: userName });
    const userId = user._id
    const { title, content, categorie } = req.body;

    if (!title || !content || !categorie) {
        return res.status(422).json('Todos os campos são obrigatórios');
    }

    const newPost = new Post({
        title,
        content,
        categorie,
        owner: userId
    });

    try {
        await newPost.save();
        res.status(201).redirect(`/user/${userName}`)
    } catch (err) {
        res.status(500).render('errors/notFound');
        console.log('Erro ao tentar salvar postagem: ', err);
    }
}

export default sendPost