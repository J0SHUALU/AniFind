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
Install nginx
sudo apt-get update
sudo apt-get install nginx -y
Clone the repository in /var/www/html/
cd /var/www/html/ 
sudo git init
sudo git remote add origin https://github.com/J0SHUALU/AniFind.git
sudo git pull origin main
Restart nginx
sudo service nginx restart

## Demo
Here you can see a live demo of the application.

## Technologies Used
- HTML
- CSS
- JavaScript
- Jikan API

## Credits
- [Jikan API](https://api.jikan.moe/v4/) for providing anime data.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
