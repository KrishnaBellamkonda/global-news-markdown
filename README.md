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
* If you are adding additional content to your readme (other than news section), then add it to the README_template.md file too. Do not remove the How News Organizations Got Afghan Colleagues Out of Kabul
---------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/19/business/afghanistan-news.html)

[![](https://static01.nyt.com/images/2021/08/19/business/19afghanistan-escape/19afghanistan-escape-superJumbo.jpg)](https://www.nytimes.com/2021/08/19/business/afghanistan-news.html)

The evacuation of those who worked for outlets like The New York Times and The Washington Post came after a global rescue effort stretching from the Pentagon to Qatar.

By Michael M. Grynbaum, Tiffany Hsu and Katie Robertson

* * *

* * *

Intelligence Agencies Did Not Predict Imminence of Afghan Collapse, Officials Say
---------------------------------------------------------------------------------

[Article here](https://www.nytimes.com/2021/08/18/us/politics/afghanistan-intelligence-agencies.html)

[![](https://static01.nyt.com/images/2021/08/18/us/politics/18DC-INTEL/merlin_193398744_3ecffbc9-56f4-46f5-aef1-6a6f65d7cffc-superJumbo.jpg)](https://www.nytimes.com/2021/08/18/us/politics/afghanistan-intelligence-agencies.html)

The acknowledgment came as the Biden administration faces heavy criticism over its handling of the withdrawal of American-led forces from Afghanistan.

By Julian E. Barnes

* * *

* * *

### News Section 
{news_section_data}


### Sources 
* GitHub Prsonal Access Token (https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
* Cron Scheduler (https://crontab.guru/)
* NY Times API (https://developer.nytimes.com/)
