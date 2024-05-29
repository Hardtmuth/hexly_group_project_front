import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import html from "eslint-plugin-html";

export default [
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    { 
        plugins : { html 
        }, 
        rules: { 
            "@/indent": "error",
        } 
    },
];