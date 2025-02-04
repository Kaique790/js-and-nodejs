import Categorie from '../models/Categorie.js'

const addCategorie = async (req, res) => {
    const name = req.body.name
    if (!name) return res.status(400).json({ msg: 'Informe um nome para a categoria' });

    const categorie = await Categorie.findOne({ name });
    if (categorie) return res.status(409).json({ msg: 'Categoria já cadastrada' });

    try {
        const newCategorie = new Categorie({ name });
        await newCategorie.save();
        res.status(201).json({ msg: 'Nova categoria adicionada!' });
    } catch (err) {
        res.status(500).json({ msg: 'Não foi possivel salvar a categoria devido a um erro interno' });
    }
}

export default addCategorie