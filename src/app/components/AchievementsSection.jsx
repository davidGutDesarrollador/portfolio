"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Proyects",
    value: "3",
    postfix: "+",
  },
  {
    metric: "Years of Experience",
    value: "1",
    postfix: "+",
  },
  {
    metric: "Languages",
    value: "15",
    postfix: "+",
  },
  {
    metric: "Top 10 contests",
    value: "3",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={((_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),

                    };
                  })}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
