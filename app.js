// global scope // 
const button = document.querySelector('button')
const personDisplay = document.querySelector('#info-box') // storing his id as a var
const url = 'https://pipl.ir/v1/getPerson?0x0A5CC1C69997CEF6'

async function getData() {
  try {
    const response = await axios.get(url)
    console.log(response.data.person);
    const data = Object.keys(response.data.person.personal)
    console.log(data);
  } catch (error) {
    console.log(`Error::: ${error}`);
  }
}
getData()


async function personalInfo() {
  try {
    const response = await axios.get(url)

    const name = document.createElement('p')
    let firstName = response.data.person.personal.name
    let lastName = response.data.person.personal.last_name
    name.innerHTML = `Name: ${firstName, lastName}`
    document.querySelector('#info-box').append(`Name: ${firstName}  ${lastName}`)

    const howOld = document.createElement('p')
    let age = response.data.person.personal.age
    howOld.innerHTML = `Age: ${age}`
    document.querySelector('#info-box').append(`Age: ${age}`)

    const birthPlace = document.createElement('p')
    let pob = response.data.person.personal.born_place
    birthPlace.innerHTML = `Place of Birth: ${pob}`
    document.querySelector('#info-box').append(`Place of Birth: ${pob}`)

    const currentLocation = document.createElement('p')
    let currentCity = response.data.person.personal.city
    let currentCountry = response.data.person.personal.country
    currentLocation.innerHTML = `Current Location ${currentCity}, ${currentCountry}`
    document.querySelector('#info-box').append(`Current Location ${currentCity}, ${currentCountry}`)

  } catch (error) {
    console.log(`Error::: ${error}`);
  }
}

personalInfo()



// async function getDescription() {
//   const url = `https://api.punkapi.com/v2/beers/random`
//   try {
//     const response = await axios(url)
//     const data = response.data[0].description
//     console.log(data)
//   } catch (error) {
//     console.log(`Error: ${error}`)
//   }
// }


// async function beerPic() {
//   const img = document.createElement('img')
//   const url = `https://api.punkapi.com/v2/beers/random`
//   try {
//     const response = await axios(url)
//     const beer = response.data[0].image_url
//     img.src = beer
//     document.querySelector('#append-img').append(img)
//   } catch (error) {
//     console.log(`Error: ${error}`)
//   }
// }
// document.querySelector('button').addEventListener('click', beerPic())
