export const baseUrl = 'http://localhost:3000'

/***********NOTE****************
The baseUrl above is set to localhost port 3000
This allows the static production files to be served correctly as long as the npm run server script is ran,
 however, when using an external host, this variable could a specific backend endpoint, or else something like:
 'document.location.origin'
***************************/

export async function getData() {
    const response = await fetch(`${baseUrl}/api/selections`)
    const data = await response.json()
    return data
}
