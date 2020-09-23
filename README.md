# Project Overview

## Project Name

CIA Cover Story

## Project Description

Finally! You don't have to invest time in creating your own cover story when you're engage in espionage.  The handy dandy CIA Cover Story application will take the guess work out of your fake future!

## API and Data Sample

To access the API to generate a random person: https://pipl.ir/v1/getPerson

Sample Code:
```
{
    "person": {
        "education": {
            "certificate": "Master",
            "university": "Boston University"
        },
        "marriage": {
            "children": 3,
            "married": true,
            "spouse_name": "Natty"
        },
        "online_info": {
            "email": "8rbw7h@gmail.com",
            "ip_address": "194.204.231.67",
            "ipv6_address": "ceed:deab:9f61:801d:73e3:bd96:6ae0:833f",
            "password": "wxbM3Fw4Q7",
            "password_md5": "4c820e5f76fb5c5e864dc6118fadb4e7",
            "user_agent": "AndroidDownloadManager/9 (Linux; U; Android 9; HRY-LX1T Build/HONORHRY-LX1T)",
            "username": "6pjxor"
        },
        "personal": {
            "age": 50,
            "blood": "A+",
            "born": null,
            "born_place": "Hong Kong",
            "cellphone": "+19786513",
            "city": "Denver",
            "country": "Iran",
            "eye_color": "Hazel",
            "father_name": "Katerina",
            "gender": "Female",
            "height": "1.67",
            "last_name": "Nixon",
            "name": "Nerti",
            "national_code": "6827191044",
            "religion": "Hindu",
            "system_id": "325d6082-6e12-4381-a56c-7c13ca72557c",
            "weight": 38
        },
        "work": {
            "country_code": "DZ",
            "insurance": true,
            "position": "Developer",
            "salary": "$10.000"
        }
    }
}
```

To access the API to get that go-to line they always say: https://api.adviceslip.com/advice
Sample:
```
{"slip": { "id": 42, "advice": "Always double check you actually attached the file to the email."}}
```


## Wireframes

  
Desktop Style: https://www.figma.com/file/h1bh0trUq1v5T83cayb9ZT/CIA-Cover-Story?node-id=0%3A1
![Picture](https://drive.google.com/drive/folders/1tNNGEDlhXfD5vzy7YjxhvLR7k9u3Eil8)

Small Screen Style: https://www.figma.com/file/qLwaRdc7WQCTdyWX6EB57f/CIA-Cover-Story-Mobile?node-id=0%3A1
![Picture](https://drive.google.com/drive/folders/1tNNGEDlhXfD5vzy7YjxhvLR7k9u3Eil8)

### MVP/PostMVP  
#### MVP 

- Link external data to my generator
- When user clicks the button, it will generate a cover story  
- CSS and JS styling will make the cover story well-formatted
- Each new button click will clear out the screen and generate a new person

#### PostMVP  
- A second API that also generates your "that thing you always say" will appear concurrent with single click
- Add transition effects that make the page feel more "spyish"

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Sept 18-21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Sept 21| Project Approval and Subsequent HTML Framing | Incomplete
|Sept 22| Basic CSS Styling and JS | Complete
|Sept 23| MVP | Complete
|Sept 24| Post MVP/Styling | Complete
|Sept 25| Presentations | Incomplete

## Priority Matrix

Link to Covey-Style Priority Matrix: https://docs.google.com/document/d/1nfPJpKWynI5MH7tcn2VVOlr80eXgz8dHsetRB3Iuxuo/edit?usp=sharing
Link to visual Priority Matrix: https://www.figma.com/file/SDlWBpKytroJ4Vuc5YTa4k/Priority-Matrix?node-id=0%3A1

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Structure | M | 1hr | 15m | 15m |
| Basic CSS | M | 1hr| 2hrs | 2hr |
| API Linking | H | 3hrs| 3hrs | 3hrs |
| Appending JS to DOM | H | 3hrs| 3hrs | 3hrs |
| Event Listeners | H | 3hrs| 1hr | 1hr |
| Clearing the page function | H | 1hr| 30m | 30m |
| Additional CSS | M | 3hrs| 4hrs | 4hrs |
| Post MVPs | L | 3hrs| 5hrs | 5hrs |
| Debugging | H | 3hrs | 4hrs | 4hrs |
| Testing | M | 3hrs| 3hrs | 3hrs |
| Research and Feedback | L | 43hrs| 3hrs | 3hrs |
| Total | H | 40hrs| ---- | ---- |

## Code Snippet 
```
.fade-in {
  animation: fadeIn ease 5s;
}

@keyframes fadeIn {
  0% { opacity:0; }
  100% { opacity:1; }
}
```

```
    <nav id="nav-bar">
      <ul>
        <li><a href="https://www.cia.gov/index.html">Home</a></li>
        <li><a href="https://en.wikipedia.org/wiki/Central_Intelligence_Agency">About Us</a></li>
        <li><a href="https://www.google.com/">Intelligence</a></li>
        <li><a href="https://www.addictinggames.com/action/spy">Training</a></li>
        <select name="lang-list" id="lang-list" onchange="window.location=this.value">
          <option value="blank">Language</option>
          <option value="./index.html">English</option>
          <option value="./indexES.html">Español</option>
          <option value="./indexAR.html">عربى</option>
        </select>
      </ul>
```


## Change Log
 
