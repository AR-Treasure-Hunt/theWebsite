import RegistrationForm from '../components/RegistrationForm';
import RegistrationClosed from '../components/RegistrationClosed';
import { TeamStatusSection } from '../components/TeamStatus';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function RegistrationSection() {
    return (
        <div className="min-h-screen content-container flex justify-center">
            <div className="w-full max-w-md">
                <Tabs defaultValue="registration" className="w-full flex flex-col justify-center">
                    <TabsList className="self-center mt-8 py-7 px-2">
                        <TabsTrigger value="registration" className="text-lg sm:text-2xl">Registration</TabsTrigger>
                        <TabsTrigger value="team-status" className="text-lg sm:text-2xl">Team Status</TabsTrigger>
                    </TabsList>
                    <RegistrationClosed />
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

