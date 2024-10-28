import { ReactNode, useRef } from "react";

type Props = {
  title: string;
  children?: [ReactNode] | ReactNode;
};
export function Dialog({ title, children: content }: Props) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  dialog.current?.showModal();

  return (
    <dialog ref={dialog} className="w-96 p-8 rounded-lg">
      <header>
        <h1>{title}</h1>
      </header>
      <main>{content}</main>
    </dialog>
  );
}
