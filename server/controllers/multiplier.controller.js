import Multiplier from '../models/multiplier.model.js'

export const postMultiplier = async (req, res) => {
    const { color, value } = req.body;

    try {
        const newMultiplier = new Multiplier({
            color,
            value
        });

        await newMultiplier.save();
        res.send('multiplicador posteado')
    } catch (error) {
        console.log(error)
    }
};