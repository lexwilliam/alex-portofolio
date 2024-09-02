import Image, { StaticImageData } from "next/image";
import logo from "../app/assets/images/logo.png";
import me from "../app/assets/images/me.jpg";
import Link from "next/link";
import integra_pratama_logo from "../app/assets/images/integra_pratama_logo.jpeg";
import lucy_logo from "../app/assets/images/lucy_logo.png";
import risuto_logo from "../app/assets/images/risuto_logo.png";
import invence_logo from "../app/assets/images/invence_logo.png";
import android_logo from "../app/assets/images/android_logo.png";
import android_studio_logo from "../app/assets/images/android_studio_logo.png";
import xcode_logo from "../app/assets/images/xcode_logo.png";
import kotlin_logo from "../app/assets/images/kotlin_logo.png";
import swift_logo from "../app/assets/images/swift_logo.png";
import react_logo from "../app/assets/images/react_logo.png";
import nextjs_logo from "../app/assets/images/nextjs_logo.png";
import tailwindcss_logo from "../app/assets/images/tailwindcss_logo.svg";
import nuxt_logo from "../app/assets/images/nuxt_logo.png";
import vue_logo from "../app/assets/images/vue_logo.png";
import firebase_logo from "../app/assets/images/firebase_logo.png";
import mongodb_logo from "../app/assets/images/mongodb_logo.png";
import flutter_logo from "../app/assets/images/flutter_logo.png";
import typescript_logo from "../app/assets/images/typescript_logo.png";
import javascript_logo from "../app/assets/images/javascript_logo.png";
import java_logo from "../app/assets/images/java_logo.png";
import python_logo from "../app/assets/images/python_logo.png";
import linkedin_logo from "../app/assets/images/linkedin_logo.png";
import github_logo from "../app/assets/images/github_logo.png";
import apple_black_logo from "../app/assets/images/apple_black_logo.png";
import { Abril_Fatface, Racing_Sans_One } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ButtonIcon,
  CodeIcon,
  FileTextIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

