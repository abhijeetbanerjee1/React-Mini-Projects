import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Alert;
