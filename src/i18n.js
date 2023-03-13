export function getLanguage() {
    let language = localStorage.getItem(`language`)
    if (!language) {
        language = navigator.language.substring(0, 2) === `fr` ? `fr` : `en`
        localStorage.setItem(`language`, language)
    }

    return language
}

export function setLanguage(language) {
    if (language !== `en` && language !== `fr`) {
        console.error(`invalid language ${language}`)
        return;
    }
    localStorage.setItem(`language`, language)
    window.location.reload()
}

export function isFrench() {
    return getLanguage() === `fr`
}

export function isEnglish() {
    return getLanguage() === `en`
}

export function translate(value, language) {
    if (!value) {
        return ``
    }

    if (!language) {
        language = getLanguage();
    }

    const translations = value.split(`|`);
    if (translations.length < 2) {
        return value;
    }

    if (language === `fr`) {
        return translations[1]
    } else {
        return translations[0]
    }
}

export const tr = translate;
