// global scope // 
const button = document.querySelector('button')
const personDisplay = document.querySelector('#info-box')
const personUrl = 'https://pipl.ir/v1/getPerson?0x0A5CC1C69997CEF6'
const quoteUrl = 'https://api.adviceslip.com/advice'

button.addEventListener('click',
  async function getData() {
    removeInfo()
    try {
      const response = await axios.get(personUrl)
      const data = Object.keys(response.data.person.personal)

      function personalInfo() {
        const name = document.createElement('p')
        let firstName = response.data.person.personal.name
        let lastName = response.data.person.personal.last_name
        name.innerHTML = `Name: ${firstName, lastName}`
        document.querySelector('#info-box').append(` ${firstName}  ${lastName} :اسم 
        
        `)

        const howOld = document.createElement('p')
        let age = response.data.person.personal.age
        howOld.innerHTML = `Age: ${age}`
        document.querySelector('#info-box').append(`${age} :عمر
        
        `)

        const birthPlace = document.createElement('p')
        let pob = response.data.person.personal.born_place
        birthPlace.innerHTML = `Place of Birth: ${pob}`
        document.querySelector('#info-box').append(`${pob} :مكان الولادة
        
        `)

        const currentLocation = document.createElement('p')
        let currentCountry = response.data.person.personal.country
        currentLocation.innerHTML = `Current Location: ${currentCountry}`
        document.querySelector('#info-box').append(`${currentCountry} :الموقع الحالي
        
        `)

        const fatherName = document.createElement('p')
        let dad = response.data.person.personal.father_name
        fatherName.innerHTML = `Father's Name: ${dad}`
        document.querySelector('#info-box').append(`${dad} :الموقع الحالي
        
        `)

        const bloodType = document.createElement('p')
        let blood = response.data.person.personal.blood
        bloodType.innerHTML = `Blood Type: ${blood}`
        document.querySelector('#info-box').append(`${blood} :فصيلة الدم
        
        `)

        const religion = document.createElement('p')
        let dios = response.data.person.personal.religion
        religion.innerHTML = `Religion: ${dios}`
        document.querySelector('#info-box').append(`${dios} :دين
        
        `)

        const family = document.createElement('p')
        let married = response.data.person.marriage.married
        let spouse = response.data.person.marriage.spouse_name
        let children = response.data.person.marriage.children
        family.innerHTML = `Married? ${married} Spouse Name: ${spouse} Number of Children: ${children}`
        document.querySelector('#info-box').append(` ${married} :تزوج؟ 
        ${spouse} :اسم الزوج
        ${children} :الاطفال
        
        `)

        const education = document.createElement('p')
        let cert = response.data.person.education.certificate
        let uni = response.data.person.education.university
        education.innerHTML = `Education: ${cert} from ${uni}`
        document.querySelector('#info-box').append(`${uni} :من ${cert} :التعليم 
        
        `)

        const email = document.createElement('p')
        let netMail = response.data.person.online_info.email
        let userName = response.data.person.online_info.username
        let password = response.data.person.online_info.password
        email.innerHTML = `Email Address: ${netMail} Username: ${userName} Password: ${password}`
        document.querySelector('#info-box').append(`${netMail} :البريد الإلكتروني
        ${userName} :اسم المستخدم
        ${password} :كلمه السر
        
        `)

        const workInfo = document.createElement('p')
        let whereWork = response.data.person.work.country_code
        let position = response.data.person.work.position
        let salary = response.data.person.work.salary
        let insurance = response.data.person.work.insurance
        workInfo.innerHTML = `You work in ${whereWork} as a ${position} and make ${salary}.  Insurance? ${insurance}`
        document.querySelector('#info-box').append(`${whereWork} :هو يعمل
        ${position} :مهنة 
        ${salary} :راتب شهري
        ${insurance} :تأمين
        
        `)
      }
      personalInfo()
    } catch (error) {
      console.log(`Error::: ${error}`);
    }

    async function getQuote() {
      try {
        const response = await axios.get(quoteUrl)
        const data = response.data.slip.advice
        const myQuote = document.createElement('p')
        let quote = data
        myQuote.innerHTML = `${quote}`
        document.querySelector('#info-box').append(`"${quote}" :المثل الذي تقوله دائما`)
      } catch (error) {
        console.log(`QUOTE Error::: ${error}`);
      }
    }
    getQuote()
    showAvatar()
  })

function removeInfo() {
  const removeDiv = document.querySelector('#info-box')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}

function showAvatar() {
  let avatar = document.getElementById("avatar")
  if (avatar.style.display === "none") {
    avatar.style.display = "none"
  } else {
    avatar.style.display = "flex"
  }
}