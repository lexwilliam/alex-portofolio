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
import gmail_logo from "../app/assets/images/gmail_logo.png";
import apple_black_logo from "../app/assets/images/apple_black_logo.png";
import invence_screenshot from "../app/assets/images/invence_screenshot.png";
import risuto_screenshot from "../app/assets/images/risuto_screenshot.png";
import wahdah_logo from "../app/assets/images/wahdah_logo.png";
import expo_logo from "../app/assets/images/expo_logo.png";
import express_logo from "../app/assets/images/express_logo.png";
import mysql_logo from "../app/assets/images/mysql_logo.png";
import postgresql_logo from "../app/assets/images/postgresql_logo.png";
import convex from "../app/assets/images/convex.png";
import playstore_logo from "../app/assets/images/playstore_logo.png";
import { Racing_Sans_One } from "next/font/google";
import {
  ButtonIcon,
  CodeIcon,
  DownloadIcon,
  GlobeIcon,
  HamburgerMenuIcon,
  MobileIcon,
} from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { usePostHog } from "posthog-js/react";
import { NewPortfolioDialog } from "@/components/NewPortfolioDialog";

const display = Racing_Sans_One({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
});

function Projects() {
  const posthog = usePostHog();

  function Invence() {
    const handleInvencePlayStore = () => {
      if (posthog) {
        posthog.capture("click", {
          type: "project_invence_play_store",
          element: "Get it on Google Play",
        });
      }
    };

    const handleInvenceLanding = () => {
      if (posthog) {
        posthog.capture("click", {
          type: "project_invence_landing",
          element: "Visit Landing Page",
        });
      }
    };

    const handleInvenceGitHub = (repo: string) => {
      if (posthog) {
        posthog.capture("click", {
          type: `project_invence_github_${repo}`,
          element: repo,
        });
      }
    };

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
          <div className="flex flex-col gap-4">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.lexwilliam.invence"
              onClick={handleInvencePlayStore}
            >
              <Image
                className="w-32 h-10"
                src="/get_it_on_google_play.png"
                alt="Get it on Google Play"
                width={270}
                height={80}
              />
            </Link>
            <Link
              href="https://invence.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              onClick={handleInvenceLanding}
            >
              <GlobeIcon className="w-5 h-5" />
              <span className="text-sm">Visit Landing Page</span>
            </Link>
            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold">
                GitHub Repositories:
              </span>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://github.com/lexwilliam/invence-android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm"
                  onClick={() => handleInvenceGitHub("android")}
                >
                  <Image className="w-4 h-4" src={github_logo} alt="GitHub" />
                  <span>Android (Kotlin)</span>
                </Link>
                <Link
                  href="https://github.com/lexwilliam/invence_landing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm"
                  onClick={() => handleInvenceGitHub("landing")}
                >
                  <Image className="w-4 h-4" src={github_logo} alt="GitHub" />
                  <span>Landing Page (NextJS, React)</span>
                </Link>
                <Link
                  href="https://github.com/lexwilliam/invence-ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm"
                  onClick={() => handleInvenceGitHub("ios")}
                >
                  <Image className="w-4 h-4" src={github_logo} alt="GitHub" />
                  <span>iOS (Swift)</span>
                </Link>
                <Link
                  href="https://github.com/lexwilliam/invence-functions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm"
                  onClick={() => handleInvenceGitHub("functions")}
                >
                  <Image className="w-4 h-4" src={github_logo} alt="GitHub" />
                  <span>Firebase Functions (Typescript)</span>
                </Link>
                <Link
                  href="https://github.com/lexwilliam/invence-dashboard-vue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm"
                  onClick={() => handleInvenceGitHub("dashboard")}
                >
                  <Image className="w-4 h-4" src={github_logo} alt="GitHub" />
                  <span>Dashboard (Vue)</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="w-full sm:w-1/3 rounded-xl"
          src={invence_screenshot}
          alt="Invence Screenshot"
        />
      </div>
    );
  }

  function Risuto() {
    const handleRisutoPlayStore = () => {
      if (posthog) {
        posthog.capture("click", {
          type: "project_risuto_play_store",
          element: "Get it on Google Play",
        });
      }
    };

    const handleRisutoGitHub = () => {
      if (posthog) {
        posthog.capture("click", {
          type: "project_risuto_github",
          element: "View on GitHub",
        });
      }
    };

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
          <div className="flex flex-wrap gap-4 items-center">
            <Link 
              href="https://play.google.com/store/apps/details?id=com.lexwilliam.risuto"
              onClick={handleRisutoPlayStore}
            >
              <Image
                className="w-32 h-10"
                src="/get_it_on_google_play.png"
                alt="Get it on Google Play"
                width={270}
                height={80}
              />
            </Link>
            <Link
              href="https://github.com/lexwilliam/Risuto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              onClick={handleRisutoGitHub}
            >
              <Image className="w-5 h-5" src={github_logo} alt="GitHub" />
              <span className="text-sm">View on GitHub</span>
            </Link>
          </div>
        </div>
        <Image
          className="w-full sm:w-1/3 rounded-xl"
          src={risuto_screenshot}
          alt="Risuto Screenshot"
        />
      </div>
    );
  }

  return (
    <div
      id="projects"
      className="flex flex-col py-8 gap-6 heropattern-topography-gray-700 border-b border-white"
    >
      <span className="text-4xl ps-6 font-black">Projects</span>
      <Invence />
      <Risuto />
    </div>
  );
}

