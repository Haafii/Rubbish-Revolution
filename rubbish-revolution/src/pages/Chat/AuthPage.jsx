import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value }
        );
        props.onAuth({ username: value, secret: value });
    };

    return (
        <div className="bg-cover bg-no-repeat bg-center h-screen w-screen flex items-center justify-center">
            <form onSubmit={onSubmit} className="w-1/2 p-12 bg-gray-900 rounded-lg">
                <div className="text-4xl font-bold text-white pb-6">
                    Welcome 👋
                </div>

                <div className="text-xl text-gray-300 pb-8">
                    Set a username to get started
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-300 pb-2">Username</label>
                    <input className="bg-gray-800 text-white rounded-md py-2 px-3 mb-4" name="username" />
                    <button className="bg-red-600 text-white rounded-md py-2 px-4" type="submit">Enter</button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;


// import axios from "axios";
// import './App.css'

// const AuthPage = (props) => {
//     const onSubmit = (e) => {
//         e.preventDefault();
//         const { value } = e.target[0];
//         axios.post(
//             'http://localhost:3001/authenticate',
//             { username: value }
//         )
//         props.onAuth({ username: value, secret: value })
//     }

//     return (
//         <div className="background flex items-center justify-center min-h-screen bg-gradient-to-b from-custom-black via-custom-black to-custom-black-light">
//             <form onSubmit={onSubmit} className="form-card w-1/2 max-w-350px px-25%">
//                 <div className="form-title text-4xl font-bold font-avenir tracking-wide text-gray-300 pb-3">
//                     Welcome 👋
//                 </div>

//                 <div className="form-subtitle text-base font-avenir tracking-wide text-gray-400 pb-6">
//                     Set a username to get started
//                 </div>

//                 <div className="auth relative inline-block w-full pb-3">
//                     <div className="auth-label absolute top-2 left-4 text-xs text-gray-400 font-avenir w-24">Username</div>
//                     <input className="auth-input bg-[#3e404b] text-white font-avenir outline-none border-none rounded-lg px-4 py-6 w-full mb-3" name="username" />
//                     <button className="auth-button w-full h-14 text-white bg-[#fa541c] border-none outline-none rounded-lg font-avenir cursor-pointer transition-all duration-300 ease-in-out hover:brightness-145" type="submit">Enter</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default AuthPage