const display = Racing_Sans_One({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

function Projects() {
  function Invence() {
    return (
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="font-bold">2024</span>
        <div className="flex flex-row gap-4">
          <Image
            className="w-20 h-20 rounded-lg object-contain"
            src={invence_logo}
            alt="Logo"
          />
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Invence</span>
            <span className="text-xs">
              Inventory Management for Small Ecommerce Business
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pb-6">
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={android_logo} alt="Logo" />
            Android
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-3 object-contain" src={apple_black_logo} alt="Logo" />
            IOS
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <GlobeIcon className="w-4 h-4" />
            Web
          </Badge>
        </div>
      </div>
    );
  }

  function Risuto() {
    return (
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="font-bold">2021</span>
        <div className="flex flex-row gap-4">
          <Image
            className="w-20 h-20 rounded-lg object-contain"
            src={risuto_logo}
            alt="Logo"
          />
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Risuto</span>
            <span className="text-xs">Anime Database App</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 pb-6">
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={android_logo} alt="Logo" />
            Android
          </Badge>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-8 gap-6 heropattern-topography-gray-700 border-b border-white">
      <span className="text-4xl ps-6 font-black">Projects</span>
      <Invence />
      <Risuto />
    </div>
  );
}

interface TechStackProps {
  src: StaticImageData;
  label: string;
}

function TechStack() {
  return (
    <div className="flex flex-col py-8 gap-6 heropattern-endlessclouds-gray-700 border-b border-white">
      <span className="text-4xl ps-6 font-black">Tech Stack</span>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Languages</span>
        <div className="flex flex-wrap gap-4">
          <Image className="w-16 h-16" src={kotlin_logo} alt="Logo" />
          <Image className="w-16 h-16" src={swift_logo} alt="Logo" />
          <Image className="w-16 h-16" src={typescript_logo} alt="Logo" />
          <Image className="w-16 h-16" src={javascript_logo} alt="Logo" />
          <Image className="w-16 h-16" src={java_logo} alt="Logo" />
          <Image
            className="w-16 h-16  object-contain"
            src={python_logo}
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Mobile Development</span>
        <div className="flex flex-wrap gap-4">
          <Image className="w-16 h-16" src={android_studio_logo} alt="Logo" />
          <Image className="w-16 h-16" src={xcode_logo} alt="Logo" />
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Front-End Development</span>
        <div className="flex flex-wrap gap-4">
          <Image className="w-16 h-16" src={react_logo} alt="Logo" />
          <Image className="w-16 h-16" src={nextjs_logo} alt="Logo" />
          <Image className="w-16 h-16 p-1" src={vue_logo} alt="Logo" />
          <Image className="w-16 h-16" src={nuxt_logo} alt="Logo" />
          <Image className="w-16 h-16" src={tailwindcss_logo} alt="Logo" />
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Back-End Development</span>
        <div className="flex flex-wrap gap-4">
          <Image className="w-16 h-16" src={firebase_logo} alt="Logo" />
          <Image
            className="w-16 h-16 object-contain"
            src={mongodb_logo}
            alt="Logo"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Hybrid Development</span>
        <div className="flex flex-wrap gap-4">
          <Image
            className="w-16 h-16 object-contain"
            src={flutter_logo}
            alt="Logo"
          />
          <Image className="w-16 h-16" src={kotlin_logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

function Career() {
  return (
    <div className="flex flex-col py-8 gap-6 border-b border-white heropattern-linesinmotion-gray-700">
      <span className="text-4xl ps-6 font-black">Career</span>
      <div className="flex flex-row justify-between">
        <span className="ps-6 text-2xl font-bold">Integra Pratama</span>
        <Image className="w-24 h-24" src={integra_pratama_logo} alt="Logo" />
      </div>
      <div className="flex flex-row justify-between">
        <span className="ps-6 text-2xl font-bold">Lucy</span>
        <Image className="w-24 h-24 bg-white p-5" src={lucy_logo} alt="Logo" />
      </div>
    </div>
  );
}

function HomeToolbar() {
  return (
    <div className="flex flex-row w-full items-center justify-between py-4 px-6 border-b border-white">
      <Image src={logo} alt="Logo" width={64} height={64} priority />
      <div className="hidden sm:flex sm:flex-row sm:gap-12 ">
        <Link href="/projects">
          <span>Projects</span>
        </Link>
        <Link href="/career">
          <span>Career</span>
        </Link>
        <Link href="/services">
          <span>Services</span>
        </Link>
      </div>
      <span className="hidden sm:block">Contact me</span>
      <HamburgerMenuIcon className="block sm:hidden w-4 h-4" />
    </div>
  );
}

function SkillChipGroup() {
  return (
    <div className="flex flex-wrap gap-4  pb-6">
      <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
        <MobileIcon className="w-4 h-4" />
        Mobile
      </Badge>
      <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
        <CodeIcon className="w-4 h-4" />
        Front-end
      </Badge>
      <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
        <ButtonIcon className="w-4 h-4" />
        Back-end
      </Badge>
    </div>
  );
}

function Me() {
  return (
    <div className="flex flex-col border-b border-white h-full justify-center">
      <div className="grid py-16">
        <div className="col-start-1 row-start-1 flex flex-row justify-end">
          <Image className="w-1/2" src={me} alt="Me" />
        </div>
        <span className="col-start-1 row-start-1 ps-6">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
              <span className="text-md">Software Engineer</span>
              <div className="flex flex-row gap-4">
                <Link href="https://www.linkedin.com/in/alexander-william-0898a5187/">
                  <Image
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    src={linkedin_logo}
                    alt="Logo"
                  />
                </Link>
                <Link href="https://github.com/lexwilliam">
                  <Image
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    src={github_logo}
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col text-5xl lg:text-6xl font-bold">
              <div className="w-1/2 hidden sm:block">
                <SkillChipGroup />
              </div>
              <span>Alexander</span>
              <span>William</span>
            </div>
          </div>
        </span>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center pb-6 sm:hidden">
        <SkillChipGroup />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full">
      <div className="flex flex-col sm:h-screen">
        <HomeToolbar />
        <div className="flex-1">
          <Me />
        </div>
      </div>
      <Projects />
      <TechStack />
      <Career />
    </main>
  );
}
