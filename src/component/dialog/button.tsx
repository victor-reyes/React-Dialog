import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: [ReactNode] | ReactNode;
};

export function Button({ onClick, children }: Props) {
  return (
    <button
      className="min-w-24 px-4 py-2 font-bold border border-slate-500 bg-white 
      hover:bg-slate-200 hover:border-slate-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
