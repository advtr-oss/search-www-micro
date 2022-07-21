#!/usr/bin/env bash

OLD_TRANSLATIONS=./src/translations
TRANSLATIONS=./scripts/helpers/translations

if [[ ! -d ${TRANSLATIONS} ]]; then
    mkdir -p ${TRANSLATIONS}
fi

cp -a ${OLD_TRANSLATIONS}/. ${TRANSLATIONS}/

npx babel ./src/i18n.js --out-file ./scripts/helpers/i18n.js --plugins @babel/plugin-transform-modules-commonjs

echo Transpiled i18n.js ✓
