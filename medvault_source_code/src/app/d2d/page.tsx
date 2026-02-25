import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare, Briefcase, Stethoscope } from "lucide-react";

export default function D2DPage() {
    return (
        <div className="p-4 space-y-6 bg-slate-50 min-h-screen pb-20">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold text-slate-900">Doc-to-Doc</h1>
                <p className="text-sm text-slate-500">Professional Network & Staffing</p>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search specialists, clinics..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
                />
            </div>

            <div className="space-y-4">
                {/* Post 1 - Staffing */}
                <Card className="border-0 shadow-sm">
                    <CardHeader className="p-4 pb-2 flex flex-row items-start gap-4 space-y-0">
                        <Avatar>
                            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <AvatarFallback>MC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">Dr. Michael Chen</h3>
                                    <p className="text-xs text-slate-500">Cardiologist • City Care</p>
                                </div>
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200 shadow-none">
                                    <Briefcase className="w-3 h-3 mr-1" /> Locum
                                </Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                            <strong className="text-slate-900">Emergency Staffing Required:</strong> We need a substitute Cardiologist for this weekend (Sat-Sun) at City Care Main Branch. Standard locum rates apply. Please DM if available.
                        </p>
                        <Button variant="outline" size="sm" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
                            <MessageSquare className="w-4 h-4 mr-2" /> Message Dr. Chen
                        </Button>
                    </CardContent>
                </Card>

                {/* Post 2 - Consultation */}
                <Card className="border-0 shadow-sm">
                    <CardHeader className="p-4 pb-2 flex flex-row items-start gap-4 space-y-0">
                        <Avatar>
                            <AvatarImage src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm font-semibold text-slate-900">Dr. Sarah Jenkins</h3>
                                    <p className="text-xs text-slate-500">Pediatrician • CarePlus</p>
                                </div>
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 shadow-none">
                                    <Stethoscope className="w-3 h-3 mr-1" /> Consult
                                </Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="px-4 pb-4">
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">
                            Looking for a pediatric dermatologist for a complex eczema case unresponsive to standard topical steroids. Patient is 4yo. Happy to refer if anyone has immediate availability in the north district.
                        </p>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="flex-1 text-slate-600">
                                Recommend
                            </Button>
                            <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                                I'm Available
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
