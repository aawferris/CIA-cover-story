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
        document.querySelector('#info-box').append(`Name: ${firstName}  ${lastName}
        `)

        const howOld = document.createElement('p')
        let age = response.data.person.personal.age
        howOld.innerHTML = `Age: ${age}`
        document.querySelector('#info-box').append(`Age: ${age}
        `)

        const birthPlace = document.createElement('p')
        let pob = response.data.person.personal.born_place
        birthPlace.innerHTML = `Place of Birth: ${pob}`
        document.querySelector('#info-box').append(`Place of Birth: ${pob}
        `)

        const currentLocation = document.createElement('p')
        let currentCity = response.data.person.personal.city
        let currentCountry = response.data.person.personal.country
        currentLocation.innerHTML = `Current Location: ${currentCity}, ${currentCountry}`
        document.querySelector('#info-box').append(`Current Location: ${currentCity}, ${currentCountry}
        `)

        const fatherName = document.createElement('p')
        let dad = response.data.person.personal.father_name
        fatherName.innerHTML = `Father's Name: ${dad}`
        document.querySelector('#info-box').append(`Father's Name: ${dad}
        `)

        const bloodType = document.createElement('p')
        let blood = response.data.person.personal.blood
        bloodType.innerHTML = `Blood Type: ${blood}`
        document.querySelector('#info-box').append(`Blood Type: ${blood}
        `)

        const religion = document.createElement('p')
        let dios = response.data.person.personal.religion
        religion.innerHTML = `Religion: ${dios}`
        document.querySelector('#info-box').append(`Religion: ${dios}
        `)

        const family = document.createElement('p')
        let married = response.data.person.marriage.married
        let spouse = response.data.person.marriage.spouse_name
        let children = response.data.person.marriage.children
        family.innerHTML = `Married? ${married} Spouse Name: ${spouse} Number of Children: ${children}`
        document.querySelector('#info-box').append(`Married? ${married}
        Spouse Name: ${spouse}
        Number of Children: ${children}`)

        const education = document.createElement('p')
        let cert = response.data.person.education.certificate
        let uni = response.data.person.education.university
        education.innerHTML = `Education: ${cert} from ${uni}`
        document.querySelector('#info-box').append(`Education: ${cert} from ${uni}
        `)



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