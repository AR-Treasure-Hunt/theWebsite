import { Card, CardContent, CardHeader } from "@/components/ui/card"

export const RegistrationClosed = () => {
  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">
            Registration is Closed
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            While new team registrations are no longer being accepted, you can still
            participate by joining an existing registered team. Contact a team
            captain to request joining their team.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationClosed;
