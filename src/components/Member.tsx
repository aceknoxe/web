import Head from 'next/head';

import { useState } from 'react';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
  { name: "Alice Johnson", position: "Project Manager", email: "alice@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/alice", instagram: "https://instagram.com/alice" },
  { name: "Bob Smith", position: "Senior Developer", email: "bob@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/bob", instagram: "https://instagram.com/bob" },
  { name: "Carol Davis", position: "Software Engineer", email: "carol@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/carol", instagram: "https://instagram.com/carol" },
  { name: "David Wilson", position: "UI/UX Designer", email: "david@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/david", instagram: "https://instagram.com/david" },
  { name: "Emily Garcia", position: "Product Manager", email: "emily@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/emily", instagram: "https://instagram.com/emily" },
  { name: "Frank Rodriguez", position: "Data Analyst", email: "frank@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/frank", instagram: "https://instagram.com/frank" },
  { name: "Grace Lee", position: "QA Engineer", email: "grace@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/grace", instagram: "https://instagram.com/grace" },
  { name: "Henry Kim", position: "DevOps Engineer", email: "henry@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/henry", instagram: "https://instagram.com/henry" },
  { name: "Isabella Brown", position: "Marketing Specialist", email: "isabella@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/isabella", instagram: "https://instagram.com/isabella" },
  { name: "Jack Miller", position: "Content Writer", email: "jack@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/jack", instagram: "https://instagram.com/jack" },
  { name: "Katherine Davis", position: "Sales Manager", email: "katherine@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/katherine", instagram: "https://instagram.com/katherine" },
  { name: "Liam Wilson", position: "Customer Success Manager", email: "liam@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/liam", instagram: "https://instagram.com/liam" },
  { name: "Mia Garcia", position: "Operations Manager", email: "mia@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/mia", instagram: "https://instagram.com/mia" },
  { name: "Noah Rodriguez", position: "Finance Analyst", email: "noah@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/noah", instagram: "https://instagram.com/noah" },
  { name: "Olivia Lee", position: "HR Assistant", email: "olivia@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/olivia", instagram: "https://instagram.com/olivia" },
  { name: "Peter Kim", position: "Security Engineer", email: "peter@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/peter", instagram: "https://instagram.com/peter" },
  { name: "Quinn Brown", position: "Legal Counsel", email: "quinn@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/quinn", instagram: "https://instagram.com/quinn" },
  { name: "Ryan Miller", position: "Project Coordinator", email: "ryan@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/ryan", instagram: "https://instagram.com/ryan" },
  // Add 16 more members for section 1...

  // Section 2: 5 cards
  { name: "Charlie Brown", position: "Designer", email: "charlie@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/charlie", instagram: "https://instagram.com/charlie" },
  { name: "Daniel Garcia", position: "Product Designer", email: "daniel@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/daniel", instagram: "https://instagram.com/daniel" },
  { name: "Emily Wilson", position: "UX Researcher", email: "emily@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/emily", instagram: "https://instagram.com/emily" },
  { name: "Frank Rodriguez", position: "UI Developer", email: "frank@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/frank", instagram: "https://instagram.com/frank" },
  { name: "Grace Lee", position: "Visual Designer", email: "grace@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/grace", instagram: "https://instagram.com/grace" },
  // Add 4 more members for section 2...

  // Section 3: 4 cards
  { name: "David Clark", position: "Marketing", email: "david@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/david", instagram: "https://instagram.com/david" },
  { name: "Henry Kim", position: "Marketing Manager", email: "henry@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/henry", instagram: "https://instagram.com/henry" },
  { name: "Isabella Brown", position: "Content Creator", email: "isabella@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/isabella", instagram: "https://instagram.com/isabella" },
  { name: "Jack Miller", position: "Social Media Manager", email: "jack@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/jack", instagram: "https://instagram.com/jack" },
  // Add 3 more members for section 3...

  // Section 4: 4 cards
  { name: "Eve Stewart", position: "HR Manager", email: "eve@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/eve", instagram: "https://instagram.com/eve" },
  { name: "Fred Jones", position: "HR Specialist", email: "fred@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/fred", instagram: "https://instagram.com/fred" },
  { name: "Gina Williams", position: "HR Coordinator", email: "gina@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/gina", instagram: "https://instagram.com/gina" },
  { name: "Harry Smith", position: "HR Intern", email: "harry@example.com", image: "/execome/section1/pic.jpg", linkedin: "https://linkedin.com/in/harry", instagram: "https://instagram.com/harry" },
  // Add 3 more members for section 4...
];

const MembersPage = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const renderMemberCard = (member: Member, index: number) => (
    <div
      key={index}
      onClick={() => setSelectedMember(member)}
      className="bg-green-80 dark:bg-white-500 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <img
          alt={member.name}
          src={member.image}
          className="w-32 h-32 group-hover:w-36 group-hover:h-36 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
        />
        <div className="w-fit transition-all transform duration-500">
          <h1 className="text-gray-800 dark:text-gray-800 font-bold">{member.name}</h1>
          <p className="text-gray-800">{member.position}</p>
        </div>
      </div>
      <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-white-600 dark:bg-white-100 right-1 rounded-lg">
        <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="sm" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className='py-20 bg-opacity-50 bg-emerald-50'>
      <div className="min-h-screen text-center bg-white-500 p-11 space-y-9 mt-9">
        <h1 className="mt-10 bg-gradient-to-r from-[#1D976C] to-[#38ef7d] bg-clip-text text-3xl font-medium text-transparent">Our Community Members</h1>
        <section className="mb-10 space-y-5 md:text-center">
          <h2 className="inline-block px-3 py-1 text-sm rounded-lg bg-emerald-100 bg-opacity-60 text-emerald-500 hover:cursor-pointer hover:bg-opacity-80">Section 1</h2>
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
    </div>
  );
};

export default MembersPage;