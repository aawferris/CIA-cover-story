// global scope // 
const button = document.querySelector('button')
const personDisplay = document.querySelector('#info-box') // storing his id as a var
const url = 'https://pipl.ir/v1/getPerson?0x0A5CC1C69997CEF6'

button.addEventListener('click',
  async function getData() {
    removeInfo()
    try {
      const response = await axios.get(url)
      console.log(response.data.person);
      const data = Object.keys(response.data.person.personal)
      console.log(data);

      function personalInfo() {
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
        currentLocation.innerHTML = `Current Location: ${currentCity}, ${currentCountry}`
        document.querySelector('#info-box').append(`Current Location: ${currentCity}, ${currentCountry}`)


      }
      personalInfo()
    } catch (error) {
      console.log(`Error::: ${error}`);
    }
  })


// ************ Orginal format for Posting the info ************ // 

// async function personalInfo() {
//   try {
//     const response = await axios.get(url)

//     const name = document.createElement('p')
//     let firstName = response.data.person.personal.name
//     let lastName = response.data.person.personal.last_name
//     name.innerHTML = `Name: ${firstName, lastName}`
//     document.querySelector('#info-box').append(`Name: ${firstName}  ${lastName}`)

//     const howOld = document.createElement('p')
//     let age = response.data.person.personal.age
//     howOld.innerHTML = `Age: ${age}`
//     document.querySelector('#info-box').append(`Age: ${age}`)

//     const birthPlace = document.createElement('p')
//     let pob = response.data.person.personal.born_place
//     birthPlace.innerHTML = `Place of Birth: ${pob}`
//     document.querySelector('#info-box').append(`Place of Birth: ${pob}`)

//     const currentLocation = document.createElement('p')
//     let currentCity = response.data.person.personal.city
//     let currentCountry = response.data.person.personal.country
//     currentLocation.innerHTML = `Current Location: ${currentCity}, ${currentCountry}`
//     document.querySelector('#info-box').append(`Current Location: ${currentCity}, ${currentCountry}`)



//   } catch (error) {
//     console.log(`Error::: ${error}`);
//   }
// }

// personalInfo()


function removeInfo() {
  const removeDiv = document.querySelector('#info-box')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}