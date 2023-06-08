import axios from "axios";
import Header from '../../components/Header';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post(
      'https://mini-project-mkgl.onrender.com/authenticate',
      { username: value }
    );
    props.onAuth({ username: value, secret: value });
  };

  return (
    <>
      <Header />
      <div className=" h-screen  flex items-center justify-center bg-secondary overflow-hidden">
        <form onSubmit={onSubmit} className="w-1/2 p-12 bg-primary rounded-lg">
          <div className="text-4xl font-bold text-white pb-6">
            Welcome to RR Chat👋
          </div>

          <div className="text-xl text-white pb-8">
            Verify username to get started
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-white pb-2">Username</label>
            <input className="bg-white text-black rounded-md py-2 px-3 mb-4" name="username" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4" type="submit">Enter</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthPage;
