"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import GoalModal from "../modals/GoalModal";

type SearchParamProps = {
  searchParam: Record<string, string> | undefined | null;
  showLink?: boolean;
};

export default function Goals({
  searchParam,
  showLink = true,
}: SearchParamProps) {
  const show = searchParam?.show;

  const [goals, setGoals] = useState<any[]>([]);

  // Cargar los objetivos desde localStorage al montar el componente
  useEffect(() => {
    const savedGoals = localStorage.getItem("goals");
    if (savedGoals) {
      try {
        const parsedGoals = JSON.parse(savedGoals);
        setGoals(parsedGoals);
        console.log("Goals cargados:", parsedGoals); // Depuración
      } catch (error) {
        console.error("Error al parsear los goals:", error);
      }
    }
  }, []);

  // Guardar los objetivos en localStorage cada vez que cambien
  useEffect(() => {
    try {
      localStorage.setItem("goals", JSON.stringify(goals));
      console.log("Goals guardados:", goals); // Depuración
    } catch (error) {
      console.error("Error al guardar los goals:", error);
    }
  }, [goals]);

  const handleNewGoal = (data: any) => {
    setGoals((prevGoals) => {
      const newGoals = [...prevGoals, data];
      console.log("Nuevo goal añadido:", newGoals); // Depuración
      return newGoals;
    });
  };

  return (
    <section className="flex flex-col gap-4 p-5 w-full rounded-lg bg-[#0A0A0A] h-full">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">My planning</h2>
        <div>
          {showLink && (
            <Link href="/dashboard/savings?show=true">
              <button
                className="h-fit border-2 inline-flex items-center gap-2 rounded-lg p-2 hover:border-[#CCFF00]"
                aria-label="button"
              >
                <Image
                  src="/assets/svgs/Add.svg"
                  alt="Plus icon"
                  width={30}
                  height={30}
                />
                Add new goal
              </button>
            </Link>
          )}
          {show && <GoalModal onSubmit={handleNewGoal} />}
        </div>
      </div>

      {/* goals */}
      <div className="flex flex-col gap-5 pr-2 overflow-y-scroll">
        {goals.map((goal, index) => (
          <div className="flex gap-5" key={index}>
            <div className="flex flex-col w-full justify-between gap-2">
              <div className="flex justify-between items-end">
                <h3 className="text-lg font-bold">{goal.goal}</h3>
                <p className="text-[#9ca3af] text-xs font-bold">
                  <span>${goal.initialAmount}/</span>${goal.total}
                </p>
              </div>
              <Progress
                value={(Number(goal.initialAmount) / Number(goal.total)) * 100}
                classNames={{
                  indicator: "bg-[#CCFF00]",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
