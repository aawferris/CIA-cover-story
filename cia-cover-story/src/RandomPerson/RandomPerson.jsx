import Axios from 'axios';
import React, {useState, useEffect} from 'react';

function RandomPerson(props) {
  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])
  const [age, setAge] = useState([])
  const [birthplace, setBirthplace] = useState([])
  const [location, setLocation] = useState([])
  const [blood, setBlood] = useState([])
  const [religion, setReligion] = useState([])
  const [married, setMarried] = useState([])
  const [spouse, setSpouse] = useState([])
  const [kids, setKids] = useState([])
  const [degree, setDegree] = useState([])
  const [uni, setUni] = useState([])

  useEffect(() => {
    async function apiCall() {
      const url = 'https://cors-anywhere.herokuapp.com/https://pipl.ir/v1/getPerson?0x0A5CC1C69997CEF6'
      const response = await Axios.get(url)
      const data = (response.data.person)
      console.log(data)
      setFirstName(data.personal.name);
      setLastName(data.personal.last_name);
      setAge(data.personal.age)
      setBirthplace(data.personal.born_place)
      setLocation(data.personal.country)
      setBlood(data.personal.blood)
      setReligion(data.personal.religion)
      setMarried(data.marriage.married)
      setSpouse(data.marriage.spouse_name)
      setKids(data.marriage.children)
      setDegree(data.education.certificate)
      setUni(data.education.university)
    }
    apiCall()
  }, [])

  return (
    <div>
      <h1>Random Person</h1>
      <p>Name : {firstName} {lastName}</p>
      <p>Age: {age}</p>
      <p>Birthplace: {birthplace}</p>
      <p>Current Location: {location}</p>
      <p>Blood Type: {blood}</p>
      <p>Religion: {religion}</p>
      <p>Married: { married === true ? "Yes" : "No"}</p>
      <p>Spouse Name: {married === true ? spouse : "N/A"}</p>
      <p>Children: {kids === true ? kids : "None"}</p>
      <p>Education: {degree} from {uni}</p>
    </div>
  );
}

export default RandomPerson;