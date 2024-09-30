interface LoaderProps {
    onLoadComplete: () => void;
}

export default function Loader({ onLoadComplete}: LoaderProps) {
  const times = ["0.1s", "0.2s"];

  setTimeout(() => (
    onLoadComplete()
  ), 2000)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader w-128 grid grid-rows-3 gap-2 overflow-hidden">
        <span
          className="animate-shrink tracking-neg-2 text-primary text-lg xl:text-3xl font-extrabold"
          style={{ animationDelay: "0s" }}
        >
          Gwenaël Guého
        </span>
        {times.map((time, index) => (
          <span
            key={index}
            className="animate-shrink bg-primary"
            style={{ animationDelay: time }}
          ></span>
        ))}
      </div>
    </div>
  );
}
