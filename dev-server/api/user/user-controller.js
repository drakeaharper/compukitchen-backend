import User from '../../model/user_model'

export function index(req, res) {
    User.find({}, (error, user) => {
        if (error) {
            return res.status(500).json()
        }
        if (!user) {
            return res.status(404).json()
        }
        return res.status(200).json({users: user})
    })
}

export function show(req, res) {
    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(500).json()
        }
        if (!user) {
            return res.status(404).json()
        }

        return res.status(200).json({user: user})
    })
}

export function update(req, res) {
    User.findOne({ _id: req.params.id }, (error, user) => {
        if (error) {
            return res.status(500).json()
        }
        if (!user) {
            return res.status(404).json()
        }

        user.role = req.body.role

        User.updateOne({_id: req.params.id }, user, (error, updated_user) => {
            if (error) {
                return res.status(500).json()
            }
            if (!updated_user) {
                return res.status(404).json()
            }
        })
    })
}