pipeline {
    agent any

    tools {nodejs "Node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
   
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
                sh "npm i"
                sh "npm run cy:run"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying3....'
            }
        }
    }
}