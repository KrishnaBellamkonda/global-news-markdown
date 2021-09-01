# global-news-markdown

### Description 
This is a self-updating news section that updates every hour.

### Set Up 
* Clone the repository
* Make a New York Times account and get a Key for top stories section. Save the section as 
 ```
 KEY = (key obtained from a NYtimes API)
 ```
*  Create a Personnal Access Token GitHub Token for allowing automatic commits and push of updated markdown. (Push and commit authorization is enough). Save this Token as 
```
TOKEN = (Personal Access Token)
```
* Done! You will have a self updating markdown in this respository!

### Curious?
Come back in a few hours and seeif the news section has changed! (Is it too long?)

### Note
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Venezuela Opposition Parties Will Take Part in November Elections
-----------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/01/world/americas/venezuela-opposition-parties-elections.html)

[![](https://static01.nyt.com/images/2021/08/31/us/31-venez-politics-3/merlin_193977195_04b94454-30bb-4162-b108-c7b0cc7f267a-superJumbo.jpg)](https://www.nytimes.com/2021/09/01/world/americas/venezuela-opposition-parties-elections.html)

The opposition parties grouped in the so-called Unitary Platform and led by Juan Guaidó announced a reversal of their stance of boycotting recent votes.

By The Associated Press

* * *

* * *

Historic London Synagogue Fights to Stay Out of the Shadows
-----------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/31/world/europe/london-bevis-marks-synagogue.html)

[![](https://static01.nyt.com/images/2021/08/31/world/31London-synagogue1/merlin_193950357_cf3b6736-e8da-40bb-b9f5-f23e801104ef-superJumbo.jpg)](https://www.nytimes.com/2021/08/31/world/europe/london-bevis-marks-synagogue.html)

The 320-year-old Bevis Marks Synagogue claims that two new proposed office towers would block its sunlight and add to the sense of enclosure amid the skyscrapers of the financial district.

By Mark Landler

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
