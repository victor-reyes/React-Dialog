import { ReactNode, useEffect, useRef } from "react";
import { Button } from "./button";

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
    <div
      className={`fixed w-full h-screen bg-slate-800 bg-opacity-60 backdrop-blur-sm
    ${showDialog ? "" : "hidden"}`}
    >
      <dialog ref={dialog} className="w-96 px-8 py-4 rounded-lg">
        <div className="flex flex-col gap-4 justify-between">
          <header className="text-center">
            <h1>{title}</h1>
          </header>
          <hr />
          <main>{content}</main>
          <hr />
          <div className="flex gap-4 justify-between">
            <Button onClick={onOk}>Ok</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
