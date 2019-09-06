module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "import/no-extraneous-dependencies": [
      "off"
    ],
    "arrow-body-style": [
      "error",
      "as-needed",
      {
        "requireReturnForObjectLiteral": true
      }
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "jsx-quotes": [
      "error",
      "prefer-single"
    ],
    "max-lines": [
      "error",
      {
        "max": 400
      }
    ],
    "max-len": [
      "error",
      120
    ],
    "object-curly-newline": [
      "error",
      {
        "consistent": true
      }
    ],
    "camelcase": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/prefer-stateless-function": [
      2,
      {
        "ignorePureComponents": false
      }
    ],
    "react/sort-prop-types": [
      2,
      {
        "requiredFirst": false,
        "ignoreCase": true,
        "sortShapeProp": false,
        "callbacksLast": true
      }
    ],
    "react/prop-types": [
      2,
      {
        "ignore": [
          "id",
          "className",
          "openModal",
          "closeModal",
          "modalAction",
          "history",
          "match",
          "valid",
          "invalid",
          "pristine",
          "change",
          "reset",
          "handleSubmit",
          "pageSpinner"
        ]
      }
    ],
    "jsx-a11y/label-has-for": [
      2,
      {
        "components": [
          "Label"
        ],
        "required": {
          "some": [
            "nesting",
            "id"
          ]
        },
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": [
          "Link"
        ],
        "specialLink": [
          "to"
        ]
      }
    ],
    "jsx-a11y/aria-role": [
      0
    ]
  },
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          [
            "components-App",
            "./src/js/components",
            "componentsFd",
            "./src/js/componentsFd",
          ]
        ]
      }
    }
  }
};
