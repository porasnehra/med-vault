"use client";

import { useState } from "react";
import QRCode from "react-qr-code";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanLine, Key, HeartPulse } from "lucide-react";

export default function RecordsPage() {
    const [showQR, setShowQR] = useState(true);

    // Mock data for the QR value
    const qrValue = JSON.stringify({ patientId: "mock-nric-12345", name: "Sarah J." });

    return (
        <div className="p-4 space-y-6">
            <div className="text-center space-y-1">
                <h1 className="text-2xl font-bold text-slate-900">Life-Key</h1>
                <p className="text-sm text-slate-500">Your secure digital medical identity</p>
            </div>

            <Card className="border-2 border-blue-50 shadow-md">
                <CardContent className="pt-6 flex flex-col items-center justify-center space-y-6">
                    <div className="bg-white p-4 rounded-xl shadow-inner border border-slate-100">
                        {showQR ? (
                            <QRCode
                                value={qrValue}
                                size={200}
                                bgColor="#ffffff"
                                fgColor="#1e3a8a" // Medical Blue
                                level="H"
                            />
                        ) : (
                            <div className="w-[200px] h-[200px] bg-slate-100 flex items-center justify-center rounded-lg">
                                <ScanLine className="w-12 h-12 text-slate-400" />
                            </div>
                        )}
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="font-semibold text-lg text-slate-800">Sarah Jenkins</h2>
                        <p className="text-sm text-slate-500">Patient ID: #MED-98231</p>
                    </div>

                    <div className="w-full flex gap-3 pt-4 border-t border-slate-100">
                        <Button variant="outline" className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50">
                            <HeartPulse className="w-4 h-4 mr-2" /> Vitals
                        </Button>
                        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <Key className="w-4 h-4 mr-2" /> Share Key
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-blue-50 rounded-lg p-4 flex gap-3 items-start border border-blue-100">
                <div className="bg-blue-100 p-2 rounded-full text-blue-700 shrink-0">
                    <ScanLine className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-blue-900">Doctor Access</h4>
                    <p className="text-xs text-blue-700 mt-1">
                        Verified practitioners can scan this QR code to instantly access your critical emergency vitals.
                    </p>
                </div>
            </div>
        </div>
    );
}
