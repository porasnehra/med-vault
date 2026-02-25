import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Droplet } from "lucide-react";

const mockCamps = [
    {
        id: 1,
        name: "City General Blood Drive",
        type: "BLOOD_DONATION",
        date: "Sat, Oct 14 • 9:00 AM",
        location: "City Hospital, North Wing",
        attendees: 42,
    },
    {
        id: 2,
        name: "Free Cardiac Screening",
        type: "CHECKUP",
        date: "Sun, Oct 15 • 10:00 AM",
        location: "Community Center, Downtown",
        attendees: 128,
    }
];

export default function CampsPage() {
    return (
        <div className="p-4 space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Health Camps</h1>
                <p className="text-sm text-slate-500">Find check-ups and donation drives</p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-slate-200 rounded-xl border border-slate-300 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=13&size=600x300&maptype=roadmap&key=YOUR_API_KEY')] bg-cover bg-center opacity-50 grayscale" />
                <div className="relative z-10 flex flex-col items-center text-slate-600">
                    <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                    <span className="font-medium bg-white/80 px-3 py-1 rounded-full text-sm backdrop-blur-sm shadow-sm">Map View Enabled</span>
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">Upcoming Near You</h2>
                    <Button variant="link" className="text-blue-600 h-auto p-0">Filters</Button>
                </div>

                {mockCamps.map(camp => (
                    <Card key={camp.id} className="overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                        <div className={`h-2 ${camp.type === 'BLOOD_DONATION' ? 'bg-red-500' : 'bg-blue-500'}`} />
                        <CardContent className="p-4 space-y-4">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="font-semibold text-slate-900">{camp.name}</h3>
                                    <div className="flex items-center text-slate-500 text-xs mt-1 space-x-2">
                                        <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {camp.date}</span>
                                    </div>
                                </div>
                                <Badge variant="outline" className={camp.type === 'BLOOD_DONATION' ? 'text-red-700 bg-red-50 border-red-200' : 'text-blue-700 bg-blue-50 border-blue-200'}>
                                    {camp.type === 'BLOOD_DONATION' ? <Droplet className="w-3 h-3 mr-1" /> : <MapPin className="w-3 h-3 mr-1" />}
                                    {camp.type === 'BLOOD_DONATION' ? 'Blood Drive' : 'Checkup'}
                                </Badge>
                            </div>

                            <div className="flex items-center text-sm text-slate-600">
                                <MapPin className="w-4 h-4 mr-1.5 text-slate-400" />
                                {camp.location}
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                                <div className="text-xs text-slate-500 flex items-center">
                                    <Users className="w-3.5 h-3.5 mr-1" /> {camp.attendees} Registered
                                </div>
                                <Button size="sm" className={camp.type === 'BLOOD_DONATION' ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}>
                                    Register Now
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
