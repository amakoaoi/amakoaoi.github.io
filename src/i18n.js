export let language = $ref(`en`)

export function getLanguage() {
    let lang = localStorage.getItem(`language`)
    if (!lang) {
        lang = navigator.language.substring(0, 2) === `fr` ? `fr` : `en`
        localStorage.setItem(`language`, lang)
    }

    language = lang

    return language
}

export function setLanguage(lang) {
    if (lang !== `en` && lang !== `fr`) {
        console.error(`invalid language ${lang}`)
        return;
    }
    localStorage.setItem(`language`, lang)

    language = lang
}

export function isFrench() {
    return getLanguage() === `fr`
}

export function isEnglish() {
    return getLanguage() === `en`
}

export function translate(value, lang) {
    if (!value) {
        return ``
    }

    if (!lang) {
        lang = getLanguage();
    }

    const translations = value.split(`|`);
    if (translations.length < 2) {
        return value;
    }

    if (lang === `fr`) {
        return translations[1]
    } else {
        return translations[0]
    }
}

export const tr = translate;
