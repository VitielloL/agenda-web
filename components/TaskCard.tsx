interface TaskCardProps {
  titulo: string;
  descricao: string;
  concluido: boolean;
  onToggle: () => void;
}

export default function TaskCard({
  titulo,
  descricao,
  concluido,
  onToggle,
}: TaskCardProps) {
  return (
    <div
      onClick={onToggle}
      className={`
        cursor-pointer
        rounded-lg p-3 mb-3 shadow-md
        border-l-4 transition
        ${
          concluido
            ? "bg-slate-700 border-green-400"
            : "bg-slate-800 border-slate-600 hover:bg-slate-700"
        }
      `}
    >
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-sm">
          {titulo}
        </h3>

        {concluido && (
          <span className="text-green-400 text-sm">
            ✓
          </span>
        )}
      </div>

      <p className="text-xs text-slate-300 mt-1">
        {descricao}
      </p>
    </div>
  );
}