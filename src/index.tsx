import React, { useEffect } from "react";
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
          close,
          error,
          success,
        }) as MainCheckout;
        checkout.open(convertSettingsPropsToPagarmeFormat(settings));
      }
    }
  }, [open]);

  return <></>;
};

export default PagarmeCheckout;
