import IBtnGroup from "./type";

const ButtonGroup = ({ children, className = "" }: IBtnGroup) => {
  return (
    <div
      className={`bg-blue-400 flex gap-2 p-2 rounded-lg ${className} hover:bg-blue-500 transition duration-200 ease-in-out`}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
