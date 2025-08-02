import { User } from "../models/user.model.js"


// PUT: /settings/dev-mode/:userId
export const UpdateDeveloperMode = async (req, res) => {
    const value = req.body.developerMode;
    const developerMode = value == 1 ? true : false

    console.log(`userId: ${req.params.userId}`)
    console.log(`value: ${value}`)

    try {
        await User.findByIdAndUpdate(
            req.params.userId,
            {
                $set: {
                    isDev: developerMode
                }
            }
        )

        return res.status(204).end()
    }
    catch (err) {
        console.log(err);
        return res.status(500).end()
    }
}