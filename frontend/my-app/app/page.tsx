import Header from "@/components/header";
import { InformationProject } from "@/components/information-project";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-fuchsia-600">
      <Header/>
      <div className="flex bg-amber-100 h-lvh">
        <div className="mx-auto bg-amber-300 mt-48"><InformationProject/></div>
        <div className="mx-auto bg-amber-700">
          <h1>Fluxo</h1>
        </div>
      </div>
    </div>
  );
}
