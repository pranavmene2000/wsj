export const timeCalculator = (pubTime) => {
    const currentDate = new Date();
    const publishedDate = new Date(pubTime);
    const currentDateInSec = currentDate.getMinutes()
    const publishedDateInSec = publishedDate.getMinutes()
    const diff = Math.abs(currentDateInSec - publishedDateInSec);

    return diff > 20 ? ' long read' : diff + ' min read'
}

export const setDotter = (descString) => {
    const descriptionString = String(descString);
    const lastCharacter = descriptionString.substr(descriptionString.length - 1)

    return lastCharacter === "." ? "" : descriptionString.length > 0 ? "." : "";
}