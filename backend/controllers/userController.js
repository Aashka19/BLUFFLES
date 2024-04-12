//T0Ckqm0AiOLNv8ct
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const crypto = require("crypto");
//@desc Resgiter User
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) => {
    const {username, roll_number, email, phone, branch, password} = req.body;
    /*const {username, roll_number} = req.body;
    const email = req.body;
    while(!email.endsWith("@mnnit.ac.in")){
        print("Please enter college email.");
        email = req.body;
    }
    const {phone, branch, password} = req.body;*/
    if(!username || !roll_number || !email || !phone || !branch || !password){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }

    const userAvailable = await User.findOne({roll_number});
    if(userAvailable){
        res.status(400);
        throw new Error("User already registered");
    }

    //Hashing
    const hashedPass = await bcrypt.hash(password, 10);
    console.log("Hashed Password", hashedPass);

    const user = await User.create({
        username,
        roll_number,
        email,
        phone,
        branch,
        password: hashedPass
    });

    console.log(`User created ${user}`);
    if(user){
        res.status(201).json({id: user.id, email: user.email});
    }else{
        res.status(400);
        throw new Error("Invalid User Data");
    }
    res.json({message: "Register the user"});
});

//@desc Login User
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory.");
    }

    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    roll_number: user.roll_number,
                    email: user.email,
                    phone: user.phone,
                    branch: user.branch,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error ("Invalid Credentials");
    }
});

//@desc Login User
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(user.id.toString() !== req.user.id){
        res.status(403);
        throw new Error("Unauthorized Access");
    }
    res.json(req.user);
});

const editUser = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(!user){
        res.status(404);
        throw new Error("User Not Found");
    }

    if(user.id.toString() !== req.user.id){
        res.status(403);
        throw new Error("Unauthorized Access");
    }

    const updatedFields = {
        name: req.body.name,
        phone: req.body.phone,
        branch: req.body.branch
    };

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        updatedFields,
        { new: true }
    );
    res.status(200).json({message: `Update contact for ${req.params.id}`});
});

/*const shareProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    const userId = req.user.id; // or req.user.id if you're using authentication
    
    const token = crypto.randomBytes(16).toString('hex');
    
    // Store token along with user ID in database
    // For example, you could have a SharedProfile model
    await SharedProfile.create({ userId, token });

    // Send response to the client
    res.status(200).json({ token });
});*/

module.exports = { registerUser, loginUser, currentUser, editUser };