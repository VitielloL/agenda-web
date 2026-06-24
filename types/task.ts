export type Task = {
  id: string;
  titulo: string;
  descricao: string;
  dia: string;
  concluido: boolean;
  tipo: 'treino' | 'conteudo' | 'agua';
};
