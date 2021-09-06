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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the After Stabbing Attack, New Zealand Examines Its Antiterrorism Efforts
---------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/04/world/asia/new-zealand-attack-isis.html)

[![](https://static01.nyt.com/images/2021/09/04/world/04nz-attack1/merlin_194150595_0f0e9d10-d837-44f8-b271-f1105f524886-superJumbo.jpg)](https://www.nytimes.com/2021/09/04/world/asia/new-zealand-attack-isis.html)

A man who wounded seven people in a supermarket had been under surveillance for months. Officials say a loophole in the country’s laws needs to be closed.

By Natasha Frost

* * *

* * *

‘Everyone Is on the List’: Fear Grips Nicaragua as It Veers to Dictatorship
---------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/09/05/world/nicaragua-political-repression.html)

[![](https://static01.nyt.com/images/2021/09/02/world/00NICARAGUA1/00NICARAGUA1-superJumbo.jpg)](https://www.nytimes.com/2021/09/05/world/nicaragua-political-repression.html)

A crackdown on opposition by President Daniel Ortega leaves Nicaraguans to wonder: Who is next?

By Yubelka Mendoza, Anatoly Kurmanaev and Alfonso Flores Bermúdez

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
