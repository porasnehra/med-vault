"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, ShieldCheck, Stethoscope, Edit, Settings, LogOut } from "lucide-react";

export default function ProfilePage() {
    const [viewRole, setViewRole] = useState<"patient" | "doctor">("patient");

    return (
        <div className="p-4 space-y-6 pb-20">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
                    <p className="text-sm text-slate-500">Manage your personal settings</p>
                </div>
                <Button variant="ghost" size="icon" className="text-slate-500 hover:text-slate-900">
                    <Settings className="w-5 h-5" />
                </Button>
            </div>

            {/* Role Toggle for demonstration purposes */}
            <div className="bg-slate-100 p-1 w-full flex rounded-lg">
                <Button
                    variant={viewRole === "patient" ? "default" : "ghost"}
                    className="flex-1 rounded-md"
                    size="sm"
                    onClick={() => setViewRole("patient")}
                >
                    View Patient
                </Button>
                <Button
                    variant={viewRole === "doctor" ? "default" : "ghost"}
                    className="flex-1 rounded-md bg-transparent data-[state=active]:bg-white shadow-none"
                    size="sm"
                    onClick={() => setViewRole("doctor")}
                >
                    View Doctor
                </Button>
            </div>

            {viewRole === "patient" ? (
                // Patient Profile View
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Card className="border-0 shadow-sm overflow-hidden">
                        <div className="h-20 bg-gradient-to-r from-blue-400 to-blue-600 w-full" />
                        <div className="px-4 pb-4">
                            <div className="flex justify-between items-end -mt-10 mb-4">
                                <Avatar className="w-20 h-20 border-4 border-white shadow-sm">
                                    <AvatarImage src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                                    <AvatarFallback className="bg-blue-100 text-blue-700 text-xl font-bold">SJ</AvatarFallback>
                                </Avatar>
                                <Button size="sm" variant="outline" className="h-8 gap-1 border-slate-200">
                                    <Edit className="w-3.5 h-3.5" /> Edit
                                </Button>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Sarah Jenkins</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-50">Patient</Badge>
                                    <span className="text-sm text-slate-500">ID: #MED-98231</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="border-slate-100 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-md text-slate-800">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>sarah.jenkins@example.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span>124 Medical Way, New York, NY 10001</span>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-100 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-md text-slate-800">Medical Demographics</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            <div>
                                <Label className="text-xs text-slate-500">Date of Birth</Label>
                                <p className="text-sm font-medium text-slate-900 mt-1">Oct 14, 1992 (31y)</p>
                            </div>
                            <div>
                                <Label className="text-xs text-slate-500">Biological Sex</Label>
                                <p className="text-sm font-medium text-slate-900 mt-1">Female</p>
                            </div>
                            <div>
                                <Label className="text-xs text-slate-500">Emergency Contact</Label>
                                <p className="text-sm font-medium text-slate-900 mt-1">Robert Jenkins</p>
                                <p className="text-xs text-slate-500">Spouse • (555) 987-6543</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                // Doctor Profile View
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <Card className="border-0 shadow-sm overflow-hidden">
                        <div className="h-20 bg-slate-800 w-full" />
                        <div className="px-4 pb-4">
                            <div className="flex justify-between items-end -mt-10 mb-4">
                                <Avatar className="w-20 h-20 border-4 border-white shadow-sm relative">
                                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <AvatarFallback className="bg-slate-100 text-slate-700 text-xl font-bold">MC</AvatarFallback>
                                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm">
                                        <ShieldCheck className="w-5 h-5 text-green-500" />
                                    </div>
                                </Avatar>
                                <Button size="sm" variant="outline" className="h-8 gap-1 border-slate-200">
                                    <Edit className="w-3.5 h-3.5" /> Edit
                                </Button>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900">Dr. Michael Chen, MD</h2>
                                <div className="flex items-center gap-2 mt-1">
                                    <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 shadow-none border border-slate-200">
                                        <Stethoscope className="w-3 h-3 mr-1" /> Cardiologist
                                    </Badge>
                                    <span className="text-sm text-green-600 font-medium flex items-center">
                                        Verified
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="border-slate-100 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-md text-slate-800">Professional Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Label className="text-xs text-slate-500">License Number</Label>
                                    <p className="text-sm font-medium text-slate-900 mt-1">MED-NY-882194</p>
                                </div>
                                <div>
                                    <Label className="text-xs text-slate-500">Years Experience</Label>
                                    <p className="text-sm font-medium text-slate-900 mt-1">12 Years</p>
                                </div>
                            </div>
                            <div className="pt-2 border-t border-slate-100">
                                <Label className="text-xs text-slate-500">Primary Affiliation</Label>
                                <div className="flex items-center gap-3 mt-2 text-sm text-slate-700">
                                    <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900">City General Hospital</p>
                                        <p className="text-xs text-slate-500">Cardiology Department</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-slate-100 shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-md text-slate-800">Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>dr.mchen@citygeneral.org</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <div className="p-2 bg-slate-50 rounded-lg text-slate-500">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span>+1 (555) 999-8888 (Clinic)</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            <Button variant="destructive" className="w-full bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 border-0 shadow-none">
                <LogOut className="w-4 h-4 mr-2" /> Log Out
            </Button>
        </div>
    );
}
