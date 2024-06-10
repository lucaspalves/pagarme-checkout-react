import { useState, useEffect } from "react";

export const useScript = (url: string, name: keyof Window) => {
  const [lib, setLib] = useState({} as any);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;
    script.onload = () => setLib({ [name]: window[name] });

    document.body.appendChild(script);

    console.log(lib);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return lib;
};
