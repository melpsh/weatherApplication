import IBtnGroup from "./type";
const ButtonGroup = ({ children }: IBtnGroup) => {
  return <div className="bg-blue-400 flex gap-2 ">{children}</div>;
};

export default ButtonGroup;
