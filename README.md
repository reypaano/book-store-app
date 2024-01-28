# book-store-app

This is an app is made using PHP - Laravel 5.3.0 and VueJs 3.7.16.

<h1>How to Run this project</h1>

## Requirements

- [Download XAMPP](https://www.apachefriends.org/download.html)
- [Download Composer](https://getcomposer.org/download/)
- [Download Node](https://nodejs.org/en/download)
- [Download Postman API](https://www.postman.com/downloads/)

Install latest NPM

```
npm install -g npm
```

- Project Repo:

```
git clone https://github.com/reypaano/book-store-app.git
```

## **For running Bookstore API (Laravel)**

### 1. Go the the bookstore-api directory
```
cd book-store-app
```

```
cd bookstore-api
```

### 2. Open XAMPP and start Apache server and MySQL server

### 3. Once inside bookstore-api, in this step I highly recommend to use GIT bash to run

```
composer install
```

### 4. Open phpMyAdmin (can click Admin button in Xampp CPanel) and create a database called "laravel" or if the command line is giving option to create it (step 5) just choose yes 

### 5. run

```
php artisan migrate
```

### 6. When the installation finished, run

```
php artisan serve
```

### 7. open the url provided in the desired browser or in Postman API (env and collection is also provided in the root folder)

## **For running Bookstore APP (VUE)**

### 1. Open another terminal

### 2. run

```
cd bookstore-app
```

### 3. Install packages using

```
npm install
```

### 4. Then run application

```
npm start
```

### 5. Open the url provided in the desired browser

## Notes:

### - Adjust ENV Files as needed I included them already in the push for easier access

### - Wasn't able to find a free json endpoint specifically for books so I just made a simple schema with title, author, and price fields
