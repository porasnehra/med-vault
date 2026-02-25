import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Droplet, Pill, FileText, AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <div className="p-4 space-y-6">
      {/* Header Profile Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hi, Sarah! 👋</h1>
          <p className="text-sm text-slate-500">Your health snapshot is looking good.</p>
        </div>
        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-lg border-2 border-white shadow-sm ring-2 ring-blue-50">
          SJ
        </div>
      </div>

      {/* Vitals Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-none shadow-sm shadow-blue-100/50">
          <CardContent className="p-4 flex flex-col items-start gap-2">
            <div className="p-2 bg-blue-200 rounded-lg text-blue-700">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Blood Group</p>
              <h2 className="text-2xl font-bold text-blue-900">O+</h2>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-none shadow-sm shadow-red-100/50">
          <CardContent className="p-4 flex flex-col items-start gap-2">
            <div className="p-2 bg-red-200 rounded-lg text-red-700">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-600">Allergies</p>
              <div className="flex gap-1 mt-1">
                <Badge variant="secondary" className="bg-white text-red-600 text-xs shadow-sm">Penicillin</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vitals Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Recent Records</h3>
          <span className="text-sm text-blue-600 font-medium">View All</span>
        </div>

        <div className="space-y-3">
          <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2.5 bg-green-50 text-green-600 rounded-full">
                <Pill className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">Amoxicillin Prescription</h4>
                <p className="text-xs text-slate-500 mt-0.5">Dr. Robert Chen • 2 days ago</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-full">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-slate-800 text-sm">Complete Blood Count</h4>
                <p className="text-xs text-slate-500 mt-0.5">City Lab • 1 week ago</p>
              </div>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 font-normal">Normal</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
