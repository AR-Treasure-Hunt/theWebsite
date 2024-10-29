import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, User, Mail, Phone, Building, MapPin, Globe } from "lucide-react";
import { useGetTeamStatus } from "@/api/registration";
import clsx from "clsx";
import { motion } from "framer-motion";

export function TeamStatusSection() {
    const [teamCode, setTeamCode] = useState<string>("");

    const { data: teamStatus, isLoading, isError, refetch, error } = useGetTeamStatus(teamCode, false);

    const handleGetTeamStatus = () => {
        if (teamCode !== "") {
            refetch();
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                    <CardTitle className="text-4xl tracking-wide font-bold">Team Status</CardTitle>
                    <CardDescription className="text-xl tracking-wide">Check the status of your team</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Input
                                placeholder="Enter Team Code"
                                value={teamCode}
                                onChange={(e) => setTeamCode(e.target.value)}
                                className="flex-1"
                            />
                            <Button
                                onClick={handleGetTeamStatus}
                                className="tracking-wide bg-[#004B6E] hover:bg-[#002a3d]"

                            >
                                Check Status
                            </Button>
                        </div>

                        {isLoading ? (
                            <div className="flex justify-center items-center h-40">
                                <Loader2 className="h-8 w-8 animate-spin" />
                            </div>
                        ) : isError ? (
                            <div className="flex flex-col items-center justify-center h-40 space-y-4">
                                <p className="text-center text-red-500">
                                    {
                                        error?.response?.data?.error || 'There was an error fetching the team details'
                                    }
                                </p>
                            </div>
                        ) : teamStatus ? (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-lg">Team Members</h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {Object.values(teamStatus.data.members).map((member, index) => (
                                            <div
                                                key={index}
                                                className={clsx("p-3 rounded-lg", {
                                                    "bg-green-100": typeof member !== "string",
                                                    "bg-gray-100": typeof member === "string"
                                                })}
                                            >
                                                {typeof member !== "string" ? (
                                                    <div className="flex tracking-wide text-md flex-col space-y-1">
                                                        <span className="flex items-center space-x-2">
                                                            <User className="h-4 w-4 text-gray-600" />
                                                            <span>Name: {member.name}</span>
                                                        </span>
                                                        <span className="flex items-center space-x-2">
                                                            <Mail className="h-4 w-4 text-gray-600" />
                                                            <span>Email: {member.email}</span>
                                                        </span>
                                                        <span className="flex items-center space-x-2">
                                                            <Phone className="h-4 w-4 text-gray-600" />
                                                            <span>Phone: {member.phone_number}</span>
                                                        </span>
                                                        <span className="flex items-center space-x-2">
                                                            <Building className="h-4 w-4 text-gray-600" />
                                                            <span>Institution: {member.institution}</span>
                                                        </span>
                                                        <span className="flex items-center space-x-2">
                                                            <MapPin className="h-4 w-4 text-gray-600" />
                                                            <span>Address: {member.address}</span>
                                                        </span>
                                                        <span className="flex items-center space-x-2">
                                                            <Globe className="h-4 w-4 text-gray-600" />
                                                            <span>Social Media: {member.social_media}</span>
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="text-gray-500">{member}</div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-40 space-y-4">
                                <p className="text-center text-gray-500">
                                    Enter your team code to see your team details.
                                </p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
