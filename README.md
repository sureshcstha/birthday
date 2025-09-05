# BirthdayMails 🎂

BirthdayMails is a React web app that lets users join a birthday mailing list to receive special birthday messages via email and SMS. Built with React 19, Vite, Tailwind CSS, and Google reCAPTCHA for spam protection.

## Features

- 🎉 Join the birthday mailing list with name, birthdate, email, and phone
- 📩 Receive birthday emails and SMS
- 🔒 Unsubscribe/resubscribe support
- 🛡️ Google reCAPTCHA integration
- Responsive design with Tailwind CSS

## Live Demo

The app is hosted on Netlify and available at:  
[https://birthdaymails.netlify.app](https://birthdaymails.netlify.app)

## 📸 Screenshots
![Birthday mailing list form](/src/assets/birthday-mailing-list-form.jpg "This shows screenshot of birthday mailing list form")
![Sample automated welcome and birthday emails](/src/assets/birthdayMails-email-example.jpg "This shows screenshot of a sample automated welcome and birthday emails sent from the BirthdayMails app")

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
git clone https://github.com/sureshcstha/birthday.git
cd birthday
npm install
```

## Environment Variables

```sh
VITE_API_BASE_URL=https://bday-787u.onrender.com
VITE_API_KEY=your_api_key
VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

## Project Structure
- src/components/ – Navbar, Footer, BirthdayMailingList form
- src/pages/ – Home, PrivacyPolicy, ThankYou, NotFound, Unsubscribe
- public/ – Static assets and Netlify redirects

## API Usage

This app utilizes the [Birthday Message API ](https://github.com/sureshcstha/birthday-message-app) for all backend operations

- **Endpoints Used:**
  - `POST /users/add` — To add user to birthday mailing list
  - `PUT /users/subscribe/:id` — To subscribe user to email and SMS

## Technologies

- React
- React Router
- Vite
- Tailwind CSS

## Author
Developed by [Suresh Shrestha](https://www.linkedin.com/in/sureshcstha/) — feel free to reach out at sureshshr91@gmail.com