// // import User from "../modules/users.js";
// import { generateToken } from "../utils/generateToken.js";

// export const register = async (req, res, next) => {
//   let { name, email, password, role } = req.body;

//   try {
//     email = email.toLowerCase();

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "email already in use" });
//     }

//     const newUser = await User.create({ name, email, password, role });

//     const token = generateToken(newUser._id);
//     res.status(201).json({ token });

//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// };

// // LOGIN
// export const login = async (req, res, next) => {
//   let { email, password } = req.body;

//   try {
//     email = email.toLowerCase();

//     const existingUser = await User.findOne({ email });
//     if (!existingUser || !(await existingUser.comparePassword(password))) {
//       return res.status(401).json({ message: "invalid email or password" });
//     }

//     const token = generateToken(existingUser._id);
//     res.json({ token });

 
//   } catch (err) {
//     next(err);
    
//   }
// };
