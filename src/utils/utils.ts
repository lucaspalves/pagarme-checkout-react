import { CheckoutSettings, MainCheckout } from "../interfaces/pagarme-checkout";
import { PagarmeCheckoutProps } from "../interfaces/props";

export function convertSettingsPropsToPagarmeFormat(
  settings: PagarmeCheckoutProps["settings"]
): CheckoutSettings {
  return {
    amount: settings.amount,
    buttonClass: settings.buttonClass,
    buttonText: settings.buttonText,
    card_brands: settings.card_brands,
    createToken: `${settings.createToken}`,
    customer: settings.customer,
    customerData: `${settings.customerData}`,
    defaultInstallments: settings.defaultInstallments,
    freeInstallments: settings.freeInstallments,
    interestRate: settings.interestRate,
    items: settings.items.map((item) => ({
      ...item,
      tangible: `${item.tangible}`,
    })),
    maxInstallments: settings.maxInstallments,
    minInstallments: settings.minInstallments,
    payment_methods: settings.payment_methods,
    postbackUrl: settings.postbackUrl,
    reviewInformations: `${settings.reviewInformations}`,
    uiColor: settings.uiColor,
  };
}
