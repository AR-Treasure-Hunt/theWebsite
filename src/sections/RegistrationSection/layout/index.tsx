import RegistrationForm from '../components/RegistrationForm';
import { TeamStatusSection } from '../components/TeamStatus';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function RegistrationSection() {
    return (
        <div className="min-h-screen content-container flex justify-center">
            <div className="w-full max-w-md">
                <Tabs defaultValue="registration" className="w-full">
                    <TabsList className="self-center mt-20 py-6 px-2">
                        <TabsTrigger value="registration" className="text-lg">Registration</TabsTrigger>
                        <TabsTrigger value="team-status" className="text-lg">Team Status</TabsTrigger>
                    </TabsList>
                    <TabsContent value="registration">
                        <RegistrationForm />
                    </TabsContent>
                    <TabsContent value="team-status">
                        <TeamStatusSection />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

