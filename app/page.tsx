"use client";

import { useState } from "react";
import DayColumn from "@/components/DayColumn";
import { mockTasks } from "@/data/mockTasks";
import { Task } from "@/types/task";
import { weekDays } from "@/data/weekdays";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  function toggleTask(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, concluido: !task.concluido }
          : task
      )
    );
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white p-6">
      <div className="flex items-center gap-4 mb-6">
        {/* LOGO REDONDA */}
        <img
        src="/vitlogo.jpg"
        alt="Agenda do Vit"
        className="w-12 h-12 rounded-full object-cover border-2 border-green-400"
        />

        <div>
          <h1 className="text-3xl font-bold">
            Agenda do{" "}
            <span className="text-green-400">Vit</span>
          </h1>

          <p className="text-slate-400 text-sm">
            Organize sua semana. Foque no que importa.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-7 gap-4">
        {weekDays.map((dia) => (
          <DayColumn
            key={dia}
            dia={dia}
            tasks={tasks.filter(
              (t) => t.dia === dia
            )}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </main>
  );
}