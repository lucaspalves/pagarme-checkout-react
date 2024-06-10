import {
  PagarmeCardBrands,
  PagarmeCustomerType,
  PagarmeDocumentType,
  PagarmePaymentMethods,
} from "./pagarme-checkout";

export type PagarmeCheckoutProps = {
  encryptionKey: string;
  open: boolean;
  settings: {
    amount: number;
    buttonText?: string;
    buttonClass?: string;
    card_brands?: PagarmeCardBrands[];
    createToken?: boolean;
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
    customerData?: boolean;
    defaultInstallments?: number;
    freeInstallments?: number;
    interestRate?: number;
    items: {
      id: string;
      title: string;
      unit_price: number;
      quantity: number;
      tangible: boolean;
    }[];
    maxInstallments?: number;
    minInstallments?: number;
    payment_methods: PagarmePaymentMethods;
    postbackUrl?: string;
    reviewInformations?: boolean;
    uiColor?: string;
  };
};
