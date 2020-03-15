import React from "react";

const lg = 'es'
const content = require(`../locale/${lg}.json`)

export default function useLocale() {
    return content
}
