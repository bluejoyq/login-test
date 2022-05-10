interface CommonProps {
  className?: String;
  onClick: Function;
  children: React.ReactNode;
}

export function CustomBtn({ className, onClick, children }: CommonProps) {
  return (
    <button
      className={
        className +
        " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
