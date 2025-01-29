const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/register', async (req, res) => {
    
    const { name, email, password, confirmpassword } = req.body;

    // Validations
    if (!name) return res.status(422).json({ msg: 'O nome é obrigatório!' });
    if (!email) return res.status(422).json({ msg: 'O e-mail é obrigatório!' });
    if (!password) return res.status(422).json({ msg: 'A senha é obrigatória!' });
    if (password !== confirmpassword) return res.status(422).json({ msg: 'As senhas não correspondem!' });

    // Check if user exist
    const userExist = await User.findOne({ email });
    if(userExist) return res.status(422).json({ msg: 'Usuário já cadastrado' })

    // Create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create User
    const user = new User ({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save();
        res.status(201).json({ msg: 'Usuário cadastrado com sucesso'});
    } catch(err) {
        res.status(500).json({ msg: 'Houve um erro inesperado no servidor' });
    }
});

module.exports = router;