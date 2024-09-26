function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

async function fetchLanguageData(lang) {
    const scriptPath = document.getElementById('language-script').src;
    var path = scriptPath.split('/').slice(0, -1).join('/')+'/';
    const response = await fetch(`${path}/languages/${lang}.json`);
    return response.json();
}

async function changeLanguage(lang) {
    setLanguagePreference(lang);
    //const langData = await fetchLanguageData(lang, path);
    //updateContent(langData);
}

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'ru';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
});