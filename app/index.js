"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.themeWithoutVars = exports.theme = void 0;
var material_1 = require("@mui/material");
var commonPalette = {
    type: "light",
    primary: {
        main: "#333"
    },
    secondary: {
        main: "#ffc72c"
    },
    error: {
        main: material_1.colors.red.A400
    },
    vulnerability: {
        main: material_1.colors.red["900"]
    },
    bug: {
        main: material_1.colors.red["600"]
    },
    codesmell: {
        main: material_1.colors.red["200"]
    },
    codeIntelligence: {
        main: "#13293D",
        light: "#1d8296"
    },
    unknownError: {
        main: material_1.colors.red["900"]
    },
    compilationError: {
        main: material_1.colors.red["900"]
    },
    coverage: {
        main: material_1.colors.lightBlue["200"]
    },
    common: {
        black: "#333"
    },
    text: {
        primary: "#333"
    }
};
exports.theme = material_1.responsiveFontSizes(material_1.createTheme({
    palette: __assign(__assign({}, commonPalette), { background: {
            paper: "var(--vscode-sideBar-background, " + material_1.colors.grey[50] + ")",
            "default": "var(--vscode-editor-background, " + material_1.colors.grey[100] + ")"
        } }),
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "standard"
            }
        }
    }
}));
exports.themeWithoutVars = material_1.responsiveFontSizes(material_1.createTheme({
    palette: __assign(__assign({}, commonPalette), { background: {
            "default": material_1.colors.grey[100]
        } }),
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "standard"
            }
        },
        MuiSelect: {
            defaultProps: {
                variant: "standard"
            }
        }
    }
}));
exports["default"] = exports.theme;
