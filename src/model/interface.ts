export interface IPixList {
  giftsList: IPix[];
}

export interface IPix {
  pix: string;
  image: string;
  description: string;
  QRCode: string;
  QRCode_copia_e_cola: string;
  chave_pix: string;
}

export interface IModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  valor: string;
  img: string;
  pix_copia_e_cola: string;
  chave_pix: string;
}