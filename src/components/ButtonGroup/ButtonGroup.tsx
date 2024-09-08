import IBtnGroup from "./type";

const ButtonGroup = ({ children }: IBtnGroup) => {
  return (
    <div className="flex gap-2 md:gap-4 p-2 md:p-4 lg:p-6 bg-blue-500/80 backdrop-blur-sm rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default ButtonGroup;
