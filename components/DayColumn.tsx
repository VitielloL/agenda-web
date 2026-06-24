import TaskCard from './TaskCard';
import { Task } from '@/types/task';

interface DayColumnProps {
  dia: string;
  tasks: Task[];
  onToggle: (id: string) => void;
}

// normaliza "Segunda", "terça-feira", etc.
const formatarDia = (dia: string) => {
  return dia
    .toLowerCase()
    .replace('-feira', '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export default function DayColumn({
  dia,
  tasks,
  onToggle,
}: DayColumnProps) {
  const hoje = formatarDia(
    new Date().toLocaleDateString('pt-BR', {
      weekday: 'long',
    })
  );

  const isHoje = formatarDia(dia) === hoje;

  return (
    <div
      className={`
        rounded-lg p-4 min-h-100
        transition
        ${isHoje ? 'bg-slate-700 ring-2 ring-blue-400' : 'bg-slate-800'}
      `}
    >
      <h2
        className={`
          font-bold text-lg mb-4
          ${isHoje ? 'text-blue-400' : 'text-white'}
        `}
      >
        {dia}
        {isHoje && (
          <span className="ml-2 text-xs text-blue-400">
            (Hoje)
          </span>
        )}
      </h2>

      {tasks.length === 0 && (
        <p className="text-slate-500 text-xs">
          Sem tarefas
        </p>
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