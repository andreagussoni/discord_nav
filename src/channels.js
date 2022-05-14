const Channels = () => {
  return (
    <div className="ml-16 w-80 flex flex-col h-screen shadow-lg bg-two dark:bg-eight">
      <ChannelBox />
    </div>
  );
};

const ChannelBox = () => {
  return (
    <div
      className="flex items-center justify-center 
    h-16 
    m-0 p-0;"
    >
      <h5
        className="text-lg tracking-wider font-bold 
    text-gray-600 dark:text-gray-400 
    mr-auto ml-4 my-auto align-middle"
      >
        Channels
      </h5>
    </div>
  );
};

export default Channels;
