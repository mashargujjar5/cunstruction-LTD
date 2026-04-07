import { motion } from "framer-motion";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

const teamMembers = [
  {
    id: 1,
    name: "John Foster",
    role: "Founder & CEO",
    image: team1,
    description: "With over 20 years of experience, John has built J R Foster Construction from the ground up, focusing on delivering quality and innovative solutions."
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "Project Manager",
    image: team2,
    description: "A specialist in commercial construction, Sarah ensures that every project is completed on time and within budget."
  },
  {
    id: 3,
    name: "Mark Reynolds",
    role: "Head Engineer",
    image: team3,
    description: "With an eye for structural integrity, Mark leads our engineering team to develop durable and safe structures."
  },
  {
    id: 4,
    name: "Emily Carter",
    role: "Client Relations Manager",
    image: team4,
    description: "Emily ensures smooth communication between clients and our team, making sure expectations are always met."
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-[#f9fafb] px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] mb-4">
            Meet the Team (Our Experts Behind the Success)
          </h2>
          <p className="text-[#6b7280] max-w-3xl mx-auto text-lg leading-relaxed">
            Our team is the backbone of our success. Each member brings specialized expertise to ensure that every project is executed flawlessly.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group"
            >
              {/* Image with border and hover effect */}
              <div className="relative mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#e5e7eb] group-hover:border-[#fbbf24] transition-colors duration-300">
                  <motion.img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Member Details */}
              <h3 className="text-2xl font-bold text-[#111827] mb-1">{member.name}</h3>
              <span className="text-[#4b5563] font-medium mb-4">{member.role}</span>
              <p className="text-[#6b7280] text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#eab308",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#fac301] text-white font-bold py-4 px-10 rounded-lg text-lg uppercase tracking-wide transition-all shadow-md"
          >
            See More Team Members
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
