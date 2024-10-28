import { ReactNode, useEffect, useRef } from "react";

type Props = {
  title: string;
  showDialog: boolean;
  children?: [ReactNode] | ReactNode;
};
export function Dialog({ title, showDialog, children: content }: Props) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    showDialog ? show() : close();
  }, [showDialog]);

  const show = () => dialog.current?.show();
  const close = () => dialog.current?.close();

  return (
    <dialog ref={dialog} className="w-96 p-8 rounded-lg">
      <header>
        <h1>{title}</h1>
      </header>
      <main>{content}</main>
    </dialog>
  );
}
