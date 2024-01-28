# book-store-app

This is an app is made using PHP - Laravel 5.3.0 and VueJs 3.7.16.

<h1>How to Run this project</h1>

## Requirements

- [Download XAMPP](https://www.apachefriends.org/download.html)
- [Download Composer](https://getcomposer.org/download/)
- [Download Node](https://nodejs.org/en/download)

Install latest NPM

```
npm install -g npm
```

- Project Repo:

```
git clone https://github.com/ThusharaX/Online-Library-CRUD.git
```

## **For running Bookstore API (Laravel)**

### 1. Go the the bookstore-api directory

```
cd cd bookstore-api
```

### 2. Open XAMPP and start Apache server and MySQL server

### 3. Once inside bookstore-api, run

```
composer install
```

### 4. run

```
php artisan migrate
```

### 5. When the installation finished, run

```
php artisan serve
```

### 6. open the url provided in the desired browser or in Postman API (env and collection is also provided in the root folder)

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
