"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Code, Briefcase, GraduationCap, Award, Zap } from "lucide-react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("about")

  const personalInfo = {
    name: "Fahim Ahamed",
    title: "Full-Stack Developer & Blockchain Engineer",
    email: "coolcriminaluniverse@gmail.com",
    phone: "+880 (1700) 89-1445",
    location: "Dhaka, Bangladesh",
    website: "coolcriminal.space",
    github: "github.com/ccuniverse2",
    linkedin: "linkedin.com/in/fahim-ahamed-4606b3125",
  }

  const skills = [
    "React",
    "Vyper",
    "Rust",
    "PyTell",
    "Polkadot",
    "OSCAL",
    "Algorand",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Solidity",
    "Web3",
    "Blockchain",
    "Smart Contracts",
    "DeFi",
    "NFTs",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
  ]

  const experience = [
    {
      title: "Senior Blockchain Developer",
      company: "Plooty Art",
      period: "2023 - 2024",
      description:
        "Led development of DeFi protocols and NFT marketplaces. Built smart contracts handling $50M+ in transactions.",
    },
    {
      title: "Full Stack Developer",
      company: "Easital Technologies",
      period: "2021 - 2022",
      description: "Developed scalable web applications using React and Node.js. Improved system performance by 40%.",
    },
    {
      title: "CEO & Blockchain Engineer",
      company: "AnAi Services",
      period: "2024 - Present",
      description: "Co-Founder and Lead Blockchain Engineer of AnAi Services.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Varendra University",
      period: "2014 - 2018",
      gpa: "3.12/4.0",
    },
  ]

  const projects = [
    {
      name: "DeFi Yield Optimizer",
      tech: ["Solidity", "React", "Web3.js"],
      description: "Automated yield farming protocol with $10M+ TVL",
    },
    {
      name: "NFT Marketplace",
      tech: ["Next.js", "IPFS", "Ethereum"],
      description: "Full-featured NFT trading platform with 50k+ users",
    },
    {
      name: "Crypto Portfolio Tracker",
      tech: ["React Native", "Node.js", "MongoDB"],
      description: "Real-time portfolio tracking with advanced analytics",
    },
  ]

  return (
    <div
      id="resume-content"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-cyan-500/30 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 relative">
                <img src="/ccuc-logo.png" alt="CCUC Logo" className="w-full h-full object-contain drop-shadow-lg" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </h1>
                <p className="text-cyan-300 text-sm">{personalInfo.title}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Info */}
            <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-xl font-bold text-cyan-400 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Contact
                </h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{personalInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{personalInfo.website}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{personalInfo.github}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">{personalInfo.linkedin}</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-xl font-bold text-cyan-400 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Skills
                </h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-cyan-500/20 to-yellow-500/20 border-cyan-400/50 text-cyan-300 hover:from-cyan-500/30 hover:to-yellow-500/30 transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <h2 className="text-xl font-bold text-cyan-400 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-cyan-500/50 pl-4">
                    <h3 className="font-semibold text-yellow-400">{edu.degree}</h3>
                    <p className="text-cyan-300 text-sm">{edu.school}</p>
                    <p className="text-gray-400 text-xs">{edu.period}</p>
                    <p className="text-gray-400 text-xs">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Navigation */}
            <div className="flex space-x-2 bg-slate-800/50 p-2 rounded-lg border border-cyan-500/30">
              {["about", "experience", "projects"].map((section) => (
                <Button
                  key={section}
                  variant={activeSection === section ? "default" : "ghost"}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize ${
                    activeSection === section
                      ? "bg-gradient-to-r from-cyan-500 to-yellow-500 text-slate-900"
                      : "text-cyan-300 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  {section}
                </Button>
              ))}
            </div>

            {/* About Section */}
            {activeSection === "about" && (
              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-cyan-400">About Me</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-300">
                  <p>
                  I, Fahim Ahamed, am a highly skilled blockchain developer and full-stack software engineer, specializing in advanced blockchain platforms such as Ethereum, Binance Smart Chain (BSC), Polygon, Solana, SEI, Cardano, Polkadot, Optimism, and Avalanche. My expertise lies in designing and implementing smart contracts, Decentralized Applications (DApps), and DeFi protocols, leveraging cutting-edge technologies to deliver secure, scalable, and efficient solutions.
I am proficient in programming languages including Solidity, Rust, Aiken-lang, Vyper, and Clarity, enabling the development of robust smart contracts tailored to complex use cases such as token creation, governance, staking, and cross-chain interoperability. My skills extend to implementing token standards like ERC-20, ERC-721, ERC-1155, and BEP-20, as well as integrating Layer-2 solutions, oracles, and decentralized storage systems.
</p>
                  <p>
                      Passionate blockchain developer and full-stack engineer with 5+ years of experience building
                      cutting-edge decentralized applications and scalable web solutions. Specialized in DeFi protocols,
                      NFT marketplaces, and smart contract development.
                    </p>
                    <p>
                      I thrive in the intersection of traditional web development and emerging blockchain technologies,
                      creating innovative solutions that push the boundaries of what's possible in the decentralized
                      web.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-lg border border-cyan-500/30">
                        <div className="text-2xl font-bold text-cyan-400">50+</div>
                        <div className="text-sm text-gray-400">Unique Projects</div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-yellow-500/10 rounded-lg border border-cyan-500/30">
                        <div className="text-2xl font-bold text-yellow-400">264+</div>
                        <div className="text-sm text-gray-400">Projects Delivered</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Experience Section */}
            {activeSection === "experience" && (
              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-cyan-400 flex items-center">
                    <Briefcase className="w-6 h-6 mr-2" />
                    Experience
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-cyan-500/50 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-500 rounded-full"></div>
                      <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
                      <p className="text-cyan-300 font-medium">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Projects Section */}
            {activeSection === "projects" && (
              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm">
                <CardHeader>
                  <h2 className="text-2xl font-bold text-cyan-400 flex items-center">
                    <Award className="w-6 h-6 mr-2" />
                    Featured Projects
                  </h2>
                </CardHeader>
                <CardContent className="space-y-6">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-lg border border-cyan-500/30"
                    >
                      <h3 className="text-xl font-semibold text-yellow-400 mb-2">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-cyan-500/20 border-cyan-400/50 text-cyan-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-gray-300">{project.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-cyan-500/30 bg-slate-900/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-400 text-sm">© 2025 {personalInfo.name}. CV with ⚡ and blockchain magic.</p>
        </div>
      </footer>
    </div>
  )
}
