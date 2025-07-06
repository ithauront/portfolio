import Bun from "../../assets/bun.svg";
import Css from "../../assets/css.svg";
import Docker from "../../assets/docker.svg";
import Expo from "../../assets/expo.svg";
import Figma from "../../assets/figma.svg";
import Git from "../../assets/git.svg";
import GithubIcon from "../../assets/github.svg";
import Html from "../../assets/html5.svg";
import Js from "../../assets/javascript.svg";
import Jest from "../../assets/jest.svg";
import Linux from "../../assets/linux.svg";
import Mysql from "../../assets/mysql.svg";
import Nextjs from "../../assets/nextdotjs.svg";
import Node from "../../assets/nodedotjs.svg";
import Postgresql from "../../assets/postgresql.svg";
import Prisma from "../../assets/prisma.svg";
import Python from "../../assets/python.svg";
import React from "../../assets/react.svg";
import ReactHookForm from "../../assets/reacthookform.svg";
import Sqlite from "../../assets/sqlite.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Ts from "../../assets/typescript.svg";
import Vercel from "../../assets/vercel.svg";
import Vitest from "../../assets/vitest.svg";
import Zod from "../../assets/zod.svg";

import "./styles.css";

export function TechIconsBar() {
  return (
    <div className="tech-icons-bar">
      <div className="tech-icons-container">
        <img className="tech-icon" src={Html} alt="Technology icon: html5" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Css} alt="Technology icon: css" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Ts} alt="Technology icon: typescript" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Js} alt="Technology icon: javascript" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={React} alt="Technology icon: react" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Nextjs} alt="Technology icon: nextjs" />
      </div>
      <div className="tech-icons-container">
        <img
          className="tech-icon"
          src={ReactHookForm}
          alt="Technology icon: reactHookForm"
        />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Zod} alt="Technology icon: zod" />
      </div>
      <div className="tech-icons-container">
        <img
          className="tech-icon"
          src={Tailwind}
          alt="Technology icon: tailwind"
        />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Expo} alt="Technology icon: expo" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Figma} alt="Technology icon: figma" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Node} alt="Technology icon: NodeJs" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Bun} alt="Technology icon: bun" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Prisma} alt="Technology icon: prisma" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Mysql} alt="Technology icon: mysql" />
      </div>
      <div className="tech-icons-container">
        <img
          className="tech-icon"
          src={Postgresql}
          alt="Technology icon: postgresql"
        />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Sqlite} alt="Technology icon: sqlite" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Vitest} alt="Technology icon: vitest" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Jest} alt="Technology icon: jest" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Git} alt="Technology icon: git" />
      </div>
      <div className="tech-icons-container">
        <img
          className="tech-icon"
          src={GithubIcon}
          alt="Technology icon: github"
        />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Vercel} alt="Technology icon: vercel" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Docker} alt="Technology icon: docker" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Linux} alt="Technology icon: Linux" />
      </div>
      <div className="tech-icons-container">
        <img className="tech-icon" src={Python} alt="Technology icon: python" />
      </div>
    </div>
  );
}
