"use client";

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
import invence_screenshot from "../app/assets/images/invence_screenshot.png";
import risuto_screenshot from "../app/assets/images/risuto_screenshot.png";
import { Abril_Fatface, Racing_Sans_One } from "next/font/google";
import {
  ArrowDownIcon,
  ButtonIcon,
  CodeIcon,
  DownloadIcon,
  FileTextIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const display = Racing_Sans_One({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

const baseUrl = "https://alex-portofolio-tan.vercel.app/";
const localHost = "http://localhost:3000/";

function Projects() {
  const downloadFileAtUrl = (url: string) => {
    const fileName = url.split("/").pop();
    if (fileName !== undefined) {
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", fileName);
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

  function Invence() {
    return (
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-6">
          <span className="font-bold">2024</span>
          <div className="flex flex-row gap-4">
            <Image
              className="w-20 h-20 rounded-lg object-contain"
              src={invence_logo}
              alt="Logo"
            />
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">Invence</span>
              <span className="text-sm">
                Inventory Management for Small Ecommerce Business
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
              <Image className="w-4 h-4" src={android_logo} alt="Logo" />
              Android
            </Badge>
            <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
              <Image
                className="w-3 object-contain"
                src={apple_black_logo}
                alt="Logo"
              />
              IOS (Coming Soon)
            </Badge>
            <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
              <GlobeIcon className="w-4 h-4" />
              Web
            </Badge>
          </div>
          <span className="text-sm">
            Invence is a application that allows users to create and manage
            their own inventory. It provides a simple and intuitive interface
            for managing products, orders, and payments. Designed to be scalable
            and easy to use for both small and large businesses.
          </span>
          <Button
            className="flex flex-row bg-white text-black items-center justify-center gap-2"
            onClick={() => {
              downloadFileAtUrl(`${baseUrl}Invence.apk`);
            }}
          >
            <DownloadIcon />
            Download (.apk)
          </Button>
        </div>
        <Image
          className="w-full sm:w-1/3"
          src={invence_screenshot}
          alt="Invence Screenshot"
        />
      </div>
    );
  }

  function Risuto() {
    return (
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-6">
          <span className="font-bold">2021</span>
          <div className="flex flex-row gap-4">
            <Image
              className="w-20 h-20 rounded-lg object-contain"
              src={risuto_logo}
              alt="Logo"
            />
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold">Risuto</span>
              <span className="text-sm">Anime Database App</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
              <Image className="w-4 h-4" src={android_logo} alt="Logo" />
              Android
            </Badge>
          </div>
          <span className="text-sm">
            Risuto is a comprehensive anime list app designed to simplify your
            anime-watching experience. Search for your favorite titles, explore
            detailed information, and effortlessly add them to your personal
            watchlist. With a user-friendly interface and access to the vast
            MyAnimeList database, Risuto makes it easy to discover and organize
            your anime collection. Authenticate with your MyAnimeList account to
            seamlessly sync your lists across devices.
          </span>
          <Button
            className="flex flex-row bg-white text-black items-center justify-center gap-2"
            onClick={() => {
              downloadFileAtUrl(`${baseUrl}Risuto.apk`);
            }}
          >
            <DownloadIcon />
            Download (.apk)
          </Button>
        </div>
        <Image
          className="w-full sm:w-1/3"
          src={risuto_screenshot}
          alt="Risuto Screenshot"
        />
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
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="font-bold">Jul 2024 - Present</span>
        <div className="flex flex-row gap-4">
          <Image className="w-24 h-24" src={integra_pratama_logo} alt="Logo" />
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Integra Pratama</span>
            <span className="text-sm">Android Developer</span>
          </div>
        </div>
        <span>Tools</span>
        <div className="flex flex-wrap gap-4">
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image
              className="w-4 h-4 object-contain"
              src={flutter_logo}
              alt="Logo"
            />
            <span>Flutter</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={android_studio_logo} alt="Logo" />
            <span>Android Studio</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image
              className="w-4 h-4 object-contain"
              src={mongodb_logo}
              alt="Logo"
            />
            <span>MongoDB</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={firebase_logo} alt="Logo" />
            <span>Firebase</span>
          </Badge>
        </div>
        <span>Contribution</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <li>
            Designed and developed a comprehensive POS Cashier and Dashboard
            from scratch, utilizing Flutter. Allowing restaurant managers to
            easily manage menus, orders, and payments.
          </li>
          <li>
            Developed hybrid apps using the latest technologies and frameworks,
            such as Flutter Blocs, Go Router, and Freezed.
          </li>
          <li>
            Developed and implemented a comprehensive serverless backend system
            that leveraged the strengths of MongoDB and Firebase Cloud Function.
          </li>
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="font-bold">May 2023 - May 2024</span>
        <div className="flex flex-row gap-4">
          <Image
            className="w-24 h-24 bg-white p-5"
            src={lucy_logo}
            alt="Logo"
          />
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Lucy</span>
            <span className="text-sm">Android Developer</span>
          </div>
        </div>
        <span>Tools</span>
        <div className="flex flex-wrap gap-4">
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={android_studio_logo} alt="Logo" />
            <span>Android Studio</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={xcode_logo} alt="Logo" />
            <span>XCode</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={vue_logo} alt="Logo" />
            <span>Vue</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image className="w-4 h-4" src={firebase_logo} alt="Logo" />
            <span>Firebase</span>
          </Badge>
        </div>
        <span>Contribution</span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <li>
            Designed and developed a comprehensive waiter and invoice Android
            app from scratch, utilizing Kotlin and Android Studio.
          </li>
          <li>
            Developed a dynamic control panel web app using Vue and Node.js,
            allowing restaurant managers to easily manage menus, orders, and
            payments.
          </li>
          <li>
            Collaborated with senior developers and managers to design and
            develop a main app, cashier Android app, and dashboard web app for a
            restaurant management system.
          </li>
          <li>
            Developed Android apps using the latest technologies and frameworks,
            such as Kotlin, Android Jetpack, and Clean Architecture
          </li>
          <li>
            Developed and implemented a comprehensive data management strategy
            that leveraged the strengths of Firebase Cloud Firestore NoSQL,
            local databases such as Room SQLite and Realm NoSQL, and local
            server with server-side events to provide a seamless and efficient
            user experience.
          </li>
        </div>
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
              <span className="text-md w-1/2">Mobile and Web Developer</span>
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
    <main className="flex flex-col w-full h-full dark">
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
