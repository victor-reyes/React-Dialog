import { ReactNode, useEffect, useRef } from "react";

type Props = {
  title: string;
  showDialog: boolean;
  onOk?: () => void;
  onCancel?: () => void;
  children?: [ReactNode] | ReactNode;
};
export function Dialog({
  title,
  showDialog,
  onOk,
  onCancel,
  children: content,
}: Props) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    showDialog ? show() : close();
  }, [showDialog]);

  const show = () => dialog.current?.showModal();
  const close = () => dialog.current?.close();

  return (
    <dialog ref={dialog} className="w-96 p-8 rounded-lg">
      <header>
        <h1>{title}</h1>
      </header>
      <main>{content}</main>
      <div className="flex gap-4 justify-between">
        <button onClick={onOk}>Ok</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </dialog>
  );
}
