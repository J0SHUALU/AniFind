# AniFind

AniFind is a simple web application that allows users to search for anime titles and display detailed information about each anime. It fetches data from the [Jikan API](https://api.jikan.moe/v4/), offering a rich set of details like episodes, rating score, genres, and synopsis.

## Features
- Search for anime by title
- Displays detailed anime information such as episodes, rating score, genres, and synopsis
- Interactive UI with smooth animations
- Fetches data from the Jikan API

## Setup

To run this app locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/J0SHUALU/AniFind.git
    ```
2. Navigate into the project directory:
    ```bash
    cd AniFind
    ```
3. Open `index.html` in your browser.

 ## Server Setup
 
1. Install nginx
```bash
sudo apt-get update
sudo apt-get install nginx -y
```
2. Clone the repository in /var/www/html/
``` bash
cd /var/www/html/ 
sudo git init
sudo git remote add origin https://github.com/J0SHUALU/AniFind.git
sudo git pull origin main
```
3. Restart nginx
```bash
sudo service nginx restart
```

## How it was deployed

### For web servers (nginx)

1. Do initial installation and configuration of nginx.

2. Move to "/var/www/html/", initialize as git repository, set origin to "https://github.com/J0SHUALU/AniFind.git", then pull the project from the repository.

3. Change "/etc/nginx/sites-available/default" to include:
```bash
location /results {
    try_files $uri /results.html;
}
```
to handle results route.

4. Restart nginx

## For loader balancer (haproxy)

1. Install haproxy.

2. Add lines to configuration file to handle requests and distribute them to each web server we have.

3. Generate SSL certificate for our domain to allow https connections.

4. Change configuration file to handle https requests, and to redirect http to https.

5. Restart haproxy.

## Demo


## Technologies Used
- HTML
- CSS
- JavaScript
- Jikan API

## Credits
- [Jikan API](https://api.jikan.moe/v4/) for providing anime data.
