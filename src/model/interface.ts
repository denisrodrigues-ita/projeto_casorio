export interface IPixList {
  giftsList: IPix[];
}

export interface IPix {
  value: string;
  image: string;
  description: string;
  qr_code_img: string;
  pix_key: string;
  code_qr_code: string;
}

export interface IModal extends IPix {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IHotelList {
  hotelsList: IHotel[];
}

export interface IHotel {
  nome: string;
  img: string;
  endereco: {
    rua: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    telefone: string;
  };
}

export interface ToastProps {
  message: string;
  setIsToastOpen: React.Dispatch<React.SetStateAction<boolean>>;
  color: string;
}
