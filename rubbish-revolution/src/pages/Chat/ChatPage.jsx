import { PrettyChatWindow } from 'react-chat-engine-pretty';
import Header from '../../components/Header';

const ChatsPage = (props) => {
  return (
    <div className="bg-secondary flex flex-col overflow-hidden items-center">
      <Header/>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h3 className='text-white text-xl mb-2'>message "admin" for any support</h3>
        <div className="w-4/5 h-4/5 bg-[#2b2f3c] text-white ">
          <PrettyChatWindow
            projectId="6e3d657c-5b7d-4c07-b5b9-62047ae7ff4a"
            username={props.user.username}
            secret={props.user.secret}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatsPage;
