export type PagarmeCustomerType = "individual" | "corporation";
export type PagarmeCardBrands =
  | "amex"
  | "aura"
  | "diners"
  | "discover"
  | "elo"
  | "hipercard"
  | "jcb"
  | "mastercard"
  | "visa";
export type PagarmeDocumentType = "CNPJ" | "CPF";
export type PagarmePaymentMethods = "boleto" | "credit_card" | "pix";

export type BaseCheckoutSettings = {
  encryption_key: string;
  close?: (data: any) => void;
  error?: (data: any) => void;
  success?: (data: any) => void;
};

export type MainCheckout = {
  open: (settings: CheckoutSettings) => void;
};

export type CheckoutSettings = {
  amount: number;
  buttonClass?: string;
  buttonText?: string;
  card_brands?: PagarmeCardBrands[];
  createToken?: string;
  customer?: {
    birthDay?: string;
    country?: string;
    email: string;
    documents: {
      number: string;
      type: PagarmeDocumentType;
    }[];
    external_id?: string;
    phone_numbers?: string[];
    name: string;
    type?: PagarmeCustomerType;
  };
  customerData?: string;
  defaultInstallments?: number;
  freeInstallments?: number;
  interestRate?: number;
  items: {
    id: string;
    title: string;
    unit_price: number;
    quantity: number;
    tangible: string;
  }[];
  maxInstallments?: number;
  minInstallments?: number;
  payment_methods: PagarmePaymentMethods;
  postbackUrl?: string;
  reviewInformations?: string;
  uiColor?: string;
};

export type BaseCheckout = {
  Checkout: (settings: BaseCheckoutSettings) => MainCheckout;
};
