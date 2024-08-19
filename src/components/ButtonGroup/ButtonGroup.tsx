import IBtnGroup from "./type";

const ButtonGroup = ({ children }: IBtnGroup) => {
  return (
    <div className="flex gap-2 p-4 bg-blue-400/80 backdrop-blur-sm rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default ButtonGroup;
