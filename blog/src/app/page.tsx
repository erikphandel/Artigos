import List from "./components/List";
import { artigosJson } from "@/lib/artigos";

export default function Home() {
  return (
    <>
      <List artigos={artigosJson} />
    </>
  )

}