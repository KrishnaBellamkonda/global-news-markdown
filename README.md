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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the On the ground: Kabul on edge.
-----------------------------

[Article here](https://www.nytimes.com/2021/08/20/world/asia/afghanistan-kabul-dispatch.html)

[![](https://static01.nyt.com/images/2021/08/20/world/20afghan-briefing-jim-1/merlin_193436628_cae0ffac-8ca8-4a0c-b652-02dabd0928ed-superJumbo.jpg)](https://www.nytimes.com/2021/08/20/world/asia/afghanistan-kabul-dispatch.html)

A New York Times photographer chronicled a day in Kabul. It is a portrait of a city of contrasts, with tension sometimes breaking into the open and at other times bubbling beneath the hum of daily life.

By Jim Huylebroek

* * *

* * *

President Biden will speak Friday on the troubled evacuation effort.
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/world/asia/biden-speech-evacuation.html)

[![](https://static01.nyt.com/images/2021/09/19/world/19afghanistan-briefing-biden-remarks/merlin_193413201_d948ade3-1981-442a-bbee-eb8dcc4240bc-superJumbo.jpg)](https://www.nytimes.com/2021/08/19/world/asia/biden-speech-evacuation.html)

The remarks come after days of tumult in and around Hamid Karzai International Airport since the Taliban took Kabul.

By Chris Cameron

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
