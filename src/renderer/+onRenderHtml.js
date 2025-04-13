import { dangerouslySkipEscape } from "vike/server";

export default function ({ Page }) {
  return {
    documentHtml: dangerouslySkipEscape(`<body>${Page}</body>`),
  };
}
