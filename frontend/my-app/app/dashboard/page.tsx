import { ChartBar } from "@/components/chart-bar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard(){
    return (
        <div>
            <h1 className="ml-125 text-center font-bold text-3xl bg-amber-100">Dashboard</h1>
            <div className="flex bg-amber-200">
                <Card className="mt-45">
                    <div className="bg-amber-400">
                        <div className="bg-amber-800 flex">
                            
                            <Button>Filtro</Button>
                        </div>
                        <h2 className="text-center">Título DashBoard</h2>
                        <ChartBar/>
                    </div>
                </Card>
                <div>

                </div>
            </div>
        </div>
    )
}