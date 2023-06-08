import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <div className="bg-gradient-to-b from-[#141721] to-[rgba(20, 23, 33,0.8)]">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-4/5 h-4/5 bg-[#2b2f3c] text-white">
          <PrettyChatWindow
            projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
            username={props.user.username}
            secret={props.user.secret}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatsPage;
