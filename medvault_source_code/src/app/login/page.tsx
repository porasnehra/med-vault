"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Activity, Mail, Lock, LogIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState<"patient" | "doctor">("patient");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mock Login Process
        toast.info("Signing in...");
        setTimeout(() => {
            setLoading(false);
            toast.success(`Welcome back, ${role === "doctor" ? "Doctor" : "Patient"}!`);
            router.push(role === "doctor" ? "/d2d" : "/");
        }, 800);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 bg-slate-50">
            <div className="w-full max-w-sm space-y-6">
                <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-slate-900">MedVault</h1>
                    <p className="text-sm text-slate-500">
                        Your secure digital health vault
                    </p>
                </div>

                <Tabs defaultValue="patient" className="w-full" onValueChange={(v) => setRole(v as any)}>
                    <TabsList className="grid w-full grid-cols-2 mb-4 bg-slate-200/50 p-1">
                        <TabsTrigger value="patient" className="rounded-md">Patient</TabsTrigger>
                        <TabsTrigger value="doctor" className="rounded-md">Doctor</TabsTrigger>
                    </TabsList>

                    <Card className="border-0 shadow-xl shadow-slate-200/50">
                        <form onSubmit={handleLogin}>
                            <CardHeader className="space-y-1 pb-4">
                                <CardTitle className="text-xl">Welcome back</CardTitle>
                                <CardDescription>
                                    Enter your {role} credentials to access your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            required
                                            className="pl-10"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <a href="#" className="text-xs font-medium text-blue-600 hover:underline">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                                        <Input
                                            id="password"
                                            type="password"
                                            required
                                            className="pl-10"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-4">
                                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11" disabled={loading}>
                                    {loading ? (
                                        "Signing in..."
                                    ) : (
                                        <>
                                            <LogIn className="w-4 h-4 mr-2" /> Sign In
                                        </>
                                    )}
                                </Button>
                                <div className="text-sm text-center text-slate-500">
                                    Don't have an account?{" "}
                                    <a href="#" className="font-semibold text-blue-600 hover:underline">
                                        Sign up
                                    </a>
                                </div>
                            </CardFooter>
                        </form>
                    </Card>
                </Tabs>
            </div>
        </div>
    );
}
