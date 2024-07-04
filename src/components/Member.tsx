import Head from 'next/head';

import { useState } from 'react';
import { faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
type Member = {
  name: string;
  position: string;
  email: string;
  image: string;
  instagram: string;
  linkedin: string;
};

const membersData = [
  // Section 1: 18 cards
  { name: "Alice Johnson", position: "Project Manager", email: "alice@example.com", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.haMC_PQgpFutBOwrDI8KLAAAAA%26pid%3DApi&f=1&ipt=8c861978c9e1e7807077da0f915c497899656617526bb76e5d807c174e756673&ipo=images", twitter: "https://twitter.com/alice", linkedin: "https://linkedin.com/in/alice", github: "https://github.com/alice" },
  { name: "Bob Smith", position: "Senior Developer", email: "bob@example.com", image: "/images/bob.jpg", twitter: "https://twitter.com/bob", linkedin: "https://linkedin.com/in/bob", github: "https://github.com/bob" },
   { name: "Carol Davis", position: "Software Engineer", email: "carol@example.com", image: "/images/carol.jpg", twitter: "https://twitter.com/carol", linkedin: "https://linkedin.com/in/carol", github: "https://github.com/carol" },
   { name: "David Wilson", position: "UI/UX Designer", email: "david@example.com", image: "/images/david.jpg", twitter: "https://twitter.com/david", linkedin: "https://linkedin.com/in/david", github: "https://github.com/david" },
   { name: "Emily Garcia", position: "Product Manager", email: "emily@example.com", image: "/images/emily.jpg", twitter: "https://twitter.com/emily", linkedin: "https://linkedin.com/in/emily", github: "https://github.com/emily" },
   { name: "Frank Rodriguez", position: "Data Analyst", email: "frank@example.com", image: "/images/frank.jpg", twitter: "https://twitter.com/frank", linkedin: "https://linkedin.com/in/frank", github: "https://github.com/frank" },
   { name: "Grace Lee", position: "QA Engineer", email: "grace@example.com", image: "/images/grace.jpg", twitter: "https://twitter.com/grace", linkedin: "https://linkedin.com/in/grace", github: "https://github.com/grace" },
   { name: "Henry Kim", position: "DevOps Engineer", email: "henry@example.com", image: "/images/henry.jpg", twitter: "https://twitter.com/henry", linkedin: "https://linkedin.com/in/henry", github: "https://github.com/henry" },
   { name: "Isabella Brown", position: "Marketing Specialist", email: "isabella@example.com", image: "/images/isabella.jpg", twitter: "https://twitter.com/isabella", linkedin: "https://linkedin.com/in/isabella", github: "https://github.com/isabella" },
   { name: "Jack Miller", position: "Content Writer", email: "jack@example.com", image: "/images/jack.jpg", twitter: "https://twitter.com/jack", linkedin: "https://linkedin.com/in/jack", github: "https://github.com/jack" },
   { name: "Katherine Davis", position: "Sales Manager", email: "katherine@example.com", image: "/images/katherine.jpg", twitter: "https://twitter.com/katherine", linkedin: "https://linkedin.com/in/katherine", github: "https://github.com/katherine" },
   { name: "Liam Wilson", position: "Customer Success Manager", email: "liam@example.com", image: "/images/liam.jpg", twitter: "https://twitter.com/liam", linkedin: "https://linkedin.com/in/liam", github: "https://github.com/liam" },
   { name: "Mia Garcia", position: "Operations Manager", email: "mia@example.com", image: "/images/mia.jpg", twitter: "https://twitter.com/mia", linkedin: "https://linkedin.com/in/mia", github: "https://github.com/mia" },
   { name: "Noah Rodriguez", position: "Finance Analyst", email: "noah@example.com", image: "/images/noah.jpg", twitter: "https://twitter.com/noah", linkedin: "https://linkedin.com/in/noah", github: "https://github.com/noah" },
   { name: "Olivia Lee", position: "HR Assistant", email: "olivia@example.com", image: "/images/olivia.jpg", twitter: "https://twitter.com/olivia", linkedin: "https://linkedin.com/in/olivia", github: "https://github.com/olivia" },
   { name: "Peter Kim", position: "Security Engineer", email: "peter@example.com", image: "/images/peter.jpg", twitter: "https://twitter.com/peter", linkedin: "https://linkedin.com/in/peter", github: "https://github.com/peter" },
   { name: "Quinn Brown", position: "Legal Counsel", email: "quinn@example.com", image: "/images/quinn.jpg", twitter: "https://twitter.com/quinn", linkedin: "https://linkedin.com/in/quinn", github: "https://github.com/quinn" },
   { name: "Ryan Miller", position: "Project Coordinator", email: "ryan@example.com", image: "/images/ryan.jpg", twitter: "https://twitter.com/ryan", linkedin: "https://linkedin.com/in/ryan", github: "https://github.com/ryan" },
  // Add 16 more members for section 1...

  // Section 2: 5 cards
  { name: "Charlie Brown", position: "Designer", email: "charlie@example.com", image: "/images/charlie.jpg", twitter: "https://twitter.com/charlie", linkedin: "https://linkedin.com/in/charlie", github: "https://github.com/charlie" },
  { name: "Daniel Garcia", position: "Product Designer", email: "daniel@example.com", image: "/images/daniel.jpg", twitter: "https://twitter.com/daniel", linkedin: "https://linkedin.com/in/daniel", github: "https://github.com/daniel" },
  { name: "Emily Wilson", position: "UX Researcher", email: "emily@example.com", image: "/images/emily.jpg", twitter: "https://twitter.com/emily", linkedin: "https://linkedin.com/in/emily", github: "https://github.com/emily" },
  { name: "Frank Rodriguez", position: "UI Developer", email: "frank@example.com", image: "/images/frank.jpg", twitter: "https://twitter.com/frank", linkedin: "https://linkedin.com/in/frank", github: "https://github.com/frank" },
  { name: "Grace Lee", position: "Visual Designer", email: "grace@example.com", image: "/images/grace.jpg", twitter: "https://twitter.com/grace", linkedin: "https://linkedin.com/in/grace", github: "https://github.com/grace" },
  // Add 4 more members for section 2...

  // Section 3: 4 cards
  { name: "David Clark", position: "Marketing", email: "david@example.com", image: "/images/david.jpg", twitter: "https://twitter.com/david", linkedin: "https://linkedin.com/in/david", github: "https://github.com/david" },
  { name: "Henry Kim", position: "Marketing Manager", email: "henry@example.com", image: "/images/henry.jpg", twitter: "https://twitter.com/henry", linkedin: "https://linkedin.com/in/henry", github: "https://github.com/henry" },
  { name: "Isabella Brown", position: "Content Creator", email: "isabella@example.com", image: "/images/isabella.jpg", twitter: "https://twitter.com/isabella", linkedin: "https://linkedin.com/in/isabella", github: "https://github.com/isabella" },
  { name: "Jack Miller", position: "Social Media Manager", email: "jack@example.com", image: "/images/jack.jpg", twitter: "https://twitter.com/jack", linkedin: "https://linkedin.com/in/jack", github: "https://github.com/jack" },
  // Add 3 more members for section 3...

  // Section 4: 4 cards
  { name: "Eve Stewart", position: "HR Manager", email: "eve@example.com", image: "/images/eve.jpg", twitter: "https://twitter.com/eve", linkedin: "https://linkedin.com/in/eve", github: "https://github.com/eve" },
   { name: "Fred Jones", position: "HR Specialist", email: "fred@example.com", image: "/images/fred.jpg", twitter: "https://twitter.com/fred", linkedin: "https://linkedin.com/in/fred", github: "https://github.com/fred" },
   { name: "Gina Williams", position: "HR Coordinator", email: "gina@example.com", image: "/images/gina.jpg", twitter: "https://twitter.com/gina", linkedin: "https://linkedin.com/in/gina", github: "https://github.com/gina" },
   { name: "Harry Smith", position: "HR Intern", email: "harry@example.com", image: "/images/harry.jpg", twitter: "https://twitter.com/harry", linkedin: "https://linkedin.com/in/harry", github: "https://github.com/harry" },
  // Add 3 more members for section 4...
];

const MembersPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const renderMemberCard = (member: any, index: number) => (

    <div
      key={index}
      onClick={() => setSelectedMember(member)}
      className="bg-green-80 dark:bg-white-500 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 group-hover:w-36 group-hover:h-36 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
        />
        <div className="w-fit transition-all transform duration-500">
          <h1 className="text-gray-800 dark:text-gray-800 font-bold">{member.name}</h1>
          <p className="text-gray-800">{member.position}</p>
         
        </div>
      </div>
      <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-white-600 dark:bg-white-100 right-1 rounded-lg">
        <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
          <FontAwesomeIcon icon={faInstagram} ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faEnvelope} size='sm'></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-center bg-white-500 p-11 space-y-9 mt-9">
      <h1 className="mt-10 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">Our Community Members</h1>
      <section className="mb-10 space-y-5 md:text-center">
        <h2 className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80 ">Section 1</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {membersData.slice(0, 18).map((member, index) => renderMemberCard(member, index))}
        </div>
      </section>
      <section className="mb-10 space-y-5 md:text-center">
        <h2 className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">Section 2</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {membersData.slice(18, 23).map((member, index) => renderMemberCard(member, index))}
        </div>
      </section>
      <section className="mb-10 space-y-5 md:text-center">
        <h2 className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">Section 3</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {membersData.slice(23, 27).map((member, index) => renderMemberCard(member, index))}
        </div>
      </section>
      <section className="mb-10 space-y-5 md:text-center">
        <h2 className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">Section 4</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {membersData.slice(27, 31).map((member, index) => renderMemberCard(member, index))}
        </div>
      </section>
    </div>
  );
};

export default MembersPage;