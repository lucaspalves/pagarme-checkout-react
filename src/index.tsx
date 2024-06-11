import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { SCRIPT_URL } from "./constants/constants";
import { useScript } from "./hooks/use-script";
import { MainCheckout } from "./interfaces/pagarme-checkout";
import { PagarmeCheckoutProps } from "./interfaces/props";
import { convertSettingsPropsToPagarmeFormat } from "./utils/utils";

const PagarmeCheckout: React.FC<PagarmeCheckoutProps> = ({
  open,
  encryptionKey,
  settings,
  close,
  error,
  success,
}) => {
  const { PagarMeCheckout } = useScript(
    SCRIPT_URL,
    "PagarMeCheckout" as keyof Window
  );

  useEffect(() => {
    if (open) {
      if (PagarMeCheckout && Object.values(PagarMeCheckout).length) {
        const checkout = new PagarMeCheckout.Checkout({
          encryption_key: encryptionKey,
          close: (data: any) => close(data),
          error: (data: any) => error(data),
          success: (data: any) => success(data),
        }) as MainCheckout;
        checkout.open(convertSettingsPropsToPagarmeFormat(settings));
      }
    }
  }, [open]);

  return (
    <Helmet>
      <script src="https://assets.pagar.me/checkout/1.1.0/checkout.js"></script>
    </Helmet>
  );
};

export default PagarmeCheckout;
