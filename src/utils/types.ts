// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IBProps {
  id?: string;
  foto?: [
    {
      titulo?: string;
      src?: string;
    },
  ];
  info?: string;
  tamanho?: string;
  preco?: [
    {
      valorInativo?: string;
      valorInicial?: string;
      valorIniParcelado?: string;
      valorInaParcelado?: string;
    },
  ];
  tecido?: string;
  marca?: string;
  descricao?: string;
}
[];
