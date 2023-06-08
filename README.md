# MuftGPT Project Description

MuftGPT is a web application functions similarly to a chatbot

The current version of the project includes a register and login page. Once registered and logged in, users can ask questions and will get thuth in reply.

# P


# Project Setup

1. Create a project and copy the files to this project.
2. Create a `public` folder inside the project with a subfolder named `css`.
3. Move `style.css` to the `css` folder.
4. Create a `src` folder in the project with a subfolder named `db` for database connections.
5. Move `conn.js` to the `db` folder.
6. Create a subfolder named `models` in the `src` folder.
7. Move `registers.js` to the `models` folder.
8. Move `app.js` and `script.js` to the `src` directory.
9. Create a `template` directory and make two subdirectories named `partials` and `views`.
10. Add `header.hbs` and `navbar.hbs` to the `partials` folder.
11. Add `index.hbs`, `login.hbs`, and `register.hbs` to the `views` folder.

# Installation

1. Install MongoDB from the website [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Install the following dependencies:
   - node: `npm install node`
   - mongodb: `npm install mongodb`
   - hbs: `npm install hbs`
   - express: `npm install express`
   - mongoose: `npm install mongoose`

# Running the Application

1. Open the terminal and navigate to the project directory.
2. Run the `app.js` file using the command `node app.js`.
3. If you encounter the following output:
Server is running at port no 3000

This means that another service is running on port 3000. In order to proceed, you need to terminate that process.
4. Run the following commands in the command line:
- `netstat -ano | findstr 3000`
- `taskkill /PID <PID_given_by_previous_command> /F`
  Replace `<PID_given_by_previous_command>` with the actual PID (e.g., 17132) obtained from the previous command.
5. You should see the following message:
Connection successful!
6. Open your browser and visit [localhost:3000](http://localhost:3000) to access the application.
