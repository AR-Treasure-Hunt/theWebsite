export const CONTACT_PERSON_DETAILS = [
  {
    name: 'Bibhushan Saakha',
    position: 'Event Manager',
    event: 'AR Treasure Hunt',
    contact: '9840103828'
  },
  {
    name: 'Nilotpal Dhakal',
    position: 'Talent Manager',
    event: 'AR Treasure Hunt',
    contact: '9865596626'
  }
];

const ContactPersonDetails = (props: {
  name: string;
  position: string;
  event: string;
  contact: string;
}) => {
  const { name, position, event, contact } = props;

  return (
    <p className="text-xl md:text-2xl text-center leading-tight">
      {name}
      <br />
      {position}
      <br />
      {event}
      <br />
      {contact}
    </p>
  );
};

const ContactPersonContainer = () => {
  return (
    <div>
      <h2 className="text-2xl text-[#003F5A] md:text-4xl text-center mb-[16px]">Contact Person</h2>
      <div className="flex justify-center gap-10">
        {CONTACT_PERSON_DETAILS.map((details) => (
          <ContactPersonDetails key={details.name} {...details} />
        ))}
      </div>
    </div>
  );
};

export default ContactPersonContainer;
