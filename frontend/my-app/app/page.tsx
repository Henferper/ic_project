import { InformationProject } from "@/components/information-project";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
    <h1 className="text-center font-bold text-3xl">Informações do Projeto</h1>
      <div className="flex max-w-screen">
        <div className="mx-auto mt-10 ml-10 h-full">
          <InformationProject />
        </div>
        <div className="mx-auto mt-10 ml-0">
          <Card className="w-160 h-150 justify-center items-center ml-20 shadow-gray-700">
            <h1>Fluxo</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}