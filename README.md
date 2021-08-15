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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the A Pricey Drive Down Montenegro’s Highway ‘From Nowhere to Nowhere’
------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/14/world/europe/montenegro-highway-china.html)

[![](https://static01.nyt.com/images/2021/08/05/world/xxmontenegro-china01/merlin_192773721_879a4a5e-e304-45d8-befe-15b994db2b17-superJumbo.jpg)](https://www.nytimes.com/2021/08/14/world/europe/montenegro-highway-china.html)

The Montenegrin leader says that an almost $1 billion Chinese-built highway approved by his predecessor has badly strained the country’s finances.

By Andrew Higgins

* * *

* * *

Russia Says It Will Expel a BBC Journalist
------------------------------------------

[Article here](https://www.nytimes.com/2021/08/13/world/europe/russia-bbc-journalist.html)

[![](https://static01.nyt.com/images/2021/08/13/world/13RUSSIA-BBC1/merlin_183577575_159436fc-f1d8-4811-b0b6-c7243f30c52d-superJumbo.jpg)](https://www.nytimes.com/2021/08/13/world/europe/russia-bbc-journalist.html)

The move, reported by a state television channel, comes amid an escalating confrontation with the Western news media and a crackdown on domestic dissent.

By Anton Troianovski

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
