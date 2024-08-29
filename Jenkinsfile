pipeline {
    agent any

    tools {nodejs "Node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
   
    }

    options {
        ansiColor('xterm')
    }

    stages {
        stage('Dependencies') {
            steps {
                echo 'Dependencies..'
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
                bat "npm run cy:run"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying3....'
            }
        }
    }
}