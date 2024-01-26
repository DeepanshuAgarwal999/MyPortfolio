import { Skills } from "@/constants/SideBarLinks";
import SkillCard from './components/SkillCard'
import BgEffect from "@/components/BgEffect";
export default function Skill() {
  return (
    <div className="bg-gray-900 sm:py-36 min-h-screen relative isolate">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h1 className="text-3xl text-white font-semibold ">Skills & Expertise</h1>
        <div className="-mx-6 mt-10 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {Skills.map((skill) => (
            <SkillCard logo={skill.logo} title={skill.name}/>
          ))}
        </div>
      </div>
      <BgEffect/>
    </div>
  );
}
