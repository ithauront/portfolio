import { useEffect, useRef, useState } from "react";

import { Typewriter } from "react-simple-typewriter";

import FolderIcon from "../../assets/icons8-mac-folder-48.png";

import "./styles.css";
const TIMER_TIME = 1500;
const RESET_TIME = 3000;
const steps = [
  "cd ~/self-learning",
  "npm init -y",

  "npm install frontend",
  "█████20%",
  "Learning React...",
  "████████45%",
  "Understanding components...",
  "████████████60%",
  "Managing state...",
  "█████████████████85%",
  "Using hooks...",
  "█████████████████████████100%",
  "Frontend setup complete.✅",

  "cd ~/backend",
  "npm install backend",
  "█████25%",
  "Learning Node.js...",
  "████████████40%",
  "Creating APIs with Express...",
  "████████████████60%",
  "Authentication, middlewares...",
  "████████████████████85%",
  "Integrating with databases...",
  "██████████████████████████100%",
  "Backend environment ready.✅",

  "Upgrading backend with database knowledge",
  "Learning relational databases...",
  "Modeling schemas with Prisma...",
  "Connected frontend & backend.✅",

  "npm install mobile",
  "Exploring React Native and Expo...",
  "Building for mobile platforms...",
  "Mobile setup complete.✅",

  "mkdir freelance",
  "cd freelance",
  "Starting real-world client projects...",
  "Error: inconsistent code style ⚠️",
  "Fixing errors, learning from feedback...",
  "Improved collaboration and delivery flow.✅",
  "Project evolving with the client.",

  "cd ../teamwork",
  "git checkout -b feature/team-integration",
  "Working on collaborative features...",
  "Giving feedback, opening issues, reviewing PRs...",
  "Opening pull request...",
  "Pull request reviewed and approved.✅",
  "git checkout main",
  "git merge feature/team-integration",
  "Integration complete.✅",

  "cd ../personal-projects",
  "touch habit-tracker.tsx portfolio.tsx",
  "Building and iterating side projects...",

  "git init",
  "git add .",
  'git commit -m "milestone: learning, building, growing"',
  "npm run build",
  "Deployment in progress...",
  "Deployment successfull.✅",
  "next-step loading...",
];

export function AnimatedTerminal() {
  const [currentLine, setCurrentLine] = useState(0);
  const [printedLines, setPrintedLines] = useState<string[]>([]);
  const [isLooping, setIsLooping] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const endOfTerminalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const body = terminalBodyRef.current;
    const end = endOfTerminalRef.current;
    if (body && end) {
      body.scrollTop = body.scrollHeight;
    }
  }, [printedLines]);

  useEffect(() => {
    if (currentLine < steps.length) {
      const timer = setTimeout(() => {
        setPrintedLines((prev) => [...prev, steps[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, TIMER_TIME);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setPrintedLines([]);
        setCurrentLine(0);
        setIsLooping((prev) => !prev);
      }, RESET_TIME);
      return () => clearTimeout(resetTimer);
    }
  }, [currentLine, isLooping]);

  const currentText = steps[currentLine] || "";
  const isCurrentError = currentText.includes("⚠️");
  const isCurrentLoadingBar = /█+/.test(currentText);
  const isCurrentSuccess = currentText.includes("✅");
  const isCurrentNextStep = currentText.toLowerCase().includes("next-step");

  let currentLineClass = "typed-text";
  if (isCurrentError) currentLineClass += " terminal-error-line";
  else if (isCurrentLoadingBar) currentLineClass += " terminal-loading-line";
  else if (isCurrentSuccess) currentLineClass += " terminal-success-line";
  else if (isCurrentNextStep) currentLineClass += " terminal-nextstep-line";

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="circle red" />
        <span className="circle yellow" />
        <span className="circle green" />
        <div className="terminal-header-title">
          <img
            src={FolderIcon}
            alt="Icon folder for terminal header"
            height={25}
            width={25}
          />
          <p className="terminal-header-name">Iuri's journey</p>
        </div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        {printedLines.map((line, index) => {
          const isError = line.includes("⚠️");
          const isLoadingBar = /█+/.test(line);
          const isSuccess = line.includes("✅");
          const isNextStep = line.toLowerCase().includes("next-step");

          let lineClass = "";
          if (isError) lineClass = "terminal-error-line";
          else if (isLoadingBar) lineClass = "terminal-loading-line";
          else if (isSuccess) lineClass = "terminal-success-line";
          else if (isNextStep) lineClass = "terminal-nextstep-line";

          return (
            <div key={index}>
              <span className="prompt">$</span>
              <span className={lineClass}>{line}</span>
            </div>
          );
        })}
        {currentLine < steps.length && (
          <div>
            <span className="prompt">$</span>
            <span className={currentLineClass}>
              <Typewriter
                key={currentLine}
                words={[steps[currentLine]]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </span>
          </div>
        )}
        <div ref={endOfTerminalRef} />
      </div>
    </div>
  );
}
