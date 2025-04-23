import Category from '../models/Category.js'

const addCategory = async (req, res) => {
    const name = req.body.name
    if (!name) return res.status(400).json({ msg: 'Informe um nome para a categoria' });

    const categorie = await Category.findOne({ name });
    if (categorie) return res.status(409).json({ msg: 'Categoria já cadastrada' });

    try {
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).redirect(`/admin/${req.userName}`);
    } catch (err) {
        res.status(500).json({ msg: 'Não foi possivel salvar a categoria devido a um erro interno' });
    }
}

export default addCategory