const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const ADMIN_CODE = process.env.ADMIN_CODE

// registration logic
const register = async (req, res) => {

    const { name, email, password, confirmpassword, role, adminCodeProvided } = req.body;

    // Validations
    if (!name) return res.status(422).json({ msg: 'O nome é obrigatório!' });
    if (!email) return res.status(422).json({ msg: 'O e-mail é obrigatório!' });
    if (!password) return res.status(422).json({ msg: 'A senha é obrigatória!' });
    if (password !== confirmpassword) return res.status(422).json({ msg: 'As senhas não correspondem!' });
    if (role === 'admin' && adminCodeProvided != ADMIN_CODE) return res.status(422).json({ msg: 'código de autenticação inválido!' });

    // Check if user exist
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(422).json({ msg: 'Usuário já cadastrado!' });

    // Create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create User
    const user = new User({
        name,
        email,
        password: passwordHash
    });

    try {
        await user.save();
        res.status(201).json({ msg: 'Usuário cadastrado com sucesso!' });
    } catch (err) {
        res.status(500).json({ msg: 'Houve um erro inesperado no servidor!' });
    }
};

// Login logic
const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!email || !password) return res.status(422).json({ msg: 'Todos os campos são obrigatórios!' });
    if (!user) return res.status(422).json({ msg: 'Usuário não encontrado!' });

    // check if password exist
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) return res.status(422).json({ msg: 'Senha inválida!' });

    //Login in
    try {
        const SECRET = process.env.SECRET;
        const id = user._id;
        const token = jwt.sign({ id }, SECRET);
        res.cookie('token', token)
            .status(200)
            .json({ token, id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Houve um erro inesperado. Tente novamente!' });
    }

}

module.exports = { register, login }