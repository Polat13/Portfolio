import { useContext } from "react";
import { TranslateContext } from "../context/TranslateContext";

export default function useTranslate() {
  return useContext(TranslateContext);
}
