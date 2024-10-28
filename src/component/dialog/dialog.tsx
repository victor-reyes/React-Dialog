import { useRef } from "react";

export function Dialog() {
  const dialog = useRef<HTMLDialogElement | null>(null);

  dialog.current?.showModal();

  return (
    <dialog ref={dialog} className="w-96 p-8 rounded-lg">
      <header>
        <h1>Dialog title</h1>
      </header>
      <main>
        Dialog content: Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Sed eos inventore sint tenetur a vitae dolorem ipsum delectus
        magni voluptas. Mollitia, unde itaque in deserunt quaerat quam
        repellendus eius minus.
      </main>
    </dialog>
  );
}
