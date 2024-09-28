import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";

export default function Projet() {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Layout title="projet">
      <div className="py-80">
        <h1 className="text-3.6 sm:text-5.4">{name}</h1>
      </div>
    </Layout>
  );
}
