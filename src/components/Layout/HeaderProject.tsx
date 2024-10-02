import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";

export default function HeaderProject() {
  const router = useRouter();

  return (
    <header className="h-40 flex px-8 sm:px-16 md:px-20">
      <div className="flex items-center">
        <button
          onClick={() => router.push("/")}
          className="border rounded-full p-4"
        >
          <ArrowLeft />
        </button>
      </div>
    </header>
  );
}
