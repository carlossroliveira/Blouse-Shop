// -------------------------------------------------
// Types
// -------------------------------------------------
export interface IBProps {
  id?: string;
  foto?: [
    {
      titulo?: string;
      src?: string;
      shield?: string;
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
