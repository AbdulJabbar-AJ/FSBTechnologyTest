export const baseUrl = document.location.origin

export async function getData() {
    const response = await fetch(`${baseUrl}/api/selections`)
    const data = await response.json()
    return data
}
