import TaskCard from './TaskCard';
import { Task } from '@/types/task';

interface DayColumnProps {
  dia: string;
  tasks: Task[];
  onToggle: (id: string) => void;
}

export default function DayColumn({ dia, tasks, onToggle }: DayColumnProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-4 min-h-100">
      <h2 className="font-bold text-lg mb-4">{dia}</h2>

      {tasks.length === 0 && (
        <p className="text-slate-500 text-xs">Sem tarefas</p>
      )}

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          titulo={task.titulo}
          descricao={task.descricao}
          concluido={task.concluido}
          tipo={task.tipo}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </div>
  );
}
