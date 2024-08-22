pipeline {
    agent any

    tools {nodejs "Node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
   
    }

    stages {
        stage('Dependencies') {
            steps {
                echo 'Building..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                bat "npm i"
                bat "npx cypress run --spec "cypress/e2e/home_page.cy.js""
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying3....'
            }
        }
    }
}