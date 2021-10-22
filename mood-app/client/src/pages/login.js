// // need to set up a login page with authentication use JWT and connect with the rest of the app
// import React, { useState } from 'react';
// // import { eventNames } from '../../../server/models/User';
// import './login.css';

// export default function Login() {
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")

//     function handleUsernameInput(event) {
//         event.preventDefault()
//         setUsername(event.target.value)
//     }

//     function handlePasswordInput(event) {
//         event.preventDefault()
//         setPassword(event.target.value)
//     }

//     return(
//         <div class='login'>
//             <h1>Login</h1>
//             <form>
//                 <label>
//                     <p>Username</p>
//                     <input 
//                         type='email'
//                         placeholder='Email'
//                         name='email'
//                         value={setUsername}
//                         onChange={handleUsernameInput}
//                     />
//                 </label>
//                 <label>
//                     <p>Password</p>
//                     <input 
//                         type='password' 
//                         placeholder='Password'
//                         name='password'
//                         value={setPassword}
//                         onChange={handlePasswordInput}
//                     />
//                 </label>
//                 <div>
//                     <button type='submit'>Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
// eslint-disable-next-line