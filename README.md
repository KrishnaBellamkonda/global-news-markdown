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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the American Vet Returns to Italy to Greet ‘Bambini’ He Last Saw in 1944
--------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/23/world/europe/american-vet-italy-children-WWII.html)

[![](https://static01.nyt.com/images/2021/08/23/world/23ITALY-REUNION1/23ITALY-REUNION1-superJumbo.jpg)](https://www.nytimes.com/2021/08/23/world/europe/american-vet-italy-children-WWII.html)

The daughter of a World War II veteran used the internet to track down three children he was photographed with 77 years ago — after almost firing on them. On Monday, they finally met face to face.

By Elisabetta Povoledo

* * *

* * *

Montenegro Pledges to Stamp Out a Deadly Trade: Cigarette Smuggling
-------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/24/world/europe/montenegro-cigarette-smuggling.html)

[![](https://static01.nyt.com/images/2021/08/12/world/xxmontenegro-smuggling01/merlin_193122528_3f42d01d-2f9a-4a3a-91e3-df1a06eeaf37-superJumbo.jpg)](https://www.nytimes.com/2021/08/24/world/europe/montenegro-cigarette-smuggling.html)

Investigators and journalists were killed while trying to expose smugglers. Now the country is cracking down on a trade it once protected.

By Andrew Higgins

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