function TechStack() {
  return (
    <div
      id="tech-stack"
      className="flex flex-col py-8 gap-6 heropattern-endlessclouds-gray-700 border-b border-white"
    >
      <span className="text-4xl ps-6 font-black">Tech Stack</span>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Languages</span>
        <div className="flex flex-wrap gap-4">
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={kotlin_logo}
              alt="Kotlin"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Kotlin
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={swift_logo}
              alt="Swift"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Swift
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={typescript_logo}
              alt="TypeScript"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              TypeScript
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={javascript_logo}
              alt="JavaScript"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              JavaScript
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={java_logo}
              alt="Java"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Java
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={python_logo}
              alt="Python"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Python
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Mobile Development</span>
        <div className="flex flex-wrap gap-4">
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={android_studio_logo}
              alt="Android Studio"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Android Studio
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={xcode_logo}
              alt="Xcode"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Xcode
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={flutter_logo}
              alt="Flutter"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Flutter
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={expo_logo}
              alt="Expo"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Expo
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Front-End Development</span>
        <div className="flex flex-wrap gap-4">
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={react_logo}
              alt="React"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              React
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={nextjs_logo}
              alt="Next.js"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Next.js
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg p-1"
              src={vue_logo}
              alt="Vue"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Vue
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={nuxt_logo}
              alt="Nuxt"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Nuxt
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={tailwindcss_logo}
              alt="Tailwind CSS"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="text-2xl font-bold">Back-End Development</span>
        <div className="flex flex-wrap gap-4">
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg"
              src={firebase_logo}
              alt="Firebase"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Firebase
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={mongodb_logo}
              alt="MongoDB"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              MongoDB
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={express_logo}
              alt="Express"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Express
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={mysql_logo}
              alt="MySQL"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              MySQL
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={postgresql_logo}
              alt="PostgreSQL"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              PostgreSQL
            </span>
          </div>
          <div className="relative group">
            <Image
              className="w-16 h-16 rounded-lg object-contain"
              src={convex}
              alt="Convex"
            />
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              Convex
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Career() {
  function Wahdah() {
    return (
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="font-bold">Jun 2025 - Present</span>
        <div className="flex flex-row gap-4">
          <Image className="w-24 h-24" src={wahdah_logo} alt="Logo" />
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">Wahdah</span>
            <span className="text-sm">Mobile Developer</span>
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
            <span>Xcode</span>
          </Badge>
          <Badge className="flex flex-row bg-white text-black items-center justify-center gap-2">
            <Image
              className="w-4 h-4 object-contain"
              src={flutter_logo}
              alt="Logo"
            />
            <span>Flutter</span>
          </Badge>
        </div>
        <span>Contribution</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <li>
            Collaborate with colleagues and senior to develop the main business
            product: DRIVEO and WAHDAH using Android Kotlin and IOS Swift.
          </li>
          <li>
            Teach and supervise Intern and Junior Mobile Developer on Workbeat
            HRIS app Flutter project.
          </li>
        </div>
      </div>
    );
  }

  function Integra() {
    return (
      <div className="flex flex-col gap-4 border border-white p-6 mx-6 bg-black">
        <span className="font-bold">Jul 2024 - Jul 2025</span>
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
    );
  }

  function Lucy() {
    return (
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
    );
  }

  return (
    <div
      id="career"
      className="flex flex-col py-8 gap-6 border-b border-white heropattern-linesinmotion-gray-700"
    >
      <span className="text-4xl ps-6 font-black">Career</span>
      <Wahdah />
      <Integra />
      <Lucy />
    </div>
  );
}

function HomeToolbar() {
  const posthog = usePostHog();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId: string, buttonText: string) => {
    if (posthog) {
      posthog.capture("click", {
        type: `nav_${sectionId}`,
        element: buttonText,
      });
    }
    scrollToSection(sectionId);
  };

  const handleResumeClick = () => {
    if (posthog) {
      posthog.capture("click", {
        type: "resume_download_toolbar",
        element: "Resume (.pdf)",
      });
    }
  };

  return (
    <div className="flex flex-row w-full items-center py-4 px-6 border-b border-white">
      <Image src={logo} alt="Logo" width={64} height={64} priority />
      <div className="flex-1 flex justify-center">
        <div className="hidden sm:flex sm:flex-row sm:gap-12">
          <button
            onClick={() => handleNavClick("career", "Career")}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            <span>Career</span>
          </button>
          <button
            onClick={() => handleNavClick("projects", "Projects")}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            <span>Projects</span>
          </button>
          <button
            onClick={() => handleNavClick("tech-stack", "Tech Stack")}
            className="hover:text-gray-300 transition-colors cursor-pointer"
          >
            <span>Tech Stack</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/CV_Alexander_William.pdf"
          download="Alexander_William_Resume.pdf"
          className="hidden sm:block text-white flex-row "
          onClick={handleResumeClick}
        >
          Resume (.pdf)
        </Link>
        {/* <HamburgerMenuIcon className="block sm:hidden w-4 h-4" /> */}
      </div>
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
  const posthog = usePostHog();

  const handleSocialClick = (platform: string) => {
    if (posthog) {
      posthog.capture("click", {
        type: `social_${platform}`,
        element: platform,
      });
    }
  };

  const handleResumeDownload = () => {
    if (posthog) {
      posthog.capture("click", {
        type: "resume_download_button",
        element: "Download Resume (.pdf)",
      });
    }
  };

  const handlePlayStore = () => {
    if (posthog) {
      posthog.capture("click", {
        type: "play_store_button",
        element: "Check my Play Store",
      });
    }
  };

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
                <Link 
                  href="https://www.linkedin.com/in/alexander-william-0898a5187/"
                  onClick={() => handleSocialClick("linkedin")}
                >
                  <Image
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    src={linkedin_logo}
                    alt="Logo"
                  />
                </Link>
                <Link 
                  href="https://github.com/lexwilliam"
                  onClick={() => handleSocialClick("github")}
                >
                  <Image
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    src={github_logo}
                    alt="Logo"
                  />
                </Link>
                <Link 
                  href="https://mail.google.com/mail/u/0/?fs=1&to=alexwill216@gmail.com&tf=cm"
                  onClick={() => handleSocialClick("gmail")}
                >
                  <Image
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    src={gmail_logo}
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
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pb-8 px-6">
        <Link
          href="/CV_Alexander_William.pdf"
          download="Alexander_William_Resume.pdf"
          onClick={handleResumeDownload}
        >
          <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download Resume (.pdf)
          </Button>
        </Link>
        <Link
          href="https://play.google.com/store/apps/developer?id=EzzyApp"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handlePlayStore}
        >
          <Button className="bg-white text-black hover:bg-gray-200 w-full sm:w-auto">
            <Image
              className="w-4 h-4 mr-2" 
              src={playstore_logo}
              alt="Play Store"
            />
            Check my Play Store
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full dark">
      <NewPortfolioDialog />
      <div className="flex flex-col sm:h-screen">
        <HomeToolbar />
        <div className="flex-1">
          <Me />
        </div>
      </div>
      <Career />
      <Projects />
      <TechStack />
    </main>
  );
}
