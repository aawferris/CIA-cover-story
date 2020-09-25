// global scope // 
const button = document.querySelector('button')
const personDisplay = document.querySelector('#info-box')
const personUrl = 'https://pipl.ir/v1/getPerson?0x0A5CC1C69997CEF6'
const quoteUrl = 'https://api.adviceslip.com/advice'

// MAIN FUNCTION 
button.addEventListener('click', // Set up an event listener for button click that executes a function that grabs and appends API data
  async function getData() { // async to await server data
    removeInfo() // call a function that removes previous entries upon button click
    try {
      const response = await axios.get(personUrl)
      const data = Object.keys(response.data.person.personal) // saves data from API as a var

      function personalInfo() {
        const name = document.createElement('p')  // creates a new p tag in DOM
        let firstName = response.data.person.personal.name // saves API data as var
        let lastName = response.data.person.personal.last_name // saves API data as var
        name.innerHTML = `Name: ${firstName, lastName}` // adds info onto DOM
        document.querySelector('#info-box').append(`Name: ${firstName}  ${lastName} 
        
        `) //appends the API data as an interpolated string on the web page

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
        let currentCountry = response.data.person.personal.country
        currentLocation.innerHTML = `Current Location: ${currentCountry}`
        document.querySelector('#info-box').append(`Current Location: ${currentCountry}
        
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
        Number of Children: ${children}
        
        `)

        const education = document.createElement('p')
        let cert = response.data.person.education.certificate
        let uni = response.data.person.education.university
        education.innerHTML = `Education: ${cert} from ${uni}`
        document.querySelector('#info-box').append(`Education: ${cert} from ${uni}
        
        `)

        const email = document.createElement('p')
        let netMail = response.data.person.online_info.email
        let userName = response.data.person.online_info.username
        let password = response.data.person.online_info.password
        email.innerHTML = `Email Address: ${netMail} Username: ${userName} Password: ${password}`
        document.querySelector('#info-box').append(`Email Address: ${netMail} 
        Username is Username: ${userName} 
        Password is Password: ${password}
        
        `)

        const workInfo = document.createElement('p')
        let whereWork = response.data.person.work.country_code
        let position = response.data.person.work.position
        let salary = response.data.person.work.salary
        let insurance = response.data.person.work.insurance

        workInfo.innerHTML = `You work in ${whereWork} as a ${position} and make ${salary}.  Insurance? ${insurance}`
        document.querySelector('#info-box').append(`You work in ${whereWork} 
        Position: ${position} 
        Monthly Salary: ${salary} 
        Insurance? ${insurance}
        
        `)
      }
      personalInfo() // calls the main function inside the button click
    } catch (error) { // error reporting for dev tools
      console.log(`Error::: ${error}`);
    }

    async function getQuote() { // function to grab random quote from second API within button click
      try {
        const response = await axios.get(quoteUrl)
        const data = response.data.slip.advice

        const myQuote = document.createElement('p')
        let quote = data
        myQuote.innerHTML = `${quote}`
        document.querySelector('#info-box').append(`That one quote your known for is: "${quote}".`)

      } catch (error) {
        console.log(`QUOTE Error::: ${error}`);
      }
    }
    getQuote()
    showAvatar()  // calls avatar function
  })

function removeInfo() { // function to remove previous data (called within button click)
  const removeDiv = document.querySelector('#info-box') // removes the data from this place in the DOM
  while (removeDiv.lastChild) { // while loop to remove the last child of the div from DOM 
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

function showAvatar() { // function to toggle appearance of avatar image upon button click
  let avatar = document.getElementById("avatar")
  if (avatar.style.display === "none") { // when the CSS is set to display: none
    avatar.style.display = "none"
  } else {
    avatar.style.display = "flex" // changes the display to display: flex
  }
}