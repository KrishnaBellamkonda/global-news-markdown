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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the Babies and Toddlers Spread Virus in Homes More Easily Than Teens, Study Finds
-----------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/16/health/covid-kids-toddlers-transmission.html)

[![](https://static01.nyt.com/images/2021/08/16/science/16virus-kids/16virus-kids-superJumbo.jpg)](https://www.nytimes.com/2021/08/16/health/covid-kids-toddlers-transmission.html)

Although young children bring the coronavirus home less often than teens do, their close contact with caregivers may make them likelier to transmit it.

By Emily Anthes

* * *

* * *

What If You Could Become Invisible to Mosquitoes?
-------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/17/science/crispr-mosquito-vision.html)

[![](https://static01.nyt.com/images/2021/08/11/science/00mosquito-vision/00mosquito-vision-superJumbo.jpg)](https://www.nytimes.com/2021/08/17/science/crispr-mosquito-vision.html)

Using Crispr, scientists have taken the first step toward creating a mosquito that is blind to human hosts.

By Sabrina Imbler

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
