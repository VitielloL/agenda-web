interface TaskCardProps {
  titulo: string;
  descricao: string;
  concluido: boolean;
  tipo: 'treino' | 'conteudo' | 'agua';
  onToggle: () => void;
}

const tipoStyles = {
  treino: 'border-red-400',
  conteudo: 'border-purple-400',
  agua: 'border-blue-400',
};

export default function TaskCard({
  titulo,
  descricao,
  concluido,
  tipo,
  onToggle,
}: TaskCardProps) {
  return (
    <div
      onClick={onToggle}
      className={`
        cursor-pointer
        rounded-lg p-5 mb-4
        shadow-md border-l-4 min-h-[90px]
        transition
        ${tipoStyles[tipo]}
        ${concluido ? 'bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'}
      `}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-base text-white">{titulo}</h3>

        {concluido && <span className="text-green-400 text-base">✓</span>}
      </div>

      <p className="text-sm text-slate-300 mt-2">{descricao}</p>
    </div>
  );
}
