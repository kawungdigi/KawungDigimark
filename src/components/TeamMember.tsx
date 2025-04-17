interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
}

const TeamMember = ({ name, position, image }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-indigo-600">{position}</p>
    </div>
  );
};

export default TeamMember;
