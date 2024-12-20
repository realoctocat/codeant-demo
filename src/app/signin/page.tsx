"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, GitlabIcon, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function SignIn() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="h-screen grid md:grid-cols-2 overflow-hidden">
      <div className="border-r border-border/50 relative h-full overflow-hidden hidden md:block">
        <Image
          src="/Content.png"
          alt="CodeAnt content"
          width={560}
          height={560}
          className="hover:scale-105 active:scale-95 duration-500 mx-auto dark:invert"
        />
        <Image
          src={"/logo.svg"}
          alt="CodeAnt Logo"
          width={270}
          height={270}
          className="absolute bottom-0 left-0 hover:left-2 duration-500 opacity-20 dark:invert"
        />
      </div>
      <div className="flex flex-col items-center justify-center bg-muted/30">
        <Card className="w-full max-w-xl">
          <CardContent className="pt-6">
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={item} className="text-center space-y-2">
                <div className="flex justify-center items-center space-x-2 mb-8">
                  <Image
                    width={42}
                    height={42}
                    src="/logo.svg"
                    alt="CodeAnt AI Logo"
                    className="h-8 dark:invert"
                  />
                  <p className="text-xl md:text-2xl">CodeAnt AI</p>
                </div>
                <h1 className="text-2xl md:text-3xl tracking-tight font-semibold mb-8">
                  Welcome to CodeAnt AI
                </h1>
              </motion.div>

              <motion.div variants={item}>
                <Tabs defaultValue="saas" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="saas">SAAS</TabsTrigger>
                    <TabsTrigger value="self-hosted">Self Hosted</TabsTrigger>
                  </TabsList>
                  <div className="h-px bg-muted-foreground/20 w-[calc(100%+48px)] -translate-x-[24px] mt-6" />
                  <TabsContent value="saas" className="space-y-4 mt-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">
                        <svg
                          className="mr-4 size-4 invert dark:invert-0"
                          viewBox="0 0 256 250"
                          width="256"
                          height="250"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid"
                        >
                          <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                        </svg>
                        Sign in with Github
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">
                        <svg
                          className="mr-4 size-4"
                          height="2256"
                          preserveAspectRatio="xMidYMid"
                          width="2500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="-0.9662264221278978 -0.5824607696358868 257.93281329857973 230.8324730411935"
                        >
                          <linearGradient
                            id="a"
                            x1="108.633%"
                            x2="46.927%"
                            y1="13.818%"
                            y2="78.776%"
                          >
                            <stop offset=".18" stop-color="#0052cc" />
                            <stop offset="1" stop-color="#2684ff" />
                          </linearGradient>
                          <g fill="none">
                            <path d="M101.272 152.561h53.449l12.901-75.32H87.06z" />
                            <path
                              d="M8.308 0A8.202 8.202 0 0 0 .106 9.516l34.819 211.373a11.155 11.155 0 0 0 10.909 9.31h167.04a8.202 8.202 0 0 0 8.201-6.89l34.82-213.752a8.202 8.202 0 0 0-8.203-9.514zm146.616 152.768h-53.315l-14.436-75.42h80.67z"
                              fill="#2684ff"
                            />
                            <path
                              d="M244.61 77.242h-76.916l-12.909 75.36h-53.272l-62.902 74.663a11.105 11.105 0 0 0 7.171 2.704H212.73a8.196 8.196 0 0 0 8.196-6.884z"
                              fill="url(#a)"
                            />
                          </g>
                        </svg>
                        Sign in with Bitbucket
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">
                        <svg
                          className="mr-4 size-4"
                          viewBox="0 0 96 96"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient
                              id="a"
                              x1="-1032.17"
                              x2="-1059.21"
                              y1="145.31"
                              y2="65.43"
                              gradientTransform="matrix(1 0 0 -1 1075 158)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#114a8b" />
                              <stop offset="1" stop-color="#0669bc" />
                            </linearGradient>
                            <linearGradient
                              id="b"
                              x1="-1023.73"
                              x2="-1029.98"
                              y1="108.08"
                              y2="105.97"
                              gradientTransform="matrix(1 0 0 -1 1075 158)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-opacity=".3" />
                              <stop offset=".07" stop-opacity=".2" />
                              <stop offset=".32" stop-opacity=".1" />
                              <stop offset=".62" stop-opacity=".05" />
                              <stop offset="1" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient
                              id="c"
                              x1="-1027.16"
                              x2="-997.48"
                              y1="147.64"
                              y2="68.56"
                              gradientTransform="matrix(1 0 0 -1 1075 158)"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0" stop-color="#3ccbf4" />
                              <stop offset="1" stop-color="#2892df" />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#a)"
                            d="M33.34 6.54h26.04l-27.03 80.1a4.15 4.15 0 0 1-3.94 2.81H8.15a4.14 4.14 0 0 1-3.93-5.47L29.4 9.38a4.15 4.15 0 0 1 3.94-2.83z"
                          />
                          <path
                            fill="#0078d4"
                            d="M71.17 60.26H29.88a1.91 1.91 0 0 0-1.3 3.31l26.53 24.76a4.17 4.17 0 0 0 2.85 1.13h23.38z"
                          />
                          <path
                            fill="url(#b)"
                            d="M33.34 6.54a4.12 4.12 0 0 0-3.95 2.88L4.25 83.92a4.14 4.14 0 0 0 3.91 5.54h20.79a4.44 4.44 0 0 0 3.4-2.9l5.02-14.78 17.91 16.7a4.24 4.24 0 0 0 2.67.97h23.29L71.02 60.26H41.24L59.47 6.55z"
                          />
                          <path
                            fill="url(#c)"
                            d="M66.6 9.36a4.14 4.14 0 0 0-3.93-2.82H33.65a4.15 4.15 0 0 1 3.93 2.82l25.18 74.62a4.15 4.15 0 0 1-3.93 5.48h29.02a4.15 4.15 0 0 0 3.93-5.48z"
                          />
                        </svg>
                        Sign in with Azure DevOps
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          className="mr-4 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby="tanukiHomeDesktop"
                        >
                          <path
                            d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z"
                            fill="#E24329"
                          />
                          <path
                            d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z"
                            fill="#FC6D26"
                          />
                          <path
                            d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z"
                            fill="#FCA326"
                          />
                          <path
                            d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z"
                            fill="#FC6D26"
                          />
                        </svg>
                        Sign in with GitLab
                      </Link>
                    </Button>
                  </TabsContent>
                  <TabsContent value="self-hosted" className="space-y-4 mt-4">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">
                        <svg
                          viewBox="0 0 32 32"
                          fill="none"
                          className="mr-4 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-labelledby="tanukiHomeDesktop"
                        >
                          <path
                            d="m31.46 12.78-.04-.12-4.35-11.35A1.14 1.14 0 0 0 25.94.6c-.24 0-.47.1-.66.24-.19.15-.33.36-.39.6l-2.94 9h-11.9l-2.94-9A1.14 1.14 0 0 0 6.07.58a1.15 1.15 0 0 0-1.14.72L.58 12.68l-.05.11a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48 6.67-5h.02a8.09 8.09 0 0 0 2.7-9.36Z"
                            fill="#E24329"
                          />
                          <path
                            d="m31.46 12.78-.04-.12a14.75 14.75 0 0 0-5.86 2.64l-9.55 7.24 6.09 4.6 6.67-5h.02a8.09 8.09 0 0 0 2.67-9.36Z"
                            fill="#FC6D26"
                          />
                          <path
                            d="m9.9 27.14 3.28 2.48 2 1.52a1.35 1.35 0 0 0 1.62 0l2-1.52 3.28-2.48-6.1-4.6-6.07 4.6Z"
                            fill="#FCA326"
                          />
                          <path
                            d="M6.44 15.3a14.71 14.71 0 0 0-5.86-2.63l-.05.12a8.1 8.1 0 0 0 2.68 9.34l.02.01.04.03 6.63 4.97 6.1-4.6-9.56-7.24Z"
                            fill="#FC6D26"
                          />
                        </svg>
                        Self Hosted GitLab
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <Link href="#">
                        <Key className="mr-4 size-4" />
                        Sign in with SSO
                      </Link>
                    </Button>
                  </TabsContent>
                </Tabs>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
        <motion.p
          variants={item}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          By signing up you agree to the{" "}
          <Link
            href="#"
            className="hover:text-primary font-semibold hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </motion.p>
      </div>
    </div>
  );
}
