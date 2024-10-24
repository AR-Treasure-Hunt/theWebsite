import { createFileRoute } from '@tanstack/react-router'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const Route = createFileRoute('/code-of-conduct')({
  component: CodeOfConductComponent,
})

function CodeOfConductComponent() {
  return (
    
<div className='bg-[#F0EBFF] text-[#003F5A]'>


    <div className="container mx-auto px-4 py-8 ">
        <h1 className='py-12 text-6xl text-center'>Code of Conduct</h1>
      <Card className="mb-8 bg-[#F0EBFF] text-[#003F5A]">
        <CardHeader>
          <div className="flex items-center  justify-between mb-4">
            {/* <img src="/placeholder.svg?height=50&width=100" width={100} height={50} alt="IT Meet 2023 Logo" /> */}
            <h1 className="text-6xl font-bold ">AR Treasure Hunt</h1>
            <img src="/android-chrome-192x192.png" width={75} height={75} alt="AR Treasure Hunt Logo" />
          </div>
          <h2 className="text-4xl font-semibold text-center ">Rules to be followed during the event</h2>
          <p className="text-center text-2xl font-medium text-muted-foreground">Please read this carefully!</p>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-2xl text-primary">
            What we want from this Treasure Hunt is to see all the participants having fun and creating memories. During the game, we would like to request you to please be careful so that you won't fall into any minor or in the worst-case scenario major accidents. Any incident during the Treasure Hunt resulting in injury or worse may mean the end of the Hunt. Recognize that the success of the Hunt is designed to be based upon clue complexity and your ability to solve them. Moreover, if we consider the uncertain conditions, there might be the chances of rainfall, as well, because most of the pathways will be slippery, for which we would like to request you all to be extra cautious while searching for treasures.
          </p>
          <p className="text-4xl font-semibold  text-center  mb-4">Win through being prepared, not with a rush.</p>
          <p className="mb-4 text-2xl text-primary">
            The following rules are in the interest of safety. Random spot checks will be done at certain sites by Hunt coordinators. If there is any sign of reckless behavior as judged by a Hunt coordinator, that team will be disqualified. All decisions in these matters will be final!
          </p>
        </CardContent>
      </Card>
    <Card className='mb-8 bg-[#F0EBFF] text-[#003F5A]'>

 
      <CardHeader className="text-4xl font-bold mb-4 ">Rules to be followed throughout the event:</CardHeader>
     <CardContent className="text-2xl text-primary">
      <Accordion type="single" collapsible className="mb-8 text-primary">
        <AccordionItem  value="item-1">
          <AccordionTrigger className=' text-2xl '>General Conduct</AccordionTrigger>
          <AccordionContent className='text-2xl'>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use welcoming and inclusive language.</li>
              <li>Treat all participants, organizers, and audiences with respect and courtesy.</li>
              <li>Prioritize safety during the event. Be aware of your surroundings, and avoid dangerous actions that could harm yourself or others.</li>
              <li>Do not engage in cheating, hacking, or any unfair practices.</li>
              <li>Do not damage or misuse any property or equipment during the event.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="item-2">
          <AccordionTrigger className='text-2xl'>Participation Guidelines</AccordionTrigger>
          <AccordionContent className='text-2xl'>
            <ul className="list-disc pl-6 space-y-2">
              <li>Participants are expected to arrive at least 30 minutes prior to the time of the beginning of the event.</li>
              <li>Teams are encouraged to have a mobile phone/laptop with internet access.</li>
              <li>By participating in this event, you agree to be live-streamed on the internet throughout the event.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem  value="item-3">
          <AccordionTrigger className='text-2xl'>Disqualification Behaviors</AccordionTrigger>
          <AccordionContent className='text-2xl'>
            <p>Any of the following behaviors may result in disqualification:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trolling, using insulting language, or engaging in personal or political attacks.</li>
              <li>Using sexualized language or imagery and giving unwelcome sexual attention.</li>
              <li>Exploiting digital ethics in any way.</li>
              <li>Interfering with other teams or their members.</li>
              <li>Attempting to gain clues through unfair means.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </CardContent>
      </Card>
      <Card className='bg-[#F0EBFF] text-[#003F5A]'>
        <CardHeader>
          <h2 className="text-4xl font-bold text-[#003F5A] ">Reporting:</h2>
        </CardHeader>
        <CardContent className='text-2xl text-primary'>
          <p>
            Instances of any of the unacceptable behaviors listed above, but not limited to those, can be reported at kucc@ku.edu.np or bibhushansaakha@gmail.com. All the reported issues will be reviewed fairly and in a timely manner. If found guilty of not abiding by the code of conduct, the person shall have severe consequences, including but not limited to revocation of club membership, disqualification from the event, and blacklisting from further participation.
          </p>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}